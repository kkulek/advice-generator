export const breakpoints = {
    xxs: 375,
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1440,
    xxl: 1800
};

export const size = {
    xxs: `${breakpoints.xxs}px`,
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
    xxl: `${breakpoints.xxl}px`
};

export const device = {
    xxs: `(min-width: ${size.xxs})`,
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`
};