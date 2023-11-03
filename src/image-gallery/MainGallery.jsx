import { useState } from "react";
import ImageGallery from "./components/ImageGallery";

const MainGallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: "/images/image-11.jpeg" },
    { id: 2, url: "/images/image-2.webp" },
    { id: 3, url: "/images/image-3.webp" },
    { id: 4, url: "/images/image-4.webp" },
    { id: 5, url: "/images/image-5.webp" },
    { id: 6, url: "/images/image-6.webp" },
    { id: 7, url: "/images/image-7.webp" },
    { id: 8, url: "/images/image-8.webp" },
    { id: 9, url: "/images/image-9.webp" },
    { id: 10, url: "/images/image-10.jpeg" },
    { id: 11, url: "/images/image-1.webp" },
  ]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto bg-white max-w-7xl rounded-xl">
        <ImageGallery images={images} setImages={setImages} />
      </div>
    </div>
  );
};

export default MainGallery;
