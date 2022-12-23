import { Link } from 'react-router-dom'
import TheRight from '../Mentions légales'
import ReseauSocial from '../Réseaux'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md gy-md-0 gy-2">
              <div>
                <Link to="/" className="navbar-brand text-uppercase fw-bold">
                  {' '}
                  <span className="bg-primary bg-gradient p-1 rounded-3 text-light">
                    Valdès
                  </span>{' '}
                  AGBOKONI
                </Link>
              </div>
            </div>

            <TheRight />
            <ReseauSocial />
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
