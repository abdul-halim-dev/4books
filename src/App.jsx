import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Aside from "./component/aside/Aside"
import Home from "./pages/home/Home"
import Sliderpage from "./pages/sliderpage/Sliderpage"
import Pagenot from "./pages/pagenot/Pagenot"
import Updatepage from "./pages/updatepage/Updatepage"
import Appdownload from "./pages/appdownload/Appdownload"
import Middleslider from "./pages/middleslider/Middleslider"
import Faq from "./pages/faq/Faq"
import Rivew from "./pages/review/Rivew"
import Login from "./component/login/Login"

 


const route = createBrowserRouter([
  {
    path:"/",
    element:<Aside/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/sliderpage",
      element:<Sliderpage/>
    },
    {
      path:"/sliderpage",
      element:<Sliderpage/>
    },
    {
      path:"/updatepage",
      element:<Updatepage/>
    },
    {
      path:"/appdownload",
      element:<Appdownload/>
    },
  {
    path:"/middleslider",
    element:<Middleslider/>
  },
  {
    path:"/faq",
    element:<Faq/>
  },
  {
    path:"/rivew",
    element:<Rivew/>
  },
  {
    path:"/login",
    element:<Login/>
  },

  {
      path:"*",
      element:<Pagenot/>
    }

    ]
  }
])



 
 const App = () => {
   return (
   <RouterProvider router={route}/>
   )
 }
 
 export default App