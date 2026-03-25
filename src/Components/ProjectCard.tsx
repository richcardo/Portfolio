export default function ProjectCard({
  src,
  photo,
  title,
}: {
  src: string;
  photo: string;
  title: string;
}) {
  return (
    <a href={src} target="_blank">
      <div className="rounded-md shadow-xl">
        <img src={photo} className="w-96" />
        <div className="ps-2">
          <p>{title}</p>
        </div>
      </div>
    </a>
  );
}
