// import type { Ref, SetupContext } from '@vue/composition-api';
// import { useFamilySearch } from '~/composables/use-families';
// import useRouter from '~/composables/use-router';
// import { useStore } from '~/composables/use-store';
// import { useAppUrls } from '~/lib/config';
// import { Family } from '~/models';

// export interface PageController {
//   legacyUrl: Ref<string>;
//   families: Readonly<Ref<readonly Family[]>>;
//   searchString: Ref<string>;
//   includeDuplicates: Ref<boolean>;
//   searchIsLoading: Ref<boolean>;
//   hasSearched: Ref<boolean>;
//   search(): Promise<void>;
// }

// export function usePageController(_props: unknown, ctx: SetupContext): PageController {
//   const store = useStore(ctx);
//   const router = useRouter(ctx);
//   const { legacyUrl } = useAppUrls(store);

//   const { families, searchString, includeDuplicates, searchIsLoading, hasSearched, search } =
//     useFamilySearch(store, {
//       ...(router.currentRoute.query.search && {
//         initialSearch: router.currentRoute.query.search as string,
//       }),
//       beforeSearchCallback() {
//         console.log('in before search');
//         router.push({
//           query: {
//             ...(searchString.value && { search: searchString.value }),
//           },
//         });
//       },
//     });

//   return {
//     legacyUrl,
//     families,
//     searchString,
//     includeDuplicates,
//     searchIsLoading,
//     hasSearched,
//     search,
//   };
// }
