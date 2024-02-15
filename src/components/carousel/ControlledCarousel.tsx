import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
// import '../global-module.css'

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
            {/* <p>First slide label</p> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\new_midia_box_b7.png' className='carousel-img-banner' alt='Receptor Satélite B7' />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_amplimax.png' className='carousel-img-banner' alt='Amplimax 4G' />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_parabol_century.png' className='carousel-img-banner' alt='Parabólica Century' />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_amplimax_4g.png' className='carousel-img-banner' alt='Amplimax 4G' />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item  interval={1000}>
          <img src='img\carousel\banner_rigol.png' className='carousel-img-banner' alt='Osciloscopio Rigol' />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  )
}

export default ControlledCarousel;