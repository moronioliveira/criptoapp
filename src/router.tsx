import { createBrowserRouter } from "react-router";

import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { NotFound } from "./pages/notFound";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/detail/:cripto",
                element: <Detail/>
            },
            {
                path: "/notFound",
                element: <NotFound/>
            }
        ]
    }
],{
    basename: "/criptoapp"
})

export { router}