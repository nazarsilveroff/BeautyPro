import { lazy } from "react";

const mainRoutes = [
  {
    name: "",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/homePage/HomePage" /*webpackChunkName:'HomePages'*/)
    ),
  },
  {
    name: "Портфолио",
    path: "/portfolio",
    exact: true,
    component: lazy(() =>
      import(
        "../pages/portfolioPage/PortfolioPage" /*webpackChunkName:'ShoolPage'*/
      )
    ),
  },
  {
    name: "Магазин",
    path: "https://nuskin.sale/",
    isExternal: true,
  },
  {
    name: "",
    path: "/salon/:itemId",
    exact: false,
    component: lazy(() =>
      import("../pages/salonPage/SalonPage" /*webpackChunkName:'SalonPage'*/)
    ),
  },
];
export default mainRoutes;
