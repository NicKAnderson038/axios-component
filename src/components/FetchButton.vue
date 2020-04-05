<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <div class="flex">
          <v-card class="card-margins">
            <v-card-text>UserId: {{ userId }}</v-card-text>
            <v-card-text>Id: {{ id }}</v-card-text>

            <v-card-actions
              ><v-btn @click="fetcher">FETCH DATA</v-btn></v-card-actions
            >
          </v-card>
          <v-card class="card-margins">
            <v-select
              :items="items"
              label="Change Row 1"
              @change="event => updateRow(event, items[0])"
            ></v-select>
            <v-select
              :items="items"
              label="Change Row 2"
              @change="event => updateRow(event, items[1])"
            ></v-select>
          </v-card>
        </div>
        <v-card class="card-margins">
          <div
            class="text-center ma-12"
            v-if="$withData.fetchers.myFeature.loading"
          >
            <v-progress-circular
              indeterminate
              color="primary"
              rotate="4"
              size="60"
              width="4"
              value="0"
            ></v-progress-circular>
          </div>
          <v-card-text v-else>
            <ul id="example-1">
              <li
                v-for="item in $withData.fetchers.myFeature.data"
                :key="item.id"
              >
                {{ item.userId }}:
                {{ item.body }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'FetchButton',
  data() {
    return {
      userId: 1,
      id: 1,
      items: [1, 2, 3, 4, 5, null],
      result: null,
    }
  },
  withData: {
    fetchers: {
      myFeature: {
        query: api.planner.getMyFeature,
        variables() {
          return {
            userId: this.userId,
            id: this.id,
          }
        },
        skip() {
          return !this.userId || !this.id
        },
      },
    },
  },
  methods: {
    fetcher() {
      console.log(this.$withData.fetchers.myFeature)
      this.result = this.$withData.fetchers.myFeature.data
      console.log('RESULT: ', this.result)
    },
    updateRow(e, num) {
      console.log(e, num, this.result)
      switch (num) {
        case 1:
          this.userId = e
          return
        case 2:
          this.id = e
          return
        default:
          return
      }
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
}
.card-margins {
  margin: 20px 20px 20px 20px;
}
</style>
