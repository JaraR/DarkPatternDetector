import support1 from "../assets/support1.png";
import support2 from "../assets/support2.png";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Support() {
  return (
    <>
      <div className="flex flex-row">
        <div className="rounded bg-gray-600 p-10 my-20 mx-10 text-center basis-1/2  ">
          <div className="space-y-5 p-5 mx-10">
            <div className="flex justify-center items-center ">
              <img src={support1} className="w-12" alt="support1"></img>
              <img src={support2} className="w-12 -ml-5" alt="support2"></img>
            </div>
            <h2 className="font-bold text-2xl text-white">
              Still have questions
            </h2>
            <p className="text-white">
              If you have any questions or suggestions, feel free to reach out
              to us at example@gmail.com. <br />
              We are happy to help.
            </p>
          </div>
        </div>
        <div className="rounded bg-gray-600 p-10 my-20  text-center basis-1/2  ">
          <Box
            component="form"
            sx={{
              maxWidth: "100%",
              "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
                backgroundColor: "white",
                borderRadius: "4px",
              },
              "& .full-width": {
                width: "88%",
              },
            }}
            noValidate
          >
            <div>
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Name"
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Email Address"
                variant="filled"
              />
              <TextField
                required
                id="filled-required "
                label="Required "
                defaultValue="Subject"
                variant="filled"
                className="full-width"
              />
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Please enter your request here"
                variant="filled"
                className="full-width height"
              />
              <button className="bg-blue-500 my-3 py-3 px-5 text-white font-bold rounded-full">
                Submit
              </button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
