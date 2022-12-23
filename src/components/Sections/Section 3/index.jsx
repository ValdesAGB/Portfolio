import { Projets } from '../../../data'
import Card from '../../Card'

function Section3() {
  return (
    <section className="my-5" id="portfolio">
      <div className="container">
        <h2>Mon portfolio</h2>
        <h3 className="fs-3 fs-md-2">Projets perso et pro</h3>

        <div className="row gy-4 gy-md-0 py-1 ">
          {Projets.map(
            ({
              dataBsTargetOffcanvas,
              idTargetOffcanvas,
              carrouselTarget,
              idCarrousel,
              title,
              description,
              id,
              cover,
              carrouselCover,
            }) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                <div className="py-4">
                  <Card
                    carrouselCover={carrouselCover}
                    cover={cover}
                    title={title}
                    description={description}
                    dataBsTargetOffcanvas={dataBsTargetOffcanvas}
                    idTargetOffcanvas={idTargetOffcanvas}
                    carrouselTarget={carrouselTarget}
                    idCarrousel={idCarrousel}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Section3
