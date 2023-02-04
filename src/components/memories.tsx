import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../styles/memories.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../assests/mem_img1.png'
import Image from "next/image";
export default function Memories(){
    const handleDragStart = (e : any) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const items = [
        <Image key={1} alt={"1"} className={styles.mem_images} src={img1} onDragStart={handleDragStart} role="presentation" />,
        <Image key={2} alt={"2"} className={styles.mem_images} src={img1} onDragStart={handleDragStart} role="presentation" />,
        <Image key={3} alt={"3"} className={styles.mem_images} src={img1} onDragStart={handleDragStart} role="presentation" />,
        <Image key={4} alt={"4"} className={styles.mem_images} src={img1} onDragStart={handleDragStart} role="presentation" />,
        <Image key={5} alt={"5"} className={styles.mem_images} src={img1} onDragStart={handleDragStart} role="presentation" />,
        <Image key={6} alt={"6"} className={styles.mem_images} src={img1} onDragStart={handleDragStart} role="presentation" />
    ];
    return(
        <div className={styles.maincontainer_mem}>
            <div className={styles.head_mem}>
                <h1>Our <span>Memories</span></h1>
            </div>
            <AliceCarousel mouseTracking items={items}  responsive={responsive}
                           controlsStrategy={styles.alternate}/>
        </div>
    )
}