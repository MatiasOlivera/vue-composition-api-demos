<template>
  <div>
    <h1>Posts</h1>
    <p v-if="posts.loading">Loading...</p>
    <ul v-if="posts.data">
      <li v-for="post in posts.data" :key="post.id">
        {{ post.title }}
      </li>
    </ul>

    <h1>Users</h1>
    <p v-if="users.loading">Loading...</p>
    <ul v-if="users.data">
      <li v-for="user in users.data" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getPosts, Posts } from "../../api/posts-api";
import { getUsers, Users } from "../../api/users-api";

interface Data {
  posts: {
    loading: boolean;
    error: string | null;
    data: Posts;
  };
  users: {
    loading: boolean;
    error: string | null;
    data: Users;
  };
}

export default Vue.extend({
  name: "OldPostsViews",

  created() {
    this.loadPosts();
    this.loadUsers();
  },

  data(): Data {
    return {
      posts: {
        loading: false,
        error: null,
        data: []
      },
      users: {
        loading: false,
        error: null,
        data: []
      }
    };
  },

  methods: {
    async loadPosts() {
      this.posts.loading = true;

      try {
        this.posts.data = await getPosts({ start: 0, limit: 5 });
      } catch (error) {
        this.posts.error = error;
      } finally {
        this.posts.loading = false;
      }
    },

    async loadUsers() {
      this.users.loading = true;

      try {
        this.users.data = await getUsers();
      } catch (error) {
        this.users.error = error;
      } finally {
        this.users.loading = false;
      }
    }
  }
});
</script>

<style scoped></style>
