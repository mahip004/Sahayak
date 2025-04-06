import React, { useState } from "react";
import { ArrowRight, ArrowLeft, X, Download } from "lucide-react";

const images = [
  "https://piktochart.com/wp-content/uploads/2018/02/000-14-707x1000-1879549.png",
  "https://content.wepik.com/statics/21944813/preview-page0.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-event-motion-poster-design-template-52733b29d18e82e14be9a9e4168f85e1_screen.jpg?ts=1567090689",
  "https://content.wepik.com/statics/21944813/preview-page0.jpg",
  "https://piktochart.com/wp-content/uploads/2018/02/000-14-707x1000-1879549.png",
];

const UpcomingEvents = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalImg, setModalImg] = useState(null);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < images.length) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleImageClick = (img) => setModalImg(img);
  const handleClose = () => setModalImg(null);

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url + "?download=true";
    link.download = "event-poster.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full px-6 py-10 font-poppins text-[#3B3B3B]">
      <div className="bg-white rounded-xl shadow-lg p-6 relative">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleImages.map((img, i) => (
            <img
              key={i}
              src={`${img}?auto=format&fit=crop&w=600&q=80`}
              alt={`Event ${i + 1}`}
              className="w-full h-[260px] object-cover object-top rounded-md cursor-pointer hover:scale-[1.02] transition"
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>

        {/* Left Arrow */}
        {startIndex > 0 && (
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
            >
              <ArrowLeft size={24} className="text-[#3B3B3B]" />
            </button>
          </div>
        )}

        {/* Right Arrow */}
        {startIndex + 3 < images.length && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
            >
              <ArrowRight size={24} className="text-[#3B3B3B]" />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative border-[2px] border-gray-300 rounded-lg overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${modalImg}?auto=format&fit=crop&w=1080&q=90`}
              alt="Zoomed"
              className="w-full max-h-[90vh] object-contain bg-white"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleClose}
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
              >
                <X size={20} className="text-[#3B3B3B]" />
              </button>
              <button
                onClick={() => downloadImage(modalImg)}
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
              >
                <Download size={20} className="text-[#3B3B3B]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#333",
    fontFamily: "Poppins, sans-serif",
  },
};

export default UpcomingEvents;
