import React from 'react'
import style from "../Contact/contact.module.css"
import contactlogo from '../media/contactlogo.png'
import contactlogo1 from '../media/chatting.png'
import contactlogo2 from '../media/suvidhaLucation.png'
import MediaIcon from "../media/64face.png"
import MediaIcon1 from "../media/64insta.png"
import MediaIcon2 from "../media/64link.png"

export default function Contact() {
  return (
    <div className={style["cardContact"]}>
        <div className={style["page-header"]}>
            <div className={style["container"]}>
                <div className={style["row"]}>
                    <div className={style["col-12"]}>
                        <h2> Contact Us</h2>
                    </div>
                    <div className={style["col-12"]}>
                        <a href='home'>Home {"/"}</a>
                        <a href='contact'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={style["sectionCardsLocation"]}>
        {/* <div className={style["sectiontContact11"]}>
            <img src={contactlogo2} alt='contactlogo'/>
        </div> */}
        
        <div className={style["sectiontContact22"]}>
            <div className={style["sandy1"]}>
            <h1> Contact Us</h1>
            <p>Address : Ward No. 4, Sant Nagar, Annamod, Near Water Tank, Khaperkheda, Nagpur</p>
            <p> Phone Number : 09226063511</p>
            <a href='https://www.google.com/maps/place/Suvidha+Mahila+Mandal/@21.277142,79.108293,17z/data=!4m6!3m5!1s0x3bd4c5b078211fe7:0xd6c9d2d1945e6e1b!8m2!3d21.2771359!4d79.1107941!16s%2Fg%2F11s2k8gqq7?entry=ttu'> Click here For Direction</a>
            <p>Timings : 10Am to  5 pm</p>
            <div className={style["contactIcons"]}>
               <div className={style["socialMideas"]}>
                 <a className={style["Midea1"]} href='https://www.facebook.com/suvidhamahilamandal/' target={"_blank"}><img src={MediaIcon} alt=''/></a>
                 <a className={style["Midea1"]} href='https://www.instagram.com/suvidha_mahila_mandal' target={"_blank"}><img src={MediaIcon1} alt=''/></a>
                 <a className={style["Midea1"]} href='https://www.linkedin.com/company/suvidha-foundation/'target={"_blank"}><img src={MediaIcon2} alt=''/></a>
               </div>
             </div>
          </div>
            <div className={style["sandy2"]}>
            <div class={style["mapouter"]}>
                <div class={style["gmap_canvas"]}>
                    <iframe width="490" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=suvidha%20mahila&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://123movies-to.org"></a>
                        <br/>
                        {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
                        <a href="https://www.embedgooglemap.net"></a>
                        {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
                    </div>
                 </div>
            </div>
        </div>
        </div>
        <div className={style["sectionCards"]}>
        <div className={style["sectiontContact1"]}>
            <img src={contactlogo} alt='contactlogo'/>
        </div>
        <div className={style["sectiontContact2"]}>
            <h1> Get IN TOUCH</h1>
            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
            <p>The secret to happiness lies in helping others. Never underestimate the difference.</p>
            <div className={style["contactIcon"]}>
               <div className={style["iconcard"]}>
                 <a  href={"https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform"} target="_blank" ><img src={contactlogo1} alt="Send Message"/> Send Message </a>
               </div>
               {/* <div className={style["socialMidea"]}>
             <a className={style["Midea1"]} href='https://www.facebook.com/suvidhamahilamandal/' target={"_blank"}><img src={MediaIcon} alt=''/></a>
             <a className={style["Midea1"]} href='https://www.instagram.com/suvidha_mahila_mandal' target={"_blank"}><img src={MediaIcon1} alt=''/></a>
             <a className={style["Midea1"]} href='https://www.linkedin.com/company/suvidha-foundation/'target={"_blank"}><img src={MediaIcon2} alt=''/></a>
          </div> */}
            </div>
        </div>
        </div>
    </div>
  )
}
