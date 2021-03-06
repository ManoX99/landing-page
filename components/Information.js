const Information = ({ color, fader, info, animate, calculateSteps }) => {
  return ( 
    <article className="information">
      <h2 className={`information__title ${color} ${fader}`}>Project Information</h2>
      <ul className="information__list">
        {info.information[color].map(data =>{
          return <li className="information__list-item" key={data}>{data} <span className='animation animation--grey' style={animate ? calculateSteps(data.length): {}}></span></li>
        }
        )}
      </ul>
    </article>
   );
}
 
export default Information;