import React from "react";
import { useAuth } from "../context/AuthProvider";

const CheckoutPage = () => {
  const auth = useAuth();
  const { user } = auth;

  return (
    <div className="container">
      {auth ? (
        <div>
          {console.log(auth)}
          <p>name: {user.userName}</p>
          <p>email: {user.email}</p>
          <p>tel: {user.phoneNumber}</p>
        </div>
      ) : (
        <p>please login!</p>
      )}
    </div>
  );
};

export default CheckoutPage;
