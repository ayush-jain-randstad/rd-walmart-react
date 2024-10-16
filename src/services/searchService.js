import axios from "axios";

const searchService = {
    search: async (data) => {
        return await axios.get("https://dummyjson.com/products/search", {
            params: {
                q: data
            }
        })
    }
}
export default searchService;