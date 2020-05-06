import React, { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkness, setDarkness] = useLocalStorage(key, initialValue);

    const toggleMode = (e) => {
        e.preventDefault();
        setDarkness(!darkness);
    };

    useEffect(() => {
        if (darkness == true) {
            document.body.classList.add('dark-mode');
        } else document.body.classList.remove('dark-mode');
    }, [darkness]);
    console.log([darkness, setDarkness, toggleMode]);
    return [darkness, setDarkness, toggleMode];
};
