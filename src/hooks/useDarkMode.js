import React, { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('key');
    useEffect(() => {
        if (useLocalStorage) {
            document.body.classList.append('dark-mode');
        } else document.body.classList.remove('dark-mode');
    }, [useLocalStorage]);
    return;
};
