import './header.scss'

export function Header() {
  return (
    <div className="header">
      <div>
        <h1 className="line anim-typewriter"><span className="span1">Hi, i'm Paulo Soares!</span></h1>
        <h2>Software Engineer</h2>
      </div>
      <img
        src="/assets/image-prf.jpeg"
        alt="Next.js Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  )
}