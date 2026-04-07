type projectProps = {
  src?: string;
  photo: string;
  title: string;
  framework?: string;
  css? :string;
};

export default function ProjectCard({
  src,
  photo,
  title,
  framework = "REACTJS",
  css = "TAILWINDCSS",
}: projectProps) {
  return (
    <a href={src} target="_blank">
      <div className="rounded-md shadow-xl flex flex-col h-full">
        <img src={photo} className="w-full h-3/2 rounded-t-md" />
        <div className="px-1 flex flex-col gap-2 justify-evenly my-1 border- border-gray-600">
          <h3>Tecnologie:</h3>
          <div className="flex gap-2 m-1">
            <div className="bg-rose-500 px-3  rounded-3xl text-blue-50">
              <p>{framework}</p>
            </div>
            <div className="bg-rose-500 px-3  rounded-3xl text-blue-50">
              <p>{css}</p>
            </div>
          </div>
          <div className="ps-2">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>
      </div>
    </a>
  );
}
