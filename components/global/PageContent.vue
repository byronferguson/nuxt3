<template>
  <nav v-if="$slots.breadcrumbs" class="mb-2">
    <slot name="breadcrumbs" />
  </nav>
  <header v-if="$slots.header" class="mb-4">
    <slot name="header" />
  </header>
  <main class="px-4 py-3 bg-white rounded-md">
    <slot />
  </main>
</template>
