# Package Notes

## Design System Packages

This template uses MetaMask design system packages:
- `@metamask/design-system-react-native`
- `@metamask/design-system-twrnc-preset`

### If Packages Are Unavailable

If these packages are not available in your npm registry, you have two options:

#### Option 1: Use Alternative Design System

Replace in `package.json`:

```json
{
  "dependencies": {
    // Remove:
    // "@metamask/design-system-react-native": "^1.0.0",
    // "@metamask/design-system-twrnc-preset": "^1.0.0",
    
    // Add alternative:
    "react-native-paper": "^5.11.0",  // or another design system
    "tailwind-react-native-classnames": "^2.0.0"  // or another Tailwind solution
  }
}
```

Then update components to use the alternative design system while maintaining the same patterns.

#### Option 2: Use Standard React Native Components

Use standard React Native components (`View`, `Text`, etc.) with StyleSheet or a Tailwind alternative:

```json
{
  "dependencies": {
    "nativewind": "^4.0.0",  // Tailwind for React Native
    // Use standard React Native components
  }
}
```

### Maintaining Cursor Rules Compliance

Even if you replace the design system packages, maintain these patterns:

1. **Component Hierarchy**: Design system → Component library → Custom
2. **Styling**: Use Tailwind classes via hooks or utilities
3. **File Organization**: Follow the established structure
4. **Testing**: Maintain AAA pattern and naming conventions

## Other Dependencies

All other dependencies are standard and publicly available:
- React Native & Expo
- React Navigation
- Testing libraries
- TypeScript
- ESLint & Prettier

## Version Compatibility

- Node.js: 18+
- npm: 9+ or yarn: 1.22+
- Expo SDK: 50
- React Native: 0.73


