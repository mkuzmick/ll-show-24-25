import Draggable from "react-draggable";

const DraggableBox = ({ title, content, onClick, zIndex }) => {
  return (
    <Draggable>
      <div
        className="bg-zinc-500 p-8 rounded-lg shadow-2xl w-80 max-w-full cursor-move"
        style={{ position: "absolute", zIndex }}
        onClick={onClick}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{content} z-index: {zIndex}</p>
      </div>
    </Draggable>
  );
};

export default DraggableBox;