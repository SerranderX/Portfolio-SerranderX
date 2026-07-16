import { useState, useEffect } from 'react'
import { WindowSize } from '@interfaces/windowSize.interface'

export const useWindowsDimensions = (): WindowSize => {
    const [windowDimenion, detectHW] = useState<WindowSize>({winWidth: 0, winHeight: 0})

    useEffect(() => {
        const detectSize = () => {
            detectHW({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight,
            })
        }

        detectSize()
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [])

    return windowDimenion;
}
