import './App.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import useGlobalStyles from './assets/styles/style';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import LoaderComponent from './core/shared/loading/loading.component';
import { useStore } from './store/store.config';
function App() {
  useGlobalStyles()
  const queryClient = new QueryClient();
  const loader = useStore('loader');
  return (
    <>
    <QueryClientProvider client={queryClient}>
    {loader ? <LoaderComponent/> : null}
    {/* <LoaderComponent/> */}
      <RouterProvider  router={router}/>
    </QueryClientProvider>
     
    </>
  )
}

export default App
