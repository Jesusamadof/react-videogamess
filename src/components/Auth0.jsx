import React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


function Auth0() {
    const { isAuthenticated, logout, user } = useAuth0();
 

  return (
    <>
      
            <button onClick={logout}>Logout</button>
    </>
  )
}

export default Auth0