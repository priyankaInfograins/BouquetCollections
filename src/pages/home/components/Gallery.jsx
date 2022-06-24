import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../../assets/images/collections/1.png'
import Footer from '../../../common/Footer';
import Header from '../../../common/Header';
const Gallery = () => {
    return(
        <>

            <Header/>
            <div className="gallery_section mb-5">
            <Container>
                <Row>
                    <Col lg={3}>
                       <div className="gallery_div">
                        <div className="gallery_img">
                            <img src={img1} alt="img" className='gallery_nft_img' style={{width:"200px",borderRadius: "10px"}} />
                        </div>
                        <div className="gallery_text">
                            <div className="nft_name">BOUQUET #1</div>
                        </div>
                       </div>
                    </Col>
                    <Col lg={3}>
                       <div className="gallery_div">
                        <div className="gallery_img">
                            <img src={img1} alt="img" className='gallery_nft_img' style={{width:"200px",borderRadius: "10px"}} />
                        </div>
                        <div className="gallery_text">
                            <div className="nft_name">BOUQUET #1</div>
                        </div>
                       </div>
                    </Col>
                    <Col lg={3}>
                       <div className="gallery_div">
                        <div className="gallery_img">
                            <img src={img1} alt="img" className='gallery_nft_img' style={{width:"200px",borderRadius: "10px"}} />
                        </div>
                        <div className="gallery_text">
                            <div className="nft_name">BOUQUET #1</div>
                        </div>
                       </div>
                    </Col>
                    <Col lg={3}>
                       <div className="gallery_div">
                        <div className="gallery_img">
                            <img src={img1} alt="img" className='gallery_nft_img' style={{width:"200px",borderRadius: "10px"}} />
                        </div>
                        <div className="gallery_text">
                            <div className="nft_name">BOUQUET #1</div>
                        </div>
                       </div>
                    </Col>

                </Row>
            </Container>
            </div>
            <Footer/>
        </>
    )
}

export default Gallery;