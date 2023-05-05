<script lang="ts">
// import { createComponent, SetupContext } from '@vue/composition-api';
// import { useResetPassword } from '../../../lib/auth';

// interface FormError {
//   message: string | null;
//   emailAddress: string | null;
// }

// interface State {
//   emailAddress: string;
//   error: FormError;
// }

// export default createComponent({
//   layout: 'empty',
//   head: {
//     bodyAttrs: {
//       class: 'empty login'
//     }
//   },
//   setup(_props, { root }: SetupContext) {
//     const {
//       resetUser,
//       password,
//       updatePassword,
//       errors,
//       requestInProgress
//     } = useResetPassword(root.$store, root.$route, root.$router);

//     return {
//       resetUser,
//       password,
//       updatePassword,
//       errors,
//       requestInProgress
//     };
//   }
// });
</script>

<template>
  <h1>Reset Password</h1>
  <!-- <div class="pt-24 login-page">
    <div class="w-full max-w-xs mx-auto">
      <div class="mb-3 text-4xl font-bold text-center text-white">
        <i class="text-blue-500 align-text-bottom fas fa-swimmer"></i>LessonBuddy
      </div>
      <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div
          v-if="errors.message"
          class="relative px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <span class="block sm:inline">{{ errors.message }}</span>
        </div>
        <div v-if="resetUser" class="mb-4">
          <label class="block mb-1 text-sm font-bold text-gray-700" for="username">
            Username
          </label>
          <span id="username" class="block pb-2 font-light">{{ resetUser.username }}</span>
          <label class="block mb-2 text-sm font-bold text-gray-700" for="emailAddress">
            New Password
          </label>
          <input
            id="password"
            v-model="password"
            :class="{ 'border-red-500': errors.password }"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            autocomplete="off"
          />
          <p v-if="errors.password" class="text-xs italic text-red-500">
            {{ errors.password }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            v-if="resetUser"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
            :disabled="requestInProgress"
            @click="updatePassword"
          >
            Update
          </button>
          <NuxtLink
            class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            to="/login"
          >
            Back to Login
          </NuxtLink>
        </div>
      </form>
      <p class="text-xs text-center text-blue-300">
        &copy;2019 Big Blue Swim School. All rights reserved.
      </p>
      <div class="fish"></div>
    </div>
  </div> -->
</template>
