export default function CourseItem({ item }) {
  const { id, name, dificulty, imageURL } = item;

  return (
    <article>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <small>{dificulty}</small>
      <a href={id}>Access course</a>
    </article>
  );
}
