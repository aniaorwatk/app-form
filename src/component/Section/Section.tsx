import labels from "../../labels";
import PhotoAE from "../../assets/Albert-Einstein.jpg";
import PhotoD from "../../assets/Dalajlama.jpg";
import PhotoHS from "../../assets/Henryk-Sienkiewicz.jpg";
import PhotoMC from "../../assets/Marie-Curie.jpg";
import PhotoWS from "../../assets/William-Szekspir.jpg";
import "./Section.scss";

const Section = () => {
  const ImgAE = PhotoAE;
  const ImgD = PhotoD;
  const ImgHS = PhotoHS;
  const ImgMC = PhotoMC;
  const ImgWS = PhotoWS;

  return (
    <div className="sectionBox">
      <img
        className="photo1"
        src={ImgAE}
        alt={labels.section.altAlbertEinstein}
      />
      <img className="photo2" 
      src={ImgD} 
      alt={labels.section.altDalajlama} />
      <img
        className="photo3"
        src={ImgHS}
        alt={labels.section.altHenrykSienkiewicz}
      />
      <img className="photo4" 
      src={ImgMC} 
      alt={labels.section.altMarieCurie} />
      <img
        className="photo5"
        src={ImgWS}
        alt={labels.section.altWiliamSzekspir}
      />
    </div>
  );
};

export default Section;
