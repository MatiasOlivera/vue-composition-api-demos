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
import { defineComponent } from "@vue/composition-api";
import { usePromise } from "../../composables/use-promise";
import { getPosts } from "../../api/posts-api";
import { getUsers } from "../../api/users-api";

const NewPostsView = defineComponent({
  name: "NewPostsView",

  setup() {
    const { state: posts, load: loadPosts } = usePromise(() => getPosts());
    const { state: users, load: loadUsers } = usePromise(() => getUsers());

    loadPosts();
    loadUsers();

    return {
      posts,
      users
    };
  }
});

export default NewPostsView;
</script>

<style scoped></style>
