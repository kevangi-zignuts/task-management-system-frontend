<script setup>
import { reactive, ref, watch } from 'vue';
import router from '@/router';
import useAuthentication from "@/composable/authApi";

const { res, error, status, resetPassword } = useAuthentication();

const url = new URL(document.URL);
const token = url.pathname.split('/')[2];

const formData = reactive({
    password: "",
    password_confirmation: "",
});

const errors = ref({});

watch(error, (newError) => {
    if (newError) {
        errors.value = newError;
    } else {
        errors.value = {};
    }
});

const handleResetPasswordForm = async () => {
    await resetPassword(formData, token);
    if (status.value === 201) {
        router.push({ name: 'list' })
    }
}

</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Your Password
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="handleResetPasswordForm" class="space-y-6">
                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                        <input v-model="formData.password" id="password" name="password" type="password"
                            autocomplete="password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                    <p v-for="(error, index) in errors.password" :key="index" class=" text-red-600 mt-2">{{ error }}</p>
                </div>
                <div>
                    <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                        Password</label>
                    <div class="mt-2">
                        <input v-model="formData.password_confirmation" id="password_confirmation"
                            name="password_confirmation" type="password" autocomplete="password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset
                        Password</button>
                </div>
            </form>

        </div>
    </div>
</template>