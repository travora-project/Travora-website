import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';

export default function Dashboard() {
  const { getToken } = useAuth();

  useEffect(() => {
    async function fetchToken() {
      const token = await getToken();
      console.log("🔐 Clerk JWT token:", token);
    }

    fetchToken();
  }, [getToken]);

  return <h2>This is your protected Dashboard</h2>;
}
