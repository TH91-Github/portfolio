// styled-components전용 공통 
export const fonts = {
  size: 16,
  bold: 700,
}

export const breakPoints = {
  maxPc: 1920,
  pc : 1440,
  tab : 1140,
  mo : 768,
  onlyMo: 450,
  minMo: 320
}

export const media = {
  onlyPc : `@media screen and (min-width:${breakPoints.tab + 'px'})`,
  pc: `@media screen and (min-width:${breakPoints.mo-1 + 'px'})`,
  tab: `@media screen and (min-width:${breakPoints.mo + 'px'}) and (max-width: ${breakPoints.tab-1 + 'px'})`,
  mo: `@media screen and (max-width:${breakPoints.mo-1 + 'px'})`,
  onlyMo: `@media screen and (max-width:${breakPoints.onlyMo-1 + 'px'})`,
} 

export const colors = {
  bgBlack:"#242424",
  bgWhite:"#f1f1f1", 
  bgGary:"#dde0e7",
  bgBlue:"#020025",
  blue:"#0461f5",
  red: "#e8392c",
  purple:"#8328df",
  yellow:"#ffae00",
  gray:"#a7a5a6",
  subTextColor:"#868686",
  // Line Color
  lineColor: "#dbdbdb",
}

// transition
export const transitions = {
  base: "all .3s",
}



