<template>
  <div class="home">
    <div>
      <v-card v-for="book in books" v-bind:key="book.createdAt">
        <v-card-title>{{book.name}}</v-card-title>
        <v-card-text>
          <p>{{book.type}}</p>
          <p>{{book.createdAt}}</p>
        </v-card-text>
      </v-card>
    </div>
    <v-btn class="primary" v-on:click="getBooks">GET</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'home',
    computed: {
        ...mapGetters(['state_getBooks']),
        books() {
            return this.state_getBooks()
        },
    },
    methods: {
        getBooks() {
            this.$store.dispatch('state_getBooks')
        },
    },
}
</script>
