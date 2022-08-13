//tomado de https://replit.com/public/js/replit-badge.js
/**
 * This script adds a "Made with Replit" badge to your repl when seen in full-browser view
 */

function main() {
  // Suppress in ReplView
  if (window.location.hostname.split('.')[1] === 'id') return;

  // Theme is passed from the script tag, default blue
  const themes = {
    dark: { fg: '#F5F9FC', bg: '#130F26' },
    light: { fg: '#130F26', bg: '#F5F9FC' },
    red: { fg: '#F5F9FC', bg: '#FA4B4B' },
    orange: { fg: '#F5F9FC', bg: '#D96D00' },
    yellow: { fg: '#F5F9FC', bg: '#A68A00' },
    lime: { fg: '#F5F9FC', bg: '#639400' },
    green: { fg: '#F5F9FC', bg: '#00A11B' },
    teal: { fg: '#F5F9FC', bg: '#0093B0' },
    blue: { fg: '#F5F9FC', bg: '#0F87FF' },
    blurple: { fg: '#F5F9FC', bg: '#8E78FF' },
    purple: { fg: '#F5F9FC', bg: '#B266FF' },
    magenta: { fg: '#F5F9FC', bg: '#EB3BEB' },
    pink: { fg: '#F5F9FC', bg: '#F545BA' },
  };
  const color = themes[document.currentScript.getAttribute('theme') || 'blue'];

  const badge = `
  <style>
  #replit-badge {
    position: absolute;
    cursor: pointer;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }

  #replit-badge svg {
    opacity: 0.5;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
  }

  #replit-badge:hover svg {
    transform: scale(1.05);
    opacity: 1;
  }
  </style>
    
  <a id="replit-badge" href="/ayudaGuia.html" target="_blank">

  <svg width="153" height="36" viewBox="0 0 153 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_120_408)">
      <rect x="1" y="1" width="147" height="30" rx="8" fill="${color.bg}"/>
    </g>

    <defs>
    <filter id="filter0_d_120_408" x="0" y="0" width="153" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="2" dy="2"/>
    <feGaussianBlur stdDeviation="1.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_408"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_408" result="shape"/>
    </filter>
    </defs>
    <text x="45" y="20" fill="none" stroke="#FCFBFB" style="font-size: 20px">Ayuda</text>
    </svg>

  </a>
  `;

  document.body.insertAdjacentHTML('beforeend', badge);
}

main();
