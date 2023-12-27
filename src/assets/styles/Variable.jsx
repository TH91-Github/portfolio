// styled-components전용 공통 
export const fonts = {
  size: 16,
  bold: 700,
}

export const breakpoints = {
  maxPc: 1920,
  pc : 1440,
  tab : 1140,
  mo : 768,
  onlyMo: 450,
}

export const media = {
  onlyPc : `@media screen and (min-width:${breakpoints.tab + 'px'})`,
  pc: `@media screen and (min-width:${breakpoints.mo-1 + 'px'})`,
  tab: `@media screen and (min-width:${breakpoints.mo + 'px'}) and (max-width: ${breakpoints.tab-1 + 'px'})`,
  mo: `@media screen and (max-width:${breakpoints.mo-1 + 'px'})`,
  onlyMo: `@media screen and (max-width:${breakpoints.onlyMo-1 + 'px'})`,
} 

export const colors = {
  
  // Line Color
  lineColor: "#dbdbdb",
}

// transition
export const transitions = {
  base: "all .3s",
}



