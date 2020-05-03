import { ref, computed } from '@vue/composition-api'

const setBreweries = ref([])

export default function() {
  // super complicated state mgmt logic
  return {
    getBreweries: computed(() => setBreweries.value),
    setBreweries,
  }
}
