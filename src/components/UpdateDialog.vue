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
                @keyup="validate"
              ></v-text-field
            ></v-card-text>
            <v-card-text class="text-xs-center title px-3 py-5 sbdBlackGrey">
              <v-text-field
                class="text-field"
                v-model="amount"
                :label="'Enter Amount'"
                required
                outlined
                :rules="amountRules"
                @keyup="validate"
              ></v-text-field
            ></v-card-text>
          </div>
          <v-card-actions class="pr-3 pl-1">
            <v-layout justify-center>
              <v-flex>
                <v-btn large outlined @click.native="reset">CANCEL</v-btn>
                <v-spacer></v-spacer>
                <v-btn large light color="blue" @click="true">UPDATE</v-btn>
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
    name: String,
    amount: String,
  },
  data() {
    return {
      nameRules: [v => !!v || 'Name required'],
      amountRules: [v => !!v || 'Amount required'],
      ifInvalidDisable: true,
    }
  },
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
      this.ifInvalidDisable = !this.$refs.form.validate()
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
</style>
