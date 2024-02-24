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

      <Carousel.Item interval={200}>
        <img src='img\carousel\banner_midiabox_b7.png' className='carousel-img-banner' alt='Receptor Satélite B7' />
      </Carousel.Item>

      <Carousel.Item interval={400}>
        <img src='img\carousel\banner_parabol_century.png' className='carousel-img-banner' alt='Parabólica Century' />
      </Carousel.Item>

      <Carousel.Item interval={400}>
        <img src='img\carousel\banner_amplimax_4g.png' className='carousel-img-banner' alt='Amplimax 4G' />
      </Carousel.Item>

      <Carousel.Item interval={400}>
        <img src='img\carousel\banner_amplimax.png' className='carousel-img-banner' alt='Amplimax 4G' />
      </Carousel.Item>

      <Carousel.Item interval={400}>
        <img src='img\carousel\banner_rigol.png' className='carousel-img-banner' alt='Osciloscopio Rigol' />
        <Carousel.Caption>
          <div style={{ color: 'white' }}>
            <h3>Osciloscópio Rigol</h3>
            <p>200Mhz 2canais 1gs digital DS1202Z</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default ControlledCarousel;