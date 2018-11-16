// --- Standard Breakpoints ------------------------------------------------- //

export enum RadarBreakpointName {
  Tablet = 'tablet',
  Desktop = 'desktop',
  Widescreen = 'widescreen',
  FullHD = 'fullhd',
}

export enum RadarBreakpointPxValue {
  Tablet = '768px',
  Desktop = '1140px',
  Widescreen = '1280px',
  FullHD = '1620px',
}

// --- Color enums ---------------------------------------------------------- //

export enum RadarBaseColorName {
  Light = 'light',
  Dark = 'dark',
  Orange = 'orange',
  Red = 'red',
  Green = 'green',
}

export enum RadarColorName {
  Transparent = 'transparent',

  Black = 'black',
  White = 'white',

  LightBg = 'light-bg',
  LightMg = 'light-mg',
  Light = 'light',
  LightFg = 'light-fg',

  DarkBg = 'dark-bg',
  DarkMg = 'dark-mg',
  Dark = 'dark',
  DarkFg = 'dark-fg',

  OrangeBg = 'orange-bg',
  OrangeMg = 'orange-mg',
  Orange = 'orange',
  OrangeFg = 'orange-fg',

  RedBg = 'red-bg',
  RedMg = 'red-mg',
  Red = 'red',
  RedFg = 'red-fg',

  GreenBg = 'green-bg',
  GreenMg = 'green-mg',
  Green = 'green',
  GreenFg = 'green-fg',
}

export enum RadarColorHexValue {
  Black = '#000000',
  White = '#ffffff',

  LightBg = '#a5a5a5',
  LightMg = '#dadada',
  Light = '#f0f0f0',
  LightFg = '#ffffff',

  DarkBg = '#000000',
  DarkMg = '#282828',
  Dark = '#303030',
  DarkFg = '#484848',

  OrangeBg = '#dd5e17',
  OrangeMg = '#f58912',
  Orange = '#ff9810',
  OrangeFg = '#ffac15',

  RedBg = '#bf1717',
  RedMg = '#df2525',
  Red = '#ff3333',
  RedFg = '#ff525e',

  GreenBg = '#0d8c61',
  GreenMg = '#26d986',
  Green = '#33ff99',
  GreenFg = '#a6ffbf',
}

export enum RadarColorClassTarget {
  Color = 'color',
  BackgroundColor = 'background-color',

  BorderColor = 'border-color',
  BorderTopColor = 'border-top-color',
  BorderRightColor = 'border-right-color',
  BorderBottomColor = 'border-bottom-color',
  BorderLeftColor = 'border-left-color',

  Fill = 'fill',
  Stroke = 'stroke',
}

// --- Color maps ----------------------------------------------------------- //

export const radarColorContext = {
  info: RadarBaseColorName.Green,
  success: RadarBaseColorName.Green,
  warning: RadarBaseColorName.Orange,
  error: RadarBaseColorName.Red,
};

export const radarColorHex = {
  [RadarColorName.Black]: '#000000',
  [RadarColorName.White]: '#ffffff',

  [RadarColorName.LightBg]: '#a5a5a5',
  [RadarColorName.LightMg]: '#dadada',
  [RadarColorName.Light]: '#f0f0f0',
  [RadarColorName.LightFg]: '#ffffff',

  [RadarColorName.DarkBg]: '#000000',
  [RadarColorName.DarkMg]: '#282828',
  [RadarColorName.Dark]: '#303030',
  [RadarColorName.DarkFg]: '#484848',

  [RadarColorName.OrangeBg]: '#dd5e17',
  [RadarColorName.OrangeMg]: '#f58912',
  [RadarColorName.Orange]: '#ff9810',
  [RadarColorName.OrangeFg]: '#ffac15',

  [RadarColorName.RedBg]: '#bf1717',
  [RadarColorName.RedMg]: '#df2525',
  [RadarColorName.Red]: '#ff3333',
  [RadarColorName.RedFg]: '#ff525e',

  [RadarColorName.GreenBg]: '#0d8c61',
  [RadarColorName.GreenMg]: '#26d986',
  [RadarColorName.Green]: '#33ff99',
  [RadarColorName.GreenFg]: '#a6ffbf',
};
