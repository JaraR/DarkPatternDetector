import support1 from "../assets/support1.png";
import support2 from "../assets/support2.png";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Support() {
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
            <h2 className="font-bold text-2xl text-white">Contact Us</h2>
            <p className="text-white text-center">
              If you have any questions or suggestions, <br />
              feel free to reach out to us <br />
              We are happy to help.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="rounded bg-gray-600 p-10 my-10 mx-5 sm:mx-10 text-center flex-1 sm:basis-1/2">
          <Box
            component="form"
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
              <TextField required id="name" label="Name" variant="filled" />
              <TextField
                required
                id="email"
                label="Email Address"
                variant="filled"
              />
              <TextField
                required
                id="subject"
                label="Subject"
                variant="filled"
                className="full-width"
              />
              <TextField
                required
                id="message"
                label="Message"
                variant="filled"
                className="full-width"
                multiline
                rows={4}
              />
              <button className="bg-blue-500 my-3 py-3 px-5 text-white font-bold rounded-full w-full sm:w-auto">
                Submit
              </button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
