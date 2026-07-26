import type { TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}
const Textarea = ({ ...rest }: IProps) => {
    return (
        <textarea {...rest} ></textarea>
    )
}

export default Textarea