import * as React from "react";

const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    viewBox="0 0 512 512"
    className={props.className} style={props.style}
  >
    <g fill="url(#grad5)">
    <path d="M404.5 23.3c-9.4 3.2-13.4 6.3-34.5 27.3L348.5 72 376 99.5l27.5 27.5 21.2-21.2c22.8-22.7 26.1-27.2 28.3-38.1 3.3-16.4-5.8-34-21.5-41.8-5.2-2.5-7.9-3.2-14.7-3.5-5.3-.3-9.8.1-12.3.9M331.2 89.3c-11.5 11.8-11.6 12.4-2.7 21.6l6.4 6.7-16.4 16.4-16.5 16.5 11.2 11.2c6.2 6.2 11.7 11.3 12.3 11.3s8.2-7.2 17-16l16-16 6 5.9c9.3 9.2 9.7 9.1 21.3-2.3l9.7-9.6-27.5-27.5-27.6-27.6zM159.8 99.7c-.9 1-1.8 4.5-2.1 7.7-1.6 16.7-16.9 31.8-33.7 33.3-6.3.6-9.5 2.7-8.4 5.7.3.9 1.6 1.8 2.8 2 11.4 2 14.5 2.8 18.5 4.8 6.3 3 14.7 11.6 17.7 18.2 1.3 3 2.8 8.4 3.3 12.1.7 6.3 1.9 8.4 4.7 8.5 2 0 3.1-2.3 3.7-7.5 2-18.1 16.6-32.9 34.6-35.2 7-.9 9.5-2.9 7.5-6.1-.8-1.2-3-1.9-7.4-2.4-11.9-1.3-23.4-8.8-29.5-19.2-2.9-5-5.5-13.4-5.5-18.2 0-5-3.3-7-6.2-3.7M287 165.6c-11.6 11.7-26.7 22.7-38.6 28-6.4 2.8-7.2 4.7-3.6 8.1 6.7 6.3 20.2 10.8 30.1 10.1 10.6-.8 16.4-4.2 30.4-17.8l12.2-11.9-11.5-11.5c-6.3-6.4-11.7-11.6-12-11.6s-3.5 3-7 6.6M68.3 161.2c-.6.7-1.3 3.5-1.7 6.3-1.2 9.4-7.4 18.3-15.6 22.5-2.2 1.1-6.8 2.6-10.2 3.3-6 1.1-6.3 1.3-6.3 4.1 0 2.9.2 3 6.8 4.2 14.6 2.7 23.7 12.2 25.4 26.4.4 3.5 1.2 5.4 2.4 6.1 2.8 1.5 5.9-2.1 5.9-6.9 0-11.7 12.5-23.9 26.4-25.8 5.2-.7 7.1-2.4 6.1-5.3-.4-1.5-1.8-2.1-5.3-2.6-7.3-1-12.6-3.3-17.5-7.6-5.4-4.6-8.4-10.5-9.7-18.5-.9-5.5-2.1-7.4-4.6-7.4-.6 0-1.6.6-2.1 1.2"></path>
    <path d="M224 175c-10.2 1.9-20.4 7-24.2 12.3l-2.3 3.2v82l2.6 5.5c4.9 10.4 11.9 16.5 22.5 19.6 15.4 4.5 32.2-3.3 39.6-18.5 2.2-4.4 2.3-5.6 2.3-30.5v-25.9l-5.3-1.3c-6.9-1.8-16.6-6.6-21.9-11-4.8-4-6.9-9.2-5.9-14.7 1-5.3 4-8.4 12.4-12.6 7.2-3.6 7.5-3.9 5.3-5-2.7-1.5-14.7-4.1-18.1-4-1.4.1-4.5.5-7 .9M100.2 224.4c-3.4 1.3-8.1 3.6-10.3 5-7 4.7-7 5-6.7 47l.3 37.3 3.5 6.9c12.2 23.9 45.2 23 57.2-1.5 2.2-4.5 2.3-5.5 2.6-43.1l.3-38.6-2.3-3.4c-1.6-2.4-4.8-4.7-10.2-7.5-7.5-3.7-8.5-4-18-4.2-8.6-.3-11 0-16.4 2.1M439.3 225.5c-1.4 1-2.2 3-2.6 6.8-.6 6.4-2.5 10.3-7.4 15.8-4.5 5-11.4 8.6-18.1 9.5-5.7.7-7.7 2.3-6.7 5.3.4 1.4 1.8 2.2 4.3 2.6 2 .3 6.1 1.3 9.1 2.1 10.1 2.9 19.1 14.8 19.1 25 0 5 4.3 8.3 6.7 5.1.6-.6 1.3-3.4 1.7-6 .8-6.8 3.7-12.7 8.1-17.2 4.3-4.2 12.6-8.5 16.7-8.5 1.5 0 3.9-.5 5.3-1 2.1-.8 2.6-1.6 2.3-3.7-.3-2.5-.8-2.8-5.8-3.6-13.7-1.9-24.5-11.8-26.5-24.2-1.1-7.3-1.5-8.3-2.9-8.8-.7-.3-2.3.1-3.3.8M332.7 242.4c-3.7 1.3-8.4 3.6-10.3 5.1-6.8 5.2-6.5 3.2-6.2 46.1.3 38.4.3 39 2.6 43.6 3.4 6.8 10.4 13.4 17.1 15.9 7.4 2.8 19.5 2.3 25.9-1 5.7-2.9 11.3-8.7 14.3-14.7l2.4-4.9.3-39.4.3-39.4-4.5-4.2c-6.3-6.1-13.8-8.8-25.6-9.2-8.1-.3-10.5 0-16.3 2.1"></path>
    <path d="M183.3 251c-4.3 9.4-4.3 10.5-4.3 121.2v106l2.1 3.8c1.2 2.1 3.9 4.7 6 5.9 3.7 2.1 4.4 2.2 45.3 1.9 40.1-.3 41.5-.4 44.2-2.4 1.5-1.1 3.7-3.3 4.8-4.8 2.1-2.7 2.1-3.5 2.4-107.4.1-61.6-.1-107.2-.7-110.7-.5-3.3-2-8.7-3.3-12l-2.3-6-.6 12.5c-.6 13-1.7 18.7-5.1 25.5-6 11.9-15.5 20.1-27.1 23.7-10.1 3-22.7 2.3-31.9-2-7.5-3.4-16.7-11.4-20.4-17.7-4.6-8-5.7-12.4-6.3-27.5l-.7-14.5zM246 377c2.1 2.1 2.5 4.7 1.2 6.6-1.9 2.8-5.6 3.4-22.2 3.4-16.8 0-17.1 0-19.5-2.5-3-2.9-3.1-4.9-.5-7.5 1.9-1.9 3.3-2 20.5-2s18.6.1 20.5 2m11.2 22.7c2 1.8 2.4 6.3.6 8.1-.9.9-8.1 1.2-26.4 1.2-25 0-25.3 0-26.8-2.2-2.1-3-2-4.4.4-6.8 1.9-1.9 3.3-2 26.2-2 21.1 0 24.4.2 26 1.7M69.7 292.1c-1 1.5-2.8 5.3-4 8.5l-2.2 5.9-.3 86.6-.2 86.5 2.2 3.4c1.3 1.8 3.9 4.1 5.8 5.2 3.3 1.7 6.1 1.8 45.2 1.6 40.6-.3 41.7-.4 44.5-2.4 1.5-1.2 3.7-3.6 4.8-5.5 2-3.3 2-5.2 2-86.9 0-65.9-.3-84.6-1.3-88.5-1.6-6.1-6.2-16.5-7.2-16.5-.5 0-1 6-1.2 13.2-.3 12.9-.4 13.5-3.9 20.9-4.5 9.4-11.5 16.6-20.5 21-5.8 2.9-8 3.4-15.9 3.7-11.2.5-17.6-1.1-26.2-6.7-7-4.5-13.4-12.4-16.6-20.3-1.6-4.1-2.2-8.4-2.6-18.8-.6-13.3-.6-13.5-2.4-10.9m60.7 117.1c2.1 3 2 4.4-.4 6.8-1.9 1.9-3.3 2-20.9 2-18.5 0-19-.1-20.5-2.2-2-2.9-2-4.7.1-7 1.4-1.6 3.5-1.8 20.9-1.8 18.8 0 19.3.1 20.8 2.2M141 431c2.7 2.7 2.6 6.5-.2 8.4-1.9 1.3-6.1 1.6-26 1.6-22.5 0-23.9-.1-25.8-2-3.1-3.1-2.1-7.8 2-9.3.8-.3 12-.6 24.8-.6 21.9-.1 23.3 0 25.2 1.9M300.3 314.5c-1.8 3.9-3.7 9.9-4.3 13.5-.7 4.4-1 29.8-.8 79.2.3 71.9.3 72.7 2.4 75.5 1.1 1.5 3.6 3.8 5.4 5 3.3 2.3 3.4 2.3 44.3 2.3 40.2 0 41 0 44.8-2.2 2.5-1.4 4.6-3.7 5.9-6.4 2-4.1 2.1-5.5 1.8-80l-.3-75.9-2.4-6c-1.3-3.3-3.3-7.3-4.3-9l-1.8-3v9c0 16.7-4.8 29.2-14.6 38.5-19.2 18.2-49.7 14.7-64.4-7.2-5.5-8.2-7.2-14.2-7.9-28.2l-.6-12.1zm62.1 94.1c2.1 2 2 5.3-.1 7.6-1.4 1.6-3.5 1.8-20.4 1.8-20.5 0-21.9-.4-21.9-5.9 0-4.9 1-5.1 21.6-5.1 16.2 0 19.5.3 20.8 1.6m10.3 21.9c3 2.1 3.4 5.1 1.1 8l-1.9 2.5h-24.1c-26.6 0-27.8-.3-27.8-6.1 0-5.5 2-5.9 27.5-5.9 18.7 0 23.5.3 25.2 1.5"></path>
  </g>
  </svg>
);

export default SvgIcon;
