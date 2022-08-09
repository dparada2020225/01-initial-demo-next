import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayouts>
      <h1>Contact page</h1>
      <h1 className={'title'}>
        Ir a <Link href="./">Home</Link>
      </h1>

      <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact/index.jsx</code>
      </p>
    </MainLayouts>
  )
}