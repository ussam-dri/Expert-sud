import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Link from "next/link";
import { useRouter } from 'next/router';

const BannerOne = () => {
    const router = useRouter();
    const { locale } = router;

    // Default to 'en' locale if no locale is detected
    const currentLocale = locale || 'fr';

    // Import translated data from JSON file based on current locale
    const data = require(`../../locales/${currentLocale}/home_page.json`);

    const { main_text, start_now_key, sub_main_text} = data;

    return (
        <div className="axil-slider-area axil-slide-activation">
            <div
                className="axil-slide slide-style-default theme-gradient slider-fixed-height d-flex align-items-center paralax-area">
                <div className="container">
                    <div className="row align-items-center pt_md--60 mt_sm--60">
                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                            <div className="content pt_md--30 pt_sm--30">
                                <h1
                                    className="axil-display-1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    {main_text}
                                </h1>
                                <p
                                    className="subtitle-3"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    {sub_main_text}
                                    <br/>
                                </p>
                                <Link href="/portfolio">
                                    <a className="axil-button btn-large btn-transparent"
                                       data-aos="aos-fade-in-up"
                                       data-aos-duration="1000"
                                       data-aos-delay="400">
                                        <span className="button-text">{start_now_key}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 order-1 order-lg-2">
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                                <div className="topskew-thumbnail-group text-start text-lg-end">
                                    <div className="thumbnail paralax-image">
                                        <div className="light-image">
                                            <Image
                                                width={500}
                                                height={630}
                                                src="/images/others/expertsud.jpg"
                                                alt="expertsud"
                                            />
                                        </div>
                                    </div>
                                    <div className="image-group"></div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerOne;
