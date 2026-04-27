import { useLoaderData } from 'react-router-dom';

import MenuItem from './MenuItem';
import type { LoaderMenu } from './menuLoader';

function Menu() {
  const menu = useLoaderData<LoaderMenu>();

  console.log(menu);

  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
