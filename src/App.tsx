import { AppRouter } from "./routers/AppRouter"
import AppProvider from "./providers/AppProvider"
import { ColorProvider } from "./providers/colorProvider"


function App() {
  return (
    <>
      <ColorProvider>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </ColorProvider>
    </>
  )
}

export default App
