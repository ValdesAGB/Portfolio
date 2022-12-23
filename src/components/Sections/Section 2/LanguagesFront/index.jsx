import { LanguagesFont } from '../../../../data'
import NiveauFront from '../../../../Level/LevelFront'
import code from '../../../../assets/code.jpg'
function LanguagesFront() {
  return (
    <div className="row gy-4 gy-md-0 py-4 align-items-center">
      <div className="col-12 col-md-8">
        <div className=" h-100 py-2">
          {LanguagesFont.map(({ name, level, icone, id }) => (
            <div className="row py-2" key={id}>
              <NiveauFront name={name} icone={icone} level={level} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-12 col-md align-items-center">
        <img src={code} alt="code" className="rounded-1 w-100" />
      </div>
    </div>
  )
}
export default LanguagesFront
