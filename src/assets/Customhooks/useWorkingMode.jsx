import { useEffect, useState } from 'react'

export const useWorkingMode = () => {
    const [workingMode, setWorkingMode] = useState('')

    useEffect (() => {
        
        const checkWorkingMode = () => {
        if (window.innerWidth > 1023) {
            setWorkingMode('pc')
        } else if ( window.innerWidth > 759) {
            setWorkingMode('tablet')
        } else {
            setWorkingMode('mobile')
        }
        }
    
        window.addEventListener('resize', checkWorkingMode)
    
        checkWorkingMode()
    
        return () => {
            window.removeEventListener('resize', checkWorkingMode)
        }
    }, [])

return workingMode
}
