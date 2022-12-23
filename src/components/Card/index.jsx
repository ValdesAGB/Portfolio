import Offcanvas from '../Offcanvas'

function Card({
  dataBsTargetOffcanvas,
  idTargetOffcanvas,
  carrouselTarget,
  idCarrousel,
  title,
  description,
  cover,
  carrouselCover,
}) {
  return (
    <div className="card">
      <img src={cover} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Offcanvas
          carrouselCover={carrouselCover}
          dataBsTargetOffcanvas={dataBsTargetOffcanvas}
          idTargetOffcanvas={idTargetOffcanvas}
          carrouselTarget={carrouselTarget}
          idCarrousel={idCarrousel}
        />
      </div>
    </div>
  )
}
export default Card
