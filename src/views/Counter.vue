<template>
  <div>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

const Counter = defineComponent({
  setup() {
    const count = ref<number>(0);

    function increment(): void {
      count.value++;
    }

    function reset(): void {
      count.value = 0;
    }

    return {
      count,
      increment,
      reset
    };
  }
});

export default Counter;
</script>

<style scoped></style>
