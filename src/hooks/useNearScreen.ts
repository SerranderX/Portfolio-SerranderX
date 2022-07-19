import { useEffect, useState, useRef, LegacyRef, MutableRefObject, RefObject } from 'react';
import { nearScreenInterface } from '@interfaces/nearScreen.interface';

export const useNearScreen = (): nearScreenInterface => {
    const ref = useRef<LegacyRef<HTMLElement>>(null);
    const [show, setShow] = useState<Boolean>(false);


    useEffect(() => {
        Promise.resolve(
            window.IntersectionObserver
            
        ).then(() => {
            const observer = new IntersectionObserver(entries => {
                const { isIntersecting } = entries[0];
                setShow(isIntersecting);
            })
            if(ref !== null && ref.current !== undefined ) {
                observer.observe(ref.current as unknown as Element);
            }
        })
    },[ref, show]);

    const nearScreen:nearScreenInterface = [show, ref as LegacyRef<HTMLElement>];

    return nearScreen;
}