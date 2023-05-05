import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import Filters from '../../components/filters/Filters';
import {
  ContainerGeneral,
  ContainerHero,
  ContainerDesc,
  ContainerImg,
  BackColorImg,
  Divider,
  ButtonHero,
  ContainerImgTop
} from './HomeStyles'
import Products from '../../components/products/Products';

const Home = () => {
  return (
    <ContainerGeneral>
      <ContainerImgTop>
        <Divider>
          <h1>Watcher: Tu sitio de referencia para relojes.</h1>
        </Divider>
      </ContainerImgTop>
      <ContainerHero>
        <ContainerDesc>
          <h1 >¡Hora de lucir elegante! Encuentra el reloj perfecto para ti en nuestra tienda en línea.</h1>
          <h3 >Explora nuestra colección de relojes de alta calidad y encuentra el estilo perfecto para cada ocasión, desde elegantes diseños para lucir impecable en eventos especiales hasta modelos deportivos para acompañarte en tus actividades diarias.</h3>
          <ScrollLink to='products-section' smooth={true} duration={500}>
            <ButtonHero> Examinar catálogo </ButtonHero>
          </ScrollLink>
        </ContainerDesc>
        <ContainerImg>
          <BackColorImg>
            <img src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1680712467/R4273-Reloj-Negro-Fondo-Negro-Brilloso-Sin-Numeros-Plastico-reloj-de-moda-al-mayoreo-scaled-fotor-bg-remover-20230405133415_zh727s.png" alt="" />
          </BackColorImg>
          <h2 style={{margin:'0'}}>ROYALE</h2>
          <h2 style={{margin:'0'}}>"Un reloj elegante para ocasiones especiales."</h2>
        </ContainerImg>
      </ContainerHero>
      <Divider>
        <h3 style={{textAlign:'center',margin:'0'}} id='products-section'>--- Catálogo de relojes ---</h3>
      </Divider>
      <Filters />
      <h2 style={{color:'white', textAlign:'start', fontFamily: 'Alkatra', fontSize:'33px', margin:'10px 0px'}}>Products</h2>
      <Products />
    </ContainerGeneral>
    
  )
}

export default Home;