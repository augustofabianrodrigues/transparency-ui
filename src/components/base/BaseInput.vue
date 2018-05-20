<template>
  <v-text-field
    v-model="inputValue"
    :rules="rules"
    :counter="counter"
    :name="name"
    :label="field"
    :type="type"
    :required="required"
    :prepend-icon="prependIcon"
  ></v-text-field>
</template>
<script>
import concat from 'lodash/concat'

export default {
  name: 'BaseInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    'prepend-icon': {
      type: String
    },
    validations: {
      type: Array
    },
    minlength: {
      type: Number
    },
    maxlength: {
      type: Number
    },
    required: {
      type: Boolean,
      default () {
        return false
      }
    },
    type: {
      type: String,
      validator (value) {
        return ['text', 'email', 'password', 'number'].indexOf(value) !== -1
      },
      default () {
        return 'text'
      }
    }
  },
  data () {
    const field = this.$i18n.t(`fields.${this.name}`)

    let rules = []
    if (this.validations) {
      rules = concat([], this.validations)
    }

    if (this.required) {
      rules.push(v => !!v || this.$i18n.t('fields.validations.required', { field }))
    }

    let counter
    if (this.maxlength) {
      rules.push(v => v.length <= this.maxlength ||
        this.$i18n.t('fields.validations.maxlength', { field, maxlength: this.maxlength }))
      counter = this.maxlength
    }

    if (this.type === 'email') {
      rules.push(v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        this.$i18n.t('fields.validations.must_be_valid', { field }))
    }

    return {
      field,
      rules,
      counter,
      inputValue: this.value
    }
  },
  watch: {
    inputValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

