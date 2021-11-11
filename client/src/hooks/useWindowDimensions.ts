import {useState, useEffect} from 'react'

type Dimensions = {
    width: number
    height: number
}

const getWindowDimensions = (): Dimensions => {
    const {innerWidth: width, innerHeight: height} = window
    return {
        width,
        height
    }
}

const useWindowDimensions = (): Dimensions => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}

export default useWindowDimensions