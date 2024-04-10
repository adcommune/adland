export const fetchJSON = async (url: string) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}
