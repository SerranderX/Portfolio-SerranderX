import { useEffect, useState, useRef, useLayoutEffect, LegacyRef } from 'react';

export const useNearScreen = () => {
    const ref = useRef<LegacyRef<HTMLElement> | undefined>(null);
    const [show, setShow] = useState(false);

    useLayoutEffect(() => {
        console.log(ref); // { current: <h1_object> }
    })

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
        ).then(() => {
            const observer = new IntersectionObserver(entries => {
                const { isIntersecting } = entries[0];
                setShow(isIntersecting);
            })
            if(ref !== null && ref.current !== undefined ) {
                observer.observe(ref.current);
            }
        })
    },[ref, show]);

    return [show, ref];
}