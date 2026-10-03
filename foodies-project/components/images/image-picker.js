"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label} </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked yet.</p>}
          {pickImage && (
            <Image src={pickImage} alt="The image selected by the user." fill />
          )}
        </div>
        <input
          ref={inputRef}
          onChange={handleImageChange}
          className={classes.input}
          type="file"
          id="image"
          accept="image/jpeg, image/png"
          name={name}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
