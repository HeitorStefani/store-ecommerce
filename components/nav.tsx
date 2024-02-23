import Link from "next/link";

import MainNav from "@/components/ui/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/ui/navbar-actions";
import getCategories from "@/actions/pegar-categorias";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl text-green-700">AZALEIA</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;