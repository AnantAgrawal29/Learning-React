import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label} </label>
      <div className={classes.controls}>
        <input
          type="file"
          id="image"
          accept="image/jpeg, image/png"
          name={name}
        />
      </div>
    </div>
  );
}
