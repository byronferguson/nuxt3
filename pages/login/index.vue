<script setup lang="ts">
// import { useLogin } from '~/lib/auth';
definePageMeta({
  layout: 'auth',
});

// const { username, password, errors, loginInProgress, verifyAuthStatus, login } = useLogin(
//   root.$store,
//   root.$router,
//   root.$can,
// );

//     verifyAuthStatus();

const username = ref('');
const password = ref('');
const errors = ref({
  username: '',
  password: '',
  message: '',
});
const loginInProgress = ref(false);

const authStore = useAuthStore();

async function login() {
  console.log('Attempting to login');
  await authStore.login(username.value, password.value);
}
</script>

<template>
  <div class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="w-auto mx-auto h-36"
        src="~/assets/images/BB_Logo_Wordmark_RGB_HorizontalWhite.png"
        alt="LessonBuddy Logo"
      />
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Email</label>
          <div class="mt-2">
            <input
              id="email"
              v-model="username"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-medium-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-white"
              >Password</label
            >
            <div class="text-sm">
              <NuxtLink
                to="/login/forgot"
                class="font-medium text-medium-primary-400 hover:text-medium-primary-300 focus:ring-medium-primary"
              >
                Forgot password?
              </NuxtLink>
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-medium-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <Button color="secondary" type="submit" class="w-full" :disabled="loginInProgress">
          Sign in
        </Button>
      </form>
    </div>
  </div>
</template>

<!-- <template>
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
      <form v-if="!loginInProgress" class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div
          v-if="errors.message"
          class="relative px-4 py-3 mb-4 border rounded text-secondary-700 bg-secondary-100 border-secondary-400"
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
            :class="{ 'border-secondary-500': errors.username }"
            class="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username or Email Address"
          />
          <p v-if="errors.username" class="text-xs italic text-secondary-500">
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
            :class="{ 'border-secondary-500': errors.password }"
            class="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
            @keyup.enter="login"
          />
          <p v-if="errors.password" class="text-xs italic text-secondary-500">
            {{ errors.password }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <Button color="primary" @click="login"> Sign In </Button>
          <NuxtLink
            to="/login/forgot"
            class="inline-block text-sm font-bold align-baseline text-medium-primary hover:text-medium-primary-700"
          >
            Forgot Password
          </NuxtLink>
        </div>
      </form>
      <div v-else class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <Loader />
      </div>
      <p class="text-xs text-center text-light-primary">
        &copy;{{ new Date().getFullYear() }} Big Blue Swim School. All rights reserved.
      </p>
    </div>
  </div>
</template> -->
