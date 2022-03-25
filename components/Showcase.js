import Information from './Information'

const Showcase = ({ color, fader, info, animate, calculateSteps }) => {
  const imagePicker = (color) => {
    switch (color) {
      case 'floats' :
        return '/images/natours.jpg'
      case 'next':
        return '/images/next.jpg';
      case 'grid':
        return '/images/nexter.jpg';
      case 'flexbox':
        return '/images/trillo.jpg';
      case 'redux':
        return '/images/redux.jpg';
      default:
        return '/images/natours.jpg';
    }
  }

  return ( 
    <div className='showcase'>
      <div className='showcase__information'>
        <Information color={color} fader={fader} info={info} animate={animate} calculateSteps={calculateSteps}/>
      </div>
      <div className='showcase__img-container'>
        <img src={`${imagePicker(color)}`} className={`showcase__img ${fader}`} />
      </div>
    </div>
   );
}
 
export default Showcase;