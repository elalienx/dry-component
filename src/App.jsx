// Project files
import CourseList from "./components/CourseList";
import ShoppingList from "./components/ShoppingList";
import "./css/sakura.css";

export default function App() {
  // Properties
  const courseData = [
    {
      id: 0,
      name: "Summer bootcamp",
      difficulty: "easy",
      imageURL: "https://picsum.photos/50",
    },
    {
      id: 1,
      name: "Frontend",
      difficulty: "medium",
      imageURL: "https://picsum.photos/50",
    },
    {
      id: 2,
      name: "Backend",
      difficulty: "hard",
      imageURL: "https://picsum.photos/50",
    },
  ];

  const shoppingData = [
    { id: 0, name: "Sofa", price: 555, acquired: false },
    { id: 1, name: "TV Stand", price: 800, acquired: true },
    { id: 2, name: "Cushion", price: 49, acquired: false },
  ];

  return (
    <div className="App">
      <h1>Dry + Abstraction</h1>

      {/* Not scalable */}
      <CourseList list={courseData} />
      <ShoppingList list={shoppingData} />

      {/* Scalable solution */}
    </div>
  );
}
