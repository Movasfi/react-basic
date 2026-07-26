import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface IColorContext {
    setColor: Dispatch<SetStateAction<string>>
    color: string
}


export const ColorContext = createContext<IColorContext>(
    {
        color: '',
        setColor: () => { }
    }
)

export const ColorProvider = ({ children }: { children: ReactNode }) => {

    const [color, setColor] = useState<string>('')
    const value = {
        setColor,
        color
    }
    return (
        <ColorContext value={value}>
            {children}
        </ColorContext>
    )
}