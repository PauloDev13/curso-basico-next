// import Image from 'next/image';
import styles from './header.module.scss';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import ActiveLink from '../ActiveLink';

export function Header() {
  // const { asPath } = useRouter();
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        {/*<Image src="/logo.svg" width={100} height={100} />*/}
        <img src="/logo.svg" alt="DevNews" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>{' '}
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
          {/*<Link href="/">
            <a className={asPath === '/' ? styles.active : ''}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>*
          </Link>*/}
        </nav>
      </div>
    </header>
  );
}
