import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
    {name: "Contacts", href: "/contacts"},
    {name: "Products", href: "/products"},
  ];

export function Nav() {
    const pathname = usePathname();
    navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={ link.href } key={ link.name } className={ isActive? "font-bold mr-4" : "text-blue-500 mr-4" }>
             { link.name }
          </Link>
        );
    })
};



