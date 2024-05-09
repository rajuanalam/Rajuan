import RouteLayout from "./Router/RouteLayout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import AboutMe from "./Pages/AboutMe";


function App() {
  const router = createBrowserRouter(
       createRoutesFromElements(
          <Route>
            <Route path='/' element={<RouteLayout />}>
              <Route path='/' element={<Home />}/>
              <Route path='/resume' element={<Resume />}/>
              <Route path='/about' element={<AboutMe />}/>
            
            </Route>
         </Route>
    )
  );

return (
  <>

  <RouterProvider router={router} />
    
  </>
  )
}

export default App


