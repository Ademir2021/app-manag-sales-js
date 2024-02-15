import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    
      <Carousel
      prevIcon=''
      nextIcon=''
      variant='dark'
      activeIndex={index}
      onSelect={handleSelect}>

        <Carousel.Item interval={1000}>
          <img src='img\carousel\banner_link_4g.png' className="carousel-img-banner" alt='Aquario Link 4G' />
          <Carousel.Caption>
            {/* <p>-</p> */}
            {/* <p>-</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_midiabox_b7.png' className='carousel-img-banner' alt='Receptor Satélite B7' />
          <Carousel.Caption>
            {/* <h3>-</h3> */}
            {/* <p>-</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_amplimax.png' className='carousel-img-banner' alt='Amplimax 4G' />
          <Carousel.Caption>
            {/* <h3>-</h3> */}
            {/* <p>-</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_parabol_century.png' className='carousel-img-banner' alt='Parabólica Century' />
          <Carousel.Caption>
            {/* <h3>-</h3> */}
            {/* <p>-</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_amplimax_4g.png' className='carousel-img-banner' alt='Amplimax 4G' />
          <Carousel.Caption>
            <div style={{color:'white'}}>
            <h3>Elsys Amplimax</h3>
            <p>Internet de longo alcance</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_rigol.png' className='carousel-img-banner' alt='Osciloscopio Rigol' />
          <Carousel.Caption>
            <div style={{color:'white'}}>
            <h3>Osciloscópio Rigol</h3>
            <p>200Mhz 2canais 1gs digital DS1202Z</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  )
}

export default ControlledCarousel;