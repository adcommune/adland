export class Namespace {
  base_url = 'https://offchain.namespace.tech/v1'
  domain: string

  constructor(domain: string) {
    this.domain = domain
  }

  async checkAvailability(name: string): Promise<{ isAvailable: boolean }> {
    return this.callNamespace(`/subname/availability/${name}/${this.domain}`)
  }

  private async callNamespace(path: string) {
    return fetch(`${this.base_url}${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.NAMESPACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((res) => res.json())
  }
}
