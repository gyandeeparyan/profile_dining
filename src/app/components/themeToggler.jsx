'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../lib/features/appSlice';
import {  Sun,Moon, } from 'lucide-react';
const ThemeToggler = () => {
  const isDark = useSelector((state) => state.app.isDark);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDark) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button className="mr-4" onClick={() => dispatch(toggleTheme())}>
     {isDark ? <Sun  /> : <Moon  />}
    </button>
  );
};

export default ThemeToggler;
