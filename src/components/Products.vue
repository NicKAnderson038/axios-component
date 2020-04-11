<template>
  <div>
    <v-layout justify-center>
      <v-flex>
        <v-card-actions>
          <v-btn @click="createAProduct">Create New</v-btn>
        </v-card-actions>
        <v-card class="mx-auto" max-width="600" v-if="products.length != 0">
          <v-card-text>
            <v-flex>
              <div v-for="p in products" :key="p.id" class="noselect">
                Product Name: {{ p.name }} - Product Price: ${{ p.price }}
                <v-icon
                  @click="() => deleteProduct(p.id)"
                  color="orange darken-2"
                  >mdi-cancel</v-icon
                >
              </div>
            </v-flex>
          </v-card-text>
        </v-card>
        <div v-else :style="{ height: '40px' }"></div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { useProducts } from '@/cmp-functions/Products'

export default {
  name: 'Products',
  setup() {
    return {
      ...useProducts(),
    }
  },
  methods: {
    createAProduct() {
      this.createProduct({
        id: Math.floor(Math.random() * 10) + new Date().getTime(),
        name: 'New Product',
        price: Math.floor(Math.random() * 1000).toString(),
      })
    },
  },
}
</script>

<style scoped>
.noselect {
  user-select: none;
}
</style>
