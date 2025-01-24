import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "#1882ff";
    inputRef.current.style.color = "#ffffff";
    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          ref={inputRef}
          id="name"
          className="form-control mb-2 input border-2 border-gray-200"
        />

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>

        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
