<template>
    <DefaultTemplate>
      <v-row>
        <v-col cols="12" md="3">
          <v-list>
            <v-list-item @click="view = 'All'" :class="{ 'v-list-item-selected': view === 'All' }">
              <v-list-item-title>
                All ({{ projectCount.All }})
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="view = 'Contract'" :class="{ 'v-list-item-selected': view === 'Contract' }">
              <v-list-item-title>
                Contract ({{ projectCount.Contract }})
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="view = 'Side'" :class="{ 'v-list-item-selected': view === 'Side' }">
              <v-list-item-title>
                Side ({{ projectCount.Side }}) 
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="view = 'Personal'" :class="{ 'v-list-item-selected': view === 'Personal' }">
              <v-list-item-title>
                Personal ({{ projectCount.Personal }})
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="9">
          <v-card>
            <v-card-title>
              {{ view }}
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="project in selectedProjects" :key="project.title" @click="openProject(project.url)">
                  <v-list-item-title>
                    {{ project.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ project.role }} <v-chip density="compact" variant="outlined">{{ project.type }}</v-chip>
                  </v-list-item-subtitle>
                  <v-list-item-text>
                    {{ project.description }}
                  </v-list-item-text>
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
    name: 'ProjectsView',
    components: {
      DefaultTemplate
    },
    computed: {
      selectedProjects() {
        if (this.view === 'All') {
          return this.projects;
        }
        return this.projects.filter(project => project.type === this.view);
      },
      projectCount() {
        return {
          All: this.projects.length,
          Contract: this.projects.filter(project => project.type === 'Contract').length,
          Side: this.projects.filter(project => project.type === 'Side').length,
          Personal: this.projects.filter(project => project.type === 'Personal').length,
        }
      }
    },
    data() {
      return {
        view: 'All',
        projects: [
          { type: 'Contract', title: "Capital One", role: "Sr VueJs Engineer", description: "I worked on internal Capital One tools to help with the development of their products. VueJs, AWS.", url: "https://www.capitalone.com/" },
          { type: 'Contract', title: "E-Worldes", role: "Sr VueJs Engineer", description: "Helped support their client, the state of Hawaii, on their DHS website and suite of services. VueJs, Azure.", url: "https://eworldes.com/" },
          { type: 'Contract', title: "Wild Fork Foods", role: "Frontend Team Lead", description: "Helped spearhead the development of the rebuild of their website. Collaborated with Product Development, Business Analyitics, Quality Assurance, Scrum, Backend Teams, and 3rd Party Vendors. NextJs, ReactJs, Azure.", url: "https://wildforkfoods.com/" },
          { type: 'Contract', title: "Amazon.com", role: "Sr VueJs Engineer", description: "Collaborated with the Amazon team to build out a new internal product, leveraging internal styles and components. Helped with interviewing and hiring additional developers. ReactJs, AWS Lambda, AWS API Gateway, AWS Code Pipeline.", url: "https://amazon.com/" },
          { type: 'Contract', title: "Omaha Steaks", role: "Sr VueJs Engineer", description: "", url: "https://omahasteaks.com/" },
          { type: 'Contract', title: "Haliburton", role: "Sr VueJs Engineer", description: "", url: "https://haliburton.com/" },
          { type: 'Contract', title: "Trility", role: "Sr React Native Engineer", description: "", url: "https://www.trility.io/" },
          { type: 'Contract', title: "Hook and Loop", role: "Solutions Engineer", description: "", url: "https://www.hookandloop.com/" },
          { type: 'Contract', title: "McKesson", role: "Frontend Team Lead", description: "Built out a new scheduling and appointment system for McKesson. ReactJs, .NET/C#, Azure.", url: "https://www.mckesson.com/" },
          { type: 'Contract', title: "44Interactive", role: "Sr Software Engineer", description: "Served an array of external clients in maintaining and building out their websites. VueJs, Laravel, PHP, AWS EC2.", url: "https://44i.com/" },
          { type: 'Contract', title: "Shineforth", role: "Sr React Engineer", description: "", url: "https://shineforth.co/" },
          { type: 'Contract', title: "M6Connect", role: "Software Manager", description: "", url: "https://www.onm6.com/" },
          { type: 'Contract', title: "Koch Industries", role: "Sr VueJs Engineer", description: "", url: "https://www.kochinc.com/" },
          { type: 'Contract', title: "Customer Service Profiles", role: "Sr VueJs Engineer", description: "", url: "https://www.csp.com/" },
          { type: 'Contract', title: "Omaha Media Group", role: "Sr VueJs Engineer", description: "", url: "https://www.omahamediagroup.com/" },
          { type: 'Contract', title: "Redglaze Group", role: "Md Software Engineer", description: "", url: "hhttp://sghredglaze.com/" },
          { type: 'Contract', title: "Hayneedle Inc", role: "Web Application Dev III", description: "", url: "https://www.hayneedle.com/" },
          { type: 'Side', title: "Rural Nevada Democratic Caucus", role: "Solution Architect", description: "Being friends with the RNDC Chair, he requested for me to build out a tool to help with creating and supporting all of the caucus websites. Please do not take this as a reflection of my politics. I just like helping my friends.", url: "" },
          { type: 'Side', title: "The Latest Byte", role: "Solution Architect", description: "Created to test a number of key technologies in relation to AWS and serverless. It makes it simple to create and deploy articles and update the site in a modular manner.", url: "https://www.thelatestbyte.com/" },
          { type: 'Side', title: "Twitter Community Scheduler", role: "NodeJs Developer", description: "Created to help schedule tweets to a twitter community. It allows for a simple way to schedule tweets to a community and track the progress of the tweets.", url: "https://github.com/MathisonProjects/twitter-community-scheduler" },
          { type: 'Personal', title: "A God's Fate, A D&D Campaign", role: "Game Master / Designer", description: "Created for a D&D Campaign to track players, characters, notes, and more. Used mostly for reference. Uses AI for the art of characters.", url: "https://www.agodsfate.com/" },
        ]
      }
    },
    methods: {
      openProject(url) {
        window.open(url, '_blank');
      }
    }
  }
  </script>
  