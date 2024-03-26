import { useRouteError } from "react-router-dom";

export default function Error({}) {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error">
      <h1>Oops!</h1>
      <h3>An unexpected error has occurred.</h3>
      <p>{`${error.statusText} ${error.message}`}</p>
    </div>
  );
}
