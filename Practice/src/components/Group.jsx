export default function Group({ name, ...props }) {
  return (
    <p>
      <label>{name}</label>
      <input {...props} required />
    </p>
  );
}
