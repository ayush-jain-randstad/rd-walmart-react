import axios from "axios"
import config from "../config/config"
const authService = {
    login: async (data) => {
        const response = await axios.post(`${config.apiBaseUrl}/api/auth/login`, 
            data,
            {
                headers: {
                        'Content-Type': 'application/json'
                    }
            }    
        )
        return response.data

    }
}

export default authService