export const uploadFile = async (file: File) => {
  const data = new FormData()
  data.set('file', file)
  const res = await fetch('/api/files', {
    method: 'POST',
    body: data,
  }).then((res) => res.json())

  console.log({ res })

  if (res.error) {
    throw new Error(res.error)
  } else {
    const { IpfsHash } = res
    return IpfsHash
  }
}
