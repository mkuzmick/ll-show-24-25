"use client"

import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
   
      router.push('/api/auth/pinterest/start');
    
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Pinterest</button>
    </div>
  );
};

export default Login;