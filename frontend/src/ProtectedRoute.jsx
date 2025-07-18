import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
}