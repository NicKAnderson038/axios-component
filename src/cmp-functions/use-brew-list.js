import { ref, toRefs, reactive } from '@vue/composition-api'
import useFetch from './use-fetch'
const API = 'https://api.openbrewerydb.org/breweries/'

export default function() {
  const breweries = reactive({ list: [], error: null, fetching: false })
  const val = ref('')
  const query = ref('')
  console.log('Go2: ', query)

  const submitted = async () => {
    const { response, error, fetchData, fetching } = await useFetch(
      `${API}${query.value}${val.value}`,
      {}
    )
    fetchData()
    breweries.list = response
    breweries.error = error
    breweries.fetching = fetching
  }
  return { submitted, ...toRefs(breweries), val, query }
}
