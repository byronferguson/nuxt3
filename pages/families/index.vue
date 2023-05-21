<script setup lang="ts">
type ResultState = 'no-search' | 'pending' | 'no-results' | 'results';

definePageMeta({
  meta: {
    abilities: [['view', 'families']],
  },
});

const pages = [{ name: 'Families', href: '#', current: true }];

// const lengthSchema = z.string().min(2, { message: 'Too short' }).max(50, { message: 'Too long' });
const term = ref('');
const debouncedTerm = useDebounce(term, 500);
const includeDuplicates = ref(true);

const { data: families, pending } = useLazyFetch(`/api/families/search`, {
  query: {
    term: debouncedTerm,
    includeDuplicates,
  },
});

const familyCount = computed(() => families.value?.length ?? 0);

const resultState = computed<ResultState>(() => {
  if (!debouncedTerm.value) return 'no-search';
  if (pending.value) return 'pending';
  if (!familyCount.value) return 'no-results';
  return 'results';
});
</script>

<template>
  <PageContent>
    <template #breadcrumbs>
      <Breadcrumbs v-once :pages="pages" />
    </template>
    <template #header>
      <PageHeading v-once title="Families" icon="users">
        <Button color="success">
          <fa :icon="['fas', 'plus']" />
          Add New Family
        </Button>
      </PageHeading>
    </template>

    <main>
      <TextInput v-model="term" name="term" placeholder="Name, Phone Number, or Email" />

      <Loader v-if="resultState === 'pending'" class="my-12" />

      <section
        v-else-if="resultState === 'no-results'"
        class="flex flex-col items-center justify-center my-12"
      >
        <fa :icon="['fas', 'swimmer']" class="text-6xl text-medium-primary" />
        <p class="text-3xl text-center text-gray-400">
          Couldn't find any families matching your search.
        </p>
      </section>

      <section v-else-if="resultState === 'results'">
        <!-- Results Header -->
        <div class="w-full pr-2 mb-4 text-right text-gray-500">{{ familyCount }} results</div>
        <header class="results">
          <div class="font-semibold text-gray-500">ID</div>
          <div class="font-semibold text-gray-700">Name</div>
          <div class="font-semibold text-gray-700">Students</div>
          <div class="font-semibold text-gray-700">Location</div>
          <div class="font-semibold text-gray-700">Cell Phone</div>
          <div class="font-semibold text-gray-700 truncate">Email Address</div>
        </header>
        <!-- Result Data -->
        <NuxtLink
          v-for="family in families"
          :key="family.id"
          class="relative z-0 py-6 rounded-lg hover:bg-blue-100 results"
          :to="`/families/${family.id}`"
        >
          <div class="px-2 text-gray-500">
            {{ family.id }}
          </div>
          <div class="flex flex-col gap-y-2">
            <span>{{ family.lastName }}, {{ family.firstName }}</span>
            <NuxtLink
              v-if="family.duplicateOfId"
              class="font-medium tracking-wider text-center text-gray-600 uppercase bg-sunglow"
              :to="`/families/${family.id}`"
            >
              Duplicate
            </NuxtLink>
          </div>
          <div class="flex flex-row flex-wrap items-start gap-2">
            <template v-if="family?.students?.length">
              <span
                v-for="student in family.students"
                :key="student.id"
                class="inline-block px-2 mr-2 text-gray-600 bg-gray-100 rounded-lg"
              >
                {{ student.firstName }} {{ student.lastName }}
              </span>
            </template>
          </div>
          <div v-if="family.location" class="">
            {{ family.location.name }}
          </div>
          <div v-else class="font-semibold text-red-500">Not Set</div>
          <div class="px-2">{{ family.cellPhone }}</div>
          <div class="px-2 truncate">
            {{ family.emailAddress }}
          </div>
        </NuxtLink>
      </section>
    </main>
  </PageContent>
</template>

<style lang="postcss" scoped>
.results {
  display: grid;
  grid-template-columns: 5rem 1fr 2fr 1fr 8rem 1fr;
}
</style>
