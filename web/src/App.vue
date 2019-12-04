<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/"><v-btn text> home</v-btn></router-link>
      <router-link to="post"><v-btn text > post</v-btn></router-link>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
    //
    }),
}
</script>
