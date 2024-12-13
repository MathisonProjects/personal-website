<template>
  <DefaultTemplate>
    <v-row>
      <v-col md="3" sm="12" xs="12">
        <v-card>
          <v-card-content>
            <v-list>
              <v-list-item @click="view = 'Personal'" :class="{ 'v-list-item-selected': view === 'Personal' }">
                <v-list-item-title>
                  <v-icon>mdi-account</v-icon>
                  Personal
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="view = 'Professional'" :class="{ 'v-list-item-selected': view === 'Professional' }">
                <v-list-item-title>
                  <v-icon>mdi-briefcase</v-icon>
                  Professional
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col md="9" sm="12" xs="12">
        <v-card>
          <v-card-title>
            <h1>About {{ view }}</h1>
          </v-card-title>
          <v-card-text v-if="view === 'Personal'">
            <p class="text-body-1 my-2">If you ask me, writing code is a lifestyle, not simply a career option. With that in mind, I believe strongly in the quote "Choose a job you love, and you will never have to work a day in your life". Because of this, it isn't necessarily about the money, but the challenge that comes with any given task. When presented with a technical problem, I crave to develop a creative solution that will help me grow as a developer but to help grow businesses and enterprises alike.</p>
            <p class="text-body-1 my-2">People often describe me as down to earth, passionate, and deeply caring of my team. I simply want us all to succeed, and for us all to have destinies that we chose for ourselves. Between writing code, architecting a system, mentoring younger developers, and leading a team, I have an appreciation for everyone and how they contribute to a larger mission. I choose to be part of anything that I can see clearly that is bigger than myself, and feel blessed that I am accepted in that larger mission.</p>
            <p class="text-body-1 my-2">I came to Nebraska in 2009 from Thousand Oaks, California, with next to nothing but hope and a firey determination. I turned this hope and determination into a home in Omaha, wonderful lifetime friends, great mentors, a sweet furbaby black and white cat named Haywire, and a passion almost unrivaled for my career path.</p>
            <p class="text-body-1 my-2">I have moved around a bit since 2021 to places such as Houston, TX and Reno, NV, looking for the right place to call home.</p>
            <p class="text-body-1 my-2">If we choose each other for a project, you can bet that I will be there because I not only believe in the mission statement, not only the project but also in you and the team.</p>
            <p class="text-body-1 my-2">Now that you know a little bit about me, tell me about you.</p>
          </v-card-text>
          <v-card-text v-if="view === 'Professional'">
            <p class="text-body-1 my-2">I am a software engineer with over 15 years of experience in the industry. I have worked in a variety of roles, from software engineer to team lead to architect. I have a passion for technology and a desire to help others succeed.</p>
            <p class="text-body-1 my-2">I have a proven track record of delivering high-quality software solutions on time and within budget. I am a quick learner and have a knack for problem-solving. I am also a team player and enjoy working with others to achieve common goals.</p>
            <p class="text-body-1 my-2">I am currently looking for a new challenge and am open to new opportunities. If you are looking for a dedicated and hardworking software engineer, I would love to hear from you.</p>
            <p class="text-body-1 my-2">The technologies that I have worked with include but are not limited to:</p>
            <v-row>
              <v-col md="4" xs="12" class="text-center">
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-vuejs</v-icon> Vue.js
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-vuetify</v-icon> Vuetify
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-react</v-icon> React
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-typescript</v-icon> TypeScript
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-javascript</v-icon> JavaScript
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-aws</v-icon> AWS
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col md="4" xs="12" class="text-center">
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-aws</v-icon> AWS
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-nodejs</v-icon> Node.js
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-graphql</v-icon> GraphQL
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-csharp</v-icon> C#/.NET
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-python</v-icon> Python
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-microsoft-azure</v-icon> Microsoft Azure
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col md="4" xs="12" class="text-center">
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-html5</v-icon> HTML
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-css3</v-icon> CSS
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-language-php</v-icon> PHP
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-laravel</v-icon> Laravel
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-docker</v-icon> Docker
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon>mdi-jira</v-icon> Jira
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
          
        </v-card>
      </v-col>
    </v-row>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '@/components/DefaultTemplate.vue'

export default {
  name: 'AboutView',
  components: {
    DefaultTemplate
  },
  data() {
    return {
      view: 'Personal'
    }
  }
}
</script>

<style scoped>
  .v-list-item-selected {
    background-color: #F0F0F0;
  }
</style>
