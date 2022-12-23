import { Link } from 'react-router-dom'

function TheRight() {
  return (
    <div className="col-md gy-md-0 gy-2">
      <div className="d-flex justify-content-md-center ">
        <Link
          className="btn text-decoration-none text-black p-0 p-md-1 fw-lighter"
          data-bs-toggle="modal"
          data-bs-target="#MentionsLegales"
        >
          Mentions Légales
        </Link>
        <div
          className="modal fade"
          id="MentionsLegales"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Mentions légales
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                odit quibusdam voluptate nesciunt, suscipit blanditiis sequi
                officiis molestias, repellendus minima atque, eaque porro
                delectus! Laborum amet dolorum neque ipsum non! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Quia odit
                quibusdam voluptate nesciunt, suscipit blanditiis sequi officiis
                molestias, repellendus minima atque, eaque porro delectus!
                Laborum amet dolorum neque ipsum non!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheRight
