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
      <Droppable droppableId="imageGallery" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
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
                    className="overflow-hidden border border-gray-300 rounded-md first:center first:row-span-2 first:col-span-2"
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
