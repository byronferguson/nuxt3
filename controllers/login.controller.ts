// import { computed, reactive, Ref, ref } from '@vue/composition-api';
// import VueRouter, { Route } from 'vue-router';
// import { Store } from 'vuex/types/index';
// import { User } from '~/models/User';
// import { StoreAny } from '~/types/global';

// export interface AuthenticatedUserComposable {
//   isAuthenticated: Readonly<Ref<Readonly<boolean>>>;
//   user: Readonly<Ref<Readonly<User | null>>>;
//   logout: () => Promise<void>;
// }

// export function useAuthenticatedUser(
//   store: Store<StoreAny>,
//   router?: VueRouter,
// ): AuthenticatedUserComposable {
//   const isAuthenticated = computed<boolean>(() => store.getters['auth/isAuthenticated']);
//   const user = computed<User | null>(() => store.state.auth.user);

//   const logout = async (): Promise<void> => {
//     await store.dispatch('auth/logout');
//     if (router) router.push('/login');
//   };

//   return {
//     isAuthenticated,
//     user,
//     logout,
//   };
// }

// export function useLogin(
//   store: Store<any>,
//   router: VueRouter,
//   can: (action: string, subject: string, field?: string) => boolean,
// ): any {
//   const username: any = ref('');
//   const password: any = ref('');
//   const errors: any = reactive({
//     message: computed(() => store.state.auth.authMessage),
//     username: null,
//     password: null,
//   });
//   const loginInProgress: any = ref(false);

//   function verifyAuthStatus(): void {
//     if (store.state.auth.token !== '') {
//       router.push('/');
//     }
//   }

//   async function login(): Promise<void> {
//     if (username.value === '') errors.username = 'Please enter a username.';
//     if (password.value === '') errors.password = 'Please enter a password.';

//     if (username.value === '' || password.value === '') return;

//     try {
//       loginInProgress.value = true;
//       await store.dispatch('auth/login', {
//         username: username.value,
//         password: password.value,
//       });

//       // Redirect to the legacy dashboard unless they do not have the correct
//       // permissions, in which case redirect to the family search...
//       // TODO: Hook up dashboard on NUXT and remove redirect to legacy...
//       if (
//         can('view', 'pool-controller-dashboard-panel') ||
//         can('view', 'lesson-history-dashboard-panel')
//       ) {
//         router.push('/');
//       } else {
//         router.push('/families');
//       }
//     } catch (e) {
//       errors.username = e.message;
//       loginInProgress.value = false;
//     } finally {
//       store.dispatch('authNuxtClientInit');
//     }
//   }

//   return {
//     username,
//     password,
//     errors,
//     loginInProgress,
//     verifyAuthStatus,
//     login,
//   };
// }

// export function useForgotPassword(store: Store<any>): any {
//   const emailAddress: any = ref('');
//   const errors: any = reactive({
//     message: null,
//     emailAddress: null,
//   });
//   const requestInProgress: any = ref(false);
//   const success: any = ref(false);

//   async function forgot(): Promise<void> {
//     requestInProgress.value = true;
//     errors.emailAddress = null;
//     errors.message = null;

//     if (emailAddress.value === '') errors.emailAddress = 'Please enter an e-mail address.';
//     if (emailAddress.value === '') return;

//     try {
//       await store.dispatch('auth/forgot', {
//         emailAddress: emailAddress.value,
//       });
//       success.value = true;
//       requestInProgress.value = false;
//     } catch (e) {
//       success.value = false;
//       requestInProgress.value = false;
//       errors.message = e.message;
//     }
//   }

//   return {
//     emailAddress,
//     errors,
//     forgot,
//     requestInProgress,
//     success,
//   };
// }

// export function useResetPassword(store: Store<any>, route: Route, router: VueRouter): any {
//   const resetUser = computed(() => store.state.auth.resetUser);
//   const password: any = ref('');
//   const errors: any = reactive({
//     message: computed(() => store.state.auth.resetMessage),
//     password: null,
//   });
//   const hash: string | null = route.params.hash || null;
//   const requestInProgress: any = ref(false);

//   store.dispatch('auth/checkResetHash', {
//     hash,
//   });

//   async function updatePassword(): Promise<void> {
//     errors.password = '';

//     if (password.value === '') {
//       errors.password = 'Please enter a password';
//       return;
//     } else if (password.value.length < 8) {
//       errors.password = 'Password should be at least 8 characters';
//       return;
//     }

//     requestInProgress.value = true;
//     try {
//       await store.dispatch('auth/updatePassword', {
//         hash,
//         password: password.value,
//       });
//       // success.value = true;
//       requestInProgress.value = false;
//       await store.dispatch('auth/login', {
//         username: resetUser.value.username,
//         password: password.value,
//       });

//       router.push('/families');
//     } catch (e) {
//       // success.value = false;
//       requestInProgress.value = false;
//       errors.message = e.message;
//     }
//   }

//   return {
//     resetUser,
//     password,
//     updatePassword,
//     errors,
//     requestInProgress,
//   };
// }
