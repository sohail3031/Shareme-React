import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { createOrGetUser } from "../utils/user";

const Login = () => {
  const user = false;

  const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            >
              {user ? (
                <div> Logged In</div>
              ) : (
                <GoogleLogin
                  onSuccess={(response) =>
                    createOrGetUser(response)
                      .then(() => navigate("/", { replace: true }))
                      .catch((error) => console.error("Error: ", error))
                  }
                  onError={(response) => console.error(response)}
                />
              )}
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
