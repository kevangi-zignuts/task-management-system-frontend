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
            console.log(e.response);
        }
    }


    return { tasks, error, status, getAllTasks, createTask }
}