import furniture from "./assets/furniture.webp"
import CustImg from "./CustImg"
function Col(){
    return(
        
        <div class="card">
          <div className="col about">
            <h1 className="about-title">What Are We About</h1>
            <p className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ullam quasi culpa perspiciatis sit, voluptates officiis.Ullam quasi culpa perspiciatis sit, voluptates officiis.</p>
            <button className="about-btn">EXPLORE MORE</button>
          </div>
          <div className="col gallery">
              <img src={furniture} alt="" className="custimg" />
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
              <img src={furniture} alt="" className="custimg"/>
          </div>
      </div>
    )
}
export default Col 