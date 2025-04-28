import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import { signOut } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">EchoHire</h2>
        </Link>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {isUserAuthenticated ? (
            // If signed in
            <form action={signOut}>
              <button type="submit" className="btn btn-primary">
                Logout
              </button>
          </form>
          ) : (
            // If not signed in
            <>
              <Link href="/sign-in" className="btn btn-outline">
                Sign In
              </Link>
              <Link href="/sign-up" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;