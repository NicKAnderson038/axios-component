<template>
  <div class="brews">
    <h2>Brew Search</h2>
    <br />
    <section>
      <form>
        <v-flex>
          <v-text-field
            v-model="val"
            label="Search by brewy name"
            outlined
            readonly
          ></v-text-field>
          <div class="btn">
            <v-btn small @click="clear">Clear</v-btn>
            <v-btn small color="primary" @click="submit">Submit</v-btn>
          </div>
        </v-flex>
      </form>
    </section>
    <div v-if="error">
      <h2>Error: {{ error }}</h2>
    </div>
    <div v-if="fetching">
      <br />
      <v-progress-circular
        :size="70"
        :width="7"
        indeterminate
        color="amber"
      ></v-progress-circular>
    </div>
    <br />
    <v-card>
      <div class="search-results" v-for="brewery in list" :key="brewery.id">
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
                ><span class="brew">{{ brewery.name }}</span></v-btn
              >
            </li>
            <li>
              <span class="subtitle">Street:</span>
              <span class="brew">{{ brewery.street }}</span>
            </li>
            <li>
              <span class="subtitle">City:</span
              ><span class="brew"> {{ brewery.city }}</span>
            </li>
            <li>
              <span class="subtitle">Zip:</span
              ><span class="brew"> {{ brewery.postal_code }}</span>
            </li>
          </ul>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import useBrewList from '@/cmp-functions/use-brew-list'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    // const { submitted, list, val, error, fetching } = useBrewList()
    // return {
    //   val,
    //   list,
    //   submitted,
    //   error,
    //   fetching,
    // }
    return {
      ...useBrewList(),
    }
  },
  mounted() {
    this.submitted()
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
