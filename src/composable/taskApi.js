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
            const response = await axios.get(baseUrl)
            tasks.value = response.data
        } catch (e) {
            error.value = e
        }
    }


    return { tasks, error, status, getAllTasks }
}