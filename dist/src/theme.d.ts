export declare const colors: {
    palette: {
        red: string;
        danger: string;
        darkRed: string;
        lightRed: string;
        green: string;
        lightGreen: string;
        darkGreen: string;
        paleYellow: string;
        teal: string;
        blue: string;
        mediumBlue: string;
        lightBlue: string;
        neutralLightBlue: string;
        tangerine: string;
        gray: string;
        darkGray: string;
        pale: string;
        light: string;
        white: string;
        neutralLightest: string;
        neutralCool: string;
        neutralBright: string;
        neutralLighter: string;
        neutralLight: string;
        neutralMedium: string;
        neutral: string;
        neutralThin: string;
        neutralDark: string;
        neutralFeedback: string;
        neutralDarker: string;
        black: string;
        orange: string;
    };
    answer: {
        neutral: string;
        hover: string;
        checked: string;
        correct: string;
        incorrect: string;
    };
    popover: {
        arrowOuterColor: string;
        borderColor: string;
    };
    card: {
        header: {
            background: string;
        };
        body: {
            background: string;
        };
    };
    button: {
        background: string;
        backgroundHover: string;
        backgroundActive: string;
    };
    freeResponse: {
        color: string;
        background: string;
    };
};
export declare const layouts: {
    answer: {
        verticalSpacing: string;
        horizontalSpacing: string;
        horizontalBuffer: string;
        bubbleSize: string;
        labelSpacing: string;
        feedback: {
            popover: {
                horizontalSpacing: string;
                verticalSpacing: string;
                maxWidth: string;
            };
        };
    };
    popover: {
        arrow: {
            width: string;
            height: string;
            edgeDistance: string;
        };
        horizontalSpacing: string;
        verticalSpacing: string;
        horizontalBuffer: string;
        borderWidth: string;
        maxWidth: string;
    };
    card: {
        spacing: string;
    };
};
export declare const BREAKPOINTS: {
    mobile: number;
    tablet: number;
    desktop: number;
    large: number;
};
export declare const breakpoints: {
    mobile(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    tablet(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    desktop(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    only: {
        mobile(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    };
    margins: {
        mobile: string;
        tablet: string;
    };
};
export declare const transitions: {
    answer: string;
};
export declare const mixins: {
    answer: () => import("styled-components").FlattenSimpleInterpolation;
    answerColor: (color: string, invertBubble?: boolean) => import("styled-components").FlattenSimpleInterpolation;
    answerChecked: () => import("styled-components").FlattenSimpleInterpolation;
    answerCorrect: (checked?: boolean) => import("styled-components").FlattenSimpleInterpolation;
    answerIncorrect: (checked?: boolean) => import("styled-components").FlattenSimpleInterpolation;
    answerHover: () => import("styled-components").FlattenSimpleInterpolation;
    answerCorrectAnswer: () => import("styled-components").FlattenSimpleInterpolation;
    resetText: () => import("styled-components").FlattenSimpleInterpolation;
    stepCardPadding: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    popover: () => import("styled-components").FlattenSimpleInterpolation;
};
declare const theme: {
    colors: {
        palette: {
            red: string;
            danger: string;
            darkRed: string;
            lightRed: string;
            green: string;
            lightGreen: string;
            darkGreen: string;
            paleYellow: string;
            teal: string;
            blue: string;
            mediumBlue: string;
            lightBlue: string;
            neutralLightBlue: string;
            tangerine: string;
            gray: string;
            darkGray: string;
            pale: string;
            light: string;
            white: string;
            neutralLightest: string;
            neutralCool: string;
            neutralBright: string;
            neutralLighter: string;
            neutralLight: string;
            neutralMedium: string;
            neutral: string;
            neutralThin: string;
            neutralDark: string;
            neutralFeedback: string;
            neutralDarker: string;
            black: string;
            orange: string;
        };
        answer: {
            neutral: string;
            hover: string;
            checked: string;
            correct: string;
            incorrect: string;
        };
        popover: {
            arrowOuterColor: string;
            borderColor: string;
        };
        card: {
            header: {
                background: string;
            };
            body: {
                background: string;
            };
        };
        button: {
            background: string;
            backgroundHover: string;
            backgroundActive: string;
        };
        freeResponse: {
            color: string;
            background: string;
        };
    };
    layouts: {
        answer: {
            verticalSpacing: string;
            horizontalSpacing: string;
            horizontalBuffer: string;
            bubbleSize: string;
            labelSpacing: string;
            feedback: {
                popover: {
                    horizontalSpacing: string;
                    verticalSpacing: string;
                    maxWidth: string;
                };
            };
        };
        popover: {
            arrow: {
                width: string;
                height: string;
                edgeDistance: string;
            };
            horizontalSpacing: string;
            verticalSpacing: string;
            horizontalBuffer: string;
            borderWidth: string;
            maxWidth: string;
        };
        card: {
            spacing: string;
        };
    };
    transitions: {
        answer: string;
    };
    breakpoints: {
        mobile(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        tablet(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        desktop(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        only: {
            mobile(first: import("styled-components").CSSObject | import("styled-components").InterpolationFunction<import("styled-components").ThemedStyledProps<object, any>> | TemplateStringsArray, ...interpolations: import("styled-components").Interpolation<import("styled-components").ThemedStyledProps<object, any>>[]): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        };
        margins: {
            mobile: string;
            tablet: string;
        };
    };
};
export default theme;
