<template>
          <v-dialog v-model="showCookieConsent" width="500">
        <v-card>
          <v-card-title>Cookie Consent</v-card-title>
          <v-card-text>We use cookies to improve your experience on our website. By continuing to use our site, you agree to our use of cookies.</v-card-text>
          <v-card-actions>
            <v-btn @click="setSeenCookieConsent(true)">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
  name: 'CookieConsent',
  computed: {
    showCookieConsent() {
      return !this.$store.state.seenCookieConsent;
    }
  },
  methods: {
    setSeenCookieConsent(value) {
      this.$store.commit('setSeenCookieConsent', value);
    }
  }
}
</script>
