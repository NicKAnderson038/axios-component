<template>
  <div>
    <v-dialog v-model="show" persistent max-width="500">
      <v-card>
        <v-form ref="form">
          <v-card-title class="subheading sbdDarkGrey text-uppercase">
            <v-spacer></v-spacer>
            {{ title }}
            <v-spacer></v-spacer>
          </v-card-title>
          <div>
            <v-card-text class="text-xs-center title px-3 py-5 sbdBlackGrey">{{
              text
            }}</v-card-text>
            <v-card-text class="text-xs-center title px-3 py-5 sbdBlackGrey">
              <v-text-field
                class="text-field"
                v-model="name"
                :label="'Enter Name'"
                required
                outlined
                :rules="nameRules"
              ></v-text-field
            ></v-card-text>
            <v-card-text class="text-xs-center title px-3 py-5 sbdBlackGrey">
              <v-text-field
                class="text-field"
                v-model="price"
                :label="'Enter Amount'"
                required
                outlined
                :rules="amountRules"
              ></v-text-field
            ></v-card-text>
          </div>
          <v-card-actions>
            <v-layout>
              <v-flex>
                <div class="btn">
                  <v-btn large outlined @click.native="reset">CANCEL</v-btn>
                  <v-btn large light color="blue" @click="validate"
                    >UPDATE</v-btn
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
// import isUndefined from 'lodash/fp/isUndefined'
// import isEmpty from 'lodash/fp/isEmpty'
const isNumber = /^\d+$/

export default {
  name: 'UpdateDialog',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    id: Number,
  },
  data: () => ({
    nameRules: [v => !!v || 'Name required'],
    amountRules: [
      v => !!v || 'Amount required',
      v => isNumber.test(v) || 'Numbers Only',
      v => v >= 1 || 'Minimun amout is $1',
    ],
    name: '',
    price: '',
  }),
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit('updateProduct', {
          id: this.id,
          name: this.name,
          price: this.price,
        })
        this.reset()
      }
    },
    printLabel() {
      const image =
        'https://ak.picdn.net/offset/photos/5d79659a469b183482a2021e/medium/offset_851111.jpg'
      function printImage(source) {
        const win = window.open('about:blank', '_new')
        win.document.open()
        win.document.write(
          [
            '<html>',
            '   <head>',
            '   </head>',
            '   <body onload="window.print()" onafterprint="window.close()">',
            '       <img src="' + source + '"/>',
            '   </body>',
            '</html>',
          ].join('')
        )
        win.document.close()
      }
      printImage(image)
      this.reset()
    },
    reset() {
      this.$refs.form.reset()
      this.show = false
    },
  },
}
</script>
<style scoped>
.modal-btn {
  min-width: 220px;
  margin-left: 14px !important;
}
.text-field {
  padding-left: 20px;
  padding-right: 20px;
}
.btn {
  display: flex;
  justify-content: space-evenly;
}
</style>
