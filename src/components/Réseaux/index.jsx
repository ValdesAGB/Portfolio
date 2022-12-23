import { Link } from 'react-router-dom'
import { Reseaux } from '../../data'

function ReseauSocial() {
  return (
    <>
      <div className="col-md text-md-end gy-md-0 gy-2">
        <ul className="list-inline">
          {Reseaux.map(({ id, title, icone }) => (
            <li className="list-inline-item" key={id}>
              <Link
                href="#"
                className="text-decoration-none text-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
                title={title}
              >
                <i className={icone}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ReseauSocial
