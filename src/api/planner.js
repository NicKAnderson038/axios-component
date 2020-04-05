const endpoint = 'https://jsonplaceholder.typicode.com'

export const getMyFeature = params => ({
  method: 'GET',
  url: `${endpoint}/posts`,
  params,
})
