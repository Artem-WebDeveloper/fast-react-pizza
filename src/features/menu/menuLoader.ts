import { getMenu } from '../../services/apiRestaurant';

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export type LoaderMenu = Awaited<ReturnType<typeof menuLoader>>;
