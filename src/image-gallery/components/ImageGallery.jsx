import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { AiOutlinePicture } from "react-icons/ai";
import SortableImage from './SortableImage';
import GalleryHeader from './GalleryHeader';

const ImageGallery = ({ images, setImages }) => {
  const [checkedImages, setCheckedImages] = useState([]);

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setImages((prevImages) => {
        const oldIndex = prevImages.findIndex((img) => img.id === active.id);
        const newIndex = prevImages.findIndex((img) => img.id === over.id);

        return arrayMove(prevImages, oldIndex, newIndex);
      });
    }
  };

  const handleCheckboxChange = (imageId) => {
    const isChecked = checkedImages.includes(imageId);
    if (isChecked) {
      setCheckedImages(checkedImages.filter((id) => id !== imageId));
    } else {
      setCheckedImages([...checkedImages, imageId]);
    }
  };

  return (
    <>
      <GalleryHeader
        images={images}
        setImages={setImages}
        checkedImages={checkedImages}
        setCheckedImages={setCheckedImages}
      />
      <hr className="py-5" />
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={images.map((image) => image.id)}>
          <div className="grid grid-cols-2 gap-4 px-5 sm:px-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {images.map((image, index) => (
              <SortableImage
                key={image.id}
                id={image.id}
                handleCheckboxChange={handleCheckboxChange}
                checkedImages={checkedImages}
                imageUrl={image.url}
              />
            ))}
            <div className="bg-gray-50 border-dashed border-gray-200 border-2 flex flex-col gap-4 items-center justify-center rounded-lg p-10">
              <AiOutlinePicture className="h-7 w-7 text-gray-800" />
              <p className="text-black text-lg font-medium text-center">
                Add Images
              </p>
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default ImageGallery;
