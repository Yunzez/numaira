'use client'
import React from 'react';
import { Colors } from '../colors';    
const Footer = () => {
    return (
      <div className="flex justify-around items-center h-16" style={{width: '100vw', color: Colors.neutral700}}>
        <a>© 2024 Numaira</a>
        <div
              className="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/company/104262671"
                className="px-1 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <div className="px-2">·</div>
              <a href="mailto:numairaai@proton.me" className="px-1 underline">
                numairaai@proton.me
              </a>
            </div>
      </div>
    );
  }

  export default Footer;