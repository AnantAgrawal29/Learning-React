export default function Input({ textarea, content, id, ref, type }) {
  return (
    <div className="input-group">
      <label className="uppercase">{content}</label>
      {textarea && <textarea id={id} ref={ref}></textarea>}
      {!textarea && <input type={type} id={id} ref={ref} />}
    </div>
  );
}
