import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import App from "../App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { fontWeight } from "@mui/system";

const Dashboard = () => {
  const navigate = useNavigate();

  // const QuoteOfDay = async() =>{
  //     const req = await fetch('http://localhost:1337/api/quote',{
  //         headers:{

  //             'x-access-token':localStorage.getItem("token"),
  //         },

  //     })
  //     const data = await req.json();
  //     if(data.status==='okay'){
  //         setQoute(data.quote);
  //     }
  //     else{
  //         // alert(data.error);
  //         localStorage.removeItem("token");
  //         navigate('/login');
  //     }

  // }
  // useEffect(()=>{
  //     const token = localStorage.getItem("token");
  //     if(token){
  //         const user = jwt.decode(token);
  //         if(!user){
  //             localStorage.removeItem("token");
  //             navigate.replace("/login");
  //         }
  //         else{
  //             <Header />
  //         }
  //     }

  // },[])

  //   const  updateQuote = async(e)=>{
  //     e.preventDefault();
  //     const req = await fetch('http://localhost:1337/api/quote',{
  //         method:"POST",
  //             headers:{
  //                 'Content-Type': "application/json",
  //                 'x-access-token':localStorage.getItem("token"),
  //             },
  //         body:JSON.stringify({
  //             quote: yourQuote,

  //         })
  //         })
  //         const data = await req.json();
  //         if(data.status==='okay'){
  //             setQoute(yourQuote);
  //             SetYourQuote('');
  //         }
  //         else{
  //             alert(data.error);
  //         }

  //   }
  return (
    <>
      <Header />
      <Box sx={{ height: "100vh", width: "100%" }}>
        <div className="container">
          <div className="wrapper">
            <div className="image-wrapper">{/* image will be here */}</div>
            <Typography
              component={"h1"}
              className="city-text"
              variant="body2"
              sx={{
                fontSize: { lg: "70px", md: "50px", sm: "20", xs: "40px" },
                fontWeight: "500",
                m: 1,
              }}
            >
              HELP CITY
            </Typography>
            <Typography
              component={"h1"}
              className="save-city"
              variant="body2"
              sx={{
                fontSize: { lg: "55px", md: "40px", sm: "15px", xs: "15px" },
                fontWeight: "700",
                m: 2,
              }}
            >
              DONATE FOR SAVE THE CITY
            </Typography>

            <Typography
              component={"p"}
              className="paragraph"
              variant="body2"
              sx={{
                fontSize: { lg: "22px", md: "18px", sm: "16px", xs: "14px" },
                m: 1,
              }}
            >
              Donate to save your country, You can donate as much as you want
              and show the love towards individuals who are suffering
            </Typography>

            <button
              className="button"
              onClick={() => {
                navigate("/donate");
              }}
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </Box>
      {/* <h1>your quote! : {Quote}</h1>
     <Box component="form" onSubmit={updateQuote} noValidate sx={{ mt: 1 }}>

        
<TextField
  margin="normal"
  required
  type="text"
  value = {yourQuote} onChange={(e)=> SetYourQuote(e.target.value)} */}

      {/* />


<Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }}
>
  Sign In
</Button>

</Box> */}
    </>
  );
};
export default Dashboard;
