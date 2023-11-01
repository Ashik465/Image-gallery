import { useState } from "react";
import ImageGallery from "./components/ImageGallery";

const MainGallery = () => {
  const [images, setImages] = useState([
    { id: 0, url: "/public/images/image-11.jpeg", feature: false },
    { id: 1, url: "/public/images/image-2.webp", feature: false },
    { id: 2, url: "/public/images/image-3.webp", feature: false },
    { id: 3, url: "/public/images/image-4.webp", feature: false },
    { id: 4, url: "/public/images/image-5.webp", feature: false },
    { id: 5, url: "/public/images/image-6.webp", feature: false },
    { id: 6, url: "/public/images/image-7.webp", feature: false },
    { id: 7, url: "/public/images/image-8.webp", feature: false },
    { id: 8, url: "/public/images/image-9.webp", feature: false },
    { id: 9, url: "/public/images/image-10.jpeg", feature: false },
    { id: 10, url: "/public/images/image-1.webp", feature: false },
  ]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto bg-white max-w-7xl">
        <h1 className="mb-4 text-3xl font-bold">Responsive Image Gallery</h1>
        <ImageGallery images={images} setImages={setImages} />
      </div>
    </div>
  );
};

export default MainGallery;
