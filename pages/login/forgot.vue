<script lang="ts">
// import { createComponent, SetupContext } from '@vue/composition-api';
// import { useForgotPassword } from '../../lib/auth';

// interface FormError {
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
//       class: 'empty login',
//     },
//   },
//   setup(_props, { root }: SetupContext) {
//     if (root.$store.state.auth.token !== '') {
//       root.$router.push('/');
//     }

//     const { emailAddress, errors, forgot, requestInProgress, success } = useForgotPassword(
//       root.$store,
//     );

//     return {
//       emailAddress,
//       errors,
//       forgot,
//       requestInProgress,
//       success,
//     };
//   },
// });
</script>

<template>
  <h1>Forgot Password</h1>
  <!-- <div class="pt-24 login-page">
    <div class="w-full max-w-xs mx-auto">
      <div class="mb-3 text-4xl font-bold text-center text-white">
        <img src="~assets/red_fish.svg" alt="Red Fish" class="w-8 mr-2 fish-logo fish-logo-tweak" />
        LessonBuddy
      </div>
      <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div
          v-if="errors.message"
          class="relative px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <span class="block sm:inline">{{ errors.message }}</span>
        </div>
        <div v-if="success" class="pb-4">
          <span class="text-green-600"
            ><strong>Success!</strong> You should receive a password reset email shortly.</span
          >
        </div>
        <div v-if="!success" class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="emailAddress">
            Forgot Password?
          </label>
          <input
            id="emailAddress"
            v-model="emailAddress"
            :class="{ 'border-red-500': errors.emailAddress }"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email Address"
            @keyup.enter="forgot"
          />
          <p v-if="errors.emailAddress" class="text-xs italic text-red-500">
            {{ errors.emailAddress }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            v-if="!success"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
            :disabled="requestInProgress"
            @click="forgot"
          >
            Reset
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
