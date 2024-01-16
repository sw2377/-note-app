import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import RootLayout from "./layout/Root";
import ErrorPage from "./layout/ErrorPage";
import NoteContainer from "./layout/NoteContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <NoteContainer /> },
      { path: ":notebook", element: <NoteContainer /> },
      { path: ":notebook/:id", element: <NoteContainer /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
