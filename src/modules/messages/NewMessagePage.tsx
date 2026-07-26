import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Button from "../../components/Button"
import useUser from "../../hooks/useUser"
import type { MessageForm } from "../../types/MessageType";
import InputError from "../../components/InputError";
import { useGetUsers } from "../user/api/registerUser";
import type { FormValues } from "../../types/UserType";
import { createMessage } from "./api/newMessage";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


const NewMessagePage = () => {
  const naviagte = useNavigate()
  const { isLoggedIn, userName } = useUser();

  const { register, handleSubmit, formState: { errors, } } = useForm();

  const { data } = useGetUsers()
  const handleForm: SubmitHandler<FieldValues> = async (formData) => {
    const { message } = formData;
    const userFromDb: FormValues | undefined = data?.find((user) => user.username === userName);
    const { id } = userFromDb ? userFromDb : {};
    const formattedMessage = message
      .split("\n")
      .filter((line: string) => line.trim() !== "")
      .join("");
    const messageObj: MessageForm = {
      message: formattedMessage,
      userid: id as string,
      id: ""
    }
    const response = await createMessage(messageObj)
    if (response?.ok) {
      toast.success("message created")
      setTimeout(() => {
        naviagte("/messages")
      }, 1000);
    } else {
      toast.error('something went wrong')
    }

  }
  return (

    <div className="">
      <div><ToastContainer /></div>
      {isLoggedIn ? (

        <form onSubmit={handleSubmit(handleForm)}>
          <div className="flex flex-col space-y-3">
            <p className="text-3xl">New Message</p>
            <textarea
              {...register("message", { required: "fill it with a message" })}
              id="message"
              rows={4}
              placeholder="Type your message..."
              className={`
          w-full p-3 text-sm rounded-lg border bg-transparent outline-none transition-colors duration-150 resize-none`}
            />
            <p>{isLoggedIn ? userName : "Je moet eerst inloggen"}</p>
            <Button text="Save" className="p-2 text-black bg-amber-500" />
          </div>
        </form>
      ) : <p className="text-red-500 text-xl">Je moet inloggen eerst</p>}
      {errors.message && <InputError className="text-red-500 text-xl" text={errors.message?.message as string} />}
    </div>
  )
}

export default NewMessagePage