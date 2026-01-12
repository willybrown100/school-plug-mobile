# SVG Tab Icons - Usage Guide

## Overview

Your bottom tab navigation now uses crisp SVG icons instead of images. These icons will never be blurry and support dynamic colors based on the focused state.

## How It Works

### Icon Components

Each icon component accepts these props:

- `focused` (boolean): Whether the tab is currently active
- `color` (string, optional): Custom color override
- `size` (number, optional): Icon size in pixels (default: 24)

### Default Behavior

- **Focused (active tab)**: Blue stroke (`#007AFF`)
- **Unfocused (inactive tab)**: Gray stroke (`#565656`)

## Available Icons

1. **HomeIcon** - Home/house icon
2. **EventsIcon** - Calendar/events icon
3. **TrendsIcon** - Chart/analytics icon
4. **PayBillsIcon** - Wallet/payment icon
5. **GraduationCapIcon** - Education/class icon
6. **CodeIcon** - Code/practice icon
7. **RocketIcon** - Upgrade/settings icon
8. **TrophyIcon** - Achievement/progress icon
9. **UserIcon** - Profile/user icon

## Customization Examples

### Change Focus Colors

Edit any icon file to change the default colors:

```tsx
const strokeColor = color || (focused ? "#FF0000" : "#CCCCCC");
// Red when focused, light gray when unfocused
```

### Use Custom Colors

Pass a custom color prop:

```tsx
<HomeIcon focused={true} color="#00FF00" />
```

### Change Icon Size

```tsx
<HomeIcon focused={true} size={28} />
```

### Update Tab Bar Colors

In `app/(tabs)/_layout.tsx`, modify the `screenOptions`:

```tsx
screenOptions={{
  tabBarActiveTintColor: "#007AFF",     // Active label color
  tabBarInactiveTintColor: "#565656",   // Inactive label color
  tabBarStyle: {
    backgroundColor: "#FFFFFF",          // Tab bar background
    borderTopColor: "#E5E5E5",          // Top border color
  },
}}
```

## Adding New Icons

1. Create a new icon file in `components/icons/`:

```tsx
import React from "react";
import Svg, { Path } from "react-native-svg";

interface MyIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const MyIcon: React.FC<MyIconProps> = ({
  focused = false,
  color,
  size = 24,
}) => {
  const strokeColor = color || (focused ? "#007AFF" : "#565656");

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="YOUR_SVG_PATH_HERE"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MyIcon;
```

2. Export it in `components/icons/index.ts`:

```tsx
export { default as MyIcon } from "./MyIcon";
```

3. Use it in your tab layout:

```tsx
import MyIcon from "@/components/icons/MyIcon";

<Tabs.Screen
  name="myroute"
  options={{
    tabBarIcon: ({ focused }) => <MyIcon focused={focused} />,
  }}
/>;
```

## Benefits

✅ **Crisp at any size** - SVG scales perfectly, no blurriness
✅ **Dynamic colors** - Icons change color based on focus state
✅ **Lightweight** - No image files to load
✅ **Customizable** - Easy to modify colors, sizes, and styles
✅ **Type-safe** - Full TypeScript support
