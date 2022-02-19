import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import LoaderMain from "../LoaderMain/LoaderMain";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<LoaderMain />}>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
