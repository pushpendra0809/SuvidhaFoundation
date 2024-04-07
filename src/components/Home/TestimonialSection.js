import React from 'react';
import style from "../Home/Home.module.css";
import imageSuvidh26 from "../media/106.jpg";
import imageSuvidh27 from "../media/15.jpg"
import imageSuvidh28 from "../media/28.jpg";
import imageSuvidh29 from "../media/3.jpg";
import imageSuvidh30 from "../media/5 (1).jpg";
import imageSuvidh31 from "../media/84.jpg";
import imageSuvidh32 from "../media/89.jpg";
import imageSuvidh33 from "../media/92.jpg";
import imageSuvidh34 from "../media/94.jpg";

// Define your image URLs
const imageUrls = [
    imageSuvidh26, imageSuvidh27, imageSuvidh28,
    imageSuvidh29, imageSuvidh30, imageSuvidh31,
    imageSuvidh32, imageSuvidh33, imageSuvidh34
];

const TestimonialSection = () => {
    // Function to chunk the image URLs into groups of three
    const chunkArray = (arr, size) => {
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };

    // Chunk the image URLs into groups of three
    const imageChunks = chunkArray(imageUrls, 3);

    return (
        <div className={style["cardLegent"]}>
            <h3>Testimonial : <span> What people are talking about our charity activities</span></h3>
            {imageChunks.map((chunk, index) => (
                <div key={index} className={style["cardlegentIteam"]}>
                    {chunk.map((imageUrl, innerIndex) => (
                        <div key={innerIndex} className={style["imageIteam"]}>
                            <img src={imageUrl} alt={`Image ${innerIndex + 1}`} />
                        </div>
                    ))}
                </div>
            ))}
            <div className={style["eventButtons"]}>
                <button className={style['eventShows']}>Event</button>
            </div>
        </div>
    );
};

export default TestimonialSection;
