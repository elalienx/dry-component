// Project file
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list }) {
  // Component
  const ShoppingItems = list.map((item) => (
    <ShoppingItem key={item.id} item={item} />
  ));

  return <ul className="shopping-list">{ShoppingItems}</ul>;
}
