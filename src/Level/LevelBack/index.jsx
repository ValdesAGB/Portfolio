function LevelBack({ level, icone, name }) {
  return (
    <>
      <div className="col-5 col-sm-3">
        <div className="d-flex ">
          <i className={icone}></i>
          <p className="fw-bold ms-2">{name}</p>
        </div>
      </div>
      <div className="col">
        <div className="progress" data-bs-toggle="tooltip" title={level}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            style={{ width: level }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </>
  )
}
export default LevelBack
