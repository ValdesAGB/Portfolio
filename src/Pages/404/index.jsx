import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className="py-5 ">
        <div className=" row d-flex justify-content-center  bg-light">
          <div className="col-12  col-md-8 item-align-center container">
            <h1 className="m-5">Oups.!!! Page introuvable</h1>
          </div>
          <div className="col-12 col-md-4 item-align-center">
            <Link to="/" className="btn btn-primary m-5">
              <i className="bi bi-arrow-left"> Retour au portfolio</i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotFound
