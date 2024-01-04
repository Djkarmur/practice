import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Username from './components/Username';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import Password from './components/Password';
import Pagenotfound from './components/Pagenotfound';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {

//root routes
const router = createBrowserRouter([
   {
    path:'/',
    element :<Username></Username>
   },{
    path:'/register',
    element:<Register></Register>
   },{
    path:'/reset',
    element:<Reset></Reset>
   },{
    path:'/recovery',
    element:<Recovery></Recovery>
   },{
    path:'/password',
    element:<Password></Password>
   },{
    path:'/profile',
    element:<Profile></Profile>
   }
   ,{
    path:'*',
    element:<Pagenotfound></Pagenotfound>
   }
])


  return (
    <div className="App">
      <main>
         <RouterProvider router={router}> </RouterProvider>
      </main>
    </div>
  );
}

export default App;
