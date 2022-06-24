import React from 'react'
import { Carousel } from 'react-bootstrap'
import KingBear from '../../../assets/images/w-1.png'
import BearPaw from '../../../assets/images/w-2.png'
import Frame from '../../../assets/images/w-3.png'
import Jar from '../../../assets/images/w-4.png'
import Honey from '../../../assets/images/w-5.png'

export default function ClubSlider() {
    return (
        <>

            <Carousel className="d-sm-none">
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={KingBear}
                        alt="First slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <p className="clubSliderPara">10,000 rare CryptoBears</p>

                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={BearPaw}
                        alt="Second slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <p className="clubSliderPara">Linear distribution: All CryptoBear watches cost 3 ETH</p>
                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={Frame}
                        alt="Third slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <p className="clubSliderPara">Full ownership rights to your NFT asset</p>
                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={Jar}
                        alt="Third slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <p className="clubSliderPara">The Cave: Members-only ‘scratch & carves’ wall</p>
                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={Honey}
                        alt="Third slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <p className="clubSliderPara">Exclusive airdrops throughout your journey</p>
                </Carousel.Item>
            </Carousel>
        </>


    )
}
