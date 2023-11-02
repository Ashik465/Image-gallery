import { FaCheckSquare } from "react-icons/fa";

const GalleryHeader = (props) => {
  const { images, setImages, checkedImages, setCheckedImages } = props;

  const handleDelete = () => {
    setImages(images.filter((image) => !checkedImages.includes(image.id)));
    setCheckedImages([]);
  };
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <div>
        {checkedImages.length > 0 ? (
          <div className="flex gap-2 items-center justify-center">
            <FaCheckSquare className="sm:h-7 sm:w-7" fill="blue" />
            <p className="sm:text-2xl text-sm font-bold">
              {checkedImages.length} File Selected
            </p>
          </div>
        ) : (
          <h1 className=" sm:text-2xl text-sm  font-bold">Gallery</h1>
        )}
      </div>
      {checkedImages.length > 0 && (
        <button
          className="px-4 py-2 text-red-500 font-bold sm:text-xl text-sm hover:underline"
          onClick={handleDelete}
        >
          Delete file
        </button>
      )}
    </div>
  );
};

export default GalleryHeader;
