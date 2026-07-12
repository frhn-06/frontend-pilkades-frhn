import cn from "@/utils/cn";
import listsidebar from "./listSidebar"
import { SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";


interface TypeProps {
  type: "admin" | "petugas";
  sidebarAktif: boolean;
  setSidebarAktif: React.Dispatch<SetStateAction<boolean>>
}



const SidebarLayout = (props: TypeProps) => {
    const {
      type,
      sidebarAktif,
      setSidebarAktif
    } = props;

    const router = useRouter();

    return (
        <div className="relative">
          <div className={cn("bg-red-800 h-full overflow-hidden transition-[width] duration-300 hidden lg:block", sidebarAktif ? "w-64" : "w-14")}>

            <div className="h-20 p-1">
              <div className="w-full h-full">

              </div>
            </div>
      
            <div className="flex flex-col">
              {type === "admin" ? 
                listsidebar.admin.map((sidbar) => (
                <Link key={sidbar.id} href={sidbar.href} className="relative p-2 flex items-center hover:bg-red-500 active:bg-red-400 transition">
                  <div className={cn("w-1 bg-white h-full absolute left-0 rounded-r-xl", router.pathname === sidbar.href ? "block" : "hidden")} />

                  <div className="w-8 h-8 text-white">
                    {sidbar.icon}
                  </div>
            
                  <span className={cn("text-white ml-2 whitespace-nowrap transition-all duration-300", sidebarAktif? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                    {sidbar.label}
                  </span>
                </Link>
                )) : 
                listsidebar.petugas.map((sidbar) => (
                <Link key={sidbar.id} href={sidbar.href} className="relative p-2 flex items-center hover:bg-red-500 active:bg-red-400 transition">
                  <div className={cn("w-1 bg-white h-full absolute left-0 rounded-r-xl", router.pathname === sidbar.href ? "block" : "hidden")} />

                  <div className="w-8 h-8 text-white">
                    {sidbar.icon}
                  </div>
            
                  <span className={cn("text-white ml-2 whitespace-nowrap transition-all duration-300", sidebarAktif? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                    {sidbar.label}
                  </span>
                </Link>
                ))
              } 
              <Link href="/logout" onClick={(e) => {
                e.preventDefault();
                signOut();
              }} className="relative p-2 flex items-center hover:bg-red-500 active:bg-red-400 transition">
                <div className="w-8 h-8 text-white">
                  <MdLogout  className="w-8 h-8" />
                </div>
            
                <span className={cn("text-white ml-2 whitespace-nowrap transition-all duration-300", sidebarAktif? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                  Logout
                </span>
              </Link>
            </div>
          </div>
            


      
          <div className={cn("z-10 fixed top-0 bottom-0 left-0 w-64 bg-red-800 transition-transform duration-300 lg:hidden", sidebarAktif ? "-translate-x-full" : "-translate-x-0")}>
            <div className="h-24 flex items-center px-4">
              <div className="flex-1">
      
              </div>
              <div className="h-9 w-10 flex flex-col justify-between active:bg-red-400 p-1" onClick={() => setSidebarAktif(!sidebarAktif)}>
                <span className="h-[4px] bg-white rotate-45 translate-y-3"></span>
                <span className="h-[4px] bg-white opacity-0"></span>
                <span className="h-[4px] bg-white -rotate-45 -translate-y-3"></span>
              </div>
            </div>
            
            <div className="flex flex-col">
              {type === "admin" ? 
                listsidebar.admin.map((sidbar) => (
                  <Link key={sidbar.id} href={sidbar.href} className="relative p-2 flex items-center hover:bg-red-500 active:bg-red-400 transition">
                    <div className={cn("w-1 bg-white h-full absolute left-0 rounded-r-xl", router.pathname === sidbar.href ? "block" : "hidden")} />

                    <div className="w-8 h-8 text-white">
                      {sidbar.icon}
                    </div>
              
                    <span className="text-white ml-2 whitespace-nowrap transition-all duration-300">
                      {sidbar.label}
                    </span>
                  </Link>
                )) :
                listsidebar.petugas.map((sidbar) => (
                  <Link key={sidbar.id} href={sidbar.href} className="relative p-2 flex items-center hover:bg-red-500 active:bg-red-400 transition">
                    <div className={cn("w-1 bg-white h-full absolute left-0 rounded-r-xl", router.pathname === sidbar.href ? "block" : "hidden")} />

                    <div className="w-8 h-8 text-white">
                      {sidbar.icon}
                    </div>
              
                    <span className="text-white ml-2 whitespace-nowrap transition-all duration-300">
                      {sidbar.label}
                    </span>
                  </Link>
                ))
              }
              <Link href="/logout" onClick={(e) => {
                e.preventDefault();
                signOut();
              }} className="relative p-2 flex items-center hover:bg-red-500 active:bg-red-400 transition">
                <div className="w-8 h-8 text-white">
                  <MdLogout  className="w-8 h-8" />
                </div>
            
                <span className={cn("text-white ml-2 whitespace-nowrap transition-all duration-300", sidebarAktif? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                  Logout
                </span>
              </Link>
              
            </div>
          </div>
        </div>
    )
}

export default SidebarLayout;