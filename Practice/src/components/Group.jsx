export default function Group({ name, type }) {
  return (
    <p>
      <label>{name}</label>
      <input type={type} required />
    </p>
  );
}
