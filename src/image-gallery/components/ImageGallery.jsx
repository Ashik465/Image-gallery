import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AiOutlinePicture } from "react-icons/ai";
import GalleryHeader from "./GalleryHeader";

const ImageGallery = ({ images, setImages }) => {
  const [checkedImages, setCheckedImages] = useState([]);
 
  //drag and drop reordering functionality
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setImages(items);
  };
 
  //checkbox functionality
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
      ></GalleryHeader>
      <hr className="py-5" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageGallery" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-2 gap-4 px-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            >
              {images.map((image, index) => (
                <Draggable
                  key={image.id.toString()}
                  draggableId={image.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="relative  border-2  border-gray-300 rounded-md first:col-span-2 first:row-span-2 first:border-[3px]"
                    >
                      <img src={image.url} alt={`Image ${image.id}`} />
                      <div
                        className={`absolute inset-0 bg-black  ${
                          checkedImages.includes(image.id)
                            ? "opacity-30 "
                            : "hover:opacity-50 opacity-0 "
                        }}`}
                      >
                        <input
                          type="checkbox"
                          className="absolute top-5 left-5 w-5 h-5 cursor-pointer"
                          onChange={() => handleCheckboxChange(image.id)}
                          checked={checkedImages.includes(image.id)}
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}

              <div className="bg-gray-50 border-dashed border-gray-200 border-2 flex flex-col gap-4 items-center justify-center rounded-lg p-10 ">
                <AiOutlinePicture className="h-7 w-7 text-gray-800" />
                <p className="text-black text-lg font-medium text-center">
                  Add Images
                </p>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ImageGallery;
