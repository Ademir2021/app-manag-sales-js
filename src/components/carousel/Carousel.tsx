import './Carousel.css'

export function Carousel() {

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='img\carousel\banner_link_4g.png' className="carousel-img-banner" alt='Aquario Link 4G' />
          </div>
          <div className="carousel-item">
            <img src='img\carousel\new_midia_box_b7.png' className='carousel-img-banner' alt='Receptor Satélite B7' />
          </div>
          <div className="carousel-item">
            <img src='img\carousel\banner_amplimax.png' className='carousel-img-banner' alt='Amplimax 4G' />
          </div>
          <div className="carousel-item">
            <img src='img\carousel\banner_amplimax.png' className='carousel-img-banner' alt='Amplimax 4G 2' />
          </div>
          <div className="carousel-item">
            <img src='img\carousel\banner_parabol_century.png' className='carousel-img-banner' alt='Parabólica Century' />
          </div>
          <div className="carousel-item">
            <img src='img\carousel\banner_rigol.png' className='carousel-img-banner' alt='Osciloscopio Rigol' />
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
      </div>
    </>
  )
}