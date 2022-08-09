import Head  from 'next/head';
import { FC } from 'react';
import {Navbar} from "../Navbar";
import styles from './MainLayout.module.css';

//export const MainLayouts: FC = ({children}) => {
  export const MainLayouts = (props: any) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home- Denil</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
          {props.children}
          </main>
        </div>
      )
}
