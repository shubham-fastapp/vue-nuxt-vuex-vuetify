<template>
  <div>
    <v-card class="mb-5" rounded="lg" elevation="1">
      <v-card-title>
        <v-avatar size="56">
          <img
            alt="user"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          />
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ loggedUser.firstName }} {{ loggedUser.lastName }}
            </v-list-item-title>
            <v-list-item-subtitle
              >@{{ loggedUser.username }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <!-- <p class="ml-3 mb-0">
          
        </p>
        <br />
        <small></small> -->
      </v-card-title>
      <v-card-text>
        <p>{{ loggedUser.bio }}</p>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text> Following {{ loggedUser.following }} </v-btn>
        <v-spacer></v-spacer>
        <v-btn text> Followers {{ loggedUser.followers }} </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    loggedUser: (state) => state.user.user,
  }),
};
</script>

<style lang="scss" scoped>
</style>