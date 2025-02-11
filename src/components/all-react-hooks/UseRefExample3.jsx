import { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {/* From React 18 it won't show any error  */}
      {showTodo && <Todo />}
      <button
        className="btn button btn-success"
        onClick={() => setShowTodo(!showTodo)}
      >
        Show Todo
      </button>
    </div>
  );
}

export default UseRefExample3;
