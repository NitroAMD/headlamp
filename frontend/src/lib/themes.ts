/*
 * Copyright 2025 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { green, grey, orange, pink, red } from '@mui/material/colors';
import { createTheme, getContrastRatio, useTheme } from '@mui/material/styles';
import React from 'react';
import type { AppTheme } from './AppTheme';

export interface HeadlampChartStyles {
  defaultFillColor: string;
  fillColor?: string;
  labelColor: string;
}

export interface HeadlampHeaderStyle {
  normal: {
    fontSize: string;
    fontWeight: string;
  };
  main: {
    fontSize: string;
    fontWeight: string;
  };
  subsection: {
    fontSize: string;
    fontWeight: string;
  };
  label: {
    fontSize: string;
    paddingTop: string;
  };
}

export interface HeadlampTables {
  head: {
    background: string;
    color: string;
    borderColor: string;
    text?: string;
  };
  body: {
    background: string;
  };
  headerText?: string;
}

export interface HeadlampHome {
  status: {
    error: string;
    success: string;
    warning: string;
    unknown: string;
  };
}

export interface HeadlampClusterChooser {
  button: {
    color: string;
    background: string;
    hover: {
      background: string;
    };
  };
}

export interface HeadlampSidebarButtonInLinkArea {
  color: string;
  primary: {
    background: string;
  };
  hover: {
    background: string;
  };
}

export interface HeadlampSquareButton {
  background: string;
}

export interface HeadlampResourceToolTip {
  color: string;
}

export interface HeadlampSidebar {
  background: string;
  color: string;
  selectedBackground: string;
  selectedColor: string;
  actionBackground: string;
}

export interface HeadlampNavbar {
  background: string;
  color: string;
}

declare module '@mui/material/styles/createPalette.d' {
  interface Palette {
    success: PaletteColor;
    background: TypeBackground;
    sidebar: HeadlampSidebar;
    navbar: HeadlampNavbar;
    chartStyles: HeadlampChartStyles;
    headerStyle: HeadlampHeaderStyle;
    tables: HeadlampTables;
    home: HeadlampHome;
    clusterChooser: HeadlampClusterChooser;
    sidebarButtonInLinkArea: HeadlampSidebarButtonInLinkArea;
    squareButton: HeadlampSquareButton;
    resourceToolTip: HeadlampResourceToolTip;
    normalEventBg: string;
    metadataBgColor: string;
    notificationBorderColor: string;
    [propName: string]: any;
  }
  interface PaletteOptions {
    success?: PaletteColorOptions;
    sidebar?: Partial<HeadlampSidebar>;
    navbar?: Partial<HeadlampNavbar>;
    chartStyles?: Partial<HeadlampChartStyles>;
    headerStyle?: Partial<HeadlampHeaderStyle>;
    tables?: Partial<HeadlampTables>;
    home?: Partial<HeadlampHome>;
    clusterChooser?: Partial<HeadlampClusterChooser>;
    sidebarButtonInLinkArea?: Partial<HeadlampSidebarButtonInLinkArea>;
    squareButton?: Partial<HeadlampSquareButton>;
    resourceToolTip?: Partial<HeadlampResourceToolTip>;
    normalEventBg?: string;
    metadataBgColor?: string;
    notificationBorderColor?: string;
    [propName: string]: any;
  }

  interface TypeBackground {
    default: string;
    paper: string;
    muted: string;
  }
}

/** Check whether navbar should use light or dark mode based on the background */
export const useNavBarMode = () => {
  const theme = useTheme();

  return getContrastRatio(theme.palette.navbar.background, '#FFF') > 3 ? 'dark' : 'light';
};

/**
 * Creates a Material UI theme from our own simple theme definition
 */
