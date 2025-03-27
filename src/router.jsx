import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";

import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import SIgniIn from "./Pages/rgestration/SIgniIn";
import SigneUP from "./Pages/rgestration/SigneUP";
import WishList from "./Pages/WishList/WishList";
import Cart from "./Pages/Cart/Cart";
import ProductDeteails from "./Pages/ProductDeteails/ProductDeteails";
import NotFound from "./Pages/NotFound/NoteFound";
// import Profile from "./Pages/rgestration/Profile/Profile";
import Account from "./Pages/Profile/Account";




export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/chekOut", element: <Checkout/> },
            { path: "/contact", element: <Contact/> },
            { path: "/service", element: <Service/> },
            { path: "/sign-in", element: <SIgniIn/> },
            { path: "/sign-up", element: <SigneUP/> },
            { path: "/wish-list", element: <WishList/> },
            { path: "/cart", element: <Cart/> },
            { path: "/product/:id", element: <ProductDeteails/> },
            { path: "*", element: <NotFound/> } ,
            { path: "/profile", element: <Account/> },



            
        ]
    }
])
