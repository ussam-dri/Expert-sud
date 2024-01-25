import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitle from "../components/common/SectionTitle";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";
import Image from "next/image";
import prof from '../assets/img/call-us.webp';
import circle from '../assets/img/circle.png';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    Row,
    Col, CardTitle
} from "reactstrap";
const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Expert Sud</title>
            </Head>

            {/* <Breadcrumb title="Contact" current="Contact"/> */}

            <main className="main-wrapper">
                <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                                <div className="contact-form-wrapper">
                                    <div className="axil-contact-form contact-form-style-1">
                                        <h3 className="title">Get a free Keystroke quote now</h3>
                                        <ContactFormThree />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40 mb-5">
                                {/* <div className="axil-address-wrapper">
                                    <div
                                        className="axil-address"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000" style={{ backgroundColor: 'red' }}
                                    >
                                        <div className="inner">
                                            <div className="icon" style={{ display: "flex" }}>
                                                <i className="fas fa-phone" style={{ fontSize: 20, marginRight: 10 }}></i>
                                                <h4 className="title" style={{ fontSize: 20 }}> Phone</h4>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Notre service client est ouvert du lundi au vendredi, de 10h00 à 18h00
                                                </p>
                                                <p>
                                                    <a className="axil-link" href="tel:+212 525 145 584" style={{ fontSize: 15 }}>
                                                        +212 525 145 584
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                       
                                    </div>

                                    <div
                                        className="axil-address mt--60 mt_sm--30 mt_md--30"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon" style={{ display: "flex" }}>
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                
                                                <h4 className="title" style={{ fontSize: 20 }}>Email</h4>
                                                <p>
                                                    Notre équipe d assistance vous répondra dans les 48 heures pendant les heures de bureau standard.
                                                </p>
                                                <p>
                                                    <a
                                                        className="axil-link"
                                                        href="mailto:contact@expert-sud.ma"
                                                        style={{ fontSize: 15 }}
                                                    >
                                                        contact@expert-sud.ma
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* start */}
                                <div>
                                    {/* 1 */}
                                    <Row>
                                        <Col md="12" style={{ marginTop: 20 }}>
                                            <Card className="card-profile">
                                                <Image src={prof} />
                                                {/* <Row className="justify-content-center">
                                                    <Col className="order-lg-2" lg="3">
                                                        <div className="card-profile-image">
                                                            <a href="javascript:;">
                                                                
                                                                <Image src={prof} className="rounded-circle" />
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row> */}
                                                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                                    <div className="d-flex justify-content-between">
                                                        <a
                                                            className="mr-4 btn btn-info"
                                                            color="info"
                                                            href="tel:+212775489777"
                                                            size="sm"
                                                        >
                                                            Connect
                                                        </a>
                                                        <a
                                                            className="float-right btn btn-dark"
                                                            color="default"
                                                            href="mailto:contact@expert-sud.ma"
                                                            size="sm"

                                                        >
                                                            Message
                                                        </a>
                                                    </div>
                                                </CardHeader>
                                                <CardBody className="pt-0">
                                                    <Row>
                                                        <div className="col">
                                                            <div className="card-profile-stats d-flex justify-content-center">
                                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                                    {/* <span className="heading">22</span> */}
                                                                    <i className="fas fa-phone" style={{ fontSize: 20, marginRight: 10, textAlign: "center" }}></i>
                                                                    {/* <span className="description">Friends</span> */}
                                                                    +212 525 145 584
                                                                </div>

                                                                <div style={{ width: 10 }}></div>

                                                                <div style={{ borderLeft: "1px solid grey", height: 39 }}></div>

                                                                <div style={{ width: 10 }}></div>

                                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                                    {/* <span className="heading">10</span> */}
                                                                    <i className="fal fa-envelope" style={{ fontSize: 20, marginRight: 10, textAlign: "center" }}></i>
                                                                    {/* <span className="description">Photos</span> */}
                                                                    contact@expert-sud.ma
                                                                </div>

                                                                {/* <div style={{display:"flex",flexDirection:"column"}}>
                                                                    <span className="heading">89</span>
                                                                    <span className="description">Comments</span>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="text-center">
                                                        <div className="h6 font-weight-100 mt-3">
                                                            <i className="ni location_pin mr-2"></i>
                                                            Notre service client est ouvert du lundi au vendredi, de 10h00 à 18h00

                                                        </div>
                                                        
                                                        <div className="h5 font-weight-300">
                                                            <i className="ni location_pin mr-2"></i>
                                                            Agadir, Morocco
                                                        </div>

                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    {/* 2 */}
                                    {/* <Row>
                                        <Col md="8">
                                            <Card>
                                                <CardBody>
                                                    <Row className="align-items-center">
                                                        <Col className="col-auto">
                                                            <a
                                                                className="avatar avatar-xl rounded-circle"
                                                                href="javascript:;"
                                                            >
                                                                <Image src={prof} height={90} width={90} className="rounded-circle"/>
                                                            </a>
                                                        </Col>
                                                        <div className="col ml-2">
                                                            <h4 className="mb-0">
                                                                <a href="javascript:;">John Snow</a>
                                                            </h4>
                                                            <p className="text-sm text-muted mb-0">Working remoteley</p>
                                                            <span className="text-success">â</span>
                                                            <small>Active</small>
                                                        </div>
                                                        <Col className="col-auto">
                                                            <Button color="primary" size="sm" type="button">
                                                                Add
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row> */}
                                    {/* <Row className="mb-4">
                                        <Col lg="6">
                                            <Card className="bg-gradient-default">
                                                <CardBody>
                                                    <Row>
                                                        <div className="col">
                                                            <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                                                Total traffic
                                                            </CardTitle>
                                                            <span className="h2 font-weight-bold mb-0 text-white">
                                                                350,897
                                                            </span>
                                                        </div>
                                                        <Col className="col-auto">
                                                            <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                                                <i className="ni ni-active-40"></i>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <p className="mt-3 mb-0 text-sm">
                                                        <span className="text-white mr-2">
                                                            <i className="fa fa-arrow-up"></i>
                                                            3.48%
                                                        </span>
                                                        <span className="text-nowrap text-light">
                                                            Since last month
                                                        </span>
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="6">
                                            <Card className="bg-gradient-primary">
                                                <CardBody>
                                                    <Row>
                                                        <div className="col">
                                                            <CardTitle className="text-uppercase text-muted mb-0 text-white">
                                                                New users
                                                            </CardTitle>
                                                            <span className="h2 font-weight-bold mb-0 text-white">
                                                                2,356
                                                            </span>
                                                        </div>
                                                        <Col className="col-auto">
                                                            <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                                                <i className="ni ni-atom"></i>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <p className="mt-3 mb-0 text-sm">
                                                        <span className="text-white mr-2">
                                                            <i className="fa fa-arrow-up"></i>
                                                            3.48%
                                                        </span>
                                                        <span className="text-nowrap text-light">
                                                            Since last month
                                                        </span>
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row> */}
                                </div>
                                {/* end */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="shape-group">
                        <div className="shape shape-01">
                            <i className="icon icon-contact-01"/>
                        </div>
                        <div className="shape shape-02">
                            <i className="icon icon-contact-02"/>
                        </div>
                        <div className="shape shape-03">
                            <i className="icon icon-contact-03"/>
                        </div>
                    </div> */}
                </div>

                {/* <div className="axil-office-location-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title="Our office"
                                    subtitle="who we are"
                                    color="extra04-color"
                                    alignment="center"
                                />
                            </div>
                        </div>
                        <div className="row mt--30">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Virginia-HQ</h4>
                                        <p>
                                            435 Pouros Locks <br/> United States
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-02.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Nevada</h4>
                                        <p>
                                            46 Watsica Creek Suite 071 <br/> United States
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Columbia</h4>
                                        <p>
                                            7140 Wehner Tunnel <br/> Washington, D.C
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">New Mexico</h4>
                                        <p>
                                            10 Maggie Valleys , <br/> United States
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>
        </Layout>
    );
};

export default Contact;
