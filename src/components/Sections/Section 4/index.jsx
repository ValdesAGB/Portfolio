import Formulaire from '../../Formulaire'
import Coffee from '../../../assets/grab-a-coffee.jpg'

function Section4() {
  return (
    <section className="my-5" id="contact">
      <div className="bg-light">
        <div className="container">
          <h2>Un projet de creatin web.?</h2>
          <h3 className="fs-3 fs-md-2">Allons en discuter autour d'un café.</h3>
          <div className="row gy-4 gy-md-0 py-3 align-items-center">
            <div className="col-12 col-md-6">
              <img src={Coffee} alt="café" className="w-100" />
            </div>
            <Formulaire />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section4
