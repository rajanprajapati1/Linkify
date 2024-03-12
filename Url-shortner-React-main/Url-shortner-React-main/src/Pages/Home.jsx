import React from 'react'
import Svg1 from '../../public/1.svg'
import Svg2 from '../../public/2.svg'
import Svg3 from '../../public/3.svg'
import Svg4 from '../../public/4.svg'
import Svg5 from '../../public/5.svg'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (<>
    <div className='Home'>
      <div className="detail_Container">
        <h4>
          <b>Lets make with Simply One Click 👆</b>
        </h4>
        <h1>Discover <b>LinkiFy</b> a straightforward URL <b>shortener</b> </h1>
        <br />
        <p>Explore 'InfoLink,' our versatile URL shortener that not only creates concise links but also offers insightful analytics and details for a comprehensive link-sharing experience.</p>
        <br />
        <br />
        <NavLink className={"btn-click"} to={"/Genrate"}>Click Here To Genrate Now 🔥</NavLink>
      </div>
      <div className="image_container">
        <div className="svg_container">
          <img src={Svg1} alt="SVG 1" />
        </div>
        <div className="svg_container">
          <img src={Svg2} alt="SVG 2" />
        </div>
        <div className="svg_container">
          <img src={Svg3} alt="SVG 3" />
        </div>
        <div className="svg_container">
          <img src={Svg4} alt="SVG 4" />
        </div>
        <div className="svg_container">
          <img src={Svg5} alt="SVG 5" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
