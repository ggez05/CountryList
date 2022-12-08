import React from "react";

const RedirectWhatsapp = () => {
  const urlparam = window.location.search.split("=");
  console.log(urlparam);
  var options = {
    method: "POST",
    headers: {
      appId: "OTPLess:ZOBXLTVKLACASMPPBVCINROWRZRPZRJU",
      appSecret:
        "tdj4oXecbjBJHkypdzLYfLrypWo3cQsEi37XGn7q7dzA72gpWf1mik6b3fc62OUVR",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: urlparam,
    }),
  };
  fetch("https://api.otpless.app/v1/client/user/session/userdata", options)
    .then((data) => data.json())
    .then((next) => console.log(next));

  console.log(urlparam[1]);
  return <div>RedirectWhatsapp</div>;
};

export default RedirectWhatsapp;
