import { createTheme } from '@mui/material/styles'



    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1350,
            xl: 1536,
          },
        },

        typography: {
          allVariants: {
            fontFamily: 'Cardo',
          },
        },
      });

export default theme