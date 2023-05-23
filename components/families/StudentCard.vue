<script lang="ts" setup>
import { student } from '~/data/student';

const fullName = computed(() => {
  return `${student.firstName} ${student.lastName}`;
});
</script>

<template>
  <div className="card bg-white shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
