import { ref, computed } from '@vue/composition-api'

const useBreweries = ref([])

export default function() {
  // super complicated state mgmt logic
  return {
    getBreweries: computed(() => useBreweries.value),
    useBreweries,
  }
}
