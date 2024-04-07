import React from 'react'
import style from "../Event/Events.module.css"
import eventlogo4 from "../media/Tree-Plantation5.jpg"
import eventlogo from "../media/eventFundraising1.jpg"
import eventlogo1 from "../media/Cloths-Distribution2.jpg"
import eventlogo2 from "../media/Women's-Day3.jpg"
import eventlogo3 from "../media/Food-Donation4.jpg"
import eventlogo5 from "../media/AnimalFeeding.jpg"
import eventlogo6 from "../media/Sanitary-Pads7.jpg"
import eventlogo7 from "../media/Free-Workshop8.jpg"

export default function Events() {
  return (
    <div className={style["body"]}>
        <h1>Event </h1>
        <h3>Our Charity Events: Celebrating Our Impact Together</h3>
        <div className={["CardBody"]}>

        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo4} alt=''/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Tree Plantation</h3>
            <div>
            <p>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>
        </div>
        </div>
            </div>

        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo} alt='Fundraising'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Fundraising Events</h3>
            <div>
            <p>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>
        </div>
        </div>
            </div>
            </div>
        <div className={["CardBody"]}>
        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo1} alt='Cloths Distribution'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Cloths Distribution</h3>
            <div>
           <p> Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.</p>
        </div>
        </div>
            </div>
        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo2} alt='Womens Day'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Women's Day</h3>
            <div>
            <p> Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions. </p>
        </div>
        </div>
            </div>
            </div>
        <div className={["CardBody"]}>
        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo3} alt='Food Donation'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Food Donation Initiatives by Our NGO</h3>
            <div>
            <p>Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.</p>
        </div>
        </div>
            </div>
        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo5} alt='Animals'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Ensuring Happy and Healthy Animals through Feeding Programs</h3>
            <div>
            <p>Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.</p>
        </div>
        </div>
            </div>
            </div>
        <div className={["CardBody"]}>
        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src={eventlogo6} alt='Sanitary Pads Distribution'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Sanitary Pads Distribution</h3>
            <div>
            <p>Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.</p>
        </div>
        </div>
            </div>
        <div className={style["a-box"]}>
        <div className={style["img-container"]}>
            <div className={style["img-inner"]}>
            <div className={style["inner-skew"]}>
                <img src= {eventlogo7} alt='Free Workshops'/>
            </div>
            </div>
        </div>
        <div className={style["text-container"]}>
            <h3>Free Workshops</h3>
            <div>
            <p> Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.</p>
        </div>
        </div>
            </div>
            </div>
    </div>
  )
}
