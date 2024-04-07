import React from 'react'
import style from "../Footer/Footer.module.css"
import MediaIcon from "../media/64face.png"
import MediaIcon1 from "../media/64insta.png"
import MediaIcon2 from "../media/64link.png"
import mediaIcon4 from "../media/SuvidhaLogo.png"
export default function Footer() {
  return (
    <div className={style["Container_Footer"]}>
      <div className={style['cardFooter']}>
        <div className={style["sectionCard1"]}>
          <div className={style["footermainCard"]}>
          <div className={style["foundationLogo"]}>
              <img src={mediaIcon4} alt='foundationLogo'></img>
          </div>
          <div className={style["founddationAbout"]}>
          <h3>Suvidha Foundation (Suvidha Mahila Mandal)</h3>
          <p>  Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102</p>
          <p>  Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
          </div>
          </div>
          <div className={style["socialMidea"]}>
             <a className={style["Midea1"]} href='https://www.facebook.com/suvidhamahilamandal/' target={"_blank"}  rel="noreferrer"><img src={MediaIcon} alt=''/></a>
             <a className={style["Midea1"]} href='https://www.instagram.com/suvidha_mahila_mandal' target={"_blank"}  rel="noreferrer"><img src={MediaIcon1} alt=''/></a>
             <a className={style["Midea1"]} href='https://www.linkedin.com/company/suvidha-foundation/'target={"_blank"}  rel="noreferrer"><img src={MediaIcon2} alt=''/></a>
          </div>
        </div>
        <div className={style["sectionCard2"]}>
          <h3>Certificates</h3>
          <a className={style["highligt"]} href='https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf' target={"_blank"}  rel="noreferrer"> &gt; 80G Certification</a>
          <a className={style["highligt"]} href='https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf' target={"_blank"}  rel="noreferrer"> &gt; 12A Certification</a>
          <a className={style["highligt"]} href='https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF' target={"_blank"}  rel="noreferrer"> &gt; CSR Certification</a>
          <a className={style["highligt"]} href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf' target={"_blank"}  rel="noreferrer"> &gt; Suvidha Darpan Registration</a>
          <a className={style["highligt"]} href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf' target={"_blank"}  rel="noreferrer"> &gt; Suvidha Pan Card</a>
        </div>
        <div className={style["sectionCard3"]}>
          <h3>Useful Links</h3>
          <a className={style["highligt"]} href='https://suvidhafoundationedutech.org/verify.php' target={"_blank"}  rel="noreferrer"> &gt; Verify Your Certificate</a>
          <a className={style["highligt"]} href='https://www.suvidhafoundationedutech.org/privacypolicy.php' target={"_blank"}  rel="noreferrer"> &gt; Privacy Policy</a>
        </div>
        </div>
        <div className={style["Bottom-line"]}>
          <div className={["BottomCard1"]}>
            <p><span> &#169;Suvidha Foundation (Suvidha Mahila Mandal)</span>, All Right Reserved.</p>
          </div>
          <div className={style["BottomCard1"]}>
            <p>Designed By :<span>Pushpendra Pal</span></p>
          </div>
        </div>
    </div>
  )
}
