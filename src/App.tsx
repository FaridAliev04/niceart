import './App.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import useGlobalStyles from './assets/styles/style';


function App() {
  useGlobalStyles()
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
