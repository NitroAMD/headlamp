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

import { AppTheme } from '../../lib/AppTheme';

const headlampClassicLightTheme: AppTheme = {
  name: 'Headlamp Classic',
  primary: '#222',
  secondary: '#eaeaea',
  sidebar: {
    background: '#242424',
    color: '#FFF',
    selectedBackground: '#ebe811',
    selectedColor: '#ebe811',
    actionBackground: '#605e5c',
  },
  link: {
    color: '#0072c9',
  },
  navbar: {
    background: '#FFF',
    color: '#202020',
  },
  radius: 4,
};

export const darkTheme: AppTheme = {
  name: 'dark',
  base: 'dark',
  primary: '#ffffff',
  secondary: '#1b1a19',
  text: {
    primary: '#faf9f8',
  },
  background: {
    default: '#292827',
    surface: '#313131',
    muted: '#333333',
  },
  navbar: {
    background: '#252423',
    color: '#faf9f8',
  },
  sidebar: {
    background: '#252423',
    color: '#cdcdcd',
    selectedBackground: '#f2e600',
    selectedColor: '#f2e600',
    actionBackground: '#1b1a19',
  },
  buttonTextTransform: 'none',
  radius: 6,
};

export const lightTheme: AppTheme = {
  name: 'light',
  primary: '#414141',
  secondary: '#eff2f5',
  text: {
    primary: '#44444f',
  },
  link: {
    color: '#0072c9',
  },
  background: {
    muted: '#f5f5f5',
  },
  sidebar: {
    background: '#f0f0f0',
    color: '#605e5c',
    selectedBackground: '#f2e600',
    selectedColor: '#292827',
    actionBackground: '#414141',
  },
  navbar: {
    background: '#f0f0f0',
    color: '#292827',
  },
  buttonTextTransform: 'none',
  radius: 6,
};

export const lightsOutTheme: AppTheme = {
  name: 'Lights Out',
  base: 'dark',
  primary: '#1f6feb',
  secondary: '#212830',
  text: {
    primary: '#f0f6fc',
  },
  link: {
    color: '#4493f8',
  },
  background: {
    default: '#010409',
    surface: '#0d1117',
    muted: '#151b23',
  },
  sidebar: {
    background: '#010409',
    color: '#f0f6fc',
    selectedBackground: '#484f57',
    selectedColor: '#fff',
    actionBackground: '#1f6feb',
  },
  navbar: {
    background: '#010409',
    color: '#bdc3c9',
  },
  radius: 6,
  buttonTextTransform: 'none',
};

export const monochromeLightTheme: AppTheme = {
  name: 'Monochrome Light',
  base: 'light',
  primary: '#25292e',
  secondary: '#f6f8fa',
  text: {
    primary: '#1f2328',
  },
  link: {
    color: '#0969da',
  },
  background: {
    default: '#ffffff',
    surface: '#ffffff',
    muted: '#f6f8fa',
  },
  sidebar: {
    background: '#fff',
    color: '#59636e',
    selectedBackground: '#333',
    selectedColor: '#1f2328',
    actionBackground: '#333436',
  },
  navbar: {
    background: '#ffffff',
    color: '#1f2328',
  },
  radius: 6,
  buttonTextTransform: 'none',
};

// ---------------------------------------------------------------------------
// Azure Portal light theme  Fluent Design System v8 color palette
// ---------------------------------------------------------------------------
export const azurePortalLightTheme: AppTheme = {
  name: 'Azure Portal',
  base: 'light',
  primary: '#0078d4',
  secondary: '#f3f2f1',
  text: {
    primary: '#323130',
  },
  link: {
    color: '#0078d4',
  },
  background: {
    default: '#f3f2f1',
    surface: '#ffffff',
    muted: '#edebe9',
  },
  navbar: {
    background: '#0078d4',
    color: '#ffffff',
  },
  sidebar: {
    background: '#1b2a3b',
    color: '#c8c6c4',
    selectedBackground: '#004578',
    selectedColor: '#ffffff',
    actionBackground: '#004578',
  },
  fontFamily: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  radius: 2,
  buttonTextTransform: 'none',
};

// ---------------------------------------------------------------------------
// Azure Portal dark theme  Fluent Design System v9 dark palette
// ---------------------------------------------------------------------------
export const azurePortalDarkTheme: AppTheme = {
  name: 'Azure Portal Dark',
  base: 'dark',
  primary: '#479ef5',
  secondary: '#292929',
  text: {
    primary: '#f3f2f1',
  },
  link: {
    color: '#479ef5',
  },
  background: {
    default: '#1f1f1f',
    surface: '#292929',
    muted: '#141414',
  },
  navbar: {
    background: '#141414',
    color: '#f3f2f1',
  },
  sidebar: {
    background: '#141414',
    color: '#c8c6c4',
    selectedBackground: '#006cbf',
    selectedColor: '#ffffff',
    actionBackground: '#004578',
  },
  fontFamily: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  radius: 2,
  buttonTextTransform: 'none',
};

// ---------------------------------------------------------------------------
// Bloomberg Terminal  professional black-and-orange financial data terminal
// ---------------------------------------------------------------------------
export const bloombergTerminalTheme: AppTheme = {
  name: 'Bloomberg Terminal',
  base: 'dark',
  primary: '#FF6600',
  secondary: '#1a1a1a',
  text: {
    primary: '#E0E0E0',
  },
  link: {
    color: '#FF9933',
  },
  background: {
    default: '#000000',
    surface: '#0d0d0d',
    muted: '#111111',
  },
  navbar: {
    background: '#0d0d0d',
    color: '#FF6600',
  },
  sidebar: {
    background: '#000000',
    color: '#888888',
    selectedBackground: '#FF6600',
    selectedColor: '#000000',
    actionBackground: '#1a1a1a',
  },
  fontFamily: ['Consolas', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
  radius: 8,
  buttonTextTransform: 'uppercase',
  tableStyle: 'terminal',
  designLanguage: 'cupertino',
  statusColors: {
    success: '#00C805',
    error: '#FF3B30',
    warning: '#FFB900',
  },
};

// ---------------------------------------------------------------------------
// TradingView Dark  clean professional dark market-data interface
// ---------------------------------------------------------------------------
export const tradingViewDarkTheme: AppTheme = {
  name: 'TradingView',
  base: 'dark',
  primary: '#2962FF',
  secondary: '#1e222d',
  text: {
    primary: '#d1d4dc',
  },
  link: {
    color: '#2962FF',
  },
  background: {
    default: '#131722',
    surface: '#1e222d',
    muted: '#2a2e39',
  },
  navbar: {
    background: '#1e222d',
    color: '#d1d4dc',
  },
  sidebar: {
    background: '#131722',
    color: '#787b86',
    selectedBackground: '#2a2e39',
    selectedColor: '#d1d4dc',
    actionBackground: '#2962FF',
  },
  fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Trebuchet MS', 'Roboto', 'sans-serif'],
  radius: 8,
  buttonTextTransform: 'none',
  tableStyle: 'terminal',
  designLanguage: 'cupertino',
  statusColors: {
    success: '#26a69a',
    error: '#ef5350',
    warning: '#FF9800',
  },
};
const defaultAppThemes = [
  bloombergTerminalTheme,
  tradingViewDarkTheme,
  azurePortalLightTheme,
  azurePortalDarkTheme,
  lightTheme,
  darkTheme,
  headlampClassicLightTheme,
  lightsOutTheme,
  monochromeLightTheme,
];

export default defaultAppThemes;
