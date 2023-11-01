import { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ImageGallery = ({ images, setImages }) => {
  const [checkedImages, setCheckedImages] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
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
    <div>
      <div className="flex justify-between items-center px-10 py-5">
        <div>
          {checkedImages.length > 0 ? (
            <div className="flex gap-2 items-center justify-center">
              <FaCheckSquare className="h-7 w-7" fill="blue" />
              <p className="text-2xl font-bold">
                {checkedImages.length} File Selected
              </p>
            </div>
          ) : (
            <h1 className=" text-2xl font-bold">Gallery</h1>
          )}
        </div>
        {checkedImages.length > 0 && (
          <button
            className="px-4 py-2 text-red-500 font-bold text-xl hover:underline"
            onClick={() => {
              setImages(
                images.filter((image) => !checkedImages.includes(image.id))
              );
              setCheckedImages([]);
            }}
          >
            Delete file
          </button>
        )}
      </div>
      <hr className="py-5" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageGallery" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 gap-4 px-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
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
                      className="relative  border-2  border-gray-300 rounded-md md:first:col-span-2 md:first:row-span-2 md:first:border-[3px]"
                    >
                      <img src={image.url} alt={`Image ${image.id}`} />
                      <div
                        className={`absolute inset-0 bg-black  ${
                          checkedImages.includes(image.id)
                            ? "opacity-50 "
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
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ImageGallery;
