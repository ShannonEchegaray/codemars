import Marquee from 'react-fast-marquee'

export default function ErrMarquee() {
  return (
    <Marquee speed={110}>
      <h1 className='leading-none text-9xl uppercase font-black [word-spacing:30px] overflow-hidden'>
        <span className='bg-clip-text text-transparent bg-gradient-to-tr from-mars-red to-mars-fuchsia'>
          {' '}
          404{' '}
        </span>
        Exploración fallida.&nbsp;{' '}
      </h1>
    </Marquee>
  )
}
