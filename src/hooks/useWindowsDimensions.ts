import { useState, useEffect } from 'react' 
import { WindowSize } from '@interfaces/WindowSize.interface'

export const useWindowsDimensions = (): WindowSize => {
    const [windowDimenion, detectHW] = useState<WindowSize>({winWidth: 0, winHeight: 0})

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        if(windowDimenion.winWidth === 0 && windowDimenion.winHeight === 0) {
            detectSize()
        }

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }

    return windowDimenion;
}