import { Image } from "react-bootstrap"

export default function Header () {
    return (
        <>
            <header id='header'>
                <div className='inner'>
                    <a href='/' className='logo'>
                        <span className='symbol'>
                            <Image
                                src='../../images/common/me2021.jpg'
                                alt=''
                                rounded
                            />
                        </span>
                        <span className='title'>
                            SEBASTIAN S. RODRIGUEZ, Ph.D.
                        </span>
                    </a>
                </div>
            </header>
        </>
    )
}
