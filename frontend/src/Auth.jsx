import { SignIn, SignUp } from "@clerk/clerk-react";

export function Login() {
  return (
    <div className="auth-container">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}

export function Register() {
  return (
    <div className="auth-container">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}