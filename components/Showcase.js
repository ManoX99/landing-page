import Information from './Information'

const Showcase = ({ color, fader, info, animate, calculateSteps }) => {
  const imagePicker = (color) => {
    switch (color) {
      case 'floats' :
        return '/images/natours.webp'
      case 'next':
        return '/images/next.webp';
      case 'grid':
        return '/images/nexter.webp';
      case 'flexbox':
        return '/images/trillo.webp';
      case 'redux':
        return '/images/redux.webp';
      default:
        return '/images/natours.webp';
    }
  }

  return ( 
    <div className='showcase'>
      <div className='showcase__information'>
        <Information color={color} fader={fader} info={info} animate={animate} calculateSteps={calculateSteps}/>
      </div>
      <div className='showcase__img-container'>
        <img src={`${imagePicker(color)}`} alt="image of a webpage" className={`showcase__img ${fader}`} />
      </div>
    </div>
   );
}
 
export default Showcase;