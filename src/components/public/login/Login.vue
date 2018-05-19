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
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert :value="expired" transition="fade-transition" class="mb-2" type="info">
                {{ $t('messages.session_expired') }}
              </v-alert>
              <v-text-field prepend-icon="person" name="login" label="Usuário" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Senha" id="password" type="password"></v-text-field>
              <v-checkbox class="mt-2" label="Permanecer conectado"></v-checkbox>
              <v-btn to="/register" flat color="primary">{{ $t('buttons.signup') }}</v-btn>
              <v-btn to="/" flat color="primary">{{ $t('buttons.forgot_password') }}</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn class="mx-2 mb-2" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { toBoolean } from '@/utils/convert'

export default {
  name: 'Login',
  data () {
    const { expired, redirect } = this.$route.query

    return {
      expired: toBoolean(expired),
      redirect
    }
  }
}
</script>
