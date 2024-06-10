<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from "vue";
import useTask from "@/composable/taskApi.js";
import { useRoute } from 'vue-router';
import router from '@/router';

const { tasks, error, status, getSingleTask, updateTask } = useTask();
const { params } = useRoute();

onMounted(() => {
    getSingleTask(params.id);
});




const handleUpdateTaskForm = async () => {
    await updateTask(params.id, tasks.value.task);
    if (status.value === 200) {
        router.push({ name: 'list' });
    }
}
</script>

<template>
    <div class=" mt-36 text-black">
        <h3 class="text-center text-2xl mb-7">Edit Task</h3>
        <div v-for="task in tasks" :key="task.id">
            <form @submit.prevent="handleUpdateTaskForm" class="max-w-md mx-auto">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" v-model="task.name" name="task_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="task_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task
                        Name</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="date" v-model="task.due_date" name="due_date"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="due_date"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Due
                        Date</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <textarea v-model="task.description" name="description"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
                    <label for="description"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <button type="submit"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                <RouterLink :to="{ name: 'list' }">
                    <button
                        class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
                </RouterLink>
            </form>
        </div>
    </div>
</template>

<style scoped></style>