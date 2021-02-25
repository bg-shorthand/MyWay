import { getMenu } from './state/menuState';
import chooseSectionRender from './chooseSection/chooseSectionRender';
import renderMyFavorite from './mywaySection/renderMyFavorite';
import { resetTitle, generateName } from './titleSection/generateName';
import myMyWayMain from './mywaySection/myWayMain';
import chooseSectionMain from './chooseSection/chooseSectionMain';
import carousel from './mywaySection/myWaycarousel';

chooseSectionMain();
resetTitle();
myMyWayMain();
carousel();

document.addEventListener('DOMContentLoaded', async () => {
  const $spinnerContainer = document.querySelector('.spinner-container') as HTMLElement;
  await Promise.all([
    new Promise((res, _) => {
      setTimeout(() => {
        res(generateName());
      }, 2000)
    }),
    renderMyFavorite(),
    chooseSectionRender(),
    getMenu(),
  ]);
  $spinnerContainer.style.display = 'none';
});
