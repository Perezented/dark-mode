import React, { useEffect } from 'react';
import uLS from './useLocalStorage';
export default function useDarkMode() {
    const [someValue, setSomeValue] = useLocalStorage('key');
    useEffect(() => {
        if (uLS === true) {
            document.querySelector('body').classList.append('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [uLS]);
    return;
}
