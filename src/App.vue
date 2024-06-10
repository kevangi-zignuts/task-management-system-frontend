<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';
import { onMounted, ref, watch } from "vue";
import Navbar from '@/components/Navbar.vue';

const route = useRoute();
const router = useRouter();

let showNavbar = ref(true);

// Function to update showNavbar based on route meta field
const updateShowNavbar = (route) => {
  if (route.meta && route.meta.showNavbar !== undefined) {
    showNavbar.value = route.meta.showNavbar;
  } else {
    showNavbar.value = true; // Default to true if no meta field is set
  }
};

// Check initial route
onMounted(() => {
  updateShowNavbar(route);
});

// Watch for route changes
watch(route, (newRoute) => {
  updateShowNavbar(newRoute);
});
</script>

<template>
  <div v-if="showNavbar">
    <Navbar />
  </div>
  <RouterView />
</template>

<style scoped></style>
