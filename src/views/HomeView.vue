<template>
  <DefaultTemplate>
    <v-row>
      <v-col md="6">
        <v-img src="/jacob-mathison-profile.jpg" alt="Jacob Mathison" width="100%" />
      </v-col>
      <v-col md="6">
        <v-card >
          <v-card-title>
            <h1>Welcome to Mathison Projects</h1>
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 my-2">I am a software engineer with over 15 years of experience in the industry. I have worked in a variety of roles, from software engineer to team lead to architect. I have a passion for technology and a desire to help others succeed.</p>
            <p class="text-body-1 my-2">I have a proven track record of delivering high-quality software solutions on time and within budget. I am a quick learner and have a knack for problem-solving. I am also a team player and enjoy working with others to achieve common goals.</p>
            <p class="text-body-1 my-2">This website is a collection of my projects and experiences. I have worked in a variety of roles, from software engineer to team lead to architect. I have a passion for technology and a desire to help others succeed.</p>
            <p class="text-body-1 my-2">The technologies used with this particular website are:</p>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-vuejs</v-icon>
                  Vue.js
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-vuetify</v-icon>
                  Vuetify
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-language-css3</v-icon>
                  CSS3
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-language-html5</v-icon>
                  HTML5
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-language-javascript</v-icon>
                  JavaScript
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-aws</v-icon>
                  AWS
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '@/components/DefaultTemplate.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultTemplate
  }
}
</script>
