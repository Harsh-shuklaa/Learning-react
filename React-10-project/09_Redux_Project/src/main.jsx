import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import SearchBar from './components/SearchBar.jsx'

const router = createBrowserRouter([
   {
     path:'/' ,
     element:<App/>,
     children:[
      {
         path:'/search',
         element:<SearchBar/>
      },
      // {
      //    path:'/home',
      //    element:<HomePage/>
      // },
      {
       path:"/collectiion",
       element:<CollectionPage/>
      }
     ]
    
   }
])

createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <RouterProvider router={router}  />
</Provider>
)
