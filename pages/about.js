import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import ServiceThree from '../components/services/ServiceThree';
import WorkingProcess from '../components/services/WorkingProcess';
import TeamOne from '../components/teams/TeamOne';
import CaseStudyData from '../data/CaseStudies.json';
import {slugify} from '../helpers/utilities';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const workingProcess = {
        title: "Our execution process",
        description:
            "Our comprehensive design strategy ensures a perfectly crafted design for your business.",
        strategies: [
            {
                id: 1,
                title: "Discover",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra04-color",
                image: "/images/process/process-01.jpg",
            },
            {
                id: 2,
                title: "Prototype",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra05-color",
                image: "/images/process/process-02.jpg",
            },
            {
                id: 3,
                title: "Test",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra06-color",
                image: "/images/process/process-03.jpg",
            },
            {
                id: 4,
                title: "Build",
                subtitle: "our four step process",
                description:
                    "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra07-color",
                image: "/images/process/process-04.jpg",
            },
        ],
    };

    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven/>

               
                <ServiceThree/>

                <TeamOne/>

                {/* <WorkingProcess process={workingProcess}/> */}
            </main>
        </Layout>
    );
};

export default About;
