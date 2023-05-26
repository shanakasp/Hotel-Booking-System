import './page.css'
import img1 from '../images/buddima.png'
import img2 from '../images/thrka.png'
import img3 from '../images/chmr.png'
import img4 from '../images/mn.png'
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3 text-color3">
    <div className='container'>
      <b>
        <h3>Devloped by "Angular Whiplash" from university of Moratuwa.</h3><br/>
        <div className="fp">
      <div className="fpItem">
        <img
          src={img1}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kumari H.K.B.K.</span>
        <h5>Group leader</h5>
        <div className="fpRating">
          <button>kumarihkbk.20@uom.lk</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img2}
          alt=""
          className="fpImg"
        />
        <span className="fpName"></span>
        <div className="fpRating">
          <button></button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pallikonda D.C.P.</span>
        <div className="fpRating">
          <button>pallikondadcp.20@uom.lk</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Prince J.B.T.S.</span>
        <div className="fpRating">
          <button>princejbts.20@uom.lk</button>
        </div>
      </div>
    </div>
       </b>
       <h3>Special thanks for Mr Kawinda from Sutra Technologies.</h3>
       <Footer></Footer>
       </div>
    </div>
  );
};

export default ContactUs;
