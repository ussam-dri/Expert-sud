import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BannerSix from '../../components/banners/BannerSix';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceData from '../../data/Services.json';
import js from '../../assets/img/js.png';
import php from '../../assets/img/php.png';

import sql from '../../assets/img/sql.png';
import java from '../../assets/img/java.png';
import Image from 'next/image';
import html from '../../assets/img/html-5.png';
import mysql from '../../assets/img/mysql.png';
import node from '../../assets/img/nodejs.png';

const Services = () => {
    const [activeServiceSection, setActiveServiceSection] = useState("");
    const [servicesByCategory, setServicesByCategory] = useState([]);

    const getServicesByCategory = () => {
        const filteredServices = ServiceData.reduce((acc, service) => {
            const categoryIndex = acc.findIndex(
                (item) => item.name == service.category
            );

            if (service.category !== "Default" && service.category !== "Our capabilities" && service.category !== "Our ways" && service.category !== "Our values") {
                if (categoryIndex > -1) {
                    acc[categoryIndex].services.push(service);
                } else {
                    acc.push({
                        name: service.category,
                        services: [service],
                    });
                }
            }

            return acc;
        }, []);

        setServicesByCategory(filteredServices);
    };

    const changeActiveSection = (sectionId) => {
        setActiveServiceSection(sectionId);
    };

    const handleStickyNav = () => {
        const scrollNavigationArea = document.querySelector(
            ".axil-scroll-navigation"
        ),
            scrollNav = document.querySelector(".axil-scroll-nav"),
            sticky = scrollNavigationArea?.offsetTop;

        if (window.pageYOffset >= sticky) scrollNav?.classList.add("is-affixed");
        else scrollNav?.classList.remove("is-affixed");
    };

    const removeStickyNav = () => {
        const scrollNav = document.querySelector(".axil-scroll-nav");
        scrollNav?.classList.remove("is-affixed");
    };

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (inView) {
                handleStickyNav();
            } else {
                removeStickyNav();
            }
        });
    }, [inView]);

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Expert sud</title>
            </Head>

            <main className="page-wrapper">
                <BannerSix />

                <div
                    ref={ref}
                    className="axil-scroll-navigation-area axil-scroll-navigation position-relative bg-color-white"
                >
                    <nav className="axil-scroll-nav navbar navbar-example2">
                        <ul className="nav nav-pills justify-content-center sidebar__inner">
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section1" ? "active" : ""
                                        }`}
                                    href="#section1"
                                >
                                    marketing Digital
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section2" ? "active" : ""
                                        }`}
                                    href="#section2"
                                >
                                    Development
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section3" ? "active" : ""
                                    }`}
                                    href="#section3"
                                >
                                    Online marketing
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section4" ? "active" : ""
                                        }`}
                                    href="#section3"
                                >
                                    Design
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section5" ? "active" : ""
                                        }`}
                                    href="#section4"
                                >
                                    Technology
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section6" ? "active" : ""
                                        }`}
                                    href="#section5"
                                >
                                    Content strategy
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {servicesByCategory?.map((categoryServices, index) => (
                        <ServiceSection
                            key={`service-section-${index}`}
                            sectionId={`section${index + 1}`}
                            sectionTitle={categoryServices.name}
                            sectionSubtitle="services"
                            sectionBg={
                                index % 2 === 0 ? "bg-color-white" : "bg-color-lightest"
                            }
                            serviceType={categoryServices.name}
                            services={categoryServices.services}
                            changeActiveSection={changeActiveSection}
                        />
                    ))}
                    {/* technologies start */}
                    <div className='container'>
                        <div className='row'>
                            <h4 className="row" style={{ justifyContent: "center", display: 'flex', marginBottom: 40 }}>technologies we use</h4>
                            <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
                                <Image src={php} width={90} height={90} />
                                <Image src={java} width={90} height={90} />
                                <Image src={sql} width={90} height={90} />
                                <Image src={js} width={90} height={90} />
                                <Image src={html} width={90} height={90} />
                                <Image src={mysql} width={90} height={90} />
                                <Image src={node} width={90} height={90} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* technologies end */}                    
                {/* <CallToActionOne/> */}
            </main>
        </Layout>
    );
};

export default Services;
