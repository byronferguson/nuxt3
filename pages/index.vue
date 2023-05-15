<template>
  <div>
    <h1 class="text-2xl">LessonBuddy</h1>
    <p>Can Manage Configurations? {{ $can('manage', 'configuration') }}</p>
    <p>Can Manage Dogs? {{ $can('manage', 'dogs') }}</p>
  </div>
</template>
