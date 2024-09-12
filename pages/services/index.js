import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BannerSix from '../../components/banners/BannerSix';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import ServiceSection from '../../components/services/ServiceSection';
//import ServiceData from '../../data/Services.json';
import js from '../../assets/img/js.png';
import php from '../../assets/img/php.png';

import sql from '../../assets/img/sql.png';
import java from '../../assets/img/java.png';
import Image from 'next/image';
import html from '../../assets/img/html-5.png';
import mysql from '../../assets/img/mysql.png';
import node from '../../assets/img/nodejs.png';
import { useRouter } from 'next/router';

const Services = () => {
    const router = useRouter();
     ////Redirect to serivce sections
     const path = router.asPath;
     const urlParts = path.split('#');
     const urlsections = urlParts[urlParts.length - 1];
     //////////////
    const { locale } = router;
    const ct=locale==='fr'?"Stratégie de contenu":"Content strategy";
    const ct4=locale==='fr'?"technologie":"technology";
    const ct33=locale==='fr'?"développement":"development";
    const ct2=locale==='fr'?"Stratégie de contenu":"Content strategy";
    const ct1=locale==='fr'?"Stratégie de contenu":"Content strategy";
    const techN = locale === 'fr' ?"technologies que nous utilisons":"technologies we use";
    const [activeServiceSection, setActiveServiceSection] = useState({urlsections});
    const [servicesByCategory, setServicesByCategory] = useState([]);
    const ServiceData = locale === 'fr' ? require('../../locales/fr/Services.json') : require('../../locales/en/Services.json');
        function navi(){
            //router.push('/services#'+urlsections);
            //window.onload ="/servicesoo#"+urlsections;
              ///// 
             const section = document.getElementById('section2');
             const link1 = document.getElementsByClassName('section axil-service-area bg-color-white ax-section-gap');
             
             //link1.scrollIntoView({ behavior: 'smooth' });
            //////
            //const link = document.querySelector('a[href^="#'+{urlsections}+'"]');
               console.log(section);
               // link.click();
///////////////////////
            console.log("func got triggered"+urlsections);
        }
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
        getServicesByCategory();
        // Update active service section based on the first service category
        if (servicesByCategory.length > 0) {
            setActiveServiceSection(`section-${servicesByCategory[0].name.replace(/\s+/g, '-').toLowerCase()}`);
        }
    }, []);
    
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
    useEffect(() => {
        navi();
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
                                    className={`nav-link smoth-animation ${activeServiceSection === "section0" ? "active" : ""
                                        }`}
                                    href="#section1"
                                >
                                    marketing Digital
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section1" ? "active" : ""
                                        }`}
                                    href="#section2"
                                >
                                    {ct33}
                                </a>
                            </li>
                         
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section3" ? "active" : ""
                                        }`}
                                    href="#section3"
                                >
                                    Design
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section4" ? "active" : ""
                                        }`}
                                    href="#section4"
                                >
                                     {ct4}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${activeServiceSection === "section5" ? "active" : ""
                                        }`}
                                    href="#section5"
                                >
                                    {ct}
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
                            <h4 className="row" style={{ justifyContent: "center", display: 'flex', marginBottom: 40 }}>{techN}</h4>
                            <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
                                <Image src={php} width={90} height={90} alt=""/>
                                <Image src={java} width={90} height={90} alt="" />
                                <Image src={sql} width={90} height={90} alt=""/>
                                <Image src={js} width={90} height={90} alt=""/>
                                <Image src={html} width={90} height={90} alt="" />
                                <Image src={mysql} width={90} height={90} alt="" />
                                <Image src={node} width={90} height={90} alt=""/>
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
