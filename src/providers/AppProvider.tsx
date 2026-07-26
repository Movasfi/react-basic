import { StrictMode, type ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
  children: ReactNode;
}
const AppProvider = ({ children }: IProps) => {
  const queryClient = new QueryClient()

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </UserProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default AppProvider