export class LocalStorage {
  static setJSON(key: string, value: object) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  static getJSON(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
}
