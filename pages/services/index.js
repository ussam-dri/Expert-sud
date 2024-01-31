import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BannerSix from '../../components/banners/BannerSix';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import ServiceSection from '../../components/services/ServiceSection';
import php from '../../assets/img/php.png';
import java from '../../assets/img/java.png';
import sql from '../../assets/img/sql.png';
import js from '../../assets/img/js.png';
import html from '../../assets/img/html-5.png';
import mysql from '../../assets/img/mysql.png';
import node from '../../assets/img/nodejs.png';
import { useRouter } from 'next/router';
import Image from 'next/image'
const Services = () => {
    const router = useRouter();
    const { locale } = router;

    const [activeServiceSection, setActiveServiceSection] = useState("");
    const [servicesByCategory, setServicesByCategory] = useState([]);

    // Dynamic import based on locale
    const ServiceData = locale === 'fr' ? require('../../locales/fr/Services.json') : require('../../locales/en/Services.json');

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

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, [inView]); // Added inView as a dependency

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
                    {/* Navigation section */}
                    <nav className="axil-scroll-nav navbar navbar-example2">
                        <ul className="nav nav-pills justify-content-center sidebar__inner">
                            {/* Navigation links */}
                        </ul>
                    </nav>

                    {/* Service sections */}
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

                    {/* Technologies section */}
                    <div className='container'>
                        <div className='row'>
                            <h4 className="row" style={{ justifyContent: "center", display: 'flex', marginBottom: 40 }}>technologies we use</h4>
                            <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
                                <Image src={php} width={90} height={90} alt="PHP" />
                                <Image src={java} width={90} height={90} alt="Java" />
                                <Image src={sql} width={90} height={90} alt="SQL" />
                                <Image src={js} width={90} height={90} alt="JavaScript" />
                                <Image src={html} width={90} height={90} alt="HTML" />
                                <Image src={mysql} width={90} height={90} alt="MySQL" />
                                <Image src={node} width={90} height={90} alt="Node.js" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <CallToActionOne />
            </main>
        </Layout>
    );
};

export default Services;
