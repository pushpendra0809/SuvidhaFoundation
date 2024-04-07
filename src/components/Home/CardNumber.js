import React, { useState, useEffect } from 'react';
import style from "../Home/Home.module.css"
import imageSuvidh17 from "../media/volunteers-98.jpg";
import imageSuvidh18 from "../media/countries.jpg";
import imageSuvidh19 from "../media/images_intern.jpeg";
import imageSuvidh20 from "../media/tree-3577114_1280.png";

export default function CardNumber() {
    const [volunteers, setVolunteers] = useState(0);
    const [countries, setCountries] = useState(0);
    const [internshipGoal, setInternshipGoal] = useState(0);
    const [treesPlanted, setTreesPlanted] = useState(0);

    const targetVolunteers = 300000;
    const targetCountries = 15;
    const targetInternshipGoal = 10000000;
    const targetTreesPlanted = 5400000;

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const incrementVolunteers = Math.ceil(targetVolunteers / (duration / 100));
        const incrementCountries = Math.ceil(targetCountries / (duration / 100));
        const incrementInternshipGoal = Math.ceil(targetInternshipGoal / (duration / 100));
        const incrementTreesPlanted = Math.ceil(targetTreesPlanted / (duration / 100));

        const volunteerInterval = setInterval(() => {
            setVolunteers((prevVolunteers) => {
                const newValue = Math.min(prevVolunteers + incrementVolunteers, targetVolunteers);
                return newValue;
            });
        }, 100);

        const countriesInterval = setInterval(() => {
            setCountries((prevCountries) => {
                const newValue = Math.min(prevCountries + incrementCountries, targetCountries);
                return newValue;
            });
        }, 100);

        const internshipGoalInterval = setInterval(() => {
            setInternshipGoal((prevInternshipGoal) => {
                const newValue = Math.min(prevInternshipGoal + incrementInternshipGoal, targetInternshipGoal);
                return newValue;
            });
        }, 100);

        const treesPlantedInterval = setInterval(() => {
            setTreesPlanted((prevTreesPlanted) => {
                const newValue = Math.min(prevTreesPlanted + incrementTreesPlanted, targetTreesPlanted);
                return newValue;
            });
        }, 100);

        setTimeout(() => {
            clearInterval(volunteerInterval);
            clearInterval(countriesInterval);
            clearInterval(internshipGoalInterval);
            clearInterval(treesPlantedInterval);
        }, duration);

        return () => {
            clearInterval(volunteerInterval);
            clearInterval(countriesInterval);
            clearInterval(internshipGoalInterval);
            clearInterval(treesPlantedInterval);
        };
    }, []);

    const formatNumber = (num) => {
        if (num >= 10000000) {
            return (num / 10000000).toFixed(2) + ' Cr';
        } else if (num >= 100000) {
            return (num / 100000).toFixed(2) + ' Lac';
        } else {
            return num;
        }
    };

    return (
        <div className={style["cardNumber"]}>
            <div className={style['container_SuvidhaAbout1']}>
                <div className={style['section12']}>
                    <div className={style["image-container1"]}>
                        <img src={imageSuvidh18} alt={"Countries"} />
                    </div>
                </div>
                <div className={style['section22']}>
                    <div className={style['aboutText-cotainer1']}>
                        <p>Countries</p>
                        <p>{formatNumber(countries)}</p>
                    </div>
                </div>
            </div>
            <div className={style['container_SuvidhaAbout1']}>
                <div className={style['section12']}>
                    <div className={style["image-container1"]}>
                        <img src={imageSuvidh17} alt={"Volunteers"} />
                    </div>
                </div>
                <div className={style['section22']}>
                    <div className={style['aboutText-cotainer1']}>
                        <p>Volunteer</p>
                        <p>{formatNumber(volunteers)}</p>
                    </div>
                </div>
            </div>
            <div className={style['container_SuvidhaAbout1']}>
                <div className={style['section12']}>
                    <div className={style["image-container1"]}>
                        <img src={imageSuvidh19} alt={"Internship Goal"} />
                    </div>
                </div>
                <div className={style['section22']}>
                    <div className={style['aboutText-cotainer1']}>
                        <p>Internship Goal</p>
                        <p>{formatNumber(internshipGoal)}</p>
                    </div>
                </div>
            </div>
            <div className={style['container_SuvidhaAbout1']}>
                <div className={style['section12']}>
                    <div className={style["image-container1"]}>
                        <img src={imageSuvidh20} alt={"Trees Planted"} />
                    </div>
                </div>
                <div className={style['section22']}>
                    <div className={style['aboutText-cotainer1']}>
                        <p>Trees Planted</p>
                        <p>{formatNumber(treesPlanted)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
