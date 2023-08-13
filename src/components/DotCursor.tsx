import AnimatedCursor from 'react-animated-cursor'

export default function DotCursor() {
  return (
    <div>
      <AnimatedCursor
        innerSize={9}
        outerSize={8}
        color='213, 64, 17'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={7}
				outerStyle={{ mixBlendMode: 'exclusion', border: '1px solid #D54011' }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
    </div>
  )
}
