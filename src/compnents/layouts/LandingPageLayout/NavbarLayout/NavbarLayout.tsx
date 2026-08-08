import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react"
import listNav from "./listNav";
import { useState } from "react";
import cn from "@/utils/cn";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { useRouter } from "next/router";

const NavbarLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isScroll, setScroll] = useState(false);

    const onScroll = (posisi: number) => {
      if(posisi > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    const router = useRouter();


    return (
      <Navbar 
        shouldHideOnScroll 
        onScrollPositionChange={onScroll}
        isBordered={isScroll}
        isBlurred={isScroll}
        maxWidth="2xl"
        className={cn("bg-inti", {"bg-white/50" : isScroll})}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand>
            <p className={`font-bold text-white`}>
              SemestaVote
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
                  "text-red-700" : isScroll && router.pathname === nav.href,
                  }
                )}
              >
                {nav.label}
              </Link>

              <div className={cn(`w-full h-1 bg-white rounded-xl` , {
                "bg-red-700" : isScroll,
                "hidden" : router.pathname !== nav.href
              })} />
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <ButtonFlat>
              Login
            </ButtonFlat>
          </NavbarItem>
          <NavbarItem>
            <ButtonSolid>
              SignUp
            </ButtonSolid>
          </NavbarItem>
        </NavbarContent>






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