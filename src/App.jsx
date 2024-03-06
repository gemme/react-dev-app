import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Root from './routes/Root';
import {StarWars} from './routes/StarWars';
import { InboxMessages } from './routes/InboxMessages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import { DigitalClock } from './routes/DigitalClock';
import { Calculator } from './routes/Calculator';
import { Flicker } from './routes/Flicker';
import { Home } from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "star-wars/",
        element: <StarWars />,
      }, 
      {
        path: "inbox/",
        element: <InboxMessages />,
      },
      {
        path: "digital-clock/",
        element: <DigitalClock />,
      },{
        path: "calculator/",
        element: <Calculator />,
      },
      {
        path: "flicker/",
        element: <Flicker />,
      }
    ],
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />   
    </>
  )
}

export default App
