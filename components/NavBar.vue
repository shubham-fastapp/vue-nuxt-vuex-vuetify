<template>
    <div>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-toolbar-title>Shubham Rocks</v-toolbar-title>
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
    </div>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Messages',
        'Profile',
      ],
    }),
  }
</script>