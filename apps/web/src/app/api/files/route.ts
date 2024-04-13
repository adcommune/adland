import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File
    data.append('file', file)
    data.append(
      'pinataMetadata',
      JSON.stringify({ name: file.name, type: file.type }),
    )
    data.append('pinataOptions', JSON.stringify({ cidVersion: 1 }))
    const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
      },
      body: data,
    }).then((res) => res.json())

    console.log(res)

    return NextResponse.json(res, { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json(e, { status: 500 })
  }
}

export async function GET() {
  try {
    const res = await fetch(
      'https://api.pinata.cloud/data/pinList?status=pinned',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      },
    )
    const resData = await res.json()
    const files = resData.rows[0]
    return NextResponse.json({ files }, { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
