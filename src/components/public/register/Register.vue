<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md10 lg8>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="@/assets/logo.png" alt="Vuetify.js" class="logo mb-5">
          </v-layout>
        </v-slide-y-transition>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{ $t('headers.form') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert :value="hasError" transition="fade-transition" class="mb-2" type="error">
              {{ error }}
            </v-alert>
            <register-form ref="form"/>
          </v-card-text>
          <v-card-actions>
            <v-btn flat to="/login" class="mx-2 mb-2" color="primary">{{ $t('buttons.back') }}</v-btn>
            <v-spacer/>
            <v-btn @click="submit" class="mx-2 mb-2" color="primary">{{ $t('buttons.confirm') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import RegisterForm from '@/components/public/register/RegisterForm'

const { mapActions } = createNamespacedHelpers('auth')

export default {
  name: 'Register',
  components: {
    RegisterForm
  },
  computed: {
    hasError () {
      return this.error.length
    }
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    submit () {
      if (this.$refs.form.validate()) {
        this.error = ''
        this.register(this.$refs.form.data())
          .then(() => {
            this.$router.push({'path': '/'})
          }, error => {
            this.error = error
          })
      } else {
        this.error = this.$i18n.t('messages.verify_fields_before_continue')
      }
    }
  }
}
</script>
