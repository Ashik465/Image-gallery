import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ImageGallery = ({ images, setImages }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
  };
 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="imageGallery">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {images.map((image, index) => (
              <Draggable
                key={image.id.toString()} // Ensure image ID is a string
                draggableId={image.id.toString()} // Ensure image ID is a string
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className=""
                  >
                    <img src={image.url} alt={`Image ${image.id}`} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageGallery;


