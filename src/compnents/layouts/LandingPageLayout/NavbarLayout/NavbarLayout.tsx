import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react"
import listNav from "./listNav";
import { useState } from "react";
import cn from "@/utils/cn";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image'


interface TypeProps {
  name: string;
}

const NavbarLayout = (props: TypeProps) => {
    const {
      name
    } = props;

    const router = useRouter();

    const session = useSession();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isScroll, setScroll] = useState(false);

    const onScroll = (posisi: number) => {
      if(posisi > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }



    return (
      <Navbar 
        shouldHideOnScroll 
        onScrollPositionChange={onScroll}
        isBordered={isScroll}
        isBlurred={isScroll}
        maxWidth="2xl"
        className={cn("bg-inti", {"bg-black/30" : isScroll})}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand className="gap-2">
            <div className="w-10 h-10">
              <Image src="/logo/main/votedesk.png" alt="main-logo" width={136} height={136} className="w-full" />
            </div>
            <p className={`font-bold text-white`}>
              {name}
            </p>
          </NavbarBrand>
        </NavbarContent> 

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {listNav.map((nav) => (
            <NavbarItem key={nav.id}>
              <Link 
                href={nav.href} 
                className={cn("text-white", {
                  "font-bold" : router.pathname === nav.href,
                  }
                )}
              >
                {nav.label}
              </Link>

              <div className={cn(`w-full h-1 bg-white rounded-xl` , {
                "hidden" : router.pathname !== nav.href
              })} />
            </NavbarItem>
          ))}
        </NavbarContent>


        {session.data?.user ? (
          <NavbarContent justify="end">
            <NavbarItem>
              <ButtonFlat isLink href="/dashboard" >
                Dashboard
              </ButtonFlat>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <ButtonSolid onPress={() => signOut()}>
                LogOut
              </ButtonSolid>
            </NavbarItem>         
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <ButtonFlat isLink href="/auth/login" >
                Login
              </ButtonFlat>
            </NavbarItem>
            <NavbarItem>
              <ButtonSolid isLink href="/auth/register">
                SignUp
              </ButtonSolid>
            </NavbarItem>         
          </NavbarContent>
        )}







        <NavbarMenu >
          {listNav.map((nav) => (
            <NavbarMenuItem key={nav.id}>
              <Link
                color="danger"
                href={nav.href}
                size="lg"
                className={cn("text-red-700 w-full", {
                  "font-bold" : router.pathname === nav.href,
                  "text-red-700" : isScroll && router.pathname === nav.href,
                  }
                )}
              >
                {nav.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu> 
      </Navbar>
    )
}

export default NavbarLayout;