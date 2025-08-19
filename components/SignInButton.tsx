// components/SignInButton.tsx
import Link from "next/link";

const SignInButton: React.FC = () => {
  return (
    <Link
      href="/signin"
      className="
        px-4 py-2 rounded-lg 
        text-[#101010] font-semibold 
        hover:bg-[#0466C8] hover:text-white
        transition duration-200 cursor-pointer
      "
    >
      Login
    </Link>
  );
};

export default SignInButton;
