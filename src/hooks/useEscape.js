import { useEffect } from "react";

/**
 * trigure escape button click event        
 * @param {Function} onEscape Run function on click escape button.
 */
const useEscape = (onEscape) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onEscape();
        };
        window.addEventListener('keydown', handleEsc);
        return () => { window.removeEventListener('keydown', handleEsc) }
    }, [])
}
export default useEscape;