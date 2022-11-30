import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pickColor } from "../stateSlice";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
];

const ColorSelector = () => {
  const dispatch = useDispatch();
  const handleColorChange = (evt) => {
    dispatch(pickColor(evt.target.value));
  };
  const { selectedColor } = useSelector((state) => state.stateValues);
  return (
    <select onChange={handleColorChange} value={selectedColor}>
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
};

export default ColorSelector;