export function createMuiTheme(currentTheme: AppTheme) {
  const isCupertino = currentTheme.designLanguage === 'cupertino';
  const isDarkBase = currentTheme.base === 'dark';
  const commonRules = {
    // @todo: Remove this once we have tested and fixed the theme for the new breakpoints.
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 64,
        '@media (max-width:600px)': {
          minHeight: 60,
        },
      },
    },
    palette: {
      text: {
        primary: currentTheme.text?.primary ?? 'rgba(0, 0, 0, 0.87)',
      },
      primary: {
        main: currentTheme.primary ?? '#0078d4',
      },
      secondary: currentTheme.secondary
        ? { main: currentTheme.secondary, contrastText: '#000' }
        : {
            light: pink.A200,
            main: pink.A400,
            dark: pink.A700,
          },
      success: {
        light: '#f8fff0',
        main: green['800'],
        ...green,
      },
      warning: {
        main: 'rgb(196, 69, 0)', // orange
        light: orange['50'],
        ...orange,
      },
      squareButton: {
        background: '#f5f5f5',
      },
      sidebar: {
        background: currentTheme.sidebar?.background ?? '#FFF',
        color: currentTheme.sidebar?.color ?? '#333',
        selectedBackground: currentTheme.sidebar?.selectedBackground ?? '#59636e',
        selectedColor: currentTheme.sidebar?.selectedColor ?? '#59636e',
        actionBackground: currentTheme.sidebar?.actionBackground ?? '#333',
      },
      navbar: {
        background: currentTheme.navbar?.background ?? '#FFF',
        color: currentTheme.navbar?.color ?? '#333',
      },
      clusterChooser: {
        button: {
          color: '#fff',
          background: '#000',
          hover: {
            background: '#605e5c',
          },
        },
      },
      sidebarButtonInLinkArea: {
        color: '#fff',
        primary: {
          background: '#605e5c',
        },
        hover: {
          background: '#3B3A39',
        },
      },
      home: {
        status: {
          error: currentTheme.statusColors?.error ?? red['800'],
          success: currentTheme.statusColors?.success ?? '#107C10',
          warning: currentTheme.statusColors?.warning ?? orange['50'],
          unknown: grey['800'],
        },
      },
      error: {
        main: red['800'],
        light: red['50'],
      },
      resourceToolTip: {
        color: 'rgba(0, 0, 0, 0.87)',
      },
      normalEventBg: currentTheme.background?.muted ?? '#F0F0F0',
      chartStyles: {
        defaultFillColor: grey['300'],
        labelColor: '#000',
      },
      metadataBgColor: currentTheme.background?.muted ?? '#f3f2f1',
      headerStyle: {
        normal: {
          fontSize: '1.8rem',
          fontWeight: '700',
        },
        main: {
          fontSize: '1.87rem',
          fontWeight: '700',
        },
        subsection: {
          fontSize: '1.85rem',
          fontWeight: '700',
        },
        label: {
          fontSize: '1.6rem',
          paddingTop: '1rem',
        },
      },
      tables: {
        head: {
          background: currentTheme.background?.muted ?? '#faf9f8',
          color: currentTheme.text?.primary ?? '#242424',
          borderColor: 'rgba(0,0,0,0.12)',
        },
        body: {
          background: currentTheme.background?.surface ?? '#fff',
        },
      },
      notificationBorderColor: 'rgba(0,0,0,0.12)',
      background: {
        default: currentTheme.background?.default ?? '#fff',
        paper: currentTheme.background?.surface ?? '#FFF',
        muted: currentTheme.background?.muted ?? '#faf9f8',
      },
    },
    typography: {
      fontFamily: currentTheme.fontFamily?.join(', ') ?? ['Overpass', 'sans-serif'].join(', '),
      h1: {
        fontWeight: 700,
        fontSize: '1.87rem',
      },
      button: {
        textTransform: currentTheme.buttonTextTransform ?? 'uppercase',
      },
    },
    shape: {
      borderRadius: Number(currentTheme.radius) ?? 4,
    },
    components: {
      MuiPaper: {
        defaultProps: {
          variant: 'outlined' as const,
        },
      },
      MuiDialog: {
        defaultProps: {
          PaperProps: {
            variant: 'outlined' as const,
            elevation: 0,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiFormControl: {
        defaultProps: {
          variant: 'standard' as 'filled' | 'outlined' | 'standard',
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'standard' as 'filled' | 'outlined' | 'standard',
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '1.3em',
            color: '#fff',
            backgroundColor: '#000',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#f5f5f5',
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: 'medium' as 'medium' | 'large' | 'small' | undefined,
        },
        styleOverrides: {
          colorPrimary: {
            color: '#000',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: currentTheme.link?.color ?? '#0078D4',
          },
        },
        defaultProps: {
          underline: 'hover' as 'always' | 'hover' | 'none',
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            ...(currentTheme.tableStyle === 'terminal' && {
              padding: '3px 8px',
              fontSize: '0.8125rem',
              letterSpacing: '0.02em',
            }),
          },
          head: {
            ...(currentTheme.tableStyle === 'terminal' && {
              textTransform: 'uppercase' as const,
              letterSpacing: '0.07em',
              fontSize: '0.7rem',
              fontWeight: 700,
              borderBottomWidth: 2,
            }),
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            ...(currentTheme.tableStyle === 'terminal' && {
              borderRadius: 2,
              letterSpacing: '0.04em',
              fontSize: '0.75rem',
            }),
          },
        },
      },
    },
  };

  // ---------------------------------------------------------------------------
  // Apple-inspired (Cupertino) component overrides
  // Applied when designLanguage === 'cupertino'
  // ---------------------------------------------------------------------------
  const cupertinoComponents: Record<string, any> = isCupertino
    ? {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              boxShadow: isDarkBase
                ? '0 2px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)'
                : '0 2px 10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              backgroundImage: 'none',
              boxShadow: isDarkBase ? '0 4px 24px rgba(0,0,0,0.6)' : '0 2px 12px rgba(0,0,0,0.1)',
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              borderRadius: 16,
              backgroundImage: 'none',
              boxShadow: isDarkBase
                ? '0 24px 80px rgba(0,0,0,0.85)'
                : '0 24px 64px rgba(0,0,0,0.24)',
            },
          },
        },
        MuiButton: {
          defaultProps: { disableElevation: true },
          styleOverrides: {
            root: {
              borderRadius: 20,
              fontWeight: 600,
              letterSpacing: '0.01em',
              padding: '5px 18px',
            },
            contained: {
              '&:hover': { boxShadow: 'none', filter: 'brightness(1.12)' },
            },
            outlined: {
              borderWidth: '1.5px',
              '&:hover': { borderWidth: '1.5px' },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              fontWeight: 500,
              fontSize: '0.78rem',
            },
          },
        },
        MuiAlert: {
          styleOverrides: { root: { borderRadius: 10 } },
        },
        MuiFormControl: {
          defaultProps: { variant: 'outlined' as const },
        },
        MuiTextField: {
          defaultProps: { variant: 'outlined' as const },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: { borderRadius: 8 },
            notchedOutline: {
              borderColor: isDarkBase ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
            },
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              borderRadius: 8,
              fontSize: '0.8rem',
              padding: '6px 12px',
              backgroundColor: isDarkBase ? 'rgba(18,18,18,0.96)' : 'rgba(28,28,28,0.94)',
              color: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
            },
          },
        },
        MuiTab: {
          styleOverrides: {
            root: {
              textTransform: 'none' as const,
              fontWeight: 500,
              fontSize: '0.875rem',
              letterSpacing: '0.01em',
              minHeight: 40,
              '&&.Mui-selected': {
                fontWeight: 700,
                ...(isDarkBase ? { color: '#fff' } : {}),
              },
            },
          },
        },
        MuiTabs: {
          styleOverrides: {
            indicator: {
              height: 3,
              borderRadius: '3px 3px 0 0',
              ...(isDarkBase ? { backgroundColor: '#fff' } : {}),
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
              transition: 'background-color 0.12s ease',
              '&:hover': {
                backgroundColor: isDarkBase ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
              },
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              padding: currentTheme.tableStyle === 'terminal' ? '3px 8px' : '6px 12px',
              fontSize: '0.8125rem',
              borderBottom: isDarkBase
                ? '1px solid rgba(255,255,255,0.07)'
                : '1px solid rgba(0,0,0,0.07)',
            },
            head: {
              fontWeight: 600,
              fontSize: currentTheme.tableStyle === 'terminal' ? '0.7rem' : '0.75rem',
              letterSpacing: currentTheme.tableStyle === 'terminal' ? '0.07em' : '0.04em',
              textTransform: 'uppercase' as const,
              borderBottomWidth: 2,
            },
          },
        },
        MuiListItemButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              margin: '0 4px',
              padding: '6px 8px',
              transition: 'background-color 0.12s ease',
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: { backgroundImage: 'none' },
            colorPrimary: {
              backgroundColor: currentTheme.navbar?.background ?? 'transparent',
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundImage: 'none',
              borderRight: isDarkBase
                ? '1px solid rgba(255,255,255,0.06)'
                : '1px solid rgba(0,0,0,0.07)',
            },
          },
        },
        MuiDivider: {
          styleOverrides: {
            root: {
              borderColor: isDarkBase ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
            },
          },
        },
      }
    : {};

  if (currentTheme.base === 'dark') {
    return createTheme({
      ...commonRules,
      palette: {
        ...commonRules.palette,
        tables: {
          head: {
            background: currentTheme.background?.muted ?? '#000',
            color: currentTheme.text?.primary ?? '#aeaeae',
            borderColor: 'rgba(255,255,255,0.12)',
          },
          body: {
            background: currentTheme.background?.default ?? '#1B1A19',
          },
        },
        text: {
          primary: currentTheme.text?.primary ?? '#fff',
        },
        primary: {
          main: currentTheme.primary ?? '#4B99EE',
        },
        secondary: {
          main: currentTheme.secondary ?? commonRules.palette.secondary.main,
        },
        squareButton: {
          background: '#424242',
        },
        chartStyles: {
          defaultFillColor: 'rgba(20, 20, 20, 0.1)',
          fillColor: '#929191',
          labelColor: '#fff',
        },
        success: {
          light: green['800'],
          main: green['50'],
          ...green,
        },
        warning: {
          main: 'rgb(255 181 104)', // orange
          light: 'rgba(255, 152, 0, 0.15)',
          ...orange,
        },
        error: {
          main: red['800'],
          light: red['300'],
          ...red,
        },
        home: {
          status: {
            error: currentTheme.statusColors?.error ?? '#E37D80',
            success: currentTheme.statusColors?.success ?? '#54B054',
            warning: currentTheme.statusColors?.warning ?? '#FEEE66',
            unknown: '#D6D6D6',
          },
        },
        normalEventBg: currentTheme.background?.muted ?? '#333333',
        metadataBgColor: currentTheme.background?.muted ?? '#333',
        resourceToolTip: {
          color: 'rgba(255, 255, 255, 0.87)',
        },
        clusterChooser: {
          button: {
            color: '#fff',
            background: '#605e5c',

            hover: {
              background: '#3B3A39',
            },
          },
        },
        notificationBorderColor: 'rgba(255,255,255,0.12)',
        mode: 'dark',
        background: {
          default: currentTheme.background?.default ?? '#1f1f1f',
          paper: currentTheme.background?.surface ?? '#1f1f1f',
          muted: currentTheme.background?.muted ?? '#1B1A19',
        },
      },
      components: {
        ...commonRules.components,
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              ...commonRules.components.MuiTooltip.styleOverrides.tooltip,
              backgroundColor: '#000',
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              colorPrimary: {
                backgroundColor: '#000',
              },
            },
          },
        },
        MuiIconButton: {
          defaultProps: {
            size: 'medium' as 'medium' | 'large' | 'small' | undefined,
          },
          styleOverrides: {
            colorPrimary: {
              color: '#fff',
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              color: '#6CB6F2',
            },
          },
          defaultProps: {
            underline: 'hover' as 'always' | 'hover' | 'none',
          },
        },
        MuiSwitch: {
          styleOverrides: {
            root: {
              colorPrimary: {
                '&&.Mui-checked': {
                  color: '#4b99ee',
                },
              },
            },
          },
        },
        MuiTab: {
          styleOverrides: {
            textColorPrimary: {
              '&&.Mui-selected': {
                color: '#fff',
                borderBottomColor: '#fff',
              },
            },
          },
        },
        MuiTabs: {
          styleOverrides: {
            root: {
              indicator: {
                backgroundColor: '#fff',
              },
            },
          },
        },
        ...cupertinoComponents,
      },
    });
  }

  return createTheme({
    ...commonRules,
    components: { ...commonRules.components, ...cupertinoComponents },
  });
}

export function usePrefersColorScheme() {
  if (typeof window.matchMedia !== 'function') {
    return 'light';
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const [value, setValue] = React.useState(mql.matches);

  React.useEffect(() => {
    const handler = (x: MediaQueryListEvent | MediaQueryList) => setValue(x.matches);
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return value;
}

/**
 * Hook gets theme based on user preference, and also OS/Browser preference.
 */
export function getThemeName(): string {
  const themePreference = localStorage.headlampThemePreference;

  if (typeof window.matchMedia !== 'function') {
    return 'Bloomberg Terminal';
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let themeName = 'Bloomberg Terminal';
  if (themePreference) {
    // A selected theme preference takes precedence.
    themeName = themePreference;
  } else {
    themeName = prefersDark ? 'Bloomberg Terminal' : 'TradingView';
  }

  return themeName;
}

export function setTheme(themeName: string) {
  localStorage.headlampThemePreference = themeName;
}
