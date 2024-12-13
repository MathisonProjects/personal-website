<template>

    <v-app-bar>
        <v-toolbar-title>
            <v-img src="/mathison-projects-logo.png" alt="Mathison Projects" width="240px" />
        </v-toolbar-title>
        <v-spacer />
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item link :to="{ name: 'home' }">
            <v-list-item-title>
                <v-icon>mdi-home</v-icon>
                Home
            </v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'about' }">
            <v-list-item-title>
                <v-icon>mdi-information</v-icon>
                About
            </v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'projects' }">
            <v-list-item-title>
                <v-icon>mdi-briefcase</v-icon>
                Projects
            </v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'media' }">
            <v-list-item-title>
                <v-icon>mdi-newspaper</v-icon>
                Media
            </v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'contact' }">
            <v-list-item-title>
                <v-icon>mdi-email</v-icon>
                Contact
            </v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>