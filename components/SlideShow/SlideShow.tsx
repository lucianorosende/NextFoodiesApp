"use client";
import React, { JSX, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./slideShow.module.css";
import { headerImages } from "@/utilities/headerImages";

const SlideShow: React.FC = (): JSX.Element => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < headerImages.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshow}>
            {headerImages.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    className={index === currentImageIndex ? styles.active : ""}
                    alt={image.alt}
                />
            ))}
        </div>
    );
};

export default SlideShow;
