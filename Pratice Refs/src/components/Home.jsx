import assetimg from "../assets/no-projects.png";

export default function Home({ handleCreate }) {
  return (
    <div className="header">
      <img className="w-24 mx-auto mt-20" src={assetimg} alt="project image" />
      <h1 className="font-display mt-6 mb-8 text-center text-3xl font-bold font-custom text-stone-600">
        No Project Selected
      </h1>
      <p className=" font-display text-center text-2xl text-stone-500">
        Select a project or get started with a new one
      </p>
      <button className="btn btn-create" onClick={handleCreate}>
        Create new project
      </button>
    </div>
  );
}
