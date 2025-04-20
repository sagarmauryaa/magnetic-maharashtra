import Image from 'next/image'
import './index.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='ui-header'>
      <div className='ui-header__container'>
        <Link href="/" className='ui-header__logo'>
          <Image
            src="/images/StickyNavbar/Logo.svg"
            alt="Maharashtra"
            className='ui-header__logo-region'
            width={40}
            height={40}
          />
          <p>
            Magnetic <br />
            Maharashtra
          </p>
        </Link>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header