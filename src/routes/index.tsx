import { ComponentType, lazy, ReactNode, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import PublicRoute from "./public-route";
import Loader from "@/components/common/loader";
import PageTitle from "@/components/common/page-title";

const Loadable = <P extends object>(
  Component: ComponentType<P>
): React.FC<P> => {
  return (props: P): ReactNode => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
const WelcomePage = Loadable(
  lazy(() => import("@/pages/welcome"))
);

function AppRouter() {
  // const authMethod = useAuthContext();
  const routes = [
    // {
    //   path: "/",
    //   element: (
    //     <PrivateRoute>
    //         <DefaultLayout />
    //     </PrivateRoute>
    //   ),
    //   children: [
    //     {
    //       path: "/",
    //       index: true,
    //       element: (
    //         <>
    //           <PageTitle title="Home" />
    //           <MainContent title="trang chủ">
    //             <Home />
    //           </MainContent>
    //         </>
    //       ),
    //     },
    //   ]
    // },
    {
      path: "/welcome",
      element: (
        <>
          <PageTitle title="SuperShip" />
          <PublicRoute>
            <WelcomePage />
          </PublicRoute>
        </>
      ),
    },
    // {
    //   path: "/403",
    //   element: (
    //     <>
    //       <PageTitle title="Không thể truy cập" />
    //       <PublicRoute>
    //         <Page403 />
    //       </PublicRoute>
    //     </>
    //   ),
    // },
  ];

  return useRoutes(routes);
}

export default AppRouter;