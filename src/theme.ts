type ITheme = {
  variant: string;
  colors: {
    background: string;
    backgroundSecondary: string;
    primary: string;
    secondary: string;
    text: string;
  };
  spacing: number[];
  texto: {
    tamanhos: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      p: number;
      small: number;
    };
  };
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
      background: '#F4F7F8',
      backgroundSecondary: '#FFFFFF',
      primary: '#4B9093',
      secondary: '#F59A73',
      text: '#000',
    },
    spacing: [8, 16, 24, 32, 40, 48, 56, 64],
    texto: {
      tamanhos: {
        h1: 24,
        h2: 22,
        h3: 20,
        h4: 18,
        h5: 16,
        p: 14,
        small: 12,
      },
    },
  },
  light: {
    variant: 'light',
    colors: {
      background: '#F4F7F8',
      backgroundSecondary: '#FFFFFF',
      primary: '#4B9093',
      secondary: '#F59A73',
      text: '#000',
    },
    spacing: [8, 16, 24, 32, 40, 48, 56, 64],
    texto: {
      tamanhos: {
        h1: 24,
        h2: 22,
        h3: 20,
        h4: 18,
        h5: 16,
        p: 14,
        small: 12,
      },
    },
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export default themes;
