import React from 'react'
import style from "../Home/hexagoun.module.css"
import hexalogo from "../media/1.jpg"
import hexalogo1 from "../media/2.jpg"
import hexalogo2 from "../media/hexa1.png"
import hexalogo3 from "../media/12.jpg"
import hexalogo4 from "../media/5.jpg"
import hexalogo5 from "../media/6.jpg"
import hexalogo6 from "../media/8.jpg"
import hexalogo7 from "../media/9.jpg"
import hexalogo8 from "../media/11.jpg"
import hexalogo9 from "../media/hexa2.png"
import hexalogo10 from "../media/hexa3.png"
import hexalogo11 from "../media/hexa4.png"
export default function Hexagon() {
  return (
    <div className={style["hexagonbody"]}> 
      
	<h1>What people are talking about our charity activities</h1>
  <section className={style["hexagonSection"]}>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Divina Malfoy</h2>
				<p>
                It was great experience to work in suvidha foundation. 
                </p>
			</figure>
			<img alt="images" src={hexalogo} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
			<h2>Samrudhi Nawale</h2>
				<p>
                The experience here at Foundation was wonderful.
                </p>
			</figure>
			<img alt="images" src={hexalogo1} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Manya Sahni</h2>
			<p>
            Thanks for giving the opportunity. Did this intership which was a unique. 
            </p>
			</figure>
			<img alt="images" src={hexalogo3} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Aheri Ghosh</h2>
			<p>
            I'm glad to have worked with the Suvidha Foundation.
            </p>
			</figure>
			<img alt="images" src={hexalogo4} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Ananya Tripathi</h2>
					<p>
                       Regular meetings really helped in systematic learning.
                    </p>
			</figure>
			<img alt="images" src={hexalogo5} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Sanjana Tunk</h2>
				<p>
                     It was entirely a new experience and a gained alot from it.
                </p>
			</figure>
			<img alt="images" src={hexalogo6} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Lekhashree H J</h2>
				<p>
                    It was a great experience working with your NGO.
                </p>
			</figure>
			<img alt="images" src={hexalogo7} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Khushi Jain</h2>
				<p>
                  Had great learning. Fruitful experience. 
                </p>
			</figure> 
			<img alt="images" src={hexalogo8} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
			<h2>Rani</h2>
				<p> It was a great experience working with your NGO.</p>
			</figure>
			<img alt="images" src={hexalogo2} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
			<h2>Anisha</h2>
				<p>It was entirely a new experience and a gained alot from it</p>
			</figure>
			<img alt="images" src={hexalogo9}/>
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
				<h2>Annu</h2>
				<p>Had great learning. Fruitful experience.</p>
			</figure>
			<img alt="images" src={hexalogo10} />
		</article>
		<article className={style["hexagonArticle"]}>
			<figure className={style["hexagonFigure"]}>
			<h2>Anjali </h2>
				<p> The experience here at Suvidha Foundation was wonderful. I learnt a lot. It was worth it.</p>
			</figure>
			<img alt="images" src={hexalogo11} />
		</article>
  </section>
			
<svg width="0" height="0">
  <defs>
    <clipPath id="hexagono" clipPathUnits="objectBoundingBox">
      <polygon points=".25 0, .75 0, 1 .5, .75 1, .25 1, 0 .5" />
    </clipPath>
  </defs>
</svg>
    </div>
  )
}