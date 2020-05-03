import { ref, toRefs, reactive } from '@vue/composition-api'
import useFetch from './use-fetch'
import useState from './use-state'
const API = 'https://api.openbrewerydb.org/breweries/'

// const useBreweries = ref([])
// function useState() {
//   // super complicated state mgmt logic
//   return {
//     getBreweries: computed(() => useBreweries.value),
//   }
// }

export default function() {
  const breweries = reactive({ list: [], error: null, fetching: false })
  const val = ref('')
  const query = ref('')
  console.log('RUNNING: ', breweries)

  const submitted = async () => {
    const { response, error, fetchData, fetching } = await useFetch(
      `${API}${query.value}${val.value}`,
      {}
    )
    fetchData()
    breweries.list = response
    useState().useBreweries.value = response
    breweries.error = error
    breweries.fetching = fetching
  }

  // const { getBreweries } = useState()

  return {
    submitted,
    ...toRefs(breweries),
    val,
    query,
    // getBreweries
    // getBreweries: useState().getBreweries,
    // getState: computed(() => useBreweries.value),
  }
}
