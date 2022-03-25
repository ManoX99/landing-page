import { useState, useEffect } from 'react'
import Head from 'next/head'
import Showcase from '../components/Showcase'
import info from '../information.json'

export const getStaticProps = async () => {
  return {
    props: {
      info
    }
  }
}

export default function Home({info}) {

  const [ firstRender, setFirstRender ] = useState('true')
  const [ colorId, setColorId ] = useState('floats');
  const [ fader, setFader ] = useState('fade-in');
  const [ delayColorId, setdelayColorId ] = useState(colorId);
  const [ animate, setAnimate ] = useState(true);

  useEffect(() => {
    if (!firstRender) {
      setFader('fade-out');
      setAnimate(false)
    } else {
      setFirstRender(false);
    }

    // change color and animation with 1s delay
    setTimeout(() => {  
      setFader('fade-in');
      setdelayColorId(colorId);
      setAnimate(true)
    }, 1000);
  }, [colorId]);

  const calculateSteps = (steps) => {
    return {animation: `typewriter 2s steps(${steps}) forwards`}
  }

  const paragraph = info.paragraph[delayColorId]

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet" />
      </Head>
      <header className={`header ${fader}`}>
        <h1 className={`header__title ${delayColorId} `}>Christos Manoloulis Portfolio</h1>
         <p className='header__paragraph'>{paragraph}<span className="animation" style={animate ? calculateSteps(paragraph.length): {}}></span></p>
      </header>
      <main className='main'>
        <nav>
          <ul className='main__list'>
            <li className='main__list-item next'><button type='button' onClick={()=>setColorId('next')}>Next</button></li>
            <li className='main__list-item flexbox'><button type='button' onClick={()=>setColorId('flexbox')}>Flexbox</button></li>
            <li className='main__list-item floats'><button type='button' onClick={()=>setColorId('floats')}>Floats</button></li>
            <li className='main__list-item grid'><button type='button' onClick={()=>setColorId('grid')}>Grid</button></li>
            <li className='main__list-item redux'><button type='button' onClick={()=>setColorId('redux')}>Redux</button></li>
          </ul>
        </nav>
        <Showcase color={delayColorId} fader={fader} info={info} animate={animate} calculateSteps={calculateSteps}/>
        {/* <article className='about'>
          <h3 className={`about__title ${delayColorId} ${fader}`}>About me</h3>
          <p className='about__paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </article> */}
        <a className={`link ${colorId}`}>Visit the project</a>        
        <footer className='footer'>asda</footer>
      </main>
    </>
  )
}
