import useWindowDimensions from './useWindowDimensions'

type DeviceDetect = {
    isMobile: boolean
}

const useDeviceDetect = (): DeviceDetect => {
    const {width} = useWindowDimensions()
    return {
        isMobile: width < 986
    }
}

export default useDeviceDetect