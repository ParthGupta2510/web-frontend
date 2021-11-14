import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Gallery.css'
import Layout from '../Layout';

function Gallery() {
    return (
        <Layout >
        <div className="maindiv_gallery" >
    <div >
    <h2
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "36px"
          }}
        >
          GALLERY
        </h2>
        <Container>
            <Row style={{marginTop: "5%"}}>
                
                <Col className="main_col1" md={4}>
                    <Row className="img-grid_row" xs={12}>
                        <Row className="row1" >
                            <Col style={{width: 400}}>
                                <div className="grid_imgs" style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="..." className="myimg" />
                                <div class="layer">
                                    <h3>Some text describing the image</h3>
                                    </div>
                                </div>
                            </Col>                       
                            <Col style={{width: 400}}>
                                <div className="grid_imgs"style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/Dm-qxdynoEc/800x799" alt="..." className="myimg" />
                                </div>
                            </Col> 
                            
                            <Col >
                                <div className="grid_imgs"style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" alt="..." className="myimg" />
                                </div>
                            </Col>
                        </Row >
                        <Row className="row1" >
                            <Col style={{width: 400}}>
                                <div className="grid_imgs" style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="..." className="myimg" />
                                </div>
                            </Col>                       
                            <Col >
                                <div className="grid_imgs"style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/Dm-qxdynoEc/800x799" alt="..." className="myimg" />
                                </div>
                            </Col> 
                            
                            <Col >
                                <div className="grid_imgs"style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" alt="..." className="myimg" />
                                </div>
                            </Col>
                        </Row >
                        <Row className="row1" >
                            <Col style={{width: 400}}>
                                <div className="grid_imgs" style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="..." className="myimg" />
                                </div>
                            </Col>                       
                            <Col >
                                <div className="grid_imgs"style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/Dm-qxdynoEc/800x799" alt="..." className="myimg" />
                                </div>
                            </Col> 
                            
                            <Col >
                                <div className="grid_imgs"style={{width: 400, height: 400}}>
                                <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" alt="..." className="myimg" />
                                </div>
                            </Col>
                        </Row >
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
</div>
</Layout>
    );
  }
  
export default Gallery;