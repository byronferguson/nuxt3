// // import { computed, onUnmounted, reactive, ref, Ref, watch } from '@vue/composition-api';
// // import debounce from 'debounce-promise';
// // import { Store } from 'vuex';
// // import api, { AxiosResponse } from '~/api';
// // import usePromise from '~/composables/use-promise';
// // import { createEmptyCampaign } from '~/models/Campaign';
// // import { createFamily, Family } from '~/models/Family';
// // import { getEmptyLocation } from '~/models/Location';
// // import { BooleanValue, CampaignValue, LocationValue, StringValue } from '~/models/Values';

// export function useGetFamilies() {
//   const {
//     use: fetchFamily,
//     loading,
//     error,
//     result: family,
//   } = usePromise<Family>((id: number) => {
//     return api.get(`/v1/families/${id}`);
//   });

//   return {
//     fetchFamily,
//     loading,
//     error,
//     family,
//   };
// }

// export interface FamilySearchOptions {
//   initialSearch?: string;
//   beforeSearchCallback?: () => void;
//   afterSearchCallback?: () => void;
// }

// export function useFamilySearch(
//   store: Store<StoreAny>,
//   options = {} as FamilySearchOptions,
// ) {
//   const selectedFamily = ref<Family | null>(null);
//   const families: Readonly<Ref<readonly Family[]>> = computed<Family[]>(
//     () => store.state.families.families,
//   );
//   const searchString = ref<string>(options.initialSearch ?? '');
//   const includeDuplicates = ref<boolean>(false);
//   const hasSearched = ref<boolean>(false);
//   const searchIsLoading = ref<boolean>(false);

//   const debouncedSearch = debounce(async (): Promise<void> => {
//     if (options.beforeSearchCallback) options.beforeSearchCallback();

//     if (searchString.value === '') await store.dispatch('families/clearSearch');
//     else
//       await store.dispatch('families/searchFamilies', {
//         searchString: searchString.value,
//         includeDuplicates: includeDuplicates.value,
//       });

//     if (options.afterSearchCallback) options.afterSearchCallback();

//     searchIsLoading.value = false;
//     hasSearched.value = true;
//   }, 500);

//   const search = (): Promise<void> => {
//     searchIsLoading.value = true;
//     return debouncedSearch();
//   };

//   async function selectFamily(family: Family): Promise<void> {
//     const response: AxiosResponse<Family> = await api.get(`/v1/families/${family.id}`);
//     selectedFamily.value = createFamily(response.data);
//   }

//   onUnmounted(() => {
//     store.dispatch('families/clearSearch');
//   });

//   if (options.initialSearch && options.initialSearch !== '') search();

//   return {
//     families,
//     searchString,
//     includeDuplicates,
//     hasSearched,
//     searchIsLoading,
//     search,
//     selectedFamily,
//     selectFamily,
//   };
// }

// // export interface NewFamily {
// //   status: StringValue;
// //   location: LocationValue;
// //   firstName: StringValue;
// //   lastName: StringValue;
// //   emailAddress: StringValue;
// //   cellPhone: StringValue;
// //   homePhone: StringValue;
// //   marketingOptIn: BooleanValue;
// //   campaign: CampaignValue;
// //   [index: string]: StringValue | LocationValue | BooleanValue | CampaignValue;
// // }

// // function generateNewFamily(): NewFamily {
// //   return reactive<NewFamily>({
// //     status: {
// //       val: 'Lead',
// //       required: true,
// //     },
// //     location: {
// //       val: getEmptyLocation(),
// //       required: true,
// //     },
// //     firstName: {
// //       val: '',
// //       required: true,
// //     },
// //     lastName: {
// //       val: '',
// //       required: true,
// //     },
// //     emailAddress: {
// //       val: '',
// //       required: true,
// //     },
// //     cellPhone: {
// //       val: '',
// //       required: true,
// //     },
// //     homePhone: {
// //       val: '',
// //       required: false,
// //     },
// //     marketingOptIn: {
// //       val: false,
// //       required: true,
// //     },
// //     campaign: {
// //       val: createEmptyCampaign(),
// //       required: false,
// //     },
// //   });
// // }

// // export interface AddFamily {
// //   newFamily: NewFamily;
// //   resetNewFamily: () => void;
// //   newFamilyIsValid: () => boolean;
// //   checkIsDuplicateFamily: () => Promise<Family | null>;
// //   createFamily: () => Promise<Family>;
// // }

