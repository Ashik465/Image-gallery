import { useState } from "react";

const ImageGallery = () => {
  // Sample image data
  const [images, setImages] = useState([
    { id: 1, url: "image1.jpg", feature: false },
    { id: 2, url: "image2.jpg", feature: false },
    // Add more image data as needed
  ]);
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white mx-auto container max-w-7xl  ">
        <h1 className="text-3xl font-bold mb-4">Responsive Image Gallery</h1>
        <ImageGallery images={images} setImages={setImages} />
      </div>
    </div>
  );
};

export default ImageGallery;
