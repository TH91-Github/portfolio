// Svg styled component
import styled from 'styled-components';

const Svg = styled.svg`
  width:100%;
  height:100%;
  padding: ${props => props.$padding || "0"};
  fill: ${props => props.$fillColor || "#000"};
`;

// setting styled props {color} 
export const SvgArrow = ({...props}) => {
  return <Svg {...props} viewBox="0 0 1024 1024">
    <path d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/>
  </Svg>
};

// setting styled props {color} 
export const SvgSetting = ({...props}) => {
  return <Svg {...props} viewBox="0 0 1024 1024">
    <path d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"/>
  </Svg>
};

// login styled props {color} 
export const SvgLogin = ({...props}) => {
  return <Svg {...props} viewBox="0 0 32 32">
    <g>
      <circle cx="16" cy="16" fill="none" r="15" stroke={props.color || "#000000"} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
      <path d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0" fill="none" stroke={props.color || "#000000"} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
      <circle cx="16" cy="11" fill="none" r="6" stroke={props.color || "#000000"} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    </g>
  </Svg>
}

// logOut styled props {color} 
export const SvgLogOut = ({...props}) => {
  return <Svg {...props} viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
    <g id="Exit_1_">
      <path d="M52.4501991,28.7678509l-5-4.9990005c-0.3768997-0.3770008-0.9902-0.3770008-1.3671989,0
        c-0.3778992,0.3778992-0.3778992,0.9902,0,1.3671989l3.3171997,3.3164005H35.2666016v2h14.1320992l-3.3157005,3.3163986
        c-0.3778992,0.377903-0.3778992,0.9902,0,1.3672028c0.1884995,0.1884995,0.4365997,0.2831993,0.6835976,0.2831993
        c0.2471008,0,0.4951019-0.0946999,0.6836014-0.2831993l5-5.0010014c0.1817017-0.1816006,0.2831993-0.4277,0.2831993-0.6835995
        C52.7333984,29.1946507,52.6319008,28.9495506,52.4501991,28.7678509z"/>
      <path d="M40.2666016,39.4524498c-0.5527,0-1,0.4473-1,1v10.7900009c0,1.0429993-0.8310013,2.2099991-1.9433022,2.2099991
        h-6.0566998V11.2394505V9.8677502L30.0191994,9.33395L14.0765009,2.56445l-0.2606955-0.112h23.507494
        c1.2168007,0,1.9433022,0.9921999,1.9433022,1.9511998v15.0487995c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1V4.4036498
        c0-2.1786997-1.7685013-3.9511998-3.9433022-3.9511998H12.2666006c-0.5215998,0-0.9358997,0.4029-0.9822998,0.9124
        L11.2666006,1.35725V1.45245V55.03405l17.1855011,7.3064003l2.8144989,1.2070999v-3.0951004v-5h6.0566998
        c2.3584023,0,3.9433022-2.1767998,3.9433022-4.2099991V40.4524498
        C41.2666016,39.8997498,40.8194008,39.4524498,40.2666016,39.4524498z M29.2665997,11.2394505v49.2129974l-15.999999-6.7766991
        V4.4524498l15.9906988,6.7728004l0.0093002,0.0038996V11.2394505z"/>
    </g>
  </Svg>
}

// Velog styled props {color} : #20C997
export const SvgVelog = ({...props}) => {
  return <Svg color={props.fillColor || "#20C997"} {...props} viewBox="0 0 24 24" >
    <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z"/>
  </Svg>
}

// Github styled props {color} 
export const SvgGithub = ({...props}) => {
  return <Svg color={props.fillColor || "#181717"} {...props} viewBox="0 0 24 24" >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </Svg>
}

// Naver styled props {color} : #03C75A
export const SvgNaver = ({...props}) => {
  return <Svg $padding={props.$padding || "2px"} color={props.$fillColor || "#fff"} {...props} viewBox="0 0 24 24" >
   <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z"/>
  </Svg>
}

// React styled props {color} : #61DAFB
export const SvgReact = ({...props}) => {
  return <Svg {...props} viewBox="0 0 24 24" >
   <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </Svg>
}

// Vue styled props {color} : #4FC08D
export const SvgVue = ({...props}) => {
  return <Svg {...props} viewBox="0 0 24 24" >
   <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
  </Svg>
}

// Photoshop styled props {color} : #31A8FF
export const SvgPhotoshop = ({...props}) => {
  return <Svg {...props} viewBox="0 0 24 24" >
   <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"/>
  </Svg>
}

// Call styled props {color} : 
export const SvgCall = ({...props}) => {
  return <Svg {...props} viewBox="0 -0.5 25 25" >
    <path fillRule="evenodd" clipRule="evenodd" d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
}

