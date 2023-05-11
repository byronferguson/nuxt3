import { parse } from 'date-fns';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { ability } from '~/plugins/casl';

interface Auth {
  token: string;
  expires: string;
}

interface Location {
  id: number;
  name: string;
  slug: string;
}

interface Organization {
  id: number;
  name: string;
  slug: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  locations: Location[];
  organization: Organization | null;
}

export interface AuthState {
  user: User | null;
  token: string;
  expiresAt: Date | null;
  loginRedirectPath: string;
  authMessage: string;
  resetUser: User | null;
  resetMessage: string;
}

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: null,
      token: '',
      expiresAt: null,
      loginRedirectPath: '',
      authMessage: '',
      resetUser: null,
      resetMessage: '',
    } as AuthState),
  getters: {
    isAuthenticated(state) {
      return state.user !== null;
    },
    userLocations(state) {
      return state?.user?.locations ?? [];
    },
    userOrganization(state) {
      return state?.user?.organization ?? null;
    },
  },
  actions: {
    async login(username: string, password: string) {
      // TODO: Check if token exists already and see if a user can be requested
      try {
        // Clear Auth message
        this.authMessage = '';

        const { token, expires } = await $fetch<Auth>('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password,
          },
        });

        this.token = token;
        this.expiresAt = parse(expires, 'yyyy-MM-dd HH:mm:ss', new Date());

        await Promise.all([
          this.updateAuthUser(),
          this.fetchAbilities(),
          // await dispatch('fetchConfig', null, { root: true }),
        ]);
      } catch (error: any) {
        this.authMessage =
          error.response.status === 401 ? 'Invalid Username/Password' : 'Unhandled Error';

        console.error(error);

        throw new Error(this.authMessage);
      }
    },

    async updateAuthUser() {
      try {
        this.user = await $fetch<User>('/api/auth/me');
      } catch (error) {
        console.error(error);
        throw new Error('User not found');
      }
    },

    /**
     * Fetches the user's abilities and updates the ability object
     */
    async fetchAbilities() {
      try {
        const abilities = await $fetch('/api/auth/abilities');
        ability.update(abilities);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Fetches the user's locations and updates the locations array on the user object
     * FIXME: seems like the only benefit is mapping the organization to an object
     */
    async updateAuthUserLocations() {
      // if (!this.user) return;
      // const locationIds = state.user.locations.map(location => location.id);
      // const promises = locationIds.map(id => LocationService.getLocationById(id));
      // const locations = (await Promise.all(promises))
      //   .map(response => response.data)
      //   .map(location => {
      //     if (location.organization)
      //       location.organization = Organization.fromProps(location.organization);
      //     return location;
      //   });
      // this.user.locations = locations.sort((a, b) => a.name.localeCompare(b.name));
    },

    forgot(emailAddress: string) {
      $fetch('/api/auth/forgot', {
        method: 'POST',
        body: {
          emailAddress,
        },
      });
    },

    //   async checkResetHash(
    //     { commit }: ActionContext<AuthState, RootState>,
    //     { hash }: any,
    //   ): Promise<any> {
    //     commit('UPDATE_RESET_MESSAGE', '');
    //     try {
    //       const response = await api.get<any>(`/v2/auth/forgot/${hash}`);
    //       commit('UPDATE_RESET_USER', response.data);
    //     } catch (err) {
    //       commit('UPDATE_RESET_MESSAGE', 'Invalid or Expired Reset Code');
    //       throw err;
    //     }
    //   },

    //   async updatePassword(
    //     { commit }: ActionContext<AuthState, RootState>,
    //     { hash, password }: any,
    //   ): Promise<any> {
    //     commit('UPDATE_RESET_MESSAGE', '');
    //     try {
    //       await api.patch<any>(`/v2/auth/forgot/${hash}`, {
    //         newPassword: password,
    //       });
    //     } catch (err) {
    //       commit('UPDATE_RESET_MESSAGE', 'Error resetting password');
    //       throw err;
    //     }
    //   },

    //   async logout({ state, commit }: ActionContext<AuthState, RootState>): Promise<void> {
    //     try {
    //       if (state.token !== '') await api.post('/v2/auth/logout');
    //     } catch (err) {
    //       console.error(err);
    //     }
    //     clearAuthToken();
    //     commit('UPDATE_TOKEN', '');
    //     commit('UPDATE_USER', null);
    //     Ability.update([]);
    //   },

    //   loginRedirectPath({ commit }: ActionContext<AuthState, RootState>, newPath: string): void {
    //     commit('UPDATE_LOGIN_REDIRECT_PATH', newPath);
    //   },
  },
  persist: true,
});

// export const actions: ActionTree<AuthState, RootState> = {
//   async nuxtClientInit(
//     { commit, dispatch }: ActionContext<AuthState, RootState>,
//     ctx: Context,
//   ): Promise<void> {
//     const token: string = retrieveAuthToken();
//     if (token !== '') {
//       commit('UPDATE_TOKEN', token);
//       api.defaults.headers = {
//         Authorization: `Bearer ${token}`,
//         'client-platform-id': 1,
//       };

//       try {
//         await dispatch('updateAuthUser');
//       } catch (err) {
//         dispatch('logout');
//         if (ctx.app.router) ctx.app.router.push('/');
//       }
//     }
//   },

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
