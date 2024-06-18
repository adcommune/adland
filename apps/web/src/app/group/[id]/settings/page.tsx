'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AdLand } from '@/lib/adland'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import {
  appContracts,
  authorizedFileTypes,
  ipfsGateway,
} from '@/config/constants'
import { toast } from 'sonner'
import { uploadFile } from '@/lib/file'
import { queryClient } from '@/components/AppProviders'
import { AdGroup, AdGroupMetadata } from '@/lib/types'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { encodeFunctionData } from 'viem'
import { commonAdSpacesAbi } from '@adland/contracts'

const createAdGrouMetadataSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  banner: z.string().optional().nullable(),
})

type GroupPageProps = { params: { id: string } }

const GroupSettingsPage = ({ params: { id } }: GroupPageProps) => {
  const { data: adGroup } = useQuery({
    queryKey: ['adGroup-', id],
    queryFn: async () => {
      return new AdLand().getGroup(id)
    },
  })

  if (!adGroup) {
    return null
  }

  console.log('adGroup', adGroup)

  return (
    <GroupSettingsForm
      data={adGroup?.metadata}
      id={adGroup?.adGroup_subgraph.id}
    />
  )
}

type GroupSettingsFormProps = {
  data?: AdGroupMetadata
  id: string
}

const GroupSettingsForm = ({ data, id }: GroupSettingsFormProps) => {
  const [uploadingImage, setUploadingImage] = useState(false)

  const form = useForm<AdGroupMetadata>({
    resolver: zodResolver(createAdGrouMetadataSchema),
    defaultValues: {
      name: data?.name,
      description: data?.description,
      image: data?.image,
      banner: data?.banner,
    },
  })

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadingImage(true)
    const file = e.target.files?.[0]
    if (file) {
      if (!authorizedFileTypes.includes(file.type)) {
        toast.error('Invalid file type (ie. png, jpeg, jpg, gif)')
        return setUploadingImage(false)
      }
      try {
        const hash = await uploadFile(file)

        console.log('hash', hash)

        form.setValue('image', `${ipfsGateway}/${hash}`)
      } catch (error) {
        console.error(error)
      }
    }
    setUploadingImage(false)
  }

  const { writeAsync } = useSmartAccountTxs({})

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (
      args: Pick<AdGroupMetadata, 'image' | 'name' | 'description' | 'banner'>,
    ) => {
      const metadata: File = new File([JSON.stringify(args)], 'metadata.json')
      const hash = await uploadFile(metadata)
      const adIpfsURI = `ipfs://${hash}`

      writeAsync(
        {
          transactions: [
            {
              to: appContracts.adCommonOwnership,
              data: encodeFunctionData({
                abi: commonAdSpacesAbi,
                functionName: 'updateAdGroupMetadata',
                args: [BigInt(id), adIpfsURI],
              }),
            },
          ],
        },
        {
          onSuccess: () => {
            toast.success('Group metadata updated')
          },
        },
      )
    },
  })

  const onSubmit = async (values: AdGroupMetadata) => {
    mutateAsync(values).then(() => {
      toast.success('Group metadata updated')
      queryClient.setQueryData(['adGroup-', id], (old: AdGroup) => {
        return {
          ...old,
          metadata: values,
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-body">
        <Card className="p-0">
          <CardContent className="flex flex-col gap-4 p-8">
            <FormField
              control={form.control}
              name="image"
              render={({ field: { value, onChange } }) => (
                <div className="flex flex-row items-center gap-8">
                  <FormItem className="grow">
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={(e) => {
                          onFileChange(e)
                          // onChange(e.target.value)
                        }}
                        disabled={uploadingImage}
                      />
                    </FormControl>
                    <FormDescription>
                      The image that will be displayed on the group page.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                  {value && (
                    <img
                      src={value}
                      className="h-20 w-20 border object-cover"
                    />
                  )}
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      defaultValue={value}
                      onChange={(e) => {
                        onChange(e.target.value)
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    The name of the group. This will be displayed on the group
                    page.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      defaultValue={value || ''}
                      onChange={(e) => {
                        onChange(e.target.value)
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    A description of the group. This will be displayed on the
                    group page.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-end">
            <Button loading={isPending} disabled={isPending} type="submit">
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default GroupSettingsPage
