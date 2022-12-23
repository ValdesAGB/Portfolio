import { LanguagesBacks } from '../../../../data'
import LevelBack from '../../../../Level/LevelBack'

function LanguagesBack() {
  return (
    <div className="row gy-4 gy-md-0 py-4  align-items-center">
      <div className="col-12 col-md">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ah2LrgOW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ew4k338se6hhvfsb5qo.jpg"
          alt="design"
          className="rounded-1 w-100"
        />
      </div>

      <div className="col-12 col-md-8 py-2">
        <div className=" h-100  ">
          {LanguagesBacks.map(({ name, icone, id, level }) => (
            <div className="row" key={id}>
              <LevelBack key={id} level={level} icone={icone} name={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default LanguagesBack
