import React, { useState, useEffect } from 'react';
import imageSuvidh1 from "../media/suvidh2.png";
import imageSuvidh2 from "../media/teacher.png";
import imageSuvidh3 from "../media/girl.png";
import imageSuvidh4 from "../media/doctor.png";
import imageSuvidh5 from "../media/womaninfield.png";
import imageSuvidh6 from "../media/about.jpg";
import imageSuvidh7 from "../media/sucidhaAbout (2).jpeg";
import imageSuvidh8 from "../media/suvidhaabout2 (1).jpeg";
import imageSuvidh9 from "../media/plums-1649316_1280.jpg";
import imageSuvidh10 from "../media/social-awareness-mc-slide3 (1).png";
import imageSuvidh11 from "../media/treeeee (1).jpeg";
import imageSuvidh12 from "../media/apothecary-437743_1280.jpg";
import imageSuvidh13 from "../media/primary-education (1).jpg";
import imageSuvidh14 from "../media/butterfly-8127623_1280 (1).png";
import imageSuvidh15 from "../media/Tree-PlantationbyINTERN.jpg";
import imageSuvidh16 from "../media/Fundraising.jpg";
import imageSuvidh21 from "../media/Bharti_Shendre.jpg";
import imageSuvidh22 from "../media/Payal_Badhe.jpg";
import imageSuvidh23 from "../media/Nilima_Kalambe.jpg";
import imageSuvidh24 from "../media/Shobha_Motghare.jpeg";
import imageSuvidh25 from "../media/linkedin.png";
import imageSuvidh26 from "../media/106.jpg";
import imageSuvidh27 from "../media/15.jpg"
import imageSuvidh28 from "../media/28.jpg";
import imageSuvidh29 from "../media/3.jpg";
import imageSuvidh30 from "../media/5 (1).jpg";
import imageSuvidh31 from "../media/84.jpg";
import imageSuvidh32 from "../media/89.jpg";
import imageSuvidh33 from "../media/92.jpg";
import imageSuvidh34 from "../media/94.jpg";
// import imageSuvidh35 from "../media/104.jpg";
import imageSuvidh36 from "../media/collab-1.jpg";
import imageSuvidh37 from "../media/collab-2.jpg";
// import imageSuvidh38 from "../media/1.jpg";
// import imageSuvidh39 from "../media/2.jpg";
// import imageSuvidh40 from "../media/9.jpg";
// import imageSuvidh41 from "../media/5.jpg";
// import imageSuvidh42 from "../media/6.jpg";
// import imageSuvidh43 from "../media/8.jpg";
// import imageSuvidh44 from "../media/11.jpg";
// import imageSuvidh45 from "../media/12.jpg";
import style from "../Home/Home.module.css"
import CardNumber from './CardNumber';
// import TestimonialSection from './TestimonialSection';
import Hexagon from '../Home/hexagon';
import CardTestimonial from './cardTestimonial';

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [imageSuvidh1, imageSuvidh2, imageSuvidh3, imageSuvidh4, imageSuvidh5];
    const Aboutimages = [imageSuvidh6, imageSuvidh7, imageSuvidh8];
    const texts = [' ', 'Bringing smiles to millions', 'Get Your Donations Tax Exempted', '77 Independence Day Celebrasion', '77 Independence Day Celebrasion'];

    const [currentText, SetCurrentText] = useState(0);
    const aboutTexts =[
                        "Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.",
                        "To inspire students, support their innovation, and facilitate integration for building the next generation of humankind. The organization aims to run food donation and awareness campaigns in rural regions. Through these initiatives, it seeks to empower students with skills that will last a lifetime and prepare them for a future full of unforeseen challenges. The focus is on providing holistic education that not only enriches their minds but also strengthens their character enabling them to become society.",
                        "To build the next generation of entrepreneurs, we provide them with skill-based education, offering internships, training, workshops, and quality education worldwide. Our mission is to empower individuals with the knowledge and skills needed to succeed in the competitive business world. Through our programs, we aim to cultivate innovation, creativity, and leadership qualities in aspiring entrepreneurs, enabling them to tackle challenges and seize opportunities Join us on this journey to create a brighter future for entrepreneurs worldwide."
                      ]
    const aboutHading = [" About", "Mission", "Vision"]
    // var imageNo = 0;
    const [startIndex, setStartIndex] = useState(0);
    const imagesLegent = [
      imageSuvidh26,
      imageSuvidh27,
      imageSuvidh28,
      imageSuvidh29,
      imageSuvidh30,
      imageSuvidh31,
      imageSuvidh32,
      imageSuvidh33,
      imageSuvidh34,
    ];


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((imageNo) => (imageNo + 1) % images.length);
          setCurrentImage((prevImage) => (prevImage + 1) % Aboutimages.length);
          SetCurrentText((prevText) => (prevText + 1) % aboutTexts.length);
          SetCurrentText((prevText) => (prevText + 1) % aboutHading.length);
          setStartIndex((prevIndex) => (prevIndex + 3) % imagesLegent.length);
        }, 3000);
        return () => clearInterval(interval);
    }, 
    [images.length,Aboutimages.length, aboutTexts.length,  aboutHading.length, imagesLegent.length]);

    const handleButtonClick = (direction) => {
        if (direction === 'prev') {
          setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
        } else if (direction === 'next') {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }
      };

    return (
      <>
       <div className={style["container"]}>
         <div className={style["image-container"]}>
           <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
           <div className={style["image-text"]}>{texts[currentImage]}
           {/* <div className={style["button-container"]}>
               <a className={style['button']} href='https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform' target={"_blank"}>Donate Now</a>
               <a className={style['button']} data-toggle={"model"}data-src="img/video/Suvidha_Foundation_Video.mp4" data-target={"#videoModel"}>Watch Video</a>
             </div> */}
           </div>
           <div className={style["button-container-direc"]}>
               <button onClick={() => handleButtonClick('prev')}>&lt; </button>
               <button onClick={() => handleButtonClick('next')}>&gt;</button>
             </div>

         </div>
      </div>

      <div className={style["cardIntership"]}>
        <h1>Apply For Intership And Mentorship Programs <hr/></h1>
        <p>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.</p>
        <p>The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</p>
        <div className={style["apply"]}>
        <button className='btn btn-primary'>Apply</button>
        </div>
      </div>

      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={Aboutimages[currentImage]} alt={`Image ${currentImage + 1}`} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>{aboutHading[currentText]}</h1>
          <p>{aboutTexts[currentText]}</p>
          </div>
        </div>
      </div> 

      <div className={style['container-ourWork']}>
         <h1>What We Do</h1>
         <h3>Courses For a Sustainable Future</h3>
         <div className={style['card-Do']} >
         <div className={style['carditeam1']}>
            <img src={imageSuvidh9} alt='Health Care'/>
          <div className={style['cardMassage']}>
            <div className={style["TextCard"]}>
            <h4>Healthy Food</h4>
            <p>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
            </div>
          </div>
         </div>
         <div className={style['carditeam1']}>
            <img src={imageSuvidh10} alt='Health Care'/>
          <div className={style['cardMassage']}>
          <div className={style["TextCard"]}>
          <h4>Social Awareness</h4>
            <p>Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</p>
          </div>
          </div>
         </div>
         <div className={style['carditeam1']}>
            <img src={imageSuvidh11} alt='Health Care'/>
          <div className={style['cardMassage']}>
          <div className={style["TextCard"]}>
            <h4>Tree Plantation</h4>
            <p>Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</p>
          </div>
          </div>
         </div>
         </div>
         <div className={style['card-Do']} >
         <div className={style['carditeam1']}>
            <img src={imageSuvidh12} alt='Health Care'/>
          <div className={style['cardMassage']}>
          <div className={style["TextCard"]}>
            <h4>Health Care</h4>
            <p>We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.</p>
          </div>
          </div>
         </div>
         <div className={style['carditeam1']}>
            <img src={imageSuvidh13} alt='Health Care'/>
          <div className={style['cardMassage']}>
          <div className={style["TextCard"]}>
            <h4>Primary Education</h4>
            <p>By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.</p>
          </div>
          </div>
         </div>
         <div className={style['carditeam1']}>
            <img src={imageSuvidh14} alt='Health Care'/>
          <div className={style['cardMassage']}>
          <div className={style["TextCard"]}>
            <h4>Social Care</h4>
            <p>Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals</p>
          </div>
          </div>
         </div>
         </div>
      </div>
      <CardNumber />
      
      <div className={style["cardEvent"]}>
        <h2>Suvidha Events</h2>
        <h3>Our Charity Events: Celebrating Our Impact Together</h3>
        <div className={style["box"]}>
        <div className={style["cardBox1"]}>
         <img src={imageSuvidh15} alt='Tree Planting'/>
         <div className={style["eventsMassage"]}>
          <p>Tree Plantation</p>
          <p>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>
         </div>
        </div>
        <div className={style["cardBox1"]}>
         <img src={imageSuvidh16} alt='Tree Planting'/>
         <div className={style["eventsMassage"]}>
          <p>Fundraising Events</p>
          <p>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>
         </div>
        </div>
        </div>
        <div className={style["eventButton"]}>
          <button className={style['eventShow']}>Event</button>
        </div>
      </div>
       <CardTestimonial />
    {/* <div className={style["cardLegent"]}>
      <h3>Testimonial : <span> What people are talking about our charity activities</span></h3>
      <div className={style["cardlegentIteam"]} style={{ display: 'flex', overflow: 'hidden' }}>
        {imagesLegent.slice(startIndex, startIndex + 3).map((image, index) => (
          <div
            key={index}
            className={style["imageIteam"]}
            style={{
              animationDelay: `${index * 3}s`,
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <img src={image} alt={`Testimonial ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>
      <div className={style["eventButtons"]}>
        <button className={style['eventShows']}>Event</button>
      </div>
    </div> */}

      <div className={style["cardTeam"]}>
        <h2>Meet Our Team</h2>
        <h3>Guys behind our charity activities</h3>
        <div className={style["Member"]}>
            <div className={style["iteam"]}>
              <img src={imageSuvidh24} alt=''/>
              <div className={style["details"]}>
                <h4>Shobha Motghare</h4>
                <p>Secreatry</p>
                <div className={style["socialIcon"]}> 
                <a className="active  " aria-current="page" href="https://www.linkedin.com/in/shobha-motghare-0a6a57238/"><img src={imageSuvidh25} alt=''/></a>
                </div>
              </div>
            </div>
       
       
            <div className={style["iteam"]}>
              <img src={imageSuvidh22} alt=''/>
              <div className={style["details"]}>
                <h4>Payal Badhe</h4>
                <p>President</p>
                <div className={style["socialIcon"]}> 
                <a className="active  " aria-current="page" href="https://www.linkedin.com/in/shobha-motghare-0a6a57238/"><img src={imageSuvidh25} alt=''/></a>
                </div>
              </div>
            </div>
       
      
            <div className={style["iteam"]}>
              <img src={imageSuvidh21} alt=''/>
              <div className={style["details"]}>
                <h4>Bharti Shendre</h4>
                <p>Treasurer</p>
              </div>
            </div>
       
            <div className={style["iteam"]}>
              <img src={imageSuvidh23} alt=''/>
              <div className={style["details"]}>
                <h4>Nilma Kalambe</h4>
                <p>Advisor</p>
              </div>
            </div>
        </div>
      </div>


      <div className={style["cardLegent1"]}>
        <h3>Empowering Change Together:</h3>
        <h4>Our Collaborative Initiatives</h4>
        
         <div className={style["cardlegentIteam1"]}>
              <div className={style["imageIteam1"]}>
                <img  src={imageSuvidh36} alt=''/>
              </div>
    
       
              <div className={style["imageIteam1"]}>
                <img  src={imageSuvidh37} alt=''/>
              </div>
        
              <div className={style["imageIteam1"]}>
                <img  src={imageSuvidh36} alt=''/>
              </div>
       
         </div>
      </div>
      <Hexagon />
{/* 
    <div className={style["finalbox"]}>
     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh38} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh39} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh40} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh41} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh42} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh43} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh44} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

     <div className={style["newtype"]}>
      <div className={style['container_SuvidhaAbout']}>
        <div className={style['section1']}>
        <div className={style["image-container"]}>
           <img src={imageSuvidh45} alt={"intern"} />
           </div>
        </div>
        <div className={style['section2']}>
          <div className={style['aboutText-cotainer']}>
            <h1>anshika bable</h1>
          </div>
        </div>
      </div> 
          <div className={style["myType"]}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>
      </div> */}
      </>
    );
}
