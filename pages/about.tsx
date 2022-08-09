import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayouts } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
        <>
        <h1>About page</h1>
        <h1 className={'title'}>
          Ir a <Link href="./">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
       </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) { 
  
  return(
    <MainLayouts>
        <DarkLayout>
          {page}
        </DarkLayout>
    </MainLayouts>
  )

}
