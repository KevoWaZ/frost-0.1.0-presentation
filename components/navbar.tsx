
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
  } from "@nextui-org/react";
import Link from "next/link";

export const revalidate = 0;

const NavbarNext = async () => {
  return (
    <Navbar position="static" isBlurred={false} className="bg-transparent">
    <NavbarBrand>
      <Link className="text-4xl font-bold text-slate-100" href="/">
        Frost
      </Link>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4">
      <NavbarItem>
        <Button href="/docs" as={Link} variant="light">
          <p className="text-indigo-300 text-xl">
            Docs
          </p>
        </Button>
        <Button href="FAQ" as={Link} variant="light">
          <p className="text-indigo-300 text-xl">
            FAQ
          </p>
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
};

export default NavbarNext;