import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ImageGallery from "./components/ImageGallery";

const MainGallery = () => {
  const [images, setImages] = useState([
    { id: 0, url: "/public/images/image-1.webp", feature: false },
    { id: 1, url: "/public/images/image-2.webp", feature: false },
    { id: 2, url: "/public/images/image-2.webp", feature: false },
    { id: 3, url: "/public/images/image-2.webp", feature: false },
    { id: 4, url: "/public/images/image-2.webp", feature: false },
    // Add more image data as needed
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white mx-auto container max-w-7xl">
        <h1 className="text-3xl font-bold mb-4">Responsive Image Gallery</h1>
        <ImageGallery images={images} setImages={setImages} />
      </div>
    </div>
  );
};

export default MainGallery;
