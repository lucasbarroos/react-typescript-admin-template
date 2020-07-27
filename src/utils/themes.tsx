const lightTheme = {
  primary: '#fff',
  secondary: '#fff',
  tertiary: '#fff',
  background: '#fff',
  shadow: '#fff',
};

const darkTheme = {
  primary: '#fff',
  secondary: '#fff',
  tertiary: '#fff',
  background: '#fff',
  shadow: '#fff',
};

export default () => {
  switch (process.env.THEME_VARIANT) {
    case 'dark': {
      return darkTheme;
    }
    case 'light': {
      return lightTheme;
    }
    default: {
      return darkTheme;
    }
  }
};
