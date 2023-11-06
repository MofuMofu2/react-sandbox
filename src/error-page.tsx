import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // isRouteErrorResponse が true を返す場合は、ErrorResponseの型を返す
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      {
        return (
          <div id="error-page">
            <h1>Oops!</h1>
            <p>
              <i>{`${error.status} ${error.statusText}`}</i>
            </p>
          </div>
        );
      }
    }

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}
