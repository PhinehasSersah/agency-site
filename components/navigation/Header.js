import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = ["Home", "Shop", "Product", "Blog", "Page"];
  return (
    <header>
      <figure>
        <Image />
      </figure>
      <nav>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={index===0? '/': item.toLowerCase()}>
                <a>{item}</a>
              </Link>
            </li>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
