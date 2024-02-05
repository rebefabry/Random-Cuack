import {useRef, useEffect, useState } from 'react'
import React from 'react'

type Props = {
    src: string;
}

export const LazyImage = ({src}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [currentSrc, setCurrentSrc] = useState('') 

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    setCurrentSrc(src);
                };
            });
        });

        if (node.current){
            observer.observe(node.current);
        }

        return () => {
            observer.disconnect();
        }
    }, [src])


    return <img ref={node} src={currentSrc}/>
}