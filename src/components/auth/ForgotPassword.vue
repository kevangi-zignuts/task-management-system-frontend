<script setup>
import { RouterLink } from 'vue-router';
import { reactive, ref, watch } from 'vue';
import router from '@/router';
import useAuthentication from "@/composable/authApi";

const { res, error, status, forgotPassword } = useAuthentication();

let sentLink = ref(false)

const formData = reactive({
    email: "",
});

watch(status, (newStatus) => {
    if (newStatus === 200) {
        sentLink.value = true;
    } else {
        sentLink.value = false;
    }
});

const errors = ref({});

watch(error, (newError) => {
    if (newError) {
        errors.value = newError;
    } else {
        errors.value = {};
    }
});

const handleForgotPasswordForm = async () => {
    await forgotPassword(formData);
}
</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div v-if="sentLink">
            <p class=" text-green-700 text-center text-lg">A password reset link has been sent to your email address.
            </p>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="handleForgotPasswordForm" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input v-model="formData.email" id="email" name="email" type="email" autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                    <p v-for="(error, index) in errors.email" :key="index" class=" text-red-600 mt-2">{{ error }}</p>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Back to login?
                <RouterLink :to="{ name: 'login' }">
                    <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
                </RouterLink>
            </p>
        </div>
    </div>
</template>