import support1 from "../assets/support1.png";
import support2 from "../assets/support2.png";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you for subscribing!" });
        setEmail("");
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to subscribe. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Contact Info Section */}
        <div className="rounded bg-gray-600 p-10 my-10 mx-5 sm:mx-10 text-center flex-1 sm:basis-1/2">
          <div className="space-y-5 p-5">
            <div className="flex justify-center items-center">
              <img src={support1} className="w-12" alt="support1" />
              <img src={support2} className="w-12 -ml-5" alt="support2" />
            </div>
            <h2 className="font-bold text-2xl text-white">
              Subscribe to our newsletter
            </h2>
            <p className="text-white text-center">
              Stay updated with our latest news and updates. <br />
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="rounded bg-gray-600 p-10 my-10 mx-5 sm:mx-10 text-center flex-1 sm:basis-1/2">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: "100%",
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
                backgroundColor: "white",
                borderRadius: "4px",
              },
              "& .full-width": {
                width: "100%", // Ensure full-width on smaller screens
              },
            }}
            noValidate
          >
            <div>
              <h2 className="text-white justify-center text-start">
                Your Email Address
              </h2>
              <TextField
                required
                id="email"
                label="Email Address"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />

              {status.message && (
                <p
                  className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"} mt-2`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="bg-blue-500 my-3 py-3 px-5 text-white font-bold rounded-full w-full sm:w-auto hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
