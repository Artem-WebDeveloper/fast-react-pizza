import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col">
      <h1 className="text-center text-xl">Something went wrong 😢</h1>
      <p className="mt-2 mb-4">
        {isRouteErrorResponse(error)
          ? `${error.status}: ${error.data}`
          : String(error) || 'Unknown Error'}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
