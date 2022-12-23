import LanguagesBack from './LanguagesBack'
import LanguagesFront from './LanguagesFront'

function Section2() {
  return (
    <section className="my-5" id="expertise">
      <div className="bg-light">
        <div className="container">
          <div>
            <h3 className="fs-3 fs-md-2">Mon expertise</h3>
            <h4>Développement web et design</h4>
          </div>

          <LanguagesFront />
          <LanguagesBack />
        </div>
      </div>
    </section>
  )
}
export default Section2
