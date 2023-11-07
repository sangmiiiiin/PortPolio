import { useEffect } from "react";

export const useScroll = (callback) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            callback(scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup 함수
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);
}