import { createBrowserRouter } from "react-router-dom";
import Page from "./Page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Page />
    },
])