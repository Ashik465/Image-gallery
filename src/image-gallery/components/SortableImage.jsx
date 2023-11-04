import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableImage = ({
  id,
  handleCheckboxChange,
  checkedImages,
  imageUrl,
}) => {
  const isChecked = checkedImages.includes(id);

  const onCheckboxChange = () => {
    handleCheckboxChange(id);
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); 
    onCheckboxChange();
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 2 : 1,
      }}
      {...attributes}
      {...listeners}
      className={`relative border-2 border-gray-300 rounded-md first:col-span-2 first:row-span-2 first:border-[3px] ${
        isDragging ? "shadow-lg" : ""
      }`}
    >
      <img src={imageUrl} alt={`Image ${id}`} />
      <div
        className={`absolute inset-0 ${
          isDragging
            ? "opacity-0"
            : isChecked
            ? "opacity-1 bg-white/50"
            : "hover:opacity-50 opacity-0 bg-black"
        }`}
      >
        <input
          type="checkbox"
          className="absolute top-5 left-5 w-5 h-5 cursor-pointer"
          onMouseDown={handleMouseDown}
          defaultChecked={isChecked}
        />
      </div>
    </div>
  );
};

export default SortableImage;
