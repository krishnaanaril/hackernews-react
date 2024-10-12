import './App.css'
import Layout from './app/Layout'
import { ThemeProvider } from './app/ThemeProvider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
      <Layout/>
    </ThemeProvider>
  )
}

export default App
