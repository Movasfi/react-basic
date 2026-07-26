import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "../api/getAllMessages";

export const useGetMessages = () => {
    const query = useQuery({ queryKey: ["message"], queryFn: getAllMessages });
    return query;
}