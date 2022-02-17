import React,{useRef, useState, useEffect} from "react";
import 'animate.css';
import styles from './Animates.module.css'; 


const Animates = (props) =>{
    const [animate ,setAnimate] = useState(false);
    const animateRef = useRef(null)
    const option =  {
        root: null,
        rootMargin: "0px",
        threshold: props.showInterest || 0.1
      }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            if(entry.isIntersecting)
            setAnimate(true)
        }, option);

        observer.observe(animateRef.current);

        return () => {
            observer.observe.disconnect();
        };
    }, []);



    return(
        <div ref={animateRef} className={animate ? ["animate__animated", props.animate || "animate__fadeInUp" , styles.showAnimate || "animate__slow", props.time].join(' ') : ["animate__animated", styles.hiddenAnimate].join(' ') }>  
            {props.children} 
        </div>
    )    
}
export default Animates
