import axios from "axios"



export const deletMessage = async (id: string) => {
    const response = await axios.delete(`http://localhost:3000/messages/${id}`)
    return response.data
}