// // export function useAddFamily(): AddFamily {
// //   const newFamily: NewFamily = generateNewFamily();
// //   function resetNewFamily(): void {
// //     newFamily.status.val = 'Lead';
// //     newFamily.location.val = getEmptyLocation();
// //     newFamily.firstName.val = '';
// //     newFamily.lastName.val = '';
// //     newFamily.emailAddress.val = '';
// //     newFamily.cellPhone.val = '';
// //     newFamily.homePhone.val = '';
// //     newFamily.marketingOptIn.val = false;
// //   }

// //   function newFamilyIsValid(): boolean {
// //     for (const key in newFamily) {
// //       if (newFamily[key].required) {
// //         if (key === 'location' && newFamily[key].val.id === 0) return false;

// //         if (!newFamily[key] || newFamily[key].val === '') return false;
// //       }
// //     }

// //     return true;
// //   }

// //   async function checkIsDuplicateFamily(): Promise<Family | null> {
// //     try {
// //       const response: AxiosResponse = await api.post(
// //         'v1/families/duplicates',
// //         JSON.parse(`{
// //             "status": "${newFamily.status.val}",
// //             "marketing_opt_in": ${newFamily.marketingOptIn.val},
// //             "location_id": "${newFamily.location.val.id}",
// //             "lead_source_id": 1,
// //             "first_name": "${newFamily.firstName.val}",
// //             "last_name": "${newFamily.lastName.val}",
// //             "email_address": "${newFamily.emailAddress.val}",
// //             "cell_phone": "${newFamily.cellPhone.val}"
// //           }`),
// //       );

// //       return response.data;
// //     } catch (e) {
// //       if (e.response.status === 404) return null;
// //     }

// //     return null;
// //   }

// //   async function createFamily(): Promise<Family> {
// //     let response: AxiosResponse;
// //     if (newFamily.campaign.val.id !== 0 && newFamily.status.val === 'Lead') {
// //       response = await api.post(
// //         'v1/registrations/leads',
// //         JSON.parse(`{
// //           "firstName": "${newFamily.firstName.val}",
// //           "lastName": "${newFamily.lastName.val}",
// //           "emailAddress": "${newFamily.emailAddress.val}",
// //           "cellPhone": "${newFamily.cellPhone.val}",
// //           "locationId": ${newFamily.location.val.id},
// //           "campaignId": ${newFamily.campaign.val.id},
// //           "tagId": 2
// //         }`),
// //       );
// //     } else {
// //       response = await api.post(
// //         'v1/families',
// //         JSON.parse(`{
// //               "status": "${newFamily.status.val}",
// //               "marketing_opt_in": ${newFamily.marketingOptIn.val},
// //               "location_id": "${newFamily.location.val.id}",
// //               "lead_source_id": 1,
// //               "first_name": "${newFamily.firstName.val}",
// //               "last_name": "${newFamily.lastName.val}",
// //               "email_address": "${newFamily.emailAddress.val}",
// //               "cell_phone": "${newFamily.cellPhone.val}"
// //             }`),
// //       );
// //     }

// //     return response.data;
// //   }

// //   watch(
// //     () => newFamily.status.val,
// //     () => {
// //       if (newFamily.status.val === 'Lead') {
// //         newFamily.status.required = true;
// //         newFamily.location.required = true;
// //         newFamily.firstName.required = true;
// //         newFamily.lastName.required = true;
// //         newFamily.emailAddress.required = true;
// //         newFamily.cellPhone.required = true;
// //         newFamily.homePhone.required = false;
// //         newFamily.marketingOptIn.required = true;
// //       } else {
// //         newFamily.status.required = true;
// //         newFamily.location.required = true;
// //         newFamily.firstName.required = true;
// //         newFamily.lastName.required = true;
// //         newFamily.emailAddress.required = false;
// //         newFamily.cellPhone.required = false;
// //         newFamily.homePhone.required = false;
// //         newFamily.marketingOptIn.required = true;
// //       }
// //     },
// //   );

// //   return {
// //     newFamily,
// //     resetNewFamily,
// //     newFamilyIsValid,
// //     checkIsDuplicateFamily,
// //     createFamily,
// //   };
// // }
