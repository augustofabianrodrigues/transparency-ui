<template>
  <v-form ref="form" lazy-validation>
    <v-layout row wrap>
      <v-flex sm12 xs12 md6 class="px-2">
        <base-input v-model="firstName" name="firstName" :maxlength="20" required></base-input>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <base-input v-model="lastName" name="lastName" :maxlength="50" required></base-input>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <base-input type="email" v-model="email" name="email" :maxlength="254" required></base-input>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <base-input v-model="username" name="username" :maxlength="20" required></base-input>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <base-input type="password" v-model="password" name="password" :maxlength="50" required></base-input>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <base-input type="password" v-model="passwordRepeat" name="passwordRepeat" :maxlength="50"
          :validations="passwordRepeatRules" required ></base-input>
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
      passwordRepeatRules: [
        v => v === this.password || this.$i18n.t('fields.validations.passwords_must_match')
      ]
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
      const { firstName, lastName, email, username, password } = this
      return { firstName, lastName, email, username, password }
    }
  }
}
</script>
