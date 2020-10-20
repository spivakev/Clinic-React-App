import React from 'react';
//import './style.css';


let Icons = (props) => {

  // === Иконки для Sidebar: ===
  let heartIcon = <svg id="heart-icon" width="18" height="18" >
    <g clip-path="url(#clip0)">
      <path d="M18 5.951c0 2.462-1.753 4.525-3.071 5.863a.701.701 0 01-.995.007.703.703 0 01-.007-.994c1.82-1.846 2.667-3.396 2.667-4.876 0-2.18-1.417-3.701-3.446-3.701-1.319 0-2.293.496-2.894 1.475A4.09 4.09 0 009.7 5.318.702.702 0 019 5.966a.704.704 0 01-.701-.65c0-.006-.075-.814-.553-1.591-.601-.979-1.575-1.475-2.894-1.475-2.029 0-3.446 1.522-3.446 3.701 0 .983.373 1.993 1.139 3.084h1.669L5.38 6.652a.703.703 0 011.274.022l1.436 3.22.915-1.809a.703.703 0 01.622-.386h.006c.26 0 .5.145.622.376l.505.96h1.58a.703.703 0 110 1.406h-2.004a.703.703 0 01-.622-.375l-.069-.13-.967 1.912a.703.703 0 01-.627.386h-.017a.703.703 0 01-.625-.416L5.982 8.62l-.698 1.426a.703.703 0 01-.632.394H.703a.703.703 0 110-1.406h.178C.29 7.99 0 6.972 0 5.951c0-1.493.49-2.78 1.418-3.718.884-.896 2.104-1.39 3.434-1.39 2.325 0 3.527 1.197 4.126 2.2L9 3.082l.022-.037c.6-1.004 1.801-2.2 4.126-2.2 1.33 0 2.55.493 3.434 1.389C17.51 3.172 18 4.458 18 5.95zm-6.546 7.153l-.016.014c-.894.784-1.748 1.534-2.438 2.269-.69-.735-1.545-1.485-2.438-2.27-.476-.417-.968-.848-1.446-1.287a.703.703 0 10-.951 1.035c.489.45.987.887 1.47 1.31 1.1.966 2.141 1.879 2.817 2.719l.003.003a.732.732 0 00.05.054v.002a.695.695 0 00.053.047h.001l.001.002a.664.664 0 00.048.035l.003.002.048.029.003.002a.652.652 0 00.048.024l.012.005a.658.658 0 00.04.016.733.733 0 00.056.018.597.597 0 00.056.012l.015.002a.85.85 0 00.045.006l.016.001a.647.647 0 00.048.002h.004a.703.703 0 00.109-.009l.015-.002a.628.628 0 00.101-.026l.011-.005a.633.633 0 00.154-.077.628.628 0 00.048-.035L9.441 17l.002-.002a.717.717 0 00.051-.046l.003-.002a.713.713 0 00.039-.043l.01-.011.002-.003c.676-.84 1.716-1.753 2.818-2.719l.016-.014a.703.703 0 10-.928-1.057z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>;

  let doctorsIcon = <svg id="doctors-icon" width="18" height="18">
    <path d="M11.672 13.148a.703.703 0 00-.703.704 2.745 2.745 0 01-2.742 2.742 2.745 2.745 0 01-2.743-2.742V11.83l2.5-3.627a.714.714 0 00.042-.07 4.54 4.54 0 00.14-.136c.9-.915 1.396-2.195 1.396-3.603v-2.76C9.563.733 8.83 0 7.928 0H6.609a.703.703 0 00-.703.703v.703a.703.703 0 101.407 0h.615c.126 0 .228.103.228.228V4.428c-.015 2.06-1.43 3.552-3.375 3.552-1.955 0-3.375-1.508-3.375-3.585a.724.724 0 00-.003-.065.676.676 0 00.003-.065v-2.63c0-.126.103-.229.229-.229h.58a.703.703 0 001.406-.035V.703A.703.703 0 002.918 0H1.635C.733 0 0 .733 0 1.635v2.63c0 .022.001.043.003.065A.727.727 0 000 4.395c0 1.408.496 2.688 1.396 3.603l.086.085c.018.041.04.082.067.12l2.53 3.671v1.978A4.153 4.153 0 008.226 18a4.153 4.153 0 004.148-4.148.703.703 0 00-.703-.704zm-6.89-3.761c.241 0 .48-.017.714-.051l-.73 1.059-.733-1.064c.245.037.495.056.748.056zm11.812-1.848V2.813A2.816 2.816 0 0013.78 0a2.816 2.816 0 00-2.812 2.813v7.523a.703.703 0 101.406 0V2.812c0-.775.63-1.406 1.406-1.406.776 0 1.406.631 1.406 1.407v4.726a2.113 2.113 0 00-1.406 1.988c0 1.164.946 2.11 2.11 2.11 1.163 0 2.109-.947 2.109-2.11 0-.916-.588-1.698-1.406-1.988zm-.703 2.691a.704.704 0 11.001-1.407.704.704 0 01-.001 1.407z" />
  </svg>;

  let messagesIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <path d="M16.4716 10.778C16.3262 10.4179 15.9162 10.2441 15.5562 10.3896C15.1962 10.5352 15.0224 10.945 15.1679 11.3051L15.9959 13.3535L13.5365 12.2694C13.3585 12.1908 13.1559 12.1896 12.977 12.266C12.1364 12.6245 11.2359 12.8064 10.3007 12.8064C6.53638 12.8064 4.00773 9.85913 4.00773 7.10637C4.00773 3.96332 6.83081 1.40625 10.3007 1.40625C13.7706 1.40625 16.5937 3.96332 16.5937 7.10637C16.5937 7.3515 16.5709 7.64511 16.531 7.9118C16.4738 8.29591 16.7387 8.65379 17.1227 8.71106C17.5068 8.76833 17.8647 8.50342 17.9219 8.11931C17.9722 7.78217 17.9999 7.42236 17.9999 7.10637C17.9999 5.19626 17.1911 3.40411 15.7223 2.05994C14.271 0.731552 12.3457 0 10.3007 0C8.25574 0 6.33038 0.731552 4.87909 2.05994C3.56663 3.26115 2.78166 4.82025 2.62936 6.5013C0.978529 7.59457 -7.80486e-05 9.34634 -7.80486e-05 11.2332C-7.80486e-05 12.4119 0.37126 13.5305 1.07823 14.4929L0.0511457 17.0333C-0.0561083 17.2987 0.0081617 17.6024 0.213606 17.8017C0.347502 17.9315 0.524107 18 0.703184 18C0.798903 18 0.895445 17.9805 0.986632 17.9403L3.94786 16.6349C4.69273 16.9122 5.48018 17.0526 6.29289 17.0526C6.31047 17.0526 6.32777 17.0512 6.34494 17.05C7.52048 17.041 8.66333 16.7318 9.65306 16.1532C10.5397 15.6349 11.269 14.9227 11.7803 14.0819C12.2793 13.9922 12.7673 13.8568 13.2409 13.6758L17.0132 15.3387C17.1044 15.3789 17.2008 15.3984 17.2967 15.3984C17.4757 15.3984 17.6522 15.3299 17.7861 15.2001C17.9917 15.0009 18.0558 14.6971 17.9486 14.4318L16.4716 10.778ZM6.29289 15.6445C6.28328 15.6445 6.27394 15.6455 6.26446 15.6459C5.54651 15.6423 4.85547 15.5012 4.21002 15.2258C4.03108 15.1495 3.82852 15.1507 3.65054 15.2291L2.00397 15.955L2.53515 14.6411C2.63334 14.3981 2.5883 14.1209 2.41829 13.9213C1.75622 13.1446 1.40617 12.215 1.40617 11.2332C1.40617 10.1096 1.87886 9.04504 2.70585 8.23782C2.96335 9.64133 3.68982 10.984 4.78584 12.0388C6.14952 13.3513 7.95347 14.1117 9.90121 14.2033C8.98674 15.1033 7.67813 15.6445 6.29289 15.6445ZM11.3202 7.76953C11.7086 7.76953 12.0234 8.08429 12.0234 8.47266C12.0234 8.86102 11.7086 9.17578 11.3202 9.17578H7.10148C6.71312 9.17578 6.39836 8.86102 6.39836 8.47266C6.39836 8.08429 6.71312 7.76953 7.10148 7.76953H11.3202ZM13.4296 6.36328H7.10148C6.71312 6.36328 6.39836 6.04852 6.39836 5.66016C6.39836 5.27179 6.71312 4.95703 7.10148 4.95703H13.4296C13.818 4.95703 14.1327 5.27179 14.1327 5.66016C14.1327 6.04852 13.818 6.36328 13.4296 6.36328Z" />
  </svg>;

  let testIcon = <svg width="18" height="18">
    <defs />
    <path d="M12.623 13.113h-2.074a.703.703 0 000 1.407h2.074a.703.703 0 100-1.407zM12.623 8.86h-2.074a.703.703 0 000 1.406h2.074a.703.703 0 100-1.407z" />
    <path d="M15.432 12.375a.703.703 0 00.703-.703v-8.86A2.816 2.816 0 0013.322 0H4.678a2.816 2.816 0 00-2.813 2.813v12.374A2.816 2.816 0 004.678 18h8.644a2.816 2.816 0 002.813-2.813.703.703 0 00-1.407 0c0 .776-.63 1.407-1.406 1.407H4.678c-.776 0-1.407-.631-1.407-1.407V2.813c0-.776.631-1.407 1.407-1.407h8.644c.776 0 1.407.631 1.407 1.407v8.859c0 .388.314.703.703.703z" />
    <path d="M8.993 2.798a.703.703 0 00-.99.094L6.484 4.73l-.6-.615a.703.703 0 00-1.007.981l.754.775a1.228 1.228 0 001.815-.097l1.641-1.986a.703.703 0 00-.094-.99zM8.993 11.371a.703.703 0 00-.99.095l-1.52 1.839-.6-.613a.703.703 0 10-1.005.983l.755.77a1.228 1.228 0 001.813-.098l1.64-1.986a.703.703 0 00-.093-.99zM12.623 4.535h-2.074a.703.703 0 000 1.406h2.074a.703.703 0 100-1.406zM8.993 7.118a.703.703 0 00-.99.094L6.483 9.05l-.6-.613a.703.703 0 00-1.005.984l.755.77a1.228 1.228 0 001.813-.098l1.64-1.986a.703.703 0 00-.093-.99z" />
  </svg>;


  let bookIcon = <svg width="18" height="18">
    <defs />
    <g clip-path="url(#clip0)">
      <path d="M17.297 7.805A.703.703 0 0018 7.102V1.758a.703.703 0 00-.897-.676c-.815.234-1.853.168-3.167.084-.823-.052-1.755-.111-2.827-.111-.839 0-1.593.37-2.109.955a2.806 2.806 0 00-2.11-.955c-1.07 0-2.003.059-2.826.111-1.314.084-2.352.15-3.167-.084A.703.703 0 000 1.758v11.664c-.002.753.29 1.461.821 1.994a2.794 2.794 0 001.992.826h5.484a.703.703 0 001.406 0h5.485A2.816 2.816 0 0018 13.43v-2.813a.703.703 0 00-1.406 0c0 .776-.631 1.406-1.407 1.406h-5.132c-.12 0-.238.013-.352.036V3.867c0-.775.631-1.406 1.406-1.406 1.027 0 1.936.058 2.738.109 1.049.066 1.938.123 2.747.035v4.497c0 .388.314.703.703.703zm-9 7.031H2.813c-.377 0-.73-.147-.996-.413a1.398 1.398 0 01-.41-.999v-.373c.413.24.893.379 1.406.379h5.132c.194 0 .352.157.352.351v1.055zm0-2.777a1.763 1.763 0 00-.352-.035H2.813c-.776 0-1.407-.631-1.407-1.407V2.605c.809.088 1.698.031 2.747-.035.802-.051 1.711-.109 2.738-.109.775 0 1.406.63 1.406 1.406v8.192zm1.758 1.37h5.133c.512 0 .992-.138 1.406-.378v.379c0 .775-.631 1.406-1.407 1.406H9.704v-1.055c0-.194.158-.351.352-.351z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>;

  let infoIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <path d="M9 5.16797C9.38833 5.16797 9.70312 4.85317 9.70312 4.46484C9.70312 4.07652 9.38833 3.76172 9 3.76172C8.61167 3.76172 8.29688 4.07652 8.29688 4.46484C8.29688 4.85317 8.61167 5.16797 9 5.16797Z" />
    <path d="M15.364 2.63602C13.6641 0.936176 11.404 0 9 0C6.59602 0 4.33593 0.936176 2.63602 2.63602C0.936176 4.33593 0 6.59602 0 9C0 11.404 0.936176 13.6641 2.63602 15.364C4.33593 17.0638 6.59602 18 9 18C10.6458 18 12.2561 17.5515 13.6568 16.703C13.989 16.5017 14.0951 16.0694 13.8939 15.7373C13.6927 15.4051 13.2604 15.299 12.9283 15.5002C11.7472 16.2156 10.3889 16.5938 9 16.5938C4.81279 16.5938 1.40625 13.1872 1.40625 9C1.40625 4.81279 4.81279 1.40625 9 1.40625C13.1872 1.40625 16.5938 4.81279 16.5938 9C16.5938 10.4973 16.1485 11.9547 15.3061 13.2147C15.0903 13.5375 15.177 13.9742 15.4998 14.19C15.8227 14.4058 16.2593 14.3191 16.4751 13.9963C17.4727 12.5042 18 10.7764 18 9C18 6.59602 17.0638 4.33593 15.364 2.63602Z" />
    <path d="M9 6.57422C8.61166 6.57422 8.29688 6.88901 8.29688 7.27734V13.5352C8.29688 13.9235 8.61166 14.2383 9 14.2383C9.38834 14.2383 9.70312 13.9235 9.70312 13.5352V7.27734C9.70312 6.88901 9.38834 6.57422 9 6.57422Z" />
  </svg>;



  // === Иконки для Header: ===

  let eyeIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <path d="M16.41 13.3914C16.3385 13.0097 15.9711 12.7582 15.5894 12.8298C15.2077 12.9013 14.9562 13.2687 15.0277 13.6504C15.0808 13.9335 14.9563 14.1353 14.8774 14.2304C14.7987 14.3253 14.6238 14.4844 14.3367 14.4844H3.66358C3.37653 14.4844 3.20159 14.3253 3.12288 14.2304C3.04399 14.1353 2.9195 13.9335 2.97259 13.6504C3.17203 12.5861 3.57221 11.8861 3.95921 11.2091C4.42921 10.3871 4.91521 9.53694 4.91521 8.22653V7.17184C4.91521 4.95464 6.71743 3.12634 8.93364 3.09417H9.06657C11.2753 3.12627 13.0715 4.95457 13.0715 7.17188V8.22656C13.0715 9.34182 13.4363 10.1093 13.7783 10.741C13.9055 10.9762 14.1474 11.1096 14.3972 11.1096C14.5103 11.1096 14.6249 11.0823 14.7313 11.0247C15.0728 10.8399 15.1998 10.4132 15.015 10.0717C14.6747 9.44304 14.4777 8.93957 14.4777 8.22656V7.17188C14.4777 5.72481 13.9173 4.35807 12.8994 3.32346C12.0272 2.43678 10.9072 1.88346 9.6965 1.73074V0.703125C9.6965 0.314789 9.38171 0 8.99337 0C8.60504 0 8.29025 0.314789 8.29025 0.703125V1.73282C5.60227 2.08157 3.509 4.40089 3.509 7.17188V8.22656C3.509 9.16337 3.16893 9.75818 2.73841 10.5112C2.31428 11.2532 1.83352 12.0941 1.59038 13.3914C1.47433 14.0107 1.63851 14.6438 2.04084 15.1286C2.44278 15.6129 3.03428 15.8906 3.66358 15.8906H6.89757C6.89757 17.0537 7.84383 18 9.00694 18C10.1701 18 11.1163 17.0537 11.1163 15.8906H14.3367C14.966 15.8906 15.5575 15.6129 15.9595 15.1286C16.3618 14.6439 16.526 14.0107 16.41 13.3914ZM9.00694 16.5938C8.61924 16.5938 8.30382 16.2783 8.30382 15.8906H9.71007C9.71007 16.2783 9.39468 16.5938 9.00694 16.5938Z" fill="white" />
  </svg>;

  let notificationIcon = <svg width="18" height="18" viewBox="0 0 18 18" >
    <g clip-path="url(#clip0)">
      <path d="M9.03586 10.371C9.79308 10.371 10.4069 9.75719 10.4069 8.99997C10.4069 8.24275 9.79308 7.62891 9.03586 7.62891C8.27864 7.62891 7.66479 8.24275 7.66479 8.99997C7.66479 9.75719 8.27864 10.371 9.03586 10.371Z" fill="white" />
      <path d="M9.03555 4.99219C6.82569 4.99219 5.02783 6.79005 5.02783 8.99992C5.02783 11.2098 6.82569 13.0076 9.03555 13.0076C11.2454 13.0076 13.0433 11.2098 13.0433 8.99992C13.0433 6.79005 11.2454 4.99219 9.03555 4.99219ZM9.03555 11.6014C7.60107 11.6014 6.43405 10.4344 6.43405 8.99992C6.43405 7.56543 7.60107 6.39841 9.03555 6.39841C10.47 6.39841 11.6371 7.56543 11.6371 8.99992C11.6371 10.4344 10.47 11.6014 9.03555 11.6014Z" fill="white" />
      <path d="M17.5447 7.46517C17.1714 6.89191 16.118 5.42023 14.4034 4.13821C12.6653 2.83866 10.8527 2.17969 9.01579 2.17969C7.18151 2.17969 5.3673 2.83687 3.62354 4.13291C1.9013 5.41295 0.839473 6.8828 0.462878 7.45533C-0.154293 8.39361 -0.154293 9.60612 0.462878 10.5444C0.839473 11.117 1.9013 12.5868 3.62354 13.8669C5.3673 15.1629 7.18148 15.8201 9.01579 15.8201C11.8397 15.8201 14.1106 14.2455 15.5182 12.9246C15.8014 12.6589 15.8156 12.214 15.5499 11.9308C15.2841 11.6476 14.8392 11.6335 14.556 11.8992C13.3334 13.0464 11.3797 14.4139 9.01573 14.4139C5.6019 14.4139 2.77174 11.4959 1.63763 9.77167C1.32924 9.30283 1.32924 8.69701 1.63763 8.22817C2.77174 6.50396 5.6019 3.58598 9.01573 3.58598C12.4294 3.58598 15.2423 6.50677 16.3663 8.2326C16.6698 8.69874 16.6698 9.30111 16.3663 9.76724C16.1544 10.0927 16.2464 10.5282 16.5718 10.7401C16.8972 10.952 17.3328 10.86 17.5447 10.5346C18.1518 9.60229 18.1518 8.39745 17.5447 7.46517Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>;

  let searchIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <g clip-path="url(#clip0)">
      <path d="M10.6172 0C6.54631 0 3.23438 3.31193 3.23438 7.38281C3.23438 9.17381 3.87542 10.8179 4.94013 12.0977L0.207637 16.798C-0.0678826 17.0717 -0.0693943 17.5168 0.204227 17.7924C0.341688 17.9307 0.522391 18 0.703129 18C0.88225 18 1.06144 17.9319 1.19859 17.7957L5.93754 13.089C7.21224 14.1363 8.84261 14.7656 10.6172 14.7656C11.8837 14.7656 13.1335 14.4393 14.2314 13.8218C14.5699 13.6315 14.6899 13.2028 14.4996 12.8643C14.3092 12.5259 13.8805 12.4057 13.5421 12.5961C12.6542 13.0955 11.6428 13.3594 10.6172 13.3594C7.32172 13.3594 4.64063 10.6783 4.64063 7.38281C4.64063 4.08734 7.32172 1.40625 10.6172 1.40625C13.9127 1.40625 16.5938 4.08734 16.5938 7.38281C16.5938 8.42101 16.3236 9.44328 15.8127 10.3391C15.6203 10.6765 15.7378 11.1059 16.0751 11.2983C16.4124 11.4906 16.8418 11.3732 17.0342 11.0359C17.666 9.92813 18 8.66493 18 7.38281C18 3.31193 14.6881 0 10.6172 0Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>;

  let selectIcon = <svg width="16" height="16" viewBox="0 0 16 16">
    <rect width="16" height="16" rx="5" fill="white" />
    <g clip-path="url(#clip0)">
      <path d="M8.00187 10.1996L4.63147 6.8292L4.63147 6.8292C4.45269 6.65044 4.16285 6.65044 3.98407 6.8292L3.98403 6.82923C3.80533 7.00802 3.80531 7.29782 3.98404 7.4766L3.98406 7.47662L7.67816 11.1707L7.67818 11.1707C7.85695 11.3495 8.14678 11.3495 8.32556 11.1707L8.32557 11.1707L12.0197 7.47662L12.0197 7.47664L12.0215 7.47476C12.1972 7.29287 12.1921 7.00303 12.0102 6.82737L12.0102 6.82737C11.8328 6.65603 11.5515 6.65602 11.3741 6.82738L11.3741 6.82736L11.3723 6.8292L8.00187 10.1996Z" fill="#50CAFF" stroke="#50CAFF" stroke-width="0.3" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="10" height="10" fill="white" transform="translate(3 14) rotate(-90)" />
      </clipPath>
    </defs>
  </svg>;


  // === Иконки для раздела Электронная карта: ===

  let cardInfoIcon = <svg width="50" height="50" viewBox="0 0 50 50">
    <path d="M23.3835 32.6172V32.3672H23.1335H18.2507C17.3103 32.3672 16.5475 31.6048 16.5475 30.6641C16.5475 29.7234 17.3103 28.9609 18.2507 28.9609H23.1335H23.3835V28.7109V23.8281C23.3835 22.8874 24.1462 22.125 25.0866 22.125C26.0273 22.125 26.7897 22.8874 26.7897 23.8281V28.7109V28.9609H27.0397H31.9225C32.8633 28.9609 33.6257 29.7233 33.6257 30.6641C33.6257 31.6048 32.8633 32.3672 31.9225 32.3672H27.0397H26.7897V32.6172V37.5C26.7897 38.4407 26.0273 39.2031 25.0866 39.2031C24.1462 39.2031 23.3835 38.4407 23.3835 37.5V32.6172ZM30.8483 8.53906H30.5983V8.78906V9.76562C30.5983 12.8586 28.0819 15.375 24.9889 15.375C21.8963 15.375 19.3796 12.8586 19.3796 9.76562V8.78906V8.53906H19.1296H12.9883C10.696 8.53906 8.83203 10.4035 8.83203 12.6953V42.1875C8.83203 44.4793 10.696 46.3438 12.9883 46.3438H37.0007C39.2929 46.3438 41.1569 44.4793 41.1569 42.1875C41.1569 41.2468 41.9197 40.4844 42.86 40.4844C43.8008 40.4844 44.5632 41.2468 44.5632 42.1875C44.5632 46.3574 41.1705 49.75 37.0007 49.75H12.9883C8.81841 49.75 5.42578 46.3574 5.42578 42.1875V12.6953C5.42578 8.52545 8.81841 5.13281 12.9883 5.13281H19.1299H19.3799V4.88281V1.95312C19.3799 1.0124 20.1423 0.25 21.0831 0.25H28.8956C29.8359 0.25 30.5987 1.01243 30.5987 1.95312V4.88281V5.13281H30.8487H37.001C41.1705 5.13281 44.5635 8.52545 44.5635 12.6953V32.5195C44.5635 33.4602 43.8008 34.2227 42.8604 34.2227C41.9196 34.2227 41.1569 33.4602 41.1569 32.5195V12.6953C41.1569 10.4035 39.2929 8.53906 37.0007 8.53906H30.8483ZM27.1921 3.90625V3.65625H26.9421H23.0358H22.7858V3.90625V9.76562C22.7858 10.9806 23.774 11.9688 24.9889 11.9688C26.2039 11.9688 27.1921 10.9806 27.1921 9.76562V3.90625Z" stroke-width="0.5" />
  </svg>;


  let labIcon = <svg width="50" height="50" viewBox="0 0 50 50">
    <path d="M3.17969 3.90625V3.65625H2.92969H1.95312C1.0124 3.65625 0.25 2.89385 0.25 1.95312C0.25 1.0124 1.0124 0.25 1.95312 0.25H20.9961C21.9368 0.25 22.6992 1.0124 22.6992 1.95312C22.6992 2.89385 21.9368 3.65625 20.9961 3.65625H20.0195H19.7695V3.90625V8.78906C19.7695 9.72979 19.0071 10.4922 18.0664 10.4922C17.1257 10.4922 16.3633 9.72979 16.3633 8.78906V3.90625V3.65625H16.1133H6.83594H6.58594V3.90625V16.6016V16.8516H6.83594H18.0664C19.0071 16.8516 19.7695 17.614 19.7695 18.5547V41.4551C19.7695 46.0285 16.0481 49.75 11.4746 49.75C6.90115 49.75 3.17969 46.0285 3.17969 41.4551V3.90625ZM16.3633 20.5078V20.2578H16.1133H6.83594H6.58594V20.5078V41.4551C6.58594 44.1509 8.77878 46.3438 11.4746 46.3438C14.1704 46.3438 16.3633 44.1509 16.3633 41.4551V20.5078ZM30.2305 3.90625V3.65625H29.9805H29.0039C28.0632 3.65625 27.3008 2.89385 27.3008 1.95312C27.3008 1.0124 28.0632 0.25 29.0039 0.25H48.0469C48.9876 0.25 49.75 1.0124 49.75 1.95312C49.75 2.89385 48.9876 3.65625 48.0469 3.65625H47.0703H46.8203V3.90625V14.6484C46.8203 15.5892 46.0579 16.3516 45.1172 16.3516C44.1765 16.3516 43.4141 15.5892 43.4141 14.6484V3.90625V3.65625H43.1641H33.8867H33.6367V3.90625V22.4609V22.7109H33.8867H45.1172C46.0579 22.7109 46.8203 23.4733 46.8203 24.4141V41.4551C46.8203 46.0285 43.0989 49.75 38.5254 49.75C33.9519 49.75 30.2305 46.0285 30.2305 41.4551V3.90625ZM43.4141 26.3672V26.1172H43.1641H33.8867H33.6367V26.3672V41.4551C33.6367 44.1509 35.8296 46.3438 38.5254 46.3438C41.2212 46.3438 43.4141 44.1509 43.4141 41.4551V26.3672Z" stroke-width="0.5" />
  </svg>;


  let addInfoIcon = <svg width="46" height="50" viewBox="0 0 46 50">
    <path d="M34.1328 38.5195H33.8828V38.7695V40.7227C33.8828 41.6634 33.1204 42.4258 32.1797 42.4258C31.239 42.4258 30.4766 41.6634 30.4766 40.7227V38.7695V38.5195H30.2266H28.2734C27.3327 38.5195 26.5703 37.7571 26.5703 36.8164C26.5703 35.8757 27.3327 35.1133 28.2734 35.1133H30.2266H30.4766V34.8633V32.9102C30.4766 31.9694 31.239 31.207 32.1797 31.207C33.1204 31.207 33.8828 31.9694 33.8828 32.9102V34.8633V35.1133H34.1328H36.0859C37.0267 35.1133 37.7891 35.8757 37.7891 36.8164C37.7891 37.7571 37.0267 38.5195 36.0859 38.5195H34.1328ZM3.02794 8.94446L3.02795 8.94445L9.47745 2.43735C9.47745 2.43735 9.47745 2.43734 9.47746 2.43734C10.8549 1.04771 12.7685 0.25 14.7255 0.25H32.462C36.6315 0.25 40.0245 3.64264 40.0245 7.8125V18.1641C40.0245 19.1048 39.2617 19.8672 38.3214 19.8672C37.3806 19.8672 36.6182 19.1048 36.6182 18.1641V7.8125C36.6182 5.52065 34.7538 3.65625 32.462 3.65625H14.7255C13.6701 3.65625 12.6395 4.0857 11.8968 4.83537C11.8968 4.83539 11.8967 4.8354 11.8967 4.83541L5.4473 11.3421C5.11094 11.6813 4.84342 12.0712 4.65079 12.494L4.48963 12.8477H4.87828H10.3047C12.0583 12.8477 13.4844 11.4212 13.4844 9.66797C13.4844 8.72724 14.2468 7.96484 15.1875 7.96484C16.1282 7.96484 16.8906 8.72724 16.8906 9.66797C16.8906 13.2992 13.9359 16.2539 10.3047 16.2539H4.54297H4.29297V16.5039V42.1875C4.29297 44.4794 6.15737 46.3438 8.44922 46.3438H16.2617C17.2024 46.3438 17.9648 47.1062 17.9648 48.0469C17.9648 48.9876 17.2024 49.75 16.2617 49.75H8.44922C4.27935 49.75 0.886719 46.3574 0.886719 42.1875V14.146C0.886719 12.1841 1.64688 10.3377 3.02794 8.94446ZM19.2461 36.8164C19.2461 29.6852 25.0485 23.8828 32.1797 23.8828C39.3109 23.8828 45.1133 29.6852 45.1133 36.8164C45.1133 43.9476 39.3109 49.75 32.1797 49.75C25.0485 49.75 19.2461 43.9476 19.2461 36.8164ZM22.6523 36.8164C22.6523 42.07 26.9261 46.3438 32.1797 46.3438C37.4333 46.3438 41.707 42.07 41.707 36.8164C41.707 31.5628 37.4333 27.2891 32.1797 27.2891C26.9261 27.2891 22.6523 31.5628 22.6523 36.8164Z" stroke-width="0.5" />
  </svg>;


  let historyIcon = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.77965 41.2206L5.77932 41.221L2.40707 44.5806L2.40674 44.5809C1.54012 45.4478 1.28309 46.7398 1.75215 47.8735L1.75217 47.8735C2.22167 49.0089 3.31776 49.7429 4.54687 49.7443L13.3994 49.75H13.3995H13.4028C14.6342 49.75 15.7906 49.2709 16.6615 48.4L16.6616 48.3999C17.5336 47.5283 18.0127 46.3709 18.0119 45.1379L18.007 36.2842C18.0056 35.0559 17.2716 33.9597 16.1362 33.4902L16.1362 33.4902C15.0023 33.0211 13.7102 33.2782 12.8433 34.1451L12.8433 34.1452L12.8433 34.1452L12.8432 34.1452L12.8432 34.1452L12.8432 34.1453L12.8432 34.1453L12.8431 34.1453L12.8431 34.1454L12.8431 34.1454L12.843 34.1454L12.843 34.1455L12.843 34.1455L12.8429 34.1455L12.8429 34.1455L12.8429 34.1456L12.8429 34.1456L12.8428 34.1456L12.8428 34.1457L12.8428 34.1457L12.8427 34.1457L12.8427 34.1457L12.8427 34.1458L12.8427 34.1458L12.8426 34.1458L12.8426 34.1459L12.8426 34.1459L12.8425 34.1459L12.8425 34.1459L12.8425 34.146L12.8425 34.146L12.8424 34.146L12.8424 34.1461L12.8424 34.1461L12.8423 34.1461L12.8423 34.1462L12.8423 34.1462L12.8422 34.1462L12.8422 34.1462L12.8422 34.1463L12.8422 34.1463L12.8421 34.1463L12.8421 34.1464L12.8421 34.1464L12.842 34.1464L12.842 34.1464L12.842 34.1465L12.842 34.1465L12.8419 34.1465L12.8419 34.1466L12.8419 34.1466L12.8418 34.1466L12.8418 34.1467L12.8418 34.1467L12.8417 34.1467L12.8417 34.1467L12.8417 34.1468L12.8417 34.1468L12.8416 34.1468L12.8416 34.1469L12.8416 34.1469L12.8415 34.1469L12.8415 34.1469L12.8415 34.147L12.8415 34.147L12.8414 34.147L12.8414 34.1471L12.8414 34.1471L12.8413 34.1471L12.8413 34.1472L12.8413 34.1472L12.8412 34.1472L12.8412 34.1472L12.8412 34.1473L12.8412 34.1473L12.8411 34.1473L12.8411 34.1474L12.8411 34.1474L12.841 34.1474L12.841 34.1474L12.841 34.1475L12.8409 34.1475L12.8409 34.1475L12.8409 34.1476L12.8409 34.1476L12.8408 34.1476L12.8408 34.1477L12.8408 34.1477L12.8407 34.1477L12.8407 34.1477L12.8407 34.1478L12.8407 34.1478L12.8406 34.1478L12.8406 34.1479L12.8406 34.1479L12.8405 34.1479L12.8405 34.148L12.8405 34.148L12.8404 34.148L12.8404 34.148L12.8404 34.1481L12.8404 34.1481L12.8403 34.1481L12.8403 34.1482L12.8403 34.1482L12.8402 34.1482L12.8402 34.1483L12.8402 34.1483L12.8401 34.1483L12.8401 34.1483L12.8401 34.1484L12.8401 34.1484L12.84 34.1484L12.84 34.1485L12.84 34.1485L12.8399 34.1485L12.8399 34.1486L12.8399 34.1486L12.8398 34.1486L12.8398 34.1486L12.8398 34.1487L12.8398 34.1487L12.8397 34.1487L12.8397 34.1488L12.8397 34.1488L12.8396 34.1488L12.8396 34.1488L12.8396 34.1489L12.8395 34.1489L12.8395 34.1489L12.8395 34.149L12.8395 34.149L12.8394 34.149L12.8394 34.1491L12.8394 34.1491L12.8393 34.1491L12.8393 34.1491L12.8393 34.1492L12.8392 34.1492L12.8392 34.1492L12.8392 34.1493L12.8392 34.1493L12.8391 34.1493L12.8391 34.1494L12.8391 34.1494L12.839 34.1494L12.839 34.1494L12.839 34.1495L12.8389 34.1495L12.8389 34.1495L12.8389 34.1496L12.8389 34.1496L12.8388 34.1496L12.8388 34.1497L12.8388 34.1497L12.8387 34.1497L12.8387 34.1497L12.8387 34.1498L12.8386 34.1498L12.8386 34.1498L12.8386 34.1499L12.8386 34.1499L12.8385 34.1499L12.8385 34.15L12.8385 34.15L12.8384 34.15L12.8384 34.15L12.8384 34.1501L12.8383 34.1501L12.8383 34.1501L12.8383 34.1502L12.8383 34.1502L12.8382 34.1502L12.8382 34.1503L12.8382 34.1503L12.8381 34.1503L12.8381 34.1503L12.8381 34.1504L12.838 34.1504L12.838 34.1504L12.838 34.1505L12.838 34.1505L12.8379 34.1505L12.8379 34.1506L12.8379 34.1506L12.8378 34.1506L12.8378 34.1507L12.8378 34.1507L12.8377 34.1507L12.8377 34.1507L12.8377 34.1508L12.8377 34.1508L12.8376 34.1508L12.8376 34.1509L12.8376 34.1509L12.8375 34.1509L12.8375 34.151L12.8375 34.151L12.8374 34.151L12.8374 34.151L12.8374 34.1511L12.8374 34.1511L12.8373 34.1511L12.8373 34.1512L12.8373 34.1512L12.8372 34.1512L12.8372 34.1513L12.8372 34.1513L12.8371 34.1513L12.8371 34.1513L12.8371 34.1514L12.8371 34.1514L12.837 34.1514L12.837 34.1515L12.837 34.1515L12.8369 34.1515L12.8369 34.1516L12.8369 34.1516L12.8368 34.1516L12.8368 34.1516L12.8368 34.1517L12.8368 34.1517L12.8367 34.1517L12.8367 34.1518L12.8367 34.1518L12.8366 34.1518L12.8366 34.1519L12.8366 34.1519L12.8365 34.1519L12.8365 34.1519L12.8365 34.152L12.8365 34.152L12.8364 34.152L12.8364 34.1521L12.8364 34.1521L12.8363 34.1521L12.8363 34.1522L12.8363 34.1522L12.8362 34.1522L12.8362 34.1522L12.8362 34.1523L12.8361 34.1523L12.8361 34.1523L12.8361 34.1524L12.8361 34.1524L12.836 34.1524L12.836 34.1525L12.836 34.1525L12.8359 34.1525L12.8359 34.1525L12.8359 34.1526L12.8358 34.1526L12.8358 34.1526L12.8358 34.1527L12.8358 34.1527L12.8357 34.1527L12.8357 34.1528L12.8357 34.1528L12.8356 34.1528L12.8356 34.1529L12.8356 34.1529L12.8355 34.1529L12.8355 34.1529L12.8355 34.153L12.8355 34.153L12.8354 34.153L12.8354 34.1531L12.8354 34.1531L12.8353 34.1531L12.8353 34.1532L12.8353 34.1532L12.8352 34.1532L12.8352 34.1532L12.8352 34.1533L12.8352 34.1533L12.8351 34.1533L12.8351 34.1534L12.8351 34.1534L12.835 34.1534L12.835 34.1535L12.835 34.1535L12.8349 34.1535L12.8349 34.1535L12.8349 34.1536L12.8349 34.1536L12.8348 34.1536L12.8348 34.1537L12.8348 34.1537L12.8347 34.1537L12.8347 34.1538L12.8347 34.1538L12.8346 34.1538L12.8346 34.1538L12.8346 34.1539L12.8346 34.1539L12.8345 34.1539L12.8345 34.154L12.8345 34.154L12.8344 34.154L12.8344 34.1541L12.8344 34.1541L12.8343 34.1541L12.8343 34.1541L12.8343 34.1542L12.8342 34.1542L12.8342 34.1542L12.8342 34.1543L12.8342 34.1543L12.8341 34.1543L12.8341 34.1544L12.8341 34.1544L12.834 34.1544L12.834 34.1544L12.834 34.1545L12.8339 34.1545L12.8339 34.1545L12.8339 34.1546L12.8339 34.1546L12.8338 34.1546L12.8338 34.1547L12.8338 34.1547L12.8337 34.1547L12.8337 34.1548L12.8337 34.1548L12.8336 34.1548L12.8336 34.1548L12.8336 34.1549L12.8336 34.1549L12.8335 34.1549L12.8335 34.155L12.8335 34.155L12.8334 34.155L12.8334 34.155L12.8334 34.1551L12.8333 34.1551L12.8333 34.1551L12.8333 34.1552L12.8333 34.1552L12.8332 34.1552L12.8332 34.1553L12.8332 34.1553L12.8331 34.1553L12.8331 34.1553L12.8331 34.1554L12.833 34.1554L12.833 34.1554L12.833 34.1555L12.833 34.1555L12.8329 34.1555L12.8329 34.1556L12.8329 34.1556L12.8328 34.1556L12.8328 34.1557L12.8328 34.1557L12.8327 34.1557L12.8327 34.1557L12.8327 34.1558L12.8327 34.1558L12.8326 34.1558L12.8326 34.1559L12.8326 34.1559L12.8325 34.1559L12.8325 34.156L12.8325 34.156L12.8324 34.156L12.8324 34.156L12.8324 34.1561L12.8324 34.1561L12.8323 34.1561L12.8323 34.1562L12.8323 34.1562L12.8322 34.1562L12.8322 34.1562L12.8322 34.1563L12.8321 34.1563L12.8321 34.1563L12.8321 34.1564L12.8321 34.1564L12.832 34.1564L12.832 34.1565L12.832 34.1565L12.8319 34.1565L12.8319 34.1566L12.8319 34.1566L12.8318 34.1566L12.8318 34.1566L12.8318 34.1567L12.8318 34.1567L12.8317 34.1567L12.8317 34.1568L12.8317 34.1568L12.8316 34.1568L12.8316 34.1568L12.8316 34.1569L12.8315 34.1569L12.8315 34.1569L12.8315 34.157L12.8315 34.157L12.8314 34.157L12.8314 34.1571L12.8314 34.1571L12.8313 34.1571L12.8313 34.1571L12.8313 34.1572L12.8312 34.1572L12.8312 34.1572L12.8312 34.1573L12.8312 34.1573L12.8311 34.1573L12.8311 34.1574L12.8311 34.1574L12.831 34.1574L12.831 34.1574L12.831 34.1575L12.831 34.1575L12.8309 34.1575L12.8309 34.1576L12.8309 34.1576L12.8308 34.1576L12.8308 34.1577L12.8308 34.1577L12.8307 34.1577L12.8307 34.1577L12.8307 34.1578L12.8307 34.1578L12.8306 34.1578L12.8306 34.1579L12.8306 34.1579L12.8305 34.1579L12.8305 34.158L12.8305 34.158L12.8304 34.158L12.8304 34.158L12.8304 34.1581L12.8304 34.1581L12.8303 34.1581L12.8303 34.1582L12.8303 34.1582L12.8302 34.1582L12.8302 34.1582L12.8302 34.1583L12.8302 34.1583L12.8301 34.1583L12.8301 34.1584L12.8301 34.1584L12.83 34.1584L12.83 34.1585L12.83 34.1585L12.8299 34.1585L12.8299 34.1585L12.8299 34.1586L12.8299 34.1586L12.8298 34.1586L12.8298 34.1587L12.8298 34.1587L12.8297 34.1587L12.8297 34.1587L12.8297 34.1588L12.8296 34.1588L12.8296 34.1588L12.8296 34.1589L12.8296 34.1589L12.8295 34.1589L12.8295 34.159L12.8295 34.159L12.8294 34.159L12.8294 34.159L12.8294 34.1591L12.8294 34.1591L12.8293 34.1591L12.8293 34.1592L12.8293 34.1592L12.8292 34.1592L12.8292 34.1592L12.8292 34.1593L12.8291 34.1593L12.8291 34.1593L12.8291 34.1594L12.8291 34.1594L12.829 34.1594L12.829 34.1595L12.829 34.1595L12.8289 34.1595L12.8289 34.1595L12.8289 34.1596L12.8289 34.1596L12.8288 34.1596L12.8288 34.1597L12.8288 34.1597L12.8287 34.1597L12.8287 34.1597L12.8287 34.1598L12.8287 34.1598L12.8286 34.1598L12.8286 34.1599L12.8286 34.1599L12.8285 34.1599L12.8285 34.16L12.8285 34.16L12.8284 34.16L12.8284 34.16L12.8284 34.1601L12.8284 34.1601L12.8283 34.1601L12.8283 34.1602L12.8283 34.1602L12.8282 34.1602L12.8282 34.1602L12.8282 34.1603L12.8282 34.1603L12.8281 34.1603L12.8281 34.1604L12.8281 34.1604L12.0641 34.9419L12.064 34.942C11.4061 35.6142 11.418 36.6922 12.0906 37.3503L11.9158 37.529L12.0906 37.3503C12.6728 37.9198 13.5597 37.9874 14.2144 37.558L14.6012 37.3042L14.6015 37.7669L14.6057 45.1399V45.1401C14.6057 45.5743 14.3842 45.8608 14.2529 45.9916C14.122 46.1228 13.836 46.3438 13.4028 46.3438H13.4027H13.4027H13.4027H13.4027H13.4026H13.4026H13.4026H13.4025H13.4025H13.4025H13.4025H13.4024H13.4024H13.4024H13.4023H13.4023H13.4023H13.4023H13.4022H13.4022H13.4022H13.4021H13.4021H13.4021H13.4021H13.402H13.4019L6.07344 46.3388L5.46882 46.3384L5.89717 45.9117L8.18565 43.632C8.18568 43.6319 8.18571 43.6319 8.18574 43.6319C9.58718 42.2304 9.69745 40.0107 8.44057 38.4674L8.63441 38.3095L8.44056 38.4673C5.30875 34.6214 3.61016 29.765 3.65725 24.7924C3.76803 13.1298 13.3382 3.65625 25.0006 3.65625H25.0334H25.0338C36.7844 3.67439 46.344 13.249 46.344 25C46.344 29.2093 45.0922 33.3061 42.7252 36.8466L42.7251 36.8467C42.2023 37.6283 42.4124 38.6861 43.1941 39.209C43.9759 39.7316 45.034 39.5217 45.5565 38.7397L45.5566 38.7397C48.3004 34.6357 49.7503 29.8847 49.7503 25C49.7503 18.3955 47.1806 12.1854 42.514 7.51193C37.8478 2.83891 31.6426 0.260247 25.0393 0.25H25.0393H25.0392H25.0391H25.0391H25.039H25.0389H25.0388H25.0387H25.0387H25.0386H25.0385H25.0384H25.0384H25.0383H25.0382H25.0381H25.038H25.038H25.0379H25.0378H25.0377H25.0377H25.0376H25.0375H25.0374H25.0373H25.0373H25.0372H25.0371H25.037H25.037H25.0369H25.0368H25.0367H25.0366H25.0366H25.0365H25.0364H25.0363H25.0363H25.0362H25.0361H25.036H25.036H25.0359H25.0358H25.0357H25.0356H25.0356H25.0355H25.0354H25.0353H25.0353H25.0352H25.0351H25.035H25.035H25.0349H25.0348H25.0347H25.0346H25.0346H25.0345H25.0344H25.0343H25.0343H25.0342H25.0341H25.034H25.034H25.0339H25.0338H25.0337H25.0337H25.0336H25.0335H25.0334H25.0333H25.0333H25.0332H25.0331H25.033H25.033H25.0329H25.0328H25.0327H25.0327H25.0326H25.0325H25.0324H25.0324H25.0323H25.0322H25.0321H25.032H25.032H25.0319H25.0318H25.0317H25.0317H25.0316H25.0315H25.0314H25.0314H25.0313H25.0312H25.0311H25.0311H25.031H25.0309H25.0308H25.0308H25.0307H25.0306H25.0305H25.0305H25.0304H25.0303H25.0302H25.0301H25.0301H25.03H25.0299H25.0298H25.0298H25.0297H25.0296H25.0295H25.0295H25.0294H25.0293H25.0292H25.0292H25.0291H25.029H25.0289H25.0289H25.0288H25.0287H25.0286H25.0286H25.0285H25.0284H25.0283H25.0283H25.0282H25.0281H25.028H25.028H25.0279H25.0278H25.0277H25.0277H25.0276H25.0275H25.0274H25.0274H25.0273H25.0272H25.0271H25.0271H25.027H25.0269H25.0268H25.0267H25.0267H25.0266H25.0265H25.0264H25.0264H25.0263H25.0262H25.0261H25.0261H25.026H25.0259H25.0258H25.0258H25.0257H25.0256H25.0255H25.0255H25.0254H25.0253H25.0252H25.0252H25.0251H25.025H25.0249H25.0249H25.0248H25.0247H25.0246H25.0246H25.0245H25.0244H25.0243H25.0243H25.0242H25.0241H25.024H25.024H25.0239H25.0238H25.0237H25.0237H25.0236H25.0235H25.0234H25.0234H25.0233H25.0232H25.0231H25.0231H25.023H25.0229H25.0228H25.0228H25.0227H25.0226H25.0225H25.0225H25.0224H25.0223H25.0222H25.0222H25.0221H25.022H25.0219H25.0219H25.0218H25.0217H25.0216H25.0216H25.0215H25.0214H25.0213H25.0213H25.0212H25.0211H25.021H25.021H25.0209H25.0208H25.0207H25.0207H25.0206H25.0205H25.0204H25.0204H25.0203H25.0202H25.0201H25.0201H25.02H25.0199H25.0198H25.0198H25.0197H25.0196H25.0195H25.0195H25.0194H25.0193H25.0192H25.0192H25.0191H25.019H25.0189H25.0189H25.0188H25.0187H25.0187H25.0186H25.0185H25.0184H25.0184H25.0183H25.0182H25.0181H25.0181H25.018H25.0179H25.0178H25.0178H25.0177H25.0176H25.0175H25.0175H25.0174H25.0173H25.0172H25.0172H25.0171H25.017H25.0169H25.0169H25.0168H25.0167H25.0166H25.0166H25.0165H25.0164H25.0163H25.0163H25.0162H25.0161H25.016H25.016H25.0159H25.0158H25.0157H25.0157H25.0156H25.0155H25.0154H25.0154H25.0153H25.0152H25.0151H25.0151H25.015H25.0149H25.0148H25.0147H25.0147H25.0146H25.0145H25.0145H25.0144H25.0143H25.0142H25.0141H25.0141H25.014H25.0139H25.0138H25.0138H25.0137H25.0136H25.0135H25.0135H25.0134H25.0133H25.0132H25.0132H25.0131H25.013H25.0129H25.0129H25.0128H25.0127H25.0126H25.0126H25.0125H25.0124H25.0123H25.0123H25.0122H25.0121H25.012H25.012H25.0119H25.0118H25.0117H25.0117H25.0116H25.0115H25.0114H25.0114H25.0113H25.0112H25.0111H25.0111H25.011H25.0109H25.0108H25.0108H25.0107H25.0106H25.0105H25.0105H25.0104H25.0103H25.0102H25.0101H25.0101H25.01H25.0099H25.0098H25.0098H25.0097H25.0096H25.0095H25.0095H25.0094H25.0093H25.0092H25.0092H25.0091H25.009H25.0089H25.0089H25.0088H25.0087H25.0086H25.0086H25.0085H25.0084H25.0083H25.0083H25.0082H25.0081H25.008H25.0079H25.0079H25.0078H25.0077H25.0076H25.0076H25.0075H25.0074H25.0073H25.0073H25.0072H25.0071H25.007H25.007H25.0069H25.0068H25.0067H25.0066H25.0066H25.0065H25.0064H25.0063H25.0063H25.0062H25.0061H25.006H25.006H25.0059H25.0058H25.0057H25.0057H25.0056H25.0055H25.0054H25.0053H25.0053H25.0052H25.0051H25.005H25.005H25.0049H25.0048H25.0047H25.0047H25.0046H25.0045H25.0044H25.0043H25.0043H25.0042H25.0041H25.004H25.004H25.0039H25.0038H25.0037H25.0037H25.0036H25.0035H25.0034H25.0033H25.0033H25.0032H25.0031H25.003H25.003H25.0029H25.0028H25.0027H25.0026H25.0026H25.0025H25.0024H25.0023H25.0023H25.0022H25.0021H25.002H25.0019H25.0019H25.0018H25.0017H25.0016H25.0016H25.0015H25.0014H25.0013H25.0012H25.0012H25.0011H25.001H25.0009H25.0009H25.0008H25.0007H25.0006C11.4791 0.25 0.379375 11.2381 0.251355 24.7601L0.00136668 24.7578L0.251355 24.7601C0.196596 30.5257 2.16726 36.1574 5.79919 40.6179L5.77965 41.2206ZM5.77965 41.2206C5.95024 41.05 5.93742 40.7875 5.7994 40.6182L5.77965 41.2206ZM23.1723 21.8339L23.2971 21.7617V21.6175V9.76562C23.2971 8.8249 24.0595 8.0625 25.0002 8.0625C25.941 8.0625 26.7034 8.8249 26.7034 9.76562V21.6175V21.7617L26.8281 21.8339C27.9215 22.4667 28.6565 23.6472 28.6565 25C28.6565 25.3273 28.6126 25.6444 28.5318 25.9468L28.4946 26.0861L28.5966 26.1881L33.7727 31.3642L33.7728 31.3643C34.438 32.0292 34.438 33.1075 33.7728 33.7725L33.7727 33.7726C33.4404 34.1052 33.0048 34.2715 32.5686 34.2715C32.1321 34.2715 31.6968 34.1052 31.3645 33.7726L31.3644 33.7725L26.1883 28.5967L26.0863 28.4948L25.947 28.532C25.6448 28.6127 25.3278 28.6562 25.0002 28.6562C22.9811 28.6562 21.344 27.0191 21.344 25C21.344 23.6472 22.079 22.4667 23.1723 21.8339ZM36.0417 43.2699L36.0417 43.2699C36.846 42.7826 37.8932 43.0397 38.3809 43.8441C38.8682 44.6488 38.611 45.6959 37.8064 46.1832L37.8064 46.1832C33.9546 48.5165 29.5263 49.75 25.0002 49.75C24.0595 49.75 23.2971 48.9876 23.2971 48.0469C23.2971 47.1062 24.0595 46.3438 25.0002 46.3438C28.9034 46.3438 32.7214 45.2808 36.0417 43.2699Z" stroke-width="0.5" />
  </svg>;

  // == Иконка навигации: ==
  let backIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <g clip-path="url(#clip0)">
      <path d="M6.49021 15.7135C6.03153 15.7135 5.58274 15.5346 5.24546 15.1969L0.581486 10.5271C-0.240704 9.70412 -0.240704 8.36489 0.581486 7.54174L5.24546 2.87213C5.75097 2.36594 6.50697 2.21652 7.17137 2.49146C7.83343 2.76543 8.26121 3.40318 8.26121 4.11592V8.3664H17.2618C17.6501 8.3664 17.9649 8.6813 17.9649 9.06966C17.9649 9.45803 17.6501 9.77279 17.2618 9.77279H8.26121C7.48571 9.77279 6.85482 9.1419 6.85482 8.3664V4.11592C6.85482 3.90526 6.70005 3.81847 6.63359 3.79086C6.56574 3.76285 6.39202 3.7141 6.24041 3.86598L1.57644 8.53559C1.30164 8.81066 1.30164 9.25822 1.57644 9.53342L6.24041 14.203C6.39202 14.3548 6.56574 14.306 6.63345 14.278C6.70005 14.2505 6.85482 14.1638 6.85482 13.9531V12.4403C6.85482 12.0519 7.16958 11.737 7.55795 11.737C7.94632 11.737 8.26107 12.0519 8.26107 12.4403V13.9531C8.26107 14.6658 7.83329 15.3034 7.17123 15.5774C6.95027 15.669 6.719 15.7135 6.49021 15.7135Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>;

  const sprite = {
    "heart": heartIcon,
    "doctors": doctorsIcon,
    "messages": messagesIcon,
    "test": testIcon,
    "book": bookIcon,
    "info": infoIcon,
    "eye": eyeIcon,
    "notifications": notificationIcon,
    "search": searchIcon,
    "select": selectIcon,
    "addInfo": addInfoIcon,
    "cardInfo": cardInfoIcon,
    "history": historyIcon,
    "lab": labIcon,
    "back": backIcon
  }

  return sprite[props.iconKey];
}

export default Icons;