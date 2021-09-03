export default function ShoppingItem({ item }) {
  const { name, price, acquired } = item;

  return (
    <li>
      <input type="checbox" value={acquired} />
      <span className="name">{name}</span>
      <span className="price">{price} kronas.</span>
    </li>
  );
}
