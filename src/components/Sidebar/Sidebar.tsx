import './Sidebar.css'
import samanthaImg from '../../assets/png/samantha.png'
import { Link, useLocation } from 'react-router-dom'

const sidebarNavLinks = ['dashboard', 'expenses', 'wallets', 'summary', 'accounts', 'settings']

export default function Sidebar() {
  const location = useLocation()

  return (
    <>
      {/* Sidebar */}
      <aside className={'sidebar'}>
        {/* Sidebar space-around */}
        <div className={'sidebarContent'}>
          {/* Profile */}
          <div className={'profileDetails'}>
            <div className={'profileImageDiv'}>
              <img src={samanthaImg} alt="samantha" />
              <p className={'notifications'}>4</p>
            </div>
            <p className={'userName'}>Samantha</p>
            <p className={'userEmail'}>samantha@email.com</p>
          </div>

          <nav className={'sidebarNav'}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={'sidebarNavItem'} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? 'sidebarNavLink sidebarNavLinkActive'
                        : 'sidebarNavLink'
                    }
                    to={`/${sidebarNavLink}`}>
                    {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
