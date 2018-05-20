<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="@/assets/logo.png" alt="Vuetify.js" class="logo mb-5">
          </v-layout>
        </v-slide-y-transition>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{ $t('headers.login') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert :value="hasMessage" transition="fade-transition" class="mb-2" :type="messageType">
              {{ message }}
            </v-alert>
            <login-form ref="form"></login-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit" class="mx-2 mb-2" color="primary">{{ $t('buttons.login') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import LoginForm from '@/components/public/login/LoginForm'
import { toBoolean } from '@/utils/convert'

const { mapActions } = createNamespacedHelpers('auth')

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  computed: {
    hasMessage () {
      return this.message.length
    }
  },
  data () {
    const { expired, redirect } = this.$route.query

    let message = ''
    let messageType = null
    if (toBoolean(expired)) {
      message = this.$i18n.t('messages.session_expired')
      messageType = 'info'
    }

    return {
      message,
      messageType,
      redirect
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submit () {
      if (this.$refs.form.validate()) {
        this.message = ''
        this.messageType = 'error'

        this.login(this.$refs.form.data())
          .then(() => {
            this.$router.push({'path': '/'})
          }, error => {
            this.message = error
            this.messageType = 'error'
          })
      } else {
        this.message = this.$i18n.t('messages.verify_fields_before_continue')
        this.messageType = 'error'
      }
    }
  }
}
</script>
