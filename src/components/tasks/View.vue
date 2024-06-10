<script setup>
import { onMounted } from "vue";
import { useRoute } from 'vue-router';
import useTask from "@/composable/taskApi.js";

const { tasks, error, getSingleTask } = useTask();
const route = useRoute();
onMounted(() => {
    getSingleTask(route.params.id)
});
</script>

<template>
    <div class=" mt-28">
        <h3 class="text-center text-2xl mb-3">Task Details</h3>
        <div v-for="task in tasks" :key="task.id"
            class=" mx-auto text-white block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div class="flex mb-1">
                <p class="w-2/5">Task Name </p>
                <p>: {{ task.name }}</p>
            </div>
            <div class="flex mb-1">
                <p class="w-2/5">Due Date </p>
                <p>: {{ task.due_date }}</p>
            </div>
            <div class="flex mb-1">
                <p class="w-2/5">Description </p>
                <p>: {{ task.description }}</p>
            </div>
        </div>
        <div class="flex justify-center mt-3">
            <RouterLink :to="{ name: 'list' }">
                <button type="button"
                    class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
            </RouterLink>
        </div>
    </div>

</template>

<style></style>