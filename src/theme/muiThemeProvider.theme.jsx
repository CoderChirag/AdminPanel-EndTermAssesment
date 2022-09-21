import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		red: {
			main: '#e14342',
			contrastText: '#ffffff',
		},
	},
});

const MuiThemeProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
