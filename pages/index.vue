<script setup lang="ts">
const authStore = useAuthStore();

const { user } = authStore;
</script>

<template>
  <div>
    <h1 class="text-2xl">LessonBuddy</h1>
    <p>Can Manage Configurations? {{ $can('manage', 'configuration') }}</p>
    <p>Can View Families? {{ $can('view', 'families') }}</p>
    <p>Can Manage Dogs? {{ $can('manage', 'dogs') }}</p>
    <pre>{{ user }}</pre>
  </div>
</template>
