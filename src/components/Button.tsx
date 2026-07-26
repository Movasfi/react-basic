import type { ButtonHTMLAttributes } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string
}
const Button = ({ className, text, ...rest }: IProps) => {
    return (
        <button className={className} {...rest}>{text}</button>
    )
}

export default Button