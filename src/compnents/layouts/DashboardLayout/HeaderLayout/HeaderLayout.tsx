import { IUser } from "@/types/auth";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { SetStateAction } from "react"

interface TypeProps {
  setSidebarAktif: React.Dispatch<SetStateAction<boolean>>
  sidebarAktif: boolean;
  headerTitle: string;
  headerSubtitle: string;
  me: IUser;
 }

const HeaderLayout = (props: TypeProps) => {
    const {
      setSidebarAktif,
      sidebarAktif,
      headerTitle,
      headerSubtitle,
      me
    } = props;

    return (
      <div className="bg-white min-h-16 py-2 px-4 lg:min-h-20 flex items-center border-b-2 border-b-default-400/30 justify-between gap-2">
        <div className="flex items-center gap-4">
          <div className="h-6 w-8 shrink-0 flex flex-col justify-between cursor-pointer" onClick={() => setSidebarAktif(!sidebarAktif)}>
            <span className="bg-black h-[4px] w-full"></span>
            <span className="bg-black h-[4px] w-full"></span>
            <span className="bg-black h-[4px] w-full"></span>
          </div>

          <div>
            <h1 className="text-xl font-bold text-utama">
              {headerTitle}
            </h1>
            <p className="text-second font-semibold line-clamp-2">
              {headerSubtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <h3 className="hidden lg:block font-semibold text-utama mr-2">
              {me?.role === "SUPER_ADMIN" ? "Admin" : "Petugas"}
            </h3>
            {me?.tps && (
              <span>
                {me?.tps?.name}
              </span>
            )}
          </div>
          
          <Dropdown className="z-0">
            <DropdownTrigger>
              <Avatar className="z-0 cursor-pointer shrink-0" />              
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="profile">Profil</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
       
      </div>
    )
}

export default HeaderLayout;