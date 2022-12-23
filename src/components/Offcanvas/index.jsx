import { Link } from 'react-router-dom'

function Offcanvas({
  dataBsTargetOffcanvas,
  idTargetOffcanvas,
  carrouselTarget,
  idCarrousel,
  carrouselCover,
}) {
  return (
    <>
      <Link
        data-bs-toggle="offcanvas"
        data-bs-target={dataBsTargetOffcanvas}
        className="btn btn-primary"
      >
        Voir plus
      </Link>

      <div
        className="offcanvas offcanvas-bottom h-75"
        tabIndex="-1"
        id={idTargetOffcanvas}
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            Offcanvas bottom
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small">
          <div
            id={idCarrousel}
            className="carousel slide h-100"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner h-100">
              <div
                data-bs-interval="3000"
                className="carousel-item h-100 active"
              >
                <img src={carrouselCover} className="d-block w-100" alt="..." />
              </div>
              <div data-bs-interval="3000" className="carousel-item h-100">
                <img src={carrouselCover} className="d-block w-100" alt="..." />
              </div>
              <div data-bs-interval="3000" className="carousel-item h-100">
                <img src={carrouselCover} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={carrouselTarget}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={carrouselTarget}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Offcanvas
