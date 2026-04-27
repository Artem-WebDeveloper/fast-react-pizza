import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        {isRouteErrorResponse(error)
          ? `${error.status}: ${error.data}`
          : String(error) || 'Unknown Error'}
      </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
