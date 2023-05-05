<script lang="ts">
// import { createComponent, SetupContext } from '@vue/composition-api';
// import { useLogin } from '~/lib/auth';
// import Loader from '~/components/Loader.vue';

// export default createComponent({
//   components: {
//     Loader,
//   },
//   layout: 'empty',
//   head: {
//     bodyAttrs: {
//       class: 'empty login',
//     },
//   },
//   setup(_props, { root }: SetupContext) {
//     const { username, password, errors, loginInProgress, verifyAuthStatus, login } = useLogin(
//       root.$store,
//       root.$router,
//       root.$can,
//     );

//     verifyAuthStatus();

//     return {
//       username,
//       password,
//       errors,
//       loginInProgress,
//       login,
//     };
//   },
// });
</script>

<template>
  <h1 class="text-2xl">Login</h1>
  <!-- <div class="pt-24 login-page">
    <div class="w-full max-w-xs mx-auto">
      <div class="mb-3 text-4xl font-bold text-center text-white">
        <img src="~assets/red_fish.svg" alt="Red Fish" class="w-8 mr-2 fish-logo fish-logo-tweak" />
        LessonBuddy
      </div>
      <form v-if="!loginInProgress" class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div
          v-if="errors.message"
          class="relative px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <span class="block sm:inline">{{ errors.message }}</span>
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
            Username
          </label>
          <input
            id="username"
            v-model="username"
            :class="{ 'border-red-500': errors.username }"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username or Email Address"
          />
          <p v-if="errors.username" class="text-xs italic text-red-500">
            {{ errors.username }}
          </p>
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            :class="{ 'border-red-500': errors.password }"
            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
            @keyup.enter="login"
          />
          <p v-if="errors.password" class="text-xs italic text-red-500">
            {{ errors.password }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >
            Sign In
          </button>
          <NuxtLink
            to="/login/forgot"
            class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
          >
            Forgot Password
          </NuxtLink>
        </div>
      </form>
      <div v-else class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <Loader></Loader>
      </div>
      <p class="text-xs text-center text-blue-300">
        &copy;2019 Big Blue Swim School. All rights reserved.
      </p>
      <div class="fish"></div>
    </div>
  </div> -->
</template>
