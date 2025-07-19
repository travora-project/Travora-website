import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';
import { Login, Register } from './Auth';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard'; // ✅ NEW

function HomePage() {
  return <h2>Welcome to the Home Page</h2>;
}

export default function App() {
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
