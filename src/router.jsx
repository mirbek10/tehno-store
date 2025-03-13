import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import SIgniIn from "./Pages/rgestration/SIgniIn";
import SigneUP from "./Pages/rgestration/SigneUP";



export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/about", element: <About/> },
            { path: "/contact", element: <Contact/> },
            { path: "/service", element: <Service/> },
            { path: "/sign-in", element: <SIgniIn/> },
            { path: "/sign-up", element: <SigneUP/> },
            
        ]
    }
])
