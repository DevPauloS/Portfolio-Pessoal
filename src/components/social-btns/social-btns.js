import './social-btns.scss'
export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/paulo.sf1/" target='_blank'><img className='instagram' src="./assets/instagram.png" alt="Logo do Instagram" width="25px"/></a>
            <a href="https://www.linkedin.com/in/paulosfreitas/" target='_blank'><img className='linkedin' src="./assets/linkedin.png" alt="Logo do LinkedIn" width="25px"/></a>
            <a href="https://github.com/DevPauloS" target='_blank'><img className='github' src="./assets/github.png" alt="Logo do GitHub" width="25px"/></a>
            <a href="#" target='_blank'><img className='twitter' src="./assets/twitter.png" alt="Logo do Twitter" width="25px"/></a>
        </div>
    )
}