import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface IProps {
    isAllowed: boolean
    routePath: string
    children?: ReactNode
}
const ProtectedRoute = ({ isAllowed, routePath, children }: IProps) => {
    if (!isAllowed) return <Navigate to={routePath} />
    return children
}

export default ProtectedRoute