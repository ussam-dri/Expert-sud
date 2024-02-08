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

    // Define title, subtitle, and description based on language
    const title = locale === 'fr' ? 'Services auxquels nous pouvons vous aider' : 'Services we can help you with';
    const subtitle = locale === 'fr' ? 'ce que nous pouvons faire pour vous' : 'what we can do for you';
    const description = locale === 'fr' ? "Notre bureau d’études vous offre des prestations avancées et intelligentes, techniquement et créativement qualifiées pour consolider votre présence dans le marché actuel." : "Our design office offers you advanced and intelligent, technically and creatively qualified services to consolidate your presence in today's market.";

    const changeActive = (index) => {
        setActiveService(index);
    };

    return (
        <div className="axil-service-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title={title}
                            subtitle={subtitle}
                            description={description}
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
