import { useContext } from "react"
import { ColorContext } from "../providers/colorProvider"

const useColor = () => {

    const color = useContext(ColorContext)
    if (!color) {
        throw new Error("error with color");

    }
    return color
}

export default useColor