import Link from 'next/link'
// import 'bulma/css/bulma.css';
 

const Layout = ({ children }) => (
  <>
    <nav className='navbar'>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </nav>
    <main>{children}</main>
    <button className='button is-black'>Home</button>
    <style jsx>{`
      nav {
        text-align: center;
        background-color: red;
        max-width: 50%;
      }
      nav a {
        margin-right: 2px;
        padding: 4px;
      }
      main {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
)

export default Layout
