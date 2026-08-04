import PageHead from "@/compnents/commons/PageHead";
import Link from "next/link";
import listsidebar from "./SidebarLayout/listSidebar";
import { useState } from "react";
import cn from "@/utils/cn";
import SidebarLayout from "./SidebarLayout";
import HeaderLayout from "./HeaderLayout";
import useDashboardLayout from "./useDashboardLayout";
import FooterLayout from "./FooterLayout";


interface TypeProps {
  title: string;
  children: React.ReactNode;
  type: "admin" | "petugas";
  headerTitle: string;
  headerSubtitle: string;
}

const DashboardLayout = (props: TypeProps) => {
    const {
      title,
      children,
      type,
      headerTitle,
      headerSubtitle
    } = props;

    const {
        dataMe,
    } = useDashboardLayout();


    const [sidebarAktif, setSidebarAktif] = useState(true);




    return (
        <>
          <PageHead title={title} />

          <div className="min-h-screen flex">
  
            <SidebarLayout 
              type={type} 
              sidebarAktif={sidebarAktif} 
              setSidebarAktif={setSidebarAktif}
              logo={dataMe?.data?.election?.logo !== null ? dataMe?.data?.election?.logo : ""}
            />


            <div className="bg-gray-200 flex-1 h-screen overflow-hidden flex flex-col">
              <HeaderLayout 
                sidebarAktif={sidebarAktif} 
                setSidebarAktif={setSidebarAktif} 
                headerTitle={headerTitle} 
                headerSubtitle={headerSubtitle}
                me={dataMe?.data} 
              />

              <div className="flex-1 overflow-auto">
                <main className="p-4 lg:p-8 min-h-screen">
                  {children}
                </main>

                <FooterLayout />
              </div>
            </div>
          </div>
        </>
    ) 

}

export default DashboardLayout;