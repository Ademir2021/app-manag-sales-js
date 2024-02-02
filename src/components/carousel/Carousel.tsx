export function Carousel() {

  return (
    <>
      <div style={{
        backgroundColor: 'black',
        padding: '12px',
        borderRadius: '3px'
      }}>
        <h3
        className='text-center'
        ><a href='form_person'>
          <b>Cadastre-se e faça suas Compras</b></a></h3>
      </div>
      <p></p>
      <div
        id="carouselExampleIndicators"
        className="carousel slide text-center"
        data-ride="carousel"
        style={{
          backgroundColor: '#337ab7',
          borderRadius: '3px',
          padding:'18px'
      }}
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">

          <div className="carousel-item active">
            {/* <img
              className="d-block w-100 img-carousel"
              src="..."
              alt="1" /> */}
            <div style={{ color: 'white' }}>
              <h1>Compras segura</h1>
              <p>Confiança - Rapidez - Facilidade</p>
            </div>
          </div>

          <div className="carousel-item">
            {/* <img
              className="d-block w-100 img-carrousel"
              src="..."
              alt="2" /> */}
            <div style={{ color: 'white' }}>
              <h1>Sejam bem vindos</h1>
              <p><a href='register'>Criar conta</a></p>
            </div>
          </div>

          <div className="carousel-item ">
            {/* <img
              className="d-block w-100 img-carousel"
              src=""
              alt="3" /> */}
            <div style={{ color: 'white' }}>
              <h1>Preços imperdiveis</h1>
              <p>Compre e pague em até 12 parcelas</p>
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="sr-only"></span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>

      <p></p>
    </>
  )
}