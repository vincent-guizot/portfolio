import { createBrowserRouter } from "react-router-dom";
import { MainLayout, ProjectLayout } from "../layouts";
import { Home, ProjectLayout } from "../pages";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/portfolios",
                element: <ProjectLayout></ProjectLayout>,
                children: [
                    {
                        path: "/projects",
                        element: <Project></Project>
                    },
                    {
                        path: "/projects/info",
                        element: <ProjectInformation></ProjectInformation>
                    }

                ]
            },
            {
                path: "/experiences",
                element: <ExperienceLayout></ExperienceLayout>,
                children: [
                    {
                        path: "/works",
                        element: <Work></Work>
                    },
                    {
                        path: "/works/info",
                        element
                    }
                ]
            }
        ],
    },
]);

export default router;
