import React from "react";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-500 ">
      <div>
        <input type="email" placeholder="Email ID" />
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </div>
  );
};

export default SignIn;
