import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-400  ">
      <div>
        <input type="text" placeholder="Name " />
        <input type="number" placeholder="Contact NO" />
        <input type="email" placeholder="Email ID" />
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </div>
  );
};

export default SignUp;
