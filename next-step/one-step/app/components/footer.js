import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/"><img src="/images/github.svg" alt="logo" /></a>
        <a href="https://www.linkedin.com"><img src="/images/linkedin.svg" alt="logo" /></a>
        <a href="https://wwww.twitter.com"><img src="/images/twitter.svg" alt="logo" /></a>
        <a href="https://wwww.facebook.com"><img src="/images/facebook.svg" alt="logo" /></a>
        <hr />
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>&copy;{new Date().getFullYear()} Yuta Yamasaki</p>
      </div>
    </footer>
  )
}

export default Footer