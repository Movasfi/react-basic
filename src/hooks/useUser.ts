import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("error with UserContext");
    }

    return context;
};

export default useUser;