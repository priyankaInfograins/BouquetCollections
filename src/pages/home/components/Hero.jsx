import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import HeroBanner from '../../../assets/images/banner.jpg'
import Instagram from '../../../assets/images/instagram@2x.png'
import Discord from '../../../assets/images/discord@2x.png'
import Twitter from '../../../assets/images/twiter@2x.png'
import banner from '../../../assets/images/collections/banner1.jpg'
export default function Hero() {
    return (
        <>
            <div className="home_heroDiv hero_ d-none d-lg-block">
            </div>

            <div className="home_heroDiv_ d-block d-lg-none">
                <Image src={banner} alt="CryptoBear Watch Club" />
            </div>

            <Container className="d-block d-lg-none">
                <Row>
                    <ul className="social_mobile">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cryptobearwatchclub/?utm_medium=copy_link">
                                <Image src={Instagram} alt="CryptoBear Watch Club instagram"/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://discord.gg/cryptobearwatchclub">
                                <Image src={Discord} alt="CryptoBear Watch Club discord"/>
                            </a></li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/CryptoBearWC">
                                <Image src={Twitter} alt="CryptoBear Watch Club twitter"/>
                            </a></li>
                    </ul>
                </Row>
            </Container>
        </>
    )
}
