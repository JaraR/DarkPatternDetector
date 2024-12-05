import help1 from "../assets/help1.png";
import help2 from "../assets/help2.png";

export default function Help() {
  return (
    <>
      <div className="rounded bg-gray-600 p-10 my-20 mx-10 text-center  ">
        <div className="space-y-5 p-5 mx-10">
          <div className="flex justify-center items-center ">
            <img src={help1} className="w-12" alt="help1"></img>
            <img src={help2} className="w-12 -ml-5" alt="help2"></img>
          </div>
          <h2 className="font-bold text-2xl text-white">
            Still have questions
          </h2>
          <p className="text-white">
            If you have any questions or suggestions, feel free to reach out to
            us at example@gmail.com. <br />
            We are happy to help.
          </p>
          <button className="bg-blue-500  text-white font-bold rounded-full p-2">
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
}
