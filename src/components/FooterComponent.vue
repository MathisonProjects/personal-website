<template>
    <v-btn v-if="notAtTop" @click="backToTop" class="back-to-top" icon="mdi-arrow-up" color="primary" />
    <v-footer class="footer">
        <v-container>
          <v-row>
            <v-col class="text-center">
              <v-toolbar-title>&copy; {{ currentYear }} Mathison Projects</v-toolbar-title>
            </v-col>
            <v-col class="text-center">
              <v-btn variant="text" :to="{ name: 'privacy-policy' }">Privacy Policy</v-btn>
              <v-btn variant="text" :to="{ name: 'terms-and-conditions' }">Terms and Conditions</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
                <p class="text-overline">AUT VIAM INVENIAM AUT FACIAM</p>
                <p class="text-overline">"I shall either find a way or make one"</p>
            </v-col>
          </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
        notAtTop() {
            return this.scrollY > 0;
        }
    },
    data() {
        return {
            scrollY: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScrollY);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateScrollY);
    },
    methods: {
        updateScrollY() {
            this.scrollY = window.scrollY;
        },
        backToTop() {
            window.scrollTo(0, 0);
            this.scrollY = 0;
        }
    }
}
</script>

<style scoped>
    .back-to-top {
        position: fixed;
        bottom: 180px;
        right: 16px;
    }
    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #f5f5f5;
    }
</style>