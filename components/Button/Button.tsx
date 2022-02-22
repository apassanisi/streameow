import * as React from "react";

export type ButtonProps = {
  prependIcon?: string;
  label?: string;
  appendIcon?: string;
  to?: string;
  dropdown?: string[];
};

const icons = {
  up: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-up"
      className="svg-inline--fa fa-chevron-up"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
      ></path>
    </svg>
  ),
  down: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-down"
      className="svg-inline--fa fa-chevron-down"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
      ></path>
    </svg>
  ),
  right: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-right"
      className="svg-inline--fa fa-chevron-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
      ></path>
    </svg>
  ),
  left: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-left"
      className="svg-inline--fa fa-chevron-left"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
      ></path>
    </svg>
  ),
  search: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="search"
      className="svg-inline--fa fa-search fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      ></path>
    </svg>
  ),
  largeTile: (
    <svg
      className="SvgIcon-root-1-2-839 SvgIcon-root-d21-1-2-913 SvgIcon-customSize-1-2-843 SvgIcon-customSize-d22-1-2-914 SvgIcon-fill-1-2-850 SvgIcon-fill-d23-1-2-915"
      viewBox="0 0 24 24"
    >
      <title></title>
      <g>
        <rect x="0" y="0" width="10" height="10"></rect>
        <rect x="12" y="0" width="10" height="10"></rect>
        <rect x="0" y="12" width="10" height="10"></rect>
        <rect x="12" y="12" width="10" height="10"></rect>
      </g>
    </svg>
  ),
  mediumTile: (
    <svg
      className="SvgIcon-root-1-2-839 SvgIcon-root-d24-1-2-916 SvgIcon-customSize-1-2-843 SvgIcon-customSize-d25-1-2-917 SvgIcon-fill-1-2-850 SvgIcon-fill-d26-1-2-918"
      viewBox="0 0 24 24"
    >
      <title></title>
      <g>
        <rect x="0" y="0" width="6" height="6"></rect>
        <rect x="8" y="0" width="6" height="6"></rect>
        <rect x="16" y="0" width="6" height="6"></rect>
        <rect x="0" y="8" width="6" height="6"></rect>
        <rect x="0" y="16" width="6" height="6"></rect>
        <rect x="8" y="8" width="6" height="6"></rect>
        <rect x="16" y="8" width="6" height="6"></rect>
        <rect x="8" y="16" width="6" height="6"></rect>
        <rect x="16" y="16" width="6" height="6"></rect>
      </g>
    </svg>
  ),
  smallTile: (
    <svg
      className="SvgIcon-root-1-2-839 SvgIcon-root-d27-1-2-919 SvgIcon-customSize-1-2-843 SvgIcon-customSize-d28-1-2-920 SvgIcon-primary-1-2-845"
      viewBox="0 0 24 24"
    >
      <title></title>
      <g>
        <rect x="6" y="0" width="4" height="4"></rect>
        <rect x="12" y="0" width="4" height="4"></rect>
        <rect x="18" y="0" width="4" height="4"></rect>
        <rect x="6" y="6" width="4" height="4"></rect>
        <rect x="6" y="12" width="4" height="4"></rect>
        <rect x="12" y="6" width="4" height="4"></rect>
        <rect x="18" y="6" width="4" height="4"></rect>
        <rect x="12" y="12" width="4" height="4"></rect>
        <rect x="18" y="12" width="4" height="4"></rect>
        <rect x="6" y="18" width="4" height="4"></rect>
        <rect x="0" y="0" width="4" height="4"></rect>
        <rect x="0" y="6" width="4" height="4"></rect>
        <rect x="0" y="12" width="4" height="4"></rect>
        <rect x="0" y="18" width="4" height="4"></rect>
        <rect x="12" y="18" width="4" height="4"></rect>
        <rect x="18" y="18" width="4" height="4"></rect>
      </g>
    </svg>
  ),
  reload: (
    <svg
      className="SvgIcon-root-2-2-11 SvgIcon-root-d0-2-2-23 SvgIcon-customSize-2-2-15 SvgIcon-customSize-d1-2-2-24 SvgIcon-primary-2-2-17 IconButton-svgIcon-2-2-6"
      viewBox="0 0 24 24"
    >
      <title></title>
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
    </svg>
  ),
  home: (
    <svg
      className="SvgIcon-root-0-2-83 SvgIcon-root-d39-0-2-378 SvgIcon-medium-0-2-85 SvgIcon-default-0-2-88"
      viewBox="0 0 24 24"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </svg>
  ),
  star: (
    <svg
      className="SvgIcon-root-0-2-83 SvgIcon-root-d42-0-2-382 SvgIcon-medium-0-2-85 SvgIcon-default-0-2-88"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  ),
  gold: (
    <svg
      className="SvgIcon-root-0-2-83 SvgIcon-root-d45-0-2-386 SvgIcon-medium-0-2-85 SvgIcon-default-0-2-88"
      viewBox="0 0 24 24"
    >
      <g>
        <path d="M11.87,21a8.54,8.54,0,0,0,2.93-1c-4.49,1.72-8.7-3-10.23-6.74C3.18,9.91,2.65,4.68,6.31,2.5c-2,1.16-3.48,2.27-4,4.6a11.15,11.15,0,0,0,.42,6.18C3.93,17,7.52,21.43,11.87,21Z"></path>
        <path d="M17,8.19c1.34,2.76,2,6.51.29,9.28-1.85,3-5.56,2.62-8.1.73A12.69,12.69,0,0,1,4.36,9.86C4,7,4.76,3.25,7.94,2.35,11.84,1.25,15.49,5,17,8.19Z"></path>
        <path d="M16.47,4.83a5.42,5.42,0,0,1,1-2.66h0a5.46,5.46,0,0,1-1,2.66Z"></path>
        <path d="M17.33,6.32c.57-1,1.89-1.46,2.86-2h0C19.38,5.09,18.45,6.14,17.33,6.32Z"></path>
        <path d="M17.93,7.77c.86-.42,2,0,2.89.17V8c-.9.08-2.09.34-2.89-.17Z"></path>
      </g>
    </svg>
  ),
  clock: (
    <svg
      className="SvgIcon-root-0-2-83 SvgIcon-root-d48-0-2-390 SvgIcon-medium-0-2-85 SvgIcon-default-0-2-88"
      viewBox="0 0 24 24"
    >
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
    </svg>
  ),
  paw: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="paw"
      className="svg-inline--fa fa-paw fa-w-16"
      role="img"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
      />
    </svg>
  ),
  circle: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="circle"
      className="svg-inline--fa fa-circle fa-w-16"
      role="img"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
      />
    </svg>
  ),
  box: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="square"
      className="svg-inline--fa fa-square fa-w-14"
      role="img"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"
      />
    </svg>
  ),
  discover: (
    <svg
      className="SvgIcon-root-0-2-83 SvgIcon-root-d138-0-2-691 SvgIcon-customSize-0-2-87 SvgIcon-customSize-d139-0-2-692 SvgIcon-default-0-2-88 FooterNavItem-icon-0-2-81"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
    </svg>
  ),
  support: (
    <svg
      className="SvgIcon-root-0-2-83 SvgIcon-root-d141-0-2-694 SvgIcon-customSize-0-2-87 SvgIcon-customSize-d142-0-2-695 SvgIcon-default-0-2-88 FooterNavItem-icon-0-2-81"
      viewBox="0 0 24 24"
    >
      <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"></path>
    </svg>
  ),
  face: "🐱️",
  weary: "🙀",
  pouting: "😾",
  crying: "😿",
  grinning: "😺",
  kissing: "😽",
  heart: "😻",
  joy: "😹",
};

const Button: React.FC<ButtonProps> = ({
  prependIcon,
  label,
  appendIcon,
  to,
  dropdown,
}) => {
  const WrappingTag = to ? "a" : "div";
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <WrappingTag onClick={toggleDropdown} href={to} className="button-wrapper">
      <button className="button-wrapper__button">
        {prependIcon ? icons[prependIcon] : null}
        <span>{label}</span>
        {appendIcon === "randomNum" ? Math.floor(Math.random() * 59 + 1) : null}
        {appendIcon ? icons[appendIcon] : null}
      </button>
      {dropdown ? (
        <div
          className={`button-wrapper__dropdown ${dropdownOpen ? "open" : ""}`}
        >
          {dropdown.map((dropdownItem, index) => (
            <Button key={index} label={dropdownItem} prependIcon="box" />
          ))}
        </div>
      ) : null}
    </WrappingTag>
  );
};

export default Button;
