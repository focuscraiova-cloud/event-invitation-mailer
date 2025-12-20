import React from 'react'

interface NixieDigitProps {
  value: string
}

const NixieDigit: React.FC<NixieDigitProps> = ({ value }) => {
  // For colon, render as text with styling
  if (value === ':') {
    return (
      <div style={{ 
        color: '#e6b871', 
        fontSize: 'clamp(1.5rem, 6vw, 3rem)', 
        fontFamily: 'Courier New',
        textShadow: '0 0 10px rgba(230, 184, 113, 0.8)',
        padding: '0 clamp(0.25rem, 1.5vw, 0.75rem)',
        flexShrink: 0,
        lineHeight: '1'
      }}>
        :
      </div>
    )
  }

  // For digits, use the image
  const imageSource = `/images/${value}.png`
  return (
    <div style={{ 
      display: 'inline-block',
      flexShrink: 0,
      maxWidth: '100%',
      width: 'clamp(30px, 8vw, 60px)'
    }}>
      <img 
        src={imageSource} 
        alt={value} 
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          display: 'block',
          width: '100%',
          maxHeight: 'clamp(40px, 10vw, 80px)',
          objectFit: 'contain'
        }} 
      />
    </div>
  )
}

export default NixieDigit

