import { useRouter } from 'next/router';

import Link from 'next/link';
import { CSSProperties, FC } from 'react';

const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
    
}


interface Props{
  text: String;
  href: String;

}
export const ActiveLink:FC <Props>= ({ text, href,}) => {

    const router = useRouter();
    console.log(router.query )
    const UrlLocal = "http://localhost:3000" || "https://01-initial-demo-next.vercel.app" 
    
  return (
    <Link href={new URL(UrlLocal+ href)}>
      <a style={ router.asPath === href ? style : undefined}> {text} </a>
      
    </Link>
  );
};
//window.location.host <a style={style}> {text} </a>