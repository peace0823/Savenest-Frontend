

// components/SignInButton.tsx
import Link from "next/link";

const SignInButton: React.FC = () => {
  return (
    <Link
      href="/signin"
      className="
        px-4 py-2 rounded-lg font-[Poppins]
        text-[#101010] font-semibold 
        hover:bg-[#FBBF24] hover:text-black
        transition duration-200 cursor-pointer
      "
    >
      Sign in
    </Link>
  );
};

export default SignInButton;



