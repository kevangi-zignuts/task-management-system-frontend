import { ref } from 'vue'
import axios from 'axios'

export default function useTask() {
    const baseUrl = "/api/tasks/"
    const tasks = ref([])
    const error = ref(null)
    const status = ref(null)

    // Get All Task Data
    const getAllTasks = async () => {
        tasks.value = []
        error.value = null
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.get(baseUrl, config)
            tasks.value = response.data
        } catch (e) {
            error.value = e
        }
    }

    // Get Single Task Data
    const getSingleTask = async (id) => {
        tasks.value = []
        error.value = null

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios(baseUrl + 'view/' + id, config)
            tasks.value = response.data
        } catch (e) {
            error.value = e.response.data
        }
    }

    // Add Task Data
    const createTask = async (formData) => {
        tasks.value = []
        error.value = null

        try {
            const token = localStorage.getItem('token');
            const config = {
                method: 'POST',
                url: baseUrl + 'store',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const response = await axios(config)
            tasks.value = response.data
            status.value = response.status
        } catch (e) {
            error.value = e.response.data.errors
        }
    }

    // update Task Data
    const updateTask = async (id, data) => {
        tasks.value = []
        error.value = null

        try {
            const token = localStorage.getItem('token');
            const config = {
                method: 'POST',
                url: baseUrl + 'update/' + id,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            }
            const response = await axios(config)
            status.value = response.status
        } catch (e) {
            error.value = e.response.data.errors
        }
    }

    // Delete Task Data
    const dalateTask = async (id) => {
        tasks.value = []
        error.value = null

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios(baseUrl + 'delete/' + id, config)
        } catch (e) {
            error.value = e
        }
    }

    return { tasks, error, status, getAllTasks, createTask, getSingleTask, updateTask, dalateTask }
}