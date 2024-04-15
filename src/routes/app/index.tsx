import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { useNavigate, type DocumentHead, Form } from '@builder.io/qwik-city';
import styles from './app.css?inline';

export const head: DocumentHead = {
  title: 'PWA - Shabad OS',
  meta: [
    {
      name: 'description',
      content: 'Landing page for exploring a PWA of Shabad OS',
    },
  ],
};

export default component$(() => {
  useStyles$(styles);
  const searchInput = useSignal('');
  const nav = useNavigate();
  return (
    <div>
      <article>
        <h2>Search (Experimental)</h2>
        <Form
          onSubmitCompleted$={async () =>
            await nav(`/app/search/${searchInput.value.substring(0, 4)}`)
          }
        >
          <input
            type='search'
            maxLength={4}
            minLength={1}
            spellcheck={false}
            autoCorrect='off'
            autoCapitalize='none'
            autoComplete='off'
            onChange$={(_, el) => (searchInput.value = el.value)}
          />
        </Form>
        <p>
          Use first-letter gurbani or pronunciation. (E.g. try "ਸਹਦ", "ਨਕਝ",
          "shd", or "nkj" for "ਸਤਿਗੁਰੁ ਹੋਇ ਦਇਆਲੁ ਨ ਕਬਹੂੰ ਝੂਰੀਐ")
        </p>
        <hr />
      </article>
      <div>
        <div class='carousel'>
          <div class='carousel__title'>
            <h2>Nitnem (Morning)</h2>
          </div>
          <div class='cards'>
            <a class='card' href='jap-ji-sahib'>
              <p>
                <b>ਜਪੁ ਜੀ ਸਾਹਿਬ</b>
              </p>
              <p>
                <i>Jap Jī Sāhib</i>
              </p>
              <p>Meditate</p>
            </a>
            <a class='card' href='jap-sahib'>
              <p>
                <b>ਜਾਪੁ ਸਾਹਿਬ</b>
              </p>
              <p>
                <i>Jāp Sāhib</i>
              </p>
              <p>Meditations</p>
            </a>
            <a class='card' href='twa-prasad-swaye'>
              <p>
                <b>ਤ੍ਵ ਪ੍ਰਸਾਦਿ - ਸ੍ਵਯੇ</b>
              </p>
              <p>
                <i>Twa-Prasād Swaye</i>
              </p>
              <p>In praise of your grace</p>
            </a>
            <a class='card' href='kabyo-bac-benti-copai'>
              <p>
                <b>ਕਬ︀︁ਯੋ ਬਾਚ ਬੇਨਤੀ - ਚੌਪਈ</b>
              </p>
              <p>
                <i>Kabyo Bāc Bentī Cōpaī</i>
              </p>
              <p>Spiritual safety and defense</p>
            </a>
            <a class='card' href='anand-sahib'>
              <p>
                <b>ਅਨੰਦੁ ਸਾਹਿਬ</b>
              </p>
              <p>
                <i>Anañd Sāhib</i>
              </p>
              <p>Bliss</p>
            </a>
          </div>
        </div>
        <div class='carousel'>
          <div class='carousel__title'>
            <h2>Nitnem (Evening & Night)</h2>
          </div>
          <div class='cards'>
            <a class='card' href='rehras-sahib'>
              <p>
                <b>ਰਹਰਾਸਿ ਸਾਹਿਬ</b>
              </p>
              <p>
                <i>Rēhrās Sāhib</i>
              </p>
              <p>Rules and customs</p>
            </a>
            <a class='card' href='kirtan-sohila'>
              <p>
                <b>ਕੀਰਤਨ ਸੋਹਿਲਾ</b>
              </p>
              <p>
                <i>Kīrtan Sohilā</i>
              </p>
              <p>Song of Praise</p>
            </a>
          </div>
        </div>
        <div class='carousel'>
          <div class='carousel__title'>
            <h2>Ardas</h2>
          </div>
          <div class='cards'>
            <a class='card' href='ardas'>
              <p>
                <b>ਅਰਦਾਸ</b>
              </p>
              <p>
                <i>Ardās</i>
              </p>
              <p>A humble aspiration</p>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <br />
        <div class='carousel'>
          <div class='carousel__title'>
            <h2>Path</h2>
          </div>
          <div class='cards'>
            <a class='card' href='f/sggs/1'>
              <p>
                <b>ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ</b>
              </p>
              <p>
                <i>srī gurū granth sāhib jī</i>
              </p>
            </a>
            <a class='card' href='f/sdgr/1'>
              <p>
                <b>ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ</b>
              </p>
              <p>
                <i>srī dasam granth</i>
              </p>
            </a>
            <a class='card' href='f/gjnl/1'>
              <p>
                <b>ਗੰਜ ਨਾਮਾ</b>
              </p>
              <p>
                <i>ganj-nâme</i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
