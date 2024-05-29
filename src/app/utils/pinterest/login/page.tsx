"use client"

import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    if (typeof window !== 'undefined') { 
      router.push('/api/auth/pinterest/start');
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Pinterest</button>
    </div>
  );
};

export default Login;