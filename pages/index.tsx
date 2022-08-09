import Link from 'next/link'
import { MainLayouts } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayouts>
        <h1>Home page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">About</Link>,  <Link href="/contact">Contact</Link> o <Link href="/pricing">Pricing</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>

    </MainLayouts>
  
  )
}
