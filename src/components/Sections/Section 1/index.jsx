import Me from '../../../assets/Me.jpeg'
import Buttons from '../../Buttons'

function Section1() {
  const title = 'Je suis Valdès AGBOKONI Développeur et Designeur Web'

  return (
    <section className="my-5" id="valdesyrn">
      <div className="container">
        <div className="row gy-4 gy-md-0 align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="fw-bold">{title}</h1>
            <h2 className="fw-lighter">Bienvenue dans mon univers créatif</h2>
            <Buttons />
          </div>
          <div className="col-12 col-md-6">
            <img src={Me} alt="portrait" className="w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section1
