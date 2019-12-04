<template>
  <div class="about">
    <v-text-field placeholder="title" v-model="title"></v-text-field>
    <v-btn color="primary" v-on:click="addBook" >ADD</v-btn>
  </div>
</template>
<script>
export default {
    data: () => ({
        title: '',
    }),
    methods: {
        addBook() {
            this.$store.dispatch('createBook', title)
        },
    },
}
</script>
