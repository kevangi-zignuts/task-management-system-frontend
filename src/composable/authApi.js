import { ref } from 'vue'
import axios from 'axios'

export default function useAuthentication() {
    const baseUrl = "/api/"
    const res = ref([])
    const error = ref()
    const status = ref(null)

    // Registration
    const register = async (formData) => {
        res.value = []
        error.value = null

        try {
            const config = {
                method: 'POST',
                url: baseUrl + 'register',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(formData),
            }
            const response = await axios(config)
            localStorage.setItem('token', response.data.token);
            res.value = response.data
            status.value = response.status
        } catch (e) {
            error.value = e
        }
    }

    // Login
    const login = async (formData) => {
        res.value = []
        error.value = null
        status.value = null

        try {
            const config = {
                method: 'POST',
                url: baseUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const response = await axios(config)
            localStorage.setItem('token', response.data.token);
            res.value = response.data
            status.value = response.status
        } catch (e) {
            error.value = e
        }
    }

    // Forgot Password
    const forgotPassword = async (formData) => {
        res.value = []
        error.value = null
        status.value = null

        try {
            const config = {
                method: 'POST',
                url: baseUrl.concat('forgot-password'),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const response = await axios(config)
            res.value = response.data
            status.value = response.status
        } catch (e) {
            error.value = e
        }
    }


    // logout
    const logout = async () => {
        res.value = []
        error.value = null
        status.value = null

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios(baseUrl + 'logout', config)
            res.value = response.data
            status.value = response.status
            localStorage.removeItem('token');
        } catch (e) {
            error.value = e
        }
    }

    return { res, error, status, login, logout, register, forgotPassword }
}