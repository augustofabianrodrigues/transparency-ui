<template>
  <v-form ref="form" lazy-validation>
    <base-input v-model="login" prepend-icon="person" name="login" required></base-input>
    <base-input v-model="password" prepend-icon="lock" name="password" type="password" required></base-input>
    <v-checkbox class="mt-2" label="Permanecer conectado"></v-checkbox>
    <v-btn to="/register" flat color="primary">{{ $t('buttons.signup') }}</v-btn>
    <v-btn to="/" flat color="primary">{{ $t('buttons.forgot_password') }}</v-btn>
  </v-form>
</template>
<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    validate () {
      return this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    data () {
      const { login, password } = this
      return { login, password }
    }
  }
}
</script>
