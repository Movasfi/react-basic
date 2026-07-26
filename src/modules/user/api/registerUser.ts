import axios from "axios";
import type { FormValues } from "../../../types/UserType";
import { useQuery } from "@tanstack/react-query";

export const createUser = async (data: FormValues) => {
    try {
        await axios.post<FormValues>(
            "http://localhost:3000/users",
            data
        );
    } catch (error) {
        console.log(error);

    }
};
const getUsers = async (): Promise<FormValues[]> => {
    try {
        const response = await axios.get<FormValues[]>(
            "http://localhost:3000/users"
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const useGetUsers = () => {
    const query = useQuery({ queryKey: ["users"], queryFn: getUsers })
    return query;
}
