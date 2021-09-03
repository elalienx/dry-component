// Project file
import CourseItem from "./CourseItem";

export default function CourseList({ list }) {
  // Component
  const CourseItems = list.map((item) => (
    <CourseItem key={item.id} item={item} />
  ));

  return <ul className="course-list">{CourseItems}</ul>;
}
