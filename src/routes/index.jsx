
import Home from "../pages/Client/Home/Home";
import ClientRoot from "../pages/Client/ClientRoot"
import Sliders from "../pages/Client/Sliders/Sliders";
import Addpage from "../pages/Client/AddPage/Addpage";
import DetailPage from "../pages/Client/DetailPage/DetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
export const ROUTES = [

  //client root
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sliders",
        element: <Sliders />,
      },
      {
        path: "add-page",
        element: <Addpage />,
      },
      {
        path: "sliders/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
];
