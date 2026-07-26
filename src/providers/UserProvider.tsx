import { createContext, useState, type ReactNode } from "react";


interface UserContextType {
    userName: string;
    setUserName: (name: string) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (name: boolean) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userName, setUserName] = useState("Bitter");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <UserContext value={{ userName, setUserName, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext>
    );
};