<template>
  <div class="brews">
    <br />
    <h2>Ref Global State</h2>
    <br />
    <br />
    <v-card>
      <div
        class="search-results"
        v-for="brewery in getBreweries.value"
        :key="brewery.id"
      >
        <v-card-text>
          <ul>
            <li>
              <span class="subtitle">Name:</span>
              <v-btn
                text
                small
                outlined
                color="primary"
                class="brew-name"
                @click="val = brewery.name"
              >
                <span class="brew">{{ brewery.name }}</span>
              </v-btn>
            </li>
            <li>
              <span class="subtitle">Street:</span>
              <span class="brew">{{ brewery.street }}</span>
            </li>
            <li>
              <span class="subtitle">City:</span>
              <span class="brew">{{ brewery.city }}</span>
            </li>
            <li>
              <span class="subtitle">Zip:</span>
              <span class="brew">{{ brewery.postal_code }}</span>
            </li>
          </ul>
        </v-card-text>
      </div>
    </v-card>
    <br />
    <v-card v-if="getBreweries.value">
      <v-card-text>
        <pre>{{ getBreweries.value }}</pre>
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-text>Search for some Brews!</v-card-text>
    </v-card>
  </div>
</template>

<script>
import useState from '@/cmp-functions/use-state'
// import useBrewList from '@/cmp-functions/use-brew-list'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      ...useState(),
    }
  },
  methods: {
    clear() {
      this.val = ''
      this.query = ''
      this.submitted()
    },
    submit() {
      this.query = this.val ? '?by_name=' : ''
      this.submitted()
    },
  },
})
</script>

<style scoped>
.search-results {
  display: flex;
  width: 400px;
}
.btn {
  display: flex;
  justify-content: space-between;
}
.brews {
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
.brew-name {
  position: relative;
  left: 14px;
}
ul {
  list-style-type: none;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
.brew {
  font-weight: bold;
}
</style>
