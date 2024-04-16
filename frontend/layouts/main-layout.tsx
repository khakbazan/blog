import { Header } from "@/components/header";
import { Fragment, PropsWithChildren } from "react";

type MainLayoutProps = PropsWithChildren<unknown>;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <main className="max-w-5xl mx-auto px-4 lg:px-2.5 py-5">{children}</main>
    </Fragment>
  );
};

export default MainLayout;
