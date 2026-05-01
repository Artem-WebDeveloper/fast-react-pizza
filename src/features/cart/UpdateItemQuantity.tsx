import { useAppDispath } from '../../store';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({
  pizzaId,
  currentQuantity,
}: {
  pizzaId: number;
  currentQuantity: number;
}) {
  const dispatch = useAppDispath();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="rounded"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="rounded"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
