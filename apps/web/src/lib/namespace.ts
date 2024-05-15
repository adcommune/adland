type CreateSubnameArguments = {
  name: string
  address: string
  textRecords?: {
    fid?: number
    avatar?: string
    'com.warpcast'?: string
  }
}

export class Namespace {
  base_url = 'https://offchain-mainnet.namespace.tech/v1'
  domain: string

  constructor(domain: string) {
    this.domain = domain
  }

  async createSubname({ name, address, textRecords }: CreateSubnameArguments) {
    return this.post(`/subname/create`, {
      label: name,
      address,
      domain: this.domain,
      textRecords,
    }).then((res) => {
      if (res.error) {
        console.error(res)
        throw new Error(res.error)
      }
      return res
    })
  }

  async checkAvailability(name: string): Promise<{ isAvailable: boolean }> {
    return this.get(`/subname/availability/${name}/${this.domain}`)
  }

  private async get(path: string) {
    return fetch(`${this.base_url}${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.NAMESPACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((res) => res.json())
  }

  private async post(path: string, body: Record<string, any>) {
    return fetch(`${this.base_url}${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.NAMESPACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    }).then((res) => res.json())
  }
}
