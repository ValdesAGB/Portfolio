function Formulaire() {
  return (
    <div className="col-12 col-md offset-md-1">
      <div className=" py-4 h-100">
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Prénoms
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary col-12">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}
export default Formulaire
