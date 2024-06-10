<script setup>
import { RouterLink } from "vue-router";
import useTask from "@/composable/taskApi.js"
import { onMounted } from "vue";

const { tasks, error, getAllTasks } = useTask();

onMounted(() => {
    getAllTasks();
});


</script>

<template>
    <div class=" m-32 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex m-5 mb-0 justify-between">
            <h3 class="text-left text-2xl">Tasks</h3>
            <RouterLink :to="{ name: 'create' }">
                <button
                    class="text-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add
                    Task</button>
            </RouterLink>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Task name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Due Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">{{ task.name }}</td>
                    <td class="px-6 py-4">{{ task.due_date }}</td>
                    <td class="px-6 py-4">{{ task.description }}</td>
                    <td class="px-6 py-4">
                        <font-awesome-icon class="text-blue-500 h-5 w-5" :icon="['fas', 'eye']" />
                        <font-awesome-icon class="text-emerald-500 h-5 w-5 mx-5" :icon="['fas', 'pen-to-square']" />
                        <font-awesome-icon class="text-red-500 h-5 w-5 cursor-pointer" :icon="['fas', 'trash']" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style></style>
