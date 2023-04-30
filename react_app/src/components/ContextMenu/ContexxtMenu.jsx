import { ContextMenu, useContextMenu } from "react-context-menu-hooks";

const MovieContextMenu = () => {
  const { changeColor, color } = useContextMenu("");

  const handleColorSelect = (action) => {
    changeColor(action);
  };

  return (
    <ContextMenu bridge={"myContextMenuBridge"} onSelect={handleColorSelect}>
      <ContextMenu.Option disabled={color === "red"} select='red'>
        Edit
      </ContextMenu.Option>
      <ContextMenu.Option disabled={color === "blue"} select='blue'>
        Delete
      </ContextMenu.Option>
    </ContextMenu>
  );
};
export default MovieContextMenu;
