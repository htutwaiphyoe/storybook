import Link from "next/link";
import { navLinks } from "@/data/constant";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Design</Link>
      <div>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
