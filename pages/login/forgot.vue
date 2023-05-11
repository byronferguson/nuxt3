<script setup lang="ts">
// import { useForgotPassword } from '../../lib/auth';
definePageMeta({
  layout: false,
});

// interface FormError {
//   emailAddress: string | null;
// }

// interface State {
//   emailAddress: string;
//   error: FormError;
// }

//     if (root.$store.state.auth.token !== '') {
//       root.$router.push('/');
//     }

//     const { emailAddress, errors, forgot, requestInProgress, success } = useForgotPassword(
//       root.$store,
//     );

const emailAddress = ref('');
const success = ref(false);
const requestInProgress = ref(false);
const errors = ref({
  emailAddress: 'lorem ipsum',
  message: 'lorem ipsum',
});

const authStore = useAuthStore();

async function forgot() {
  console.log('Sending forgot password email');
  await authStore.forgot(emailAddress.value);
}
</script>

<template>
  <NuxtLayout name="auth">
    <div class="pt-24">
      <div class="w-full max-w-sm mx-auto">
        <div
          class="flex flex-row items-center justify-center mb-3 text-4xl font-bold text-center text-white"
        >
          <img
            class="w-16 h-16"
            src="~/assets/images/BB_Logo_Icon_RGB_White.png"
            alt="LessonBuddy Logo"
          />
          LessonBuddy
        </div>

        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div
            v-if="errors.message"
            class="relative px-4 py-3 mb-4 border rounded text-secondary-700 bg-secondary-100 border-secondary-400"
            role="alert"
          >
            <span class="block sm:inline">{{ errors.message }}</span>
          </div>
          <div v-if="success" class="pb-4">
            <span class="text-green-600">
              <strong>Success!</strong> You should receive a password reset email shortly.
            </span>
          </div>
          <div v-if="!success" class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="emailAddress">
              Forgot Password?
            </label>
            <input
              id="emailAddress"
              v-model="emailAddress"
              :class="{ 'border-secondary-500': errors.emailAddress }"
              class="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email Address"
              @keyup.enter="forgot"
            />
            <p v-if="errors.emailAddress" class="text-xs italic text-secondary-500">
              {{ errors.emailAddress }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              v-if="!success"
              class="px-4 py-2 font-bold text-white rounded bg-medium-primary hover:bg-medium-primary-700 focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              :disabled="requestInProgress"
              @click="forgot"
            >
              Reset
            </button>
            <NuxtLink
              class="inline-block text-sm font-bold align-baseline text-medium-primary hover:text-medium-primary-700"
              to="/login"
            >
              Back to Login
            </NuxtLink>
          </div>
        </form>
        <p class="text-xs text-center text-light-primary">
          &copy;{{ new Date().getFullYear() }} Big Blue Swim School. All rights reserved.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
