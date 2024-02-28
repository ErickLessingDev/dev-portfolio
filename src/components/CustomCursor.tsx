"use client"

import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css'; // Import CSS module for styling

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return <div className={styles.customCursor} style={{ left: position.x, top: position.y }} />;
};

export default CustomCursor;
