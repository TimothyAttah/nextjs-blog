import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Docs <span>-&gt;</span>
            Go.
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Learn <span>-&gt;</span>
            Go.
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          <h2>Am gonna learn how to work with next js.</h2>
          <p>Lord help me!!!</p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>Templates...</h2>
          <p>Explore the Next.js 13 playground.</p>
          <p>Exploring the playground.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>Deploy!!!</h2>
          <h3>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </h3>
          <h4>This is it.</h4>
          <p>Today is another day oh Lord.</p>
        </a>
        <div>
          <h2>Dan change this comment...</h2>
          <p>This is another comment.</p>
          <span>This is a span tag. Try to change it.</span>
          <h3>This is a subheader in h3 tag.</h3>
          <p>Made another comment again.</p>
        </div>
        <div>
          <h2 className='subheading'>Yes. The blacklist is here.</h2>
          <p>Yes this is another comment again. </p>
          <p>Try and change something if the laptop is at home. Thank you.</p>
          <ul className='list__items'>
            <li>This is use for list of items.</li>
            <li>Add something else here.</li>
            <li>This is another list. Change the sentence.</li>
            <li>Happy Sunday to you all.</li>
          </ul>
        </div>
        <div>
          <h1>Happy Sunday Family...</h1>
          <p>Thank God for today.</p>
        </div>
      </div>
    </main>
  );
}
