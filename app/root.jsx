import { Link, Links, Meta, Outlet, LiveReload } from 'remix'
import globalStyleUrl from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalStyleUrl }]
export const meta = () => {
  const description = 'A cool blog built with Remix'
  const keywords = 'remix, react, javascript'
  return {
    description,
    keywords,
  }
}
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : 'Remix Blog'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)

  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <pre>{error.message}</pre>
      </Layout>
    </Document>
  )
}
