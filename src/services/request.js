import api from './api'

const request = async (url, method, params) => {
    try {
        const { data = null, error } = await api[method](url, params);
        // console.log("requestjs data", data)
        if (!data) {
            if (error.type === '403') {
                // open popup
            }
            throw new Error('Error Message')
        }
        return { data, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export default request