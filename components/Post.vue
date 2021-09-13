<template>
  <div>
    <v-card class="mb-5" rounded="lg" elevation="1" :key="post.id">
      <v-card-title class="text-h5 grey lighten-2 pb-0">
        <v-avatar size="56">
          <img
            alt="user"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          />
        </v-avatar>
        {{ post.user.firstName }} {{ post.user.lastName }}</v-card-title
      >
      <v-card-text class="grey lighten-2 pb-2"
        ><small>{{ post.date }}</small></v-card-text
      >
      <v-card-text>
        <p class="text-h6 text--primary">
          {{ post.text }}
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text>
          <v-icon left dark v-if="loggedInUserLiked(post)">
            mdi-thumb-up
          </v-icon>
          <v-icon left dark v-else> mdi-thumb-up-outline </v-icon>
          {{ post.like ? (post.like[0] ? post.like[0].users.length : 0) : 0 }}
        </v-btn>
        <v-btn text @click="expand = expand == post.id ? 0 : post.id">
          <v-icon left dark v-if="expand == post.id">mdi-comment </v-icon>
          <v-icon left dark v-else>mdi-comment-outline </v-icon>
          {{ post.comment.length }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="comment.text"
          label="Comment"
          required
          append-icon="mdi-send"
          @click:append="expand = post.id"
        >
        </v-text-field>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="post.id == expand">
          <v-divider></v-divider>
          <v-card-text v-for="comment in post.comment" :key="comment.user.id">
            <p>
              <b>{{ comment.user.firstName }}</b
              >: {{ comment.text }}
            </p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["post"],
  data() {
    return {
      expand: 0,
      comment: {
        postId: this.post.id,
        user: this.user,
        text: "",
      },
    };
  },
  computed: mapState({
    loggedUser: (state) => state.user.user,
  }),
  methods: {
    loggedInUserLiked(post) {
      if (post && post.like) {
        const post_liked = post.like.filter((like_) => {
          return (
            like_.users &&
            like_.users.find((user) => {
              return user.id == this.loggedUser.id;
            })
          );
        });
        return post_liked ? post_liked.length : false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