// Email styled props {color} : 
export const SvgEmail = ({...props}) => {
  return <Svg {...props} viewBox="0 0 100.354 100.354" >
    <path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"/>
  </Svg>
}

// 중 괄호 { 
export const SvgBracesLeft = ({...props}) => {
  return <Svg {...props} viewBox="0 0 27 78" > {/* fill="none" */}
    <path fill="#FFFCE1" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"></path>
  </Svg>
}

// 중 괄호 }
export const SvgBracesRight = ({...props}) => {
  return <Svg {...props} viewBox="0 0 27 78" >
    <path fill="#FFFCE1" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"></path>
  </Svg>
}

// Profile 
export const SvgProfile = ({...props}) => {
  return <Svg {...props} viewBox="0 0 512 512" >
    <g>
      <path d="M309.333,213.333h149.333c5.888,0,10.667-4.779,10.667-10.667S464.555,192,458.667,192H309.333 c-5.888,0-10.667,4.779-10.667,10.667S303.445,213.333,309.333,213.333z"/>
      <path d="M458.667,21.333H53.333C23.915,21.333,0,45.269,0,74.667v362.667c0,29.397,23.915,53.333,53.333,53.333h405.333 c29.419,0,53.333-23.936,53.333-53.333V74.667C512,45.269,488.085,21.333,458.667,21.333z M138.667,64 c5.888,0,10.667,4.779,10.667,10.667s-4.779,10.667-10.667,10.667S128,80.555,128,74.667S132.779,64,138.667,64z M96,64 c5.888,0,10.667,4.779,10.667,10.667S101.888,85.333,96,85.333s-10.667-4.779-10.667-10.667S90.112,64,96,64z M53.333,64 C59.221,64,64,68.779,64,74.667s-4.779,10.667-10.667,10.667s-10.667-4.779-10.667-10.667S47.445,64,53.333,64z M490.667,437.333 c0,17.643-14.357,32-32,32H53.333c-17.643,0-32-14.357-32-32V128h469.333V437.333z"/>
      <path d="M53.333,405.333h213.333c5.888,0,10.667-4.8,10.667-10.688c0-26.731-18.133-49.941-44.053-56.427l-32.021-8l-1.344-5.355 c8.32-9.173,14.208-20.885,16.661-33.045c5.696-2.944,9.813-8.533,10.667-15.253l2.304-18.56 c0.704-5.632-1.024-11.307-4.757-15.573c-1.152-1.323-2.453-2.453-3.883-3.435l0.533-11.328l1.941-1.941 c5.504-5.845,12.928-18.325,1.173-36.331c-5.547-8.533-17.067-18.731-40.149-18.731c-6.784,0-22.123,0-37.013,9.344 c-43.904,1.536-49.067,25.195-49.067,43.072c0,3.52,0.619,10.112,1.237,15.616c-1.579,1.003-3.051,2.24-4.288,3.669 c-3.797,4.309-5.547,10.005-4.821,15.659l2.304,18.56c0.875,6.955,5.291,12.715,11.797,15.552 c2.389,11.627,7.979,22.891,15.765,31.829l-1.557,6.272l-32.021,8c-25.941,6.464-44.075,29.675-44.075,56.427 C42.667,400.555,47.445,405.333,53.333,405.333z"/>
      <path d="M309.333,405.333h85.333c5.888,0,10.667-4.779,10.667-10.667S400.555,384,394.667,384h-85.333 c-5.888,0-10.667,4.779-10.667,10.667S303.445,405.333,309.333,405.333z"/>
      <path d="M309.333,277.333h149.333c5.888,0,10.667-4.779,10.667-10.667S464.555,256,458.667,256H309.333 c-5.888,0-10.667,4.779-10.667,10.667S303.445,277.333,309.333,277.333z"/>
      <path d="M309.333,341.333h149.333c5.888,0,10.667-4.779,10.667-10.667S464.555,320,458.667,320H309.333 c-5.888,0-10.667,4.779-10.667,10.667S303.445,341.333,309.333,341.333z"/>
    </g>
  </Svg>
}

// Record 
export const SvgRecord = ({...props}) => {
  return <Svg {...props} viewBox="0 0 16 16" >
  <path d="M4 9h4v2h-4v-2z"></path>
  <path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path>
  </Svg>
}

