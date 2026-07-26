interface IProps {
    text?: string;
    className: string;
}
const InputError = ({ className, text }: IProps) => {
    return (
        <p className={className}>{text}</p>
    )
}

export default InputError