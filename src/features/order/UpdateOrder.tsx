import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import LoaderButton from '../../ui/LoaderButton';

function UpdateOrder() {
  const fetcher = useFetcher();

  const isUpdating = fetcher.state !== 'idle';

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isUpdating}>
        {isUpdating ? <LoaderButton /> : 'Make priority'}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
