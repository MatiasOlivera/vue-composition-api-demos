<template>
  <div>
    <h1>Posts</h1>
    <p v-if="posts.loading">Loading...</p>
    <ul v-if="!posts.loading && posts.data">
      <li v-for="post in posts.data" :key="post.id">
        {{ post.title }}
      </li>
    </ul>

    <div>
      <p>Current page: {{ pagination.currentPage.value }}</p>

      <button @click="pagination.first">First</button>
      <button @click="pagination.prev">Prev</button>
      <button @click="pagination.next">Next</button>
      <button @click="pagination.last">Last</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "@vue/composition-api";
import { usePromise } from "../../composables/use-promise";
import { usePagination } from "../../composables/use-pagination";
import { getPosts } from "../../api/posts-api";

const NewPaginationView = defineComponent({
  name: "NewPaginationView",

  setup() {
    const pagination = usePagination({ startPage: 1, perPage: 10, total: 100 });

    const { state: posts, load: loadPosts } = usePromise(() =>
      getPosts({
        start: pagination.offset.value,
        limit: pagination.perPage.value
      })
    );

    loadPosts();

    watch([pagination.currentPage], () => loadPosts());

    return {
      posts,
      pagination
    };
  }
});

export default NewPaginationView;
</script>

<style scoped></style>
