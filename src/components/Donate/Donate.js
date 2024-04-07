import React from 'react'
import style from "../Donate/Donate.module.css"
import Qrcode from '../Qrcode/Qrcode'
import imageDonate from "../media/smiling child.jpg"
// import contactlogo from '../media/contactlogo.png'
// import contactlogo1 from '../media/chatting.png'
// import MediaIcon from "../media/facebook.png"
// import MediaIcon1 from "../media/instagram (2).png"
// import MediaIcon2 from "../media/linkedin (3).png"

export default function Contact() {
  return (
    <div className={style["cardContact"]}>
        <div className={style["page-header"]}>
            <div className={style["container"]}>
                <div className={style["row"]}>
                    <div className={style["col-12"]}>
                        <h2> Help Us</h2>
                    </div>
                    <div className={style["col-12"]}>
                        <a href='home'>Home {"/"}</a>
                        <a href='contact'>Help Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={style["sectionCards"]}>
 
        <div className={style["sectiontContact2"]}>
            <div className={style["detailCard1"]}>
            <h1> For Indian Donors</h1>
            <p>Bank Of Baroda.</p>
            <p>Contact No: +91 8010996763</p>
            <p>Account Name: Suvidha Mahila Mandal</p>
            <p>Suvidha Account No: 97840100027609</p>
            <p>IFSC Code: BARB0DBKPAR</p>
            </div>
            <div className={style["detailCard2"]}>
              <div className={style["black1"]}>
                <h2>Suvidha Foundation</h2>
                <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
              </div>
              <div className={style["black2"]}>
               <img src={imageDonate} alt='smiling childing' />
              </div>
            </div>
        </div>
        <div className={style["sectiontContact1"]}>
            <Qrcode />
        </div>
        </div>
    </div>
  )
}