// GuideIcon 
export const SvgGuide = ({...props}) => {
  return <Svg {...props} viewBox="0 0 208 256" >
  <path d="M35.8,2C17.53,2,2,16.72,2,35c0,0,0,184.49,0,186c0,17.87,14.42,32.19,32.08,32.9v0.1h171.74v-9.29
	c-13.23,0-23.93-10.7-23.93-23.93c0-13.22,10.7-23.92,23.93-23.92V2H35.8z M49,53.03c0-3.29,2.72-6.03,5.99-6.03h103.97 c3.27,0,5.99,2.69,6.04,6.03v69.29c0,3.29-2.72,6.03-5.99,6.03H121.4v10.11h9.59c1.66,0,3.04,1.39,3.04,3.06v0.42 c0,1.67-1.38,3.06-3.04,3.06H83.01c-1.66,0-3.04-1.39-3.04-3.06v-0.42c0-1.67,1.38-3.06,3.04-3.06h9.59v-10.11H54.99 c-3.27,0-5.99-2.74-5.99-6.03V53.03z M172.6,220.68c0,9.39,4.04,17.87,10.3,23.93H35.4c-13.23,0.1-24.03-10.7-24.03-23.93 c0-12.52,9.79-22.81,22.11-23.72l149.72-0.31C176.74,202.71,172.6,211.19,172.6,220.68z M157.63,54.51H56.65v60.53h100.98V54.51z M106.98,117.73c-1.89,0-3.46,1.53-3.46,3.48c0,1.99,1.52,3.57,3.46,3.48c1.89,0,3.45-1.53,3.45-3.48 C110.43,119.31,108.91,117.73,106.98,117.73z"/>
  </Svg>
}
// < / >
export const SvgCode = ({...props}) => {
  return <Svg {...props} viewBox="0 0 24 24">
    <path d="M8.50178 5.38707C8.80966 5.10997 8.83462 4.63576 8.55752 4.32787C8.28043 4.01999 7.80621 3.99503 7.49833 4.27213L5.76084 5.83587C5.0245 6.49853 4.41369 7.04822 3.99428 7.54679C3.55325 8.07104 3.23975 8.6343 3.23975 9.3296C3.23975 10.0249 3.55325 10.5882 3.99428 11.1124C4.41369 11.611 5.02449 12.1607 5.76083 12.8233L7.49833 14.3871C7.80621 14.6642 8.28043 14.6392 8.55752 14.3313C8.83462 14.0234 8.80966 13.5492 8.50178 13.2721L6.80531 11.7453C6.01743 11.0362 5.48623 10.5558 5.14213 10.1468C4.81188 9.7542 4.73975 9.52502 4.73975 9.3296C4.73975 9.13417 4.81188 8.90499 5.14213 8.51241C5.48623 8.10338 6.01743 7.62298 6.80531 6.91389L8.50178 5.38707Z" />
    <path d="M14.1795 4.27517C14.5798 4.38157 14.818 4.79234 14.7117 5.19266L10.7248 20.1927C10.6184 20.593 10.2077 20.8312 9.80735 20.7248C9.40703 20.6184 9.16877 20.2077 9.27517 19.8074L13.262 4.80735C13.3684 4.40704 13.7792 4.16877 14.1795 4.27517Z"/>
    <path d="M15.4425 10.4983C15.7196 10.1904 16.1938 10.1654 16.5017 10.4425L18.2392 12.0063C18.9756 12.6689 19.5864 13.2186 20.0058 13.7172C20.4468 14.2415 20.7603 14.8047 20.7603 15.5C20.7603 16.1953 20.4468 16.7586 20.0058 17.2828C19.5864 17.7814 18.9756 18.3311 18.2392 18.9937L16.5017 20.5575C16.1938 20.8346 15.7196 20.8096 15.4425 20.5017C15.1654 20.1938 15.1904 19.7196 15.4983 19.4425L17.1947 17.9157C17.9826 17.2066 18.5138 16.7262 18.8579 16.3172C19.1882 15.9246 19.2603 15.6954 19.2603 15.5C19.2603 15.3046 19.1882 15.0754 18.8579 14.6828C18.5138 14.2738 17.9826 13.7934 17.1947 13.0843L15.4983 11.5575C15.1904 11.2804 15.1654 10.8062 15.4425 10.4983Z" />
  </Svg>
}
// 링크 Icon
export const Svglink = ({...props}) => { 
  const color = props.$strokeColor ?? "#000";
  return <Svg viewBox="0 0 24 24" $fillColor="none">
    <path d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </Svg>
}

// skills, merge
export const SvgSkills = ({...props}) => {
  const color = props.$strokeColor ?? "#000";
  return <Svg {...props} viewBox="0 0 24 24" $fillColor="none">
    <rect x="18" y="9" width="4" height="4" rx="2" transform="rotate(90 18 9)" fill={color} stroke={color} strokeWidth="2"/>
    <rect x="18" y="17" width="4" height="4" rx="2" transform="rotate(90 18 17)" fill={color} stroke={color} strokeWidth="2"/>
    <rect x="3" y="7" width="4" height="4" rx="2" transform="rotate(-90 3 7)" fill={color} stroke={color} strokeWidth="2"/>
    <path d="M5 6V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14" stroke={color} strokeWidth="2"/>
    <path d="M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14" stroke={color} strokeWidth="2"/>
  </Svg>
}


