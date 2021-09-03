export default function List({ list, Component }) {
  // Properties
  const Items = list.map((item) => <Component key={item.id} item={item} />);

  return <ul>{Items}</ul>;
}
