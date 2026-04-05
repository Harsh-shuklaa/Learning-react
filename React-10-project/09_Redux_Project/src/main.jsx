import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CollectionPage from './pages/CollectionPage.jsx'


// const router = createBrowserRouter([
//    {
//      path:'/' ,
//      element:<App/>,
//      children:[
//       {
//          path:'/home',
//          element:<HomePage/>
//       },
//       // {
//       //    path:'/home',
//       //    element:<HomePage/>
//       // },
//       {
//        path:"/collectiion",
//        element:<CollectionPage/>
//       }
//      ]
    
//    }
// ])

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<App/>}>
         <Route path='home' element ={<HomePage/>}/>
         <Route path='collectiion' element={<CollectionPage/>}/>
      </Route>
   
))

createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <RouterProvider router={router}  />
</Provider>
)
