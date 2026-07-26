import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletMessage } from "../services/deleteMessage"
import { toast, Bounce } from "react-toastify";
export const useDeleteMessage = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deletMessage,
        mutationKey: ['deleteMessage']
        , onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['message'] })
            toast.success('Message is deleted', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                delay: 300,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },
    },)
}

export default useDeleteMessage