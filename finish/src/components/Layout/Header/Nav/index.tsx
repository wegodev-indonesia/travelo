import NavItem from '../NavItem'

const Nav = () => {
  return (
    <nav className="flex items-center gap-5">
      <NavItem href="/" label="Beranda" />
      <NavItem href="/" label="Kontak" />
      <NavItem href="/" label="Paket" />
      <NavItem href="/" label="Testimonial" />
    </nav>
  )
}

export default Nav
