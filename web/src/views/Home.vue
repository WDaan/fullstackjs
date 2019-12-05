<template>
  <v-container>
    <div class="home">
      <v-flex class="text-center">
        <v-btn class="primary" v-on:click="getBooks">GET</v-btn>
      </v-flex>
      <div>
        <v-card v-for="book in books" v-bind:key="book.createdAt" class="mt-5">
          <v-card-title>{{book.name}}</v-card-title>
          <v-card-text>
            <p>{{book.type}}</p>
            <p>{{book.createdAt}}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'home',
    computed: {
        ...mapGetters(['state_getBooks']),
        books() {
            return this.state_getBooks()
        }
    },
    methods: {
        getBooks() {
            this.$store.commit('getBooks')
        }
    }
}
</script>
