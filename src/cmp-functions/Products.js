import { ref } from '@vue/composition-api'

export const useProducts = () => {
  const products = ref([])

  const createProduct = ({ id, name, price }) => {
    products.value.push({ id, name, price })
  }

  const updateProduct = ({ id, name, price }) => {
    const itemIndex = products.value.findIndex(p => p.id === id)

    if (itemIndex < 0) {
      return
    }

    products.value.splice(itemIndex, 1, { id, name, price })
  }

  const deleteProduct = id => {
    const itemIndex = products.value.findIndex(p => p.id === id)

    if (itemIndex < 0) {
      return
    }

    products.value.splice(itemIndex, 1)
  }

  return {
    createProduct,
    updateProduct,
    deleteProduct,
    products,
  }
}
