import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export default function ImageSlider({ url, limit }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMesg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}/v2/list?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMesg(e.errorMsg);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(image);

  if (loading) {
    return <div>Loading data ! please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occuried: {errorMsg}</div>;
  }

  function handlePrevious() {
    console.log("Prev");
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    console.log("Next");
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container relative flex justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        size={40}
        className="absolute left-1 text-gray-500 hover:scale-125 transition"
      />
      {image && image.length
        ? image.map((imageitem,index) => (
            <img
              className={
                currentSlide===index
                  ? "border rounded-lg w-full h-full"
                  : "border rounded-lg w-full h-full hidden"
              }
              key={imageitem.id}
              src={imageitem.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        size={40}
        className="absolute right-1 text-gray-500 hover:scale-125 transition"
      />
      <span className=" absolute bottom-1 flex justify-center gap-2">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "w-4 h-4 bg-blue-400 rounded-full"
                    : "w-4 h-4 bg-gray-400 rounded-full"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
