import SectionTitle from '../common/SectionTitle';
import { useRouter } from 'next/router';

const CallToActionOne = () => {

    const router = useRouter();
  const { locale } = router;
  const title1 = locale === 'fr' ? "Besoin d'un projet réussi ?" : "Need a successful project?";
  const b1 = locale === 'fr' ? "Voir Nos Services" : "See Our Services";
  const sub1 = locale === 'fr' ? "Travaillons ensemble" : "Let's work together";
  const call = locale === 'fr' ? "Appelez-nous maintenant" : "Or call us now";
  
    return (
        <div className="axil-call-to-action-area shape-position ax-section-gap theme-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-call-to-action">
                            <SectionTitle
                                title={title1}
                                subtitle={sub1}
                                color="extra04-color"
                                alignment="center"
                            />
                            <div className="text-center">
                                <a className="axil-button btn-large btn-transparent" href="/contact">
                                    <span className="button-text">{b1}</span>
                                    <span className="button-icon"/>
                                </a>
                                <div className="callto-action">
                                    <span className="text">
                                      {call}
                                    </span>
                                    <span>
                                      <i className="fal fa-phone-alt"/>
                                      <a href="tel:(123) 456 7890">(123) 456 7890</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="shape-group">
                <div className="shape shape-01">
                    <i className="icon icon-shape-14"/>
                </div>
                <div className="shape shape-02">
                    <i className="icon icon-shape-09"/>
                </div>
                <div className="shape shape-03">
                    <i className="icon icon-shape-10"/>
                </div>
                <div className="shape shape-04">
                    <i className="icon icon-shape-11"/>
                </div>
            </div> */}
        </div>
    );
};

export default CallToActionOne;
