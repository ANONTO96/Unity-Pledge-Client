import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllCampaign from './pages/AllCampaign.jsx';
import AddNewCampaign from './pages/AddNewCampaign.jsx';
import MyCampaign from './pages/MyCampaign.jsx';
import MyDonations from './pages/MyDonations.jsx';
import Home from './components/Home.jsx';
import Login from './pages/Login.jsx';
import Registration from './pages/Registration.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/Error.jsx';
import CardDetails from './components/CardDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://unity-pledge-server.vercel.app/addCampaign')
      },
      {
        path: "allCampaigns",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('https://unity-pledge-server.vercel.app/addCampaign')
      },
      {
        path: "addNewCampaign",
        element:<PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
      },
      {
        path: "myCampaigns",
        element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>
      },
      {
        path: "myDonations",
        element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
        loader:()=>fetch('https://unity-pledge-server.vercel.app/addCampaign'),
      },
      {
        path: "cardDetails/:id",
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://unity-pledge-server.vercel.app/addCampaign/${params.id}`)
      }
    ]
  },
  {
    path:"login",
    element: <Login></Login>
  },
  {
    path:"register",
    element: <Registration></Registration>
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
