import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about-us", Component: About },
      { path: "our-services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
    ],
  },
]);
