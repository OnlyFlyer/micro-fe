<script setup lang="ts">
defineProps<{
  name?: string
}>()
</script>

<template>
  <h1>
    Hello, {{name || '--'}}!
  </h1>
</template>
