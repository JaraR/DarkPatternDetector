function EmlResult({ apiResponse }) {
  return (
    <>
      <div className="ring-1 m-2 ">
        <div className="text-gray-900  text-1xl font-bold">Analysis Result</div>
        <p>{apiResponse}</p>
        <div className="flex flex-col gap-2">
          <div className="flex py-5 gap-2">
            <img src="public/css.png" className="h-6" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-gray-900 text-md font-bold">Sentiment</div>
              <div className="text-gray-600 text-md font-semibold">
                Negative/Positive
              </div>
            </div>
          </div>
          <div className="flex py-5 gap-2">
            <img src="public/css.png" className="h-6" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-gray-900 text-md font-bold">Emotions</div>
              <div className="text-gray-600 text-md font-semibold">
                Distruts/Skepticism/Confidence
              </div>
            </div>
          </div>
          <div className="flex py-5 gap-2">
            <img src="public/css.png" className="h-6" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-gray-900 text-md font-bold">
                Emotion Manipulation
              </div>
              <div className="text-gray-600 text-md font-semibold">Yes/No</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmlResult;
