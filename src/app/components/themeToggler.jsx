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
    <button aria-label='theme toggle button' className="md:mr-4 " onClick={() => dispatch(toggleTheme())}>
     {isDark ? <Sun className='animate-moonToSun' color="#1f2937" /> : <Moon className="animate-sunToMoon" color="#1f2937" />}
    </button>
  );
};

export default ThemeToggler;
