<template>
    <div>
        <Post />
    </div>
</template>

<script>
    import Post from '@/components/Post.vue';
    import { mapState } from 'vuex';
    export default {
        async fetch({ store }) {
            try {
                await store.dispatch('post/fetchPosts')
            } catch(e) {
                console.log("error ", e)
            }
        },
        component: {
            Post
        },
        computed: mapState({
            posts: state => state.post.posts
        })
    }
</script>
