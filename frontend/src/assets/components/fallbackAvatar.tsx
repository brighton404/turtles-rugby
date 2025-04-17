// components/FallbackAvatar.tsx
import React from 'react';

type Props = {
  name: string;
  size?: number;
};

const getRandomColor = (str: string): string => {
  // Generate a pastel color from string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 80%)`; // pastel color
};

const FallbackAvatar: React.FC<Props> = ({ name, size = 48 }) => {
  const letter = name.charAt(0).toUpperCase();
  const bgColor = getRandomColor(name);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: size / 2,
        color: '#fff',
        userSelect: 'none',
      }}
    >
      {letter}
    </div>
  );
};

export default FallbackAvatar;
