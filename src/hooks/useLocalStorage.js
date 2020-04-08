import React from 'react';

export default function useLocalStorage(key, initialValue) {
    const [value, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(iteom) : initialValue;
    });
    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [value];
}
