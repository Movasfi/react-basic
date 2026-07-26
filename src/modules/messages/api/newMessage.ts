import axios from "axios";
import type { MessageForm } from "../../../types/MessageType";

export const createMessage = async (data: MessageForm) => {
    try {
        await axios.post<MessageForm>(
            "http://localhost:3000/messages",
            data
        );
        return { status: 201, ok: true }
    } catch (error) {
        console.log(error);
        return { ok: false, error };
    }
};