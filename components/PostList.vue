<template>
    <div>
        <template v-for='post in posts'>
            <Post :post='post' :key='post.id'/>
        </template>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Post from '@/components/Post.vue';
    export default {
        components: {
            Post,
        },
        computed: mapState({
            posts: state => state.post.posts
        })
    }
</script>
