import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'; 

const withAuth = (WrappedComponent:any) => {
  return (props:any) => {
    

    const router = useRouter();

    const userLoggedIn = useSelector((state:any) => state.user.isloggedIn);
  

    useEffect(() => {
      if (!userLoggedIn) {
        router.push('/Login'); 
      }
    }, [userLoggedIn, router]);

    return userLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
