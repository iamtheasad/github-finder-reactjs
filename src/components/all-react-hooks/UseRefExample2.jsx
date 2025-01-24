// Note: This component shows how to use prev state in useEffect hook

import { useEffect, useRef, useState } from "react";

function UseRefExample2() {
  const renders = useRef(1);
  const prevName = useRef("");
  console.log({ renders, prevName });

  const [name, setName] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <form action="">
        <p>Renders: {renders.current}</p>
        <p>Prev Name: {prevName.current}</p>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-2 input border-2 border-gray-200"
        />
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseRefExample2;
