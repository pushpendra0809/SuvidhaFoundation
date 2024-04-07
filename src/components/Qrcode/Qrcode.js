import React from 'react'
import { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import style from "../Qrcode/qrcode.module.css"
import payIcon1 from "../media/icons8-amazon-pay-64.png"
import payIcon2 from "../media/icons8-bhim-64.png"
import payIcon3 from "../media/icons8-google-pay-64.png"
import payIcon4 from "../media/icons8-paytm-64.png"
import payIcon5 from "../media/icons8-phone-pe-64.png"
export default function Qrcode() {
    const [money, setMoney] = useState(0);
  return (
    // <div className={["QrcodeCard"]}>
      <div className={style["QrCoantainer"]}>
        <div className={style["textarea1"]}>
        <h1>Add Detail Here</h1>
        <from > 
      <input
        type="text"
        placeholder="Enter the name"
      />
      <br />
      <input
        type="Email"
        placeholder="Enter the Email"
      />
      <br />
      <input
        type="text"
        placeholder="Enter the Phone Number"
      />
      <br />
      <input
        type="number"
        onChange={(e) => setMoney(e.target.value)}
        placeholder="Enter the amout"
      />
      <br />
      <button className={style["scanpay"]}> Scan QR And Pay </button>
      </from>
      </div>
      <div className={style["textarea2"]}>
        <h2> Suvidha Mahila Mandal</h2>
        {/* <div className={style['QRgenerator']}> */}
      <QRCode
        value={`upi://pay?pa=suvid801091@barodampay&tn=cftrhwetaw4gta&am=${money}`}
        size="200"
        // logoImage="https://i.postimg.cc/5tdHfkxF/118852864-1241633666213183-4722008391193475906-n.png"
        logoWidth="80"
        logoHeight="100"
        logoOpacity="0.6"
      />
      {/* </div> */}
      <p>Scan the code using PhonePe, Google Pay or Paytm</p>
      <div className={style["uipIcon"]}>
        <div className={style["uipImageicon"]}>
        <img src={payIcon5} alt='amazone Pay'/>
        </div>
        <div className={style["uipImageicon"]}>
        <img src={payIcon4} alt='BHIME UPI'/>
        </div> 
        <div className={style["uipImageicon"]}>
        <img src={payIcon3} alt='Google Pay'/>
        </div> 
        <div className={style["uipImageicon"]}>
        <img src={payIcon2} alt=' Paytam'/>
        </div> 
        <div className={style["uipImageicon"]}>
        <img src={payIcon1} alt='Phone pe'/>
        </div>
      </div>
      </div>
    </div>
    // </div>
  )
}
