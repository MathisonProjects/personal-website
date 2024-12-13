<template>
    <DefaultTemplate>
      <v-container>
        <v-card>
          <v-card-title>
            <h1>Contact Me</h1>
            <p>Jacob Arlo Mathison</p>
            <p><a href="mailto:jacob@mathisonprojects.com?subject=Contact%20from%20Your%20Website%20-%20Mathison%20Projects">jacob@mathisonprojects.com</a></p>
          </v-card-title>
        </v-card>
      </v-container>
    </DefaultTemplate>
  </template>
  
  <script>
  import DefaultTemplate from '@/components/DefaultTemplate.vue'
  
  export default {
    name: 'ContactView',
    components: {
      DefaultTemplate
    }
  }
  </script>
  