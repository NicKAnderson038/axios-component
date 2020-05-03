import { ref, computed } from '@vue/composition-api'

// const setBreweries = ref([])

const state = {
  setBreweries: ref([]),
}

export default function() {
  // super complicated state mgmt logic
  return {
    getBreweries: computed(() => state.setBreweries.value),
    // setBreweries,
    ...state,
  }
}
