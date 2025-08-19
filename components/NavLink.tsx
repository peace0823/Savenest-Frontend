// components/NavLink.tsx
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="
        text-[#101010] font-medium hover:text-[#0466C8] 
        transition-colors duration-200 cursor-pointer
      "
    >
      {label}
    </Link>
  );
};

export default NavLink;
