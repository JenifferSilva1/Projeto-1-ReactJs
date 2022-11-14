import { useState, useEffect, useRef } from 'react'
import './App.css';
import { motion } from 'framer-motion'
import img1 from '../src/img/img1.jpg'
import img2 from '../src/img/img2.jpg'
import img3 from '../src/img/img3.jpg'
import img4 from '../src/img/img4.jpg'
import img5 from '../src/img/img5.jpg'
import img6 from '../src/img/img6.jpg'

const images = [img1, img2, img3, img4, img5, img6]

function App() {

  const carousel = useRef();
  const [width, setWidth] = useState(0)
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (

    <div className="App">

      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <h1>Music is the universal language of mankind</h1>
        <motion.div className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
              {/* todas as imagens se transformam em "image", pois seguirá uma sequencial  que mapeará elas dessa forma para fazer a animação. Caso eu não quisesse mapear de forma sequencial e quisesse, por exemplo, 1 e 3, teria que  fazer
               <motion.div className="item" key={image}> mudar KEY com o nome da imagem - e criar um motion.div item key para cada uma, como uma pra 1, outra pra 3, etc.
                 <img src={image} alt="texto alt"/> </motion.div> */}
      
          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="texto alt" />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

    </div>
  );
}

export default App;
