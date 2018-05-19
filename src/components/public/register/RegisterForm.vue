<template>
  <v-form ref="form" lazy-validation>
    <v-layout row wrap>
      <v-flex sm12 xs12 md6 class="px-2">
        <v-text-field v-model="firstName"
          :rules="firstNameRules"
          :counter="20"
          name="firstName"
          :label="$t('fields.firstName')"
          type="text"
          required
        ></v-text-field>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <v-text-field v-model="lastName"
          :rules="lastNameRules"
          :counter="50"
          name="lastName"
          :label="$t('fields.lastName')"
          type="text"
          required
        ></v-text-field>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <v-text-field v-model="email"
          :rules="emailRules"
          :counter="254"
          name="email"
          :label="$t('fields.email')"
          type="email"
          required
        ></v-text-field>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <v-text-field v-model="username"
          :rules="usernameRules"
          :counter="20"
          name="username"
          :label="$t('fields.username')"
          type="text"
          required
        ></v-text-field>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <v-text-field v-model="password"
          :rules="passwordRules"
          :counter="50"
          name="password"
          :label="$t('fields.password')"
          type="password"
          required
        ></v-text-field>
      </v-flex>
      <v-flex sm12 xs12 md6 class="px-2">
        <v-text-field v-model="passwordRepeat"
          :rules="passwordRepeatRules"
          name="passwordRepeat"
          :label="$t('fields.passwordRepeat')"
          type="password"
          required
        ></v-text-field>
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
      firstNameRules: [
        v => !!v || this.$i18n.t('fields.validations.required', [ this.$i18n.t('fields.firstName') ]),
        v => v.length <= 20 || 'Nome deve conter menos que 20 caracteres'
      ],
      lastName: '',
      lastNameRules: [
        v => !!v || 'Sobrenome é obrigatório',
        v => v.length <= 50 || 'Sobrenome deve conter menos que 50 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => v.length <= 50 || 'E-mail deve conter menos que 254 caracteres',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'
      ],
      username: '',
      usernameRules: [
        v => !!v || 'Usuário é obrigatório',
        v => v.length <= 20 || 'Usuário deve conter menos que 20 caracteres'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v => v.length <= 50 || 'Senha deve conter menos que 50 caracteres'
      ],
      passwordRepeat: '',
      passwordRepeatRules: [
        v => !!v || 'É necessário repetir a senha',
        v => v === this.password || 'As senhas devem ser iguais'
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
