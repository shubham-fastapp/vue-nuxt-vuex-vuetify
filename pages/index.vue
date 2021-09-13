
<template>
  <v-app id="inspire">
    <NavBar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- left side element -->
          <v-col cols="1"></v-col>
          <v-col cols="12" sm="2">
            <LeftUserCard />
          </v-col>

          <!-- center element -->
          <v-col cols="8" sm="6">
            <PostList />
          </v-col>
          <v-col cols="12" sm="2">
            <LeftUserCard />
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LeftUserCard from "@/components/LeftUserCard.vue";
import PostList from "@/components/PostList.vue";
export default {
  async fetch({ store }) {
    console.log();
    try {
      await store.dispatch("user/setUser");
      await store.dispatch("post/fetchPosts");
    } catch (e) {
      console.log("error ", e);
    }
  },
  components: {
    NavBar,
    PostList,
    LeftUserCard
  },
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
  methods: {
    refresh() {
      this.$fetch();
    },
  },
};
</script>