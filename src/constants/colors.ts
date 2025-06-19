
export const COLORS = {
  // Primary Brand Colors
  primary: {
    orange: '#FF6B00',
    orangeLight: '#FF5403',
    orangeDark: '#FF4500',
    orangeHover: '#e55a00',
  },
  
  // Gradients
  gradients: {
    vibrant: 'linear-gradient(135deg, #FF6B00, #FF5403)',
    vibrantSoft: 'linear-gradient(135deg, #FF6B00 0%, #FF5403 50%, #FF4500 100%)',
    warm: 'linear-gradient(135deg, #FF6B00, #FFB366)',
  },
  
  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    gradient: 'linear-gradient(to bottom right, #fef7ed, #ffffff, #fef7ed)',
  },
  
  // Text Colors
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    tertiary: '#9ca3af',
    white: '#ffffff',
    orange: '#ea580c',
  },
  
  // Border Colors
  border: {
    light: '#f3f4f6',
    medium: '#e5e7eb',
    orange: '#fed7aa',
    orangeLight: '#ffedd5',
  },
  
  // State Colors
  state: {
    hover: '#f97316',
    focus: '#ea580c',
    disabled: '#d1d5db',
  },
  
  // Shadow Colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.15)',
    heavy: 'rgba(0, 0, 0, 0.25)',
    orange: 'rgba(255, 107, 0, 0.3)',
  }
};

export const CSS_VARIABLES = {
  '--color-primary': COLORS.primary.orange,
  '--color-primary-light': COLORS.primary.orangeLight,
  '--color-primary-dark': COLORS.primary.orangeDark,
  '--gradient-vibrant': COLORS.gradients.vibrant,
  '--gradient-vibrant-soft': COLORS.gradients.vibrantSoft,
  '--text-primary': COLORS.text.primary,
  '--text-secondary': COLORS.text.secondary,
  '--background-primary': COLORS.background.primary,
  '--background-gradient': COLORS.background.gradient,
};
