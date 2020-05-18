import Link from 'next/link'
import { Button } from 'semantic-ui-react';

const Layout = ({ children }) => (
  <>
    <nav>
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
    <Button>Home</Button>
    <style jsx>{`
      nav {
        text-align: center;
        background-color: red;
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
