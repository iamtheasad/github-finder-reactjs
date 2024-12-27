import spinner from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="mt-20">
      <img width={180} className="mx-auto" src={spinner} alt="LoadingImage" />
    </div>
  );
}

export default Spinner;
