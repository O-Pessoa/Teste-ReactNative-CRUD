type ITheme = {
  variant: string;
  colors: {
    background: string;
    primary: string;
    secondary: string;
    text: string;
  };
  spacing: number[];
};
type IThemes = {
  dark: {
    variant: 'dark';
  } & ITheme;
  light: {
    variant: 'light';
  } & ITheme;
};

const themes: IThemes = {
  dark: {
    variant: 'dark',
    colors: {
      background: '#0ff',
      primary: '#00beee',
      secondary: '#8e8e8e',
      text: '#000',
    },
    spacing: [8, 16, 24, 32, 40, 48, 56, 64],
  },
  light: {
    variant: 'light',
    colors: {
      background: '#ff0',
      primary: '#00beee',
      secondary: '#8e8e8e',
      text: '#000',
    },
    spacing: [8, 16, 24, 32, 40, 48, 56, 64],
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export default themes;
