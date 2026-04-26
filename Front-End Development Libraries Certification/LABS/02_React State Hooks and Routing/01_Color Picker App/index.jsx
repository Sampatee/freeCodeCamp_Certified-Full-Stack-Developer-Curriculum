const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <label htmlFor="color-input" id="color-input-label">
        Choose a color using the color input below&#58;
      </label>
      <input
        type="color"
        id="color-input"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};
