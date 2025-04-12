import React, { useEffect, useState } from "react";

const Carouseal = () => {
  const [imgData, setImgData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  // fetch img data

  const fetchImgData = async () => {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?limit=30"
    );
    const apiResponse = await response.json();

    setImgData(apiResponse.photos);
  };
  useEffect(() => {
    fetchImgData();
  }, []);

  const handleNext =() =>{
    setCurrentIndex(()=>{
      currentIndex - 1
    })
  }
  const handleBAck = ()=>{
    setCurrentIndex(()=>
    currentIndex+1
  )}
  return (
    <div className="relative w-full ">
      <div className="flex space-x-4 p-5">
        { imgData.length > 0 && 
          <div className="px-5 mr-[500px] ml-[250px]">
            <img
              style={{ borderRadius: "20px" }}
              className="w-64 h-40 rounded-2xl  shadow-md"
              src={imgData[currentIndex]?.url}
              alt="img-data"
            />
          </div>
        }
      </div>
      <div className="flex space-x-4 mt-4 bg-zinc-500 p-4">
        <div className="justify-between">
  <button
    className="p-4 border-blue-950 bg-blue-200 rounded-full shadow mr-5"
    onClick={handleNext}
  >
    Back
  </button>
  <button
    className="p-4 border-blue-950 bg-blue-200 rounded-full shadow"
    onClick={handleBAck}
  >
    Next
  </button>
  </div>
</div>
    </div>
  );
};

export default Carouseal;
