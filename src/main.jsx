import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { RootExample } from "./routes/RootExample";
import ErrorPage from "./routes/ErrorPage";
import { Calculator } from "./routes/Calculator";
import { DigitalClock } from "./routes/DigitalClock";
import { InboxMessages } from "./routes/InboxMessages";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Root from "./routes/Root";
import { StarWars } from "./routes/StarWars";
import { Flicker } from "./routes/Flicker";
import { Home } from "./routes/Home";
import { Converter } from "./routes/Converter";
import { LegacyComponent } from "./examples/classcomponents/LegacyComponent";
import store from "./redux/store";
import { Provider } from "react-redux";
import PropDrilling from "./routes/PropDrilling";
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootExample />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/page-1/:id/:username",
        element: <Calculator />,
      },
      {
        path: "/page-2",
        element: <DigitalClock />,
      },
      {
        path: "/page-3",
        element: <InboxMessages />,
      },
    ],
  },
]);
*/

const router = createBrowserRouter([
  {
    path: "/",
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
      },
      {
        path: "calculator/",
        element: <Calculator />,
      },
      {
        path: "flicker/",
        element: <Flicker />,
      },
      {
        path: "components/",
        element: <LegacyComponent />,
      },
      {
        path: "converter/",
        element: <Converter />,
      },
      {
        path: "prop-drilling/",
        element: <PropDrilling />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
