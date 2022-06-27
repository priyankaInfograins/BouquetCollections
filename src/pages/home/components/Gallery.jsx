import React,{useState, useEffect} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../../assets/images/collections/1.png'
import Footer from '../../../common/Footer';
import Header from '../../../common/Header';
import InfiniteScroll from 'react-infinite-scroll-component';
// import GalleryNft from './GalleryNft';
// import GalleryLoader from './GalleryLoader';

const Gallery = () => {
    const [items, setItems] = useState([]);
    const [noMore, setNoMore] = useState(true)
    const [page, setPage] = useState(2);

    useEffect(()=>{
        const getComments = async ()=>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`)
            const data = await res.json();
            setItems(data);

        }
        getComments();
    },[])

   console.log(items)

    const fetchComments = async ()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`)
        const data = await res.json();
        return data;

    }

    const fetchData = async ()=>{
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);

        if(commentsFormServer.length === 0 || commentsFormServer.length < 20){
            setNoMore(false);
        }
       
        setPage(page+1);
    }
    return (
        <>

            <Header />
            
            <div className="gallery_section mb-5">
                <Container>
                <Row>
               {
                 [...Array(10000).keys()].map(e=>{
                    console.log(e)
                    return (
                        <Col lg={3} className="my-2">
                        <div className="gallery_div">
                         <div className="gallery_img">
                             <img src={img1} alt="img" className='gallery_nft_img' style={{width:"200px",borderRadius: "10px"}} />
                         </div>
                         <div className="gallery_text">
                             <div className="nft_name m-2">BOUQUET #{e+1}</div>
                         </div>
                        </div>
                     </Col>
                    )
                })
               }
                   
                   

                </Row>
            </Container>

                {/* <InfiniteScroll
                    dataLength={items.length}
                    next={fetchData}
                    hasMore={noMore}
                    loader={<GalleryLoader/>}
                    endMessage={
                        <p>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <Container>
                        <Row className='m-2'>
                        {items.map((item=>{
                        return(
                            <div></div>
                            <GalleryNft key={item.id} item={item} />
                        )
                    }))}
                        </Row>
                    </Container>
                </InfiniteScroll> */}

            </div>
            <Footer />
        </>
    )
}

export default Gallery;