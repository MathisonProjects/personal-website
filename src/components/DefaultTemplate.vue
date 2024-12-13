<template>
  <v-app>
    <v-main>
      <AppBarNavigation />
      <v-container fluid class="body-footer-spacer">
        <slot />
      </v-container>
      <CookieConsent />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import AppBarNavigation from './AppBarNavigation.vue';
import CookieConsent from './CookieConsent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
  name: 'DefaultTemplate',
  components: {
    CookieConsent,
    AppBarNavigation,
    FooterComponent
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    setSeenCookieConsent(value) {
      this.$store.commit('setSeenCookieConsent', value);
    }
  }
}
</script>

<style scoped>
    .body-footer-spacer {
        margin-bottom: 160px;
    }
</style>
