import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  // if you have access of methods inside the props of contextProvider then you can create functions with same name and get access of the functionality of those methods
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  // actual change in theme 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <h1 className='bg-purple-600 text-3xl p-2 text-white' style={{marginTop:'-20.75px'}}>Theme Switch</h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-1" style={{marginTop:'-5rem'}}>
                <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
