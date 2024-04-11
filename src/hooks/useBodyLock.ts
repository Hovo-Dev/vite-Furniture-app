import {useEffect} from "react";

const useLockBodyScroll = (isOpen: boolean) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'visible'
    }, [isOpen])
}

export default useLockBodyScroll