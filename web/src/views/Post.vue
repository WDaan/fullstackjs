<template>
  <v-card class="about" style="max-width: 80%; margin: 50px auto">
    <v-container>
      <v-card-text>
        <v-text-field placeholder="title" v-model="title"></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" v-on:click="addBook">ADD</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
    data: () => ({
        title: ''
    }),
    methods: {
        addBook() {
            this.$store.commit('createBook', this.title)
        }
    }
}
</script>
