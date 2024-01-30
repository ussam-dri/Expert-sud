import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SectionTitle from '../common/SectionTitle';
import ServiceCardOne from './ServiceCardOne';

const ServiceOne = () => {
    const router = useRouter();
    const { locale } = router;
    const [defaultServices, setDefaultServices] = useState([]);
    const [activeService, setActiveService] = useState(1);

    useEffect(() => {
        // Dynamically import the service data based on the selected language
        const ServiceData = locale === 'fr' ? require('../../locales/fr/Services.json') : require('../../locales/en/Services.json');
        
        // Filter services based on the category 'Default'
        const filteredServices = ServiceData.filter(
            (service) => service.category === 'Default'
        );

        setDefaultServices(filteredServices);
    }, [locale]);

    const changeActive = (index) => {
        setActiveService(index);
    };

    return (
        <div className="axil-service-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Services we can help you with"
                            subtitle="what we can do for you"
                            description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                            color="extra08-color"
                            alignment="center"
                        />
                    </div>
                </div>
                <div className="row">
                    {defaultServices?.map((ServiceData, index) => (
                        <ServiceCardOne
                            key={ServiceData.id}
                            column="col-lg-4 col-md-6 col-sm-6 col-12"
                            index={index}
                            activeIndex={activeService}
                            data={ServiceData} // Pass the localized service data to ServiceCardOne
                            changeActive={changeActive}
                            chosenService={ServiceData.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceOne;
