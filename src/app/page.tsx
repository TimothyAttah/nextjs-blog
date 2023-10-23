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
            By
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
          <p>Exploring the playground now.</p>
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
          <h4>This is it. Help me find my way oh Lord.</h4>
          <p>Today is another day oh Lord.</p>
        </a>
        <div className='text_box'>
          <h1>DANIEL COMMENT</h1>
          <h2>Dan changed this comment...</h2>
          <p>This is another comment.</p>
          <span>This is a span tag. Try to change it.</span>
          <h3>This is a subheader in h3 tag.</h3>
          <p>This tag is called the paragraph tag.</p>
          <p>Where did you change Dan.</p> {/** THIS IS CALLED A COMMENT*/}
        </div>
        <div>
          <h2 className='subheading'>Yes. The blacklist is here.</h2>
          <p>Yes this is another comment again today. </p>
          <p>Try and change something if the laptop is at home. Thank you.</p>
          <ul className='list__items'>
            <li>This is use for list of items.</li>
            <li>Add something else here.</li>
            <li>This is another list. Change the sentence.</li>
            <li>I just want to say thank You Lord.</li>
            <li>Some things will start happening now from henceforth.</li>
            <li>Try finish one app!!!</li>
            <li>This is good Daniel. You are doing well.</li>
            <li>You too Mark!!!</li>
          </ul>
        </div>
        <div>
          <p>Thank God for today.</p>
          <h1>Thank God for journey mercies.</h1>
          <p>God help me. And help us too.</p>
          <h1>Thank you Lord for today.</h1>
          <p>
            Download instagram clone video. I don`&apos;`t know where to get the
            data from now.
          </p>
          <p>
            Oh yes. Today is another day Oh Lord. Let your Mercy come upon us oh
            Lord!
          </p>
          <p>
            Thank you Lord for today. I know your grace will be upon me tomorrow
            and upon my family. From now on in Jesus name. Amen.
          </p>
          <p>
            Lord let your mercy come upon me and my family in Jesus name. Amen.
          </p>
        </div>
        <div>
          <h1>Thank you Lord God for the journey mercy of my mum. </h1>
          <p>And for our GOING and COMING. We praise and thank you. </p>
          <p>Thank God for journey mercies.</p>
          <p>Today is another day. Take control. Amen</p>
          <p>Everything will work out for our good in Jesus name.</p>
          <p>I cannot thank you enough oh Lord!!!</p>
          <h2>Lord I need your guidance.</h2>
        </div>
        <div>
          <h1>
            Oh Lord give my brother Mark quick healing and good health in Jesus
            name. Amen.
          </h1>
          <p>No weapon fashion againt shall prosper.</p>
        </div>
      </div>
    </main>
  );
}
