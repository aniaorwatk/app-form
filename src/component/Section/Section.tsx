import React from "react";
import "./Section.scss";
import PhotoAE from "../../assets/Albert-Einstein.jpg";
import PhotoD from "../../assets/Dalajlama.jpg";
import PhotoHS from "../../assets/Henryk-Sienkiewicz.jpg";
import PhotoMC from "../../assets/Marie-Curie.jpg";
import PhotoWS from "../../assets/William-Szekspir.jpg";

const Section = () => {
  const ImgAE = PhotoAE;
  const ImgD = PhotoD;
  const ImgHS =PhotoHS;
  const ImgMC =PhotoMC;
  const ImgWS=PhotoWS;


  return (
    <div className="sectionBox">
      <img className="photo1" src={ImgAE} alt="" />
      <img className="photo2" src={ImgD} alt="" />
      <img className="photo3" src={ImgHS} alt="" />
      <img className="photo4" src={ImgMC} alt="" />
      <img className="photo5" src={ImgWS} alt="" />
    </div>
  );
};

export default Section;
