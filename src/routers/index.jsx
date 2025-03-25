import { createBrowserRouter } from "react-router-dom";
import {
  MainLayout,
  ProjectLayout,
  ExperienceLayout,
  AwardLayout,
  ContactLayout,
  GalleryLayout,
} from "../layouts";
import {
  Home,
  Project,
  Work,
  Detail,
  Information,
  Award,
  Gallery,
} from "../pages";

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
        path: "portfolios",
        element: <ProjectLayout></ProjectLayout>,
        children: [
          {
            path: "projects",
            element: <Project></Project>,
          },
          {
            path: "projects/info",
            element: <Detail></Detail>,
          },
        ],
      },
      {
        path: "experiences",
        element: <ExperienceLayout></ExperienceLayout>,
        children: [
          {
            path: "works",
            element: <Work></Work>,
          },
          {
            path: "works/info",
            element: <Information></Information>,
          },
          {
            path: "trainings",
            // element: <train/
          },
        ],
      },
      {
        path: "awards",
        element: <AwardLayout></AwardLayout>,
        children: [
          {
            path: "",
            element: <Award></Award>,
          },
        ],
      },
      {
        path: "galleries",
        element: <GalleryLayout></GalleryLayout>,
        children: [
          {
            path: "",
            element: <Gallery></Gallery>,
          },
        ],
      },
    ],
  },
]);

export default router;
