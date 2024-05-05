import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Lotus from '../icons/lotus';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div>
        <a href='/' class='logo' draggable={false}>
          <div class='lotus'>
            <Lotus />
          </div>
          <span>Shabad OS</span>
        </a>
        <ul>
          <li>
            <a href='/app' draggable={false}>
              ⋈<span class='label'>App</span>
            </a>
          </li>
          <li>
            <a href='/articles' draggable={false}>
              ☐<span class='label'>Articles</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
