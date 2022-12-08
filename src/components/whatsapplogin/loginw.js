import React from "react";
import "./loginw.css";
import OtplessSdk from "otpless-js-sdk";

function LoginWhatsapp() {
  const sdkIntance = new OtplessSdk({
    appId: "OTPLess:ZOBXLTVKLACASMPPBVCINROWRZRPZRJU",
    enableErrorLogging: true,
  });

  return (
    <div className="login_whatsapp_wrapper">
      Login With whatsapp
      <button
        onClick={sdkIntance.createGetIntentOnClick({
          redirectionURL:
            "https://cosmic-scone-59f7d3.netlify.app/loginwhatsapp/redirect",
        })}
      >
        Login with WhatsApp
      </button>
    </div>
  );
}
export default LoginWhatsapp;
