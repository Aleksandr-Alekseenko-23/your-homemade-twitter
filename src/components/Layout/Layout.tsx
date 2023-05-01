import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import { Main } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main location={location}>
          <Outlet />
        </Main>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
