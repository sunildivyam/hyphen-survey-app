export const 
color = {
    primary: {
        normal: '#6239bf',
        light: '#00c3d9',
        dark: '#1c1e56'
    },
    secondary: {
        normal: '#d1dbe8',
        lighter: '#f4f6f9',
        light: '#e8edf3',
        dark: '#aab9ce'
    },
    white: '#ffffff',
    success: '#00D994',
    danger: '#df3868'
},
typography = {
    fontFamily: {
        lato: 'Lato, sans-serif',
        roboto: 'Roboto, sans-serif'
    },
    size: {
        base: 16,
        none: 0,
        sm: '1em',
        md: '1.5em',
        lg: '2em'
    }
},
spacing = {
    none: 0,
    sm: 10,
    md: 15,
    lg: 30
},
size = {
    none: 0,
    sm: 14,
    md: 18,
    lg: 24
},
styles = {   
    header: {
        fontFamily: typography.fontFamily.roboto,
        fontSize: typography.size.lg,
        fontWeight: 'bold',
        color: color.white,
        backgroundColor: color.primary.dark,
        padding: spacing.md
    },
    labels: {
        fontFamily: typography.fontFamily.lato,
        fontSize: typography.size.md,
        fontWeight: 'bold',
        color: color.primary.normal,
        padding: spacing.sm
    },
    text: {
        fontFamily: typography.fontFamily.lato,
        fontSize: typography.size.sm,
        fontWeight: 'normal',
        color: color.primary.dark,
        padding: spacing.sm
    },
    radioButton: {
        normal: {            
            width: '15px',
            height: '15px',
            borderRadius: '15px',
            top: '-2px',
            left: '-6px',
            position: 'relative',
            backgroundColor: color.secondary.lighter,
            content: '""',
            display: 'inline-block',
            visibility: 'visible',
            border: '2px solid ' + color.primary.light,
            cursor: 'pointer'
        },    
        checked: {
            width: '15px',
            height: '15px',
            borderRadius: '15px',
            top: '-2px',
            left: '-6px',
            position: 'relative',
            backgroundColor: color.primary.light,
            content: '""',
            display: 'inline-block',
            visibility: 'visible',
            border: '2px solid ' + color.primary.light,
            cursor: 'pointer'
        }
    },
    checkbox: {
        normal: {            
            width: '15px',
            height: '15px',
            borderRadius: '4px',
            top: '-2px',
            left: '-6px',
            position: 'relative',
            backgroundColor: color.secondary.lighter,
            content: '""',
            display: 'inline-block',
            visibility: 'visible',
            border: '2px solid ' + color.primary.light,
            cursor: 'pointer'
        },    
        checked: {
            width: '15px',
            height: '15px',
            borderRadius: '4px',
            top: '-2px',
            left: '-6px',
            position: 'relative',
            backgroundColor: color.primary.light,
            content: '""',
            display: 'inline-block',
            visibility: 'visible',
            border: '2px solid ' + color.primary.light,
            cursor: 'pointer'
        }
        
    },
    button: {
        normal: {
            padding: spacing.sm + 'px ' + spacing.lg + 'px',
            backgroundColor: color.primary.normal,
            color: color.white,
            border: '1px solid ' + color.secondary.light,
            fontFamily: typography.fontFamily.lato,
            fontSize: typography.size.sm,
            fontWeight: 'bold',
            lineHeight: typography.size.md,
            cursor: 'pointer'
        },
        hover: {
            backgroundColor: color.primary.light
        },
        disabled: {
            backgroundColor: color.secondary.lighter,
            color: color.secondary.normal,
            cursor: 'default'
        },
        barebone: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: color.primary.normal,
            padding: size.none,
            lineHeight: '30px',
            height: '30px',
            width: '30px',
            fontSize: '30px'
        }
    }
};


export const defaultTheme = {
    color,
    typography,
    spacing,
    size,
    styles
}
