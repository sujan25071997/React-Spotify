import React, { useEffect, useState } from "react";
import axios from "axios";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

//   let token = {code, access_token: 'BQCuArgeysiKavGo49I2uZnBy5bF8IPHbXBTVPeI9DgK_oPKfp…-nIF1PL3wP5k12kbJLkroleL_lExh9GxFI0o_dHp9Q9oSiLxR', refresh_token: 'AQBhFCzj7TLL9ZMAhzPTsTBWO7mTGBdZOPEgZemUbmYMzZh9AL…licRiU9coWz4ZJ78cAQccrW2KBjDqD7s6tJBnEp2wImZqPPqg', expires_in: 3600}

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {code, })
      .then(response => {
        // window.history.pushState({}, null, "/");
        // console.log("helo")
        // console.log(response.data)
        // console.log("bye")
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
        
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);


  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
        //  console.log(res.data)
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
            window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);
  
  return accessToken;
};

export default React.memo(useAuth);
