import { useForm } from "react-hook-form"
import Button from "../components/Button"
import Input from "../components/Input"
import InputError from "../components/InputError";
import type { FormValues } from "../types/UserType";
import { createUser, useGetUsers } from "../modules/user/api/registerUser";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const User = () => {
    const { setUserName, setIsLoggedIn } = useUser();
    const navigate = useNavigate()
    const { reset, handleSubmit, register, formState: { errors } } = useForm<FormValues>();
    const { data } = useGetUsers()

    const submitForm = async (user: FormValues) => {
        const { username } = user;

        console.log(data);

        const usersList = data;
        const existedUser = usersList?.find((userData: FormValues) => userData.username === username)

        if (!existedUser) {
            await createUser({ username: username })
            setUserName(username);
            setIsLoggedIn(true)
            reset()
            navigate("/");
        } else {
            console.log("user exsited");
        }

    };

    return (
        <div className="flex flex-col gap-4">
            <p>Please Fill in a username</p>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="flex flex-col gap-4 justify-center items-center ">
                    {errors.username && <InputError className=" text-red-500 p-3 rounded-md" text={errors.username.message} />}
                    <div>
                        <Input className="outline-0 p-2 border  rounded-md" {...register("username", { required: "Username is required" })} type="text" id="username" />
                    </div>
                    <div>
                        <Button className="bg-amber-600 p-2 w-60 cursor-pointer hover:bg-black hover:text-yellow-600 transition-transform  active:scale-80 rounded-md text-black" text="Register" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default User