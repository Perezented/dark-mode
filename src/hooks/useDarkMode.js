import React, { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';
const useDarkMode = () => {
    useLocalStorage('key');
};
