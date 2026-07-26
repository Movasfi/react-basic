import axios from "axios"
import type { MessageForm } from "../../../types/MessageType";

export const getAllMessages = async (): Promise<MessageForm[]> => {
    try {
        const response = await axios.get<MessageForm[]>('http://localhost:3000/messages');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

