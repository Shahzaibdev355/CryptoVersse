import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const Home = lazy(() => import("../pages/Home"))
const AfterGenerateImage = lazy(() => import("../pages/after-generate-image"))
const Profile = lazy(() => import("../pages/profile"))




const BuySellNft = lazy(()=> import("../pages/buy-sell-nft"))
const MyNft = lazy(()=> import("../pages/myNft"))
const Whitepaper = lazy(()=> import("../pages/whitepaper"))
const Roadmap = lazy(()=> import("../pages/roadmap"))



export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/after-generate-image",
        element: <AfterGenerateImage />
      },
      {
        path: "/profile",
        element: <Profile />
      },


      // New routes added after design update
      {
        path: "/myNft",
        element: <MyNft/>
      },
      {
        path: "/mintNft",
        element: <BuySellNft/>
      },
      {
        path: "/whitepaper",
        element: <Whitepaper/>
      },
      {
        path: "/roadmap",
        element: <Roadmap/>
      },
    ]
  }

])











