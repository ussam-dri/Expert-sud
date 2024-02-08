import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import SectionTitle from "../components/common/SectionTitle";
import Layout from "../components/layouts/Layout";
import PricingTable from "../components/pricings/PricingTable";
import PricingData from "../data/Pricings.json";
import { useRouter } from 'next/router';


const Pricing = () => {

  
  const router = useRouter();
  const { locale } = router;
  const faq_title = locale === 'fr' ? "Questions fréquemment posées" : "Frequently asked questions";
  const faq_sub = locale === 'fr' ? "Trouvez des réponses à vos questions courantes ici et simplifiez votre expérience avec notre guide FAQ." : "Find answers to common questions here, and simplify your experience with our FAQ guide.";
  const tag = locale === 'fr' ? "nous avons des réponses" : "we've got answers";
  const q1 = locale === 'fr' ? "Quels services proposez-vous ?" : "What services do you offer?";
  const resp1 = locale === 'fr' ? "Nous proposons des services complets sur les médias sociaux, y compris le développement de stratégies, la création de contenu, la publicité payante, les analyses, le marketing d'influence et la gestion de communauté." : "We provide comprehensive social media services including strategy development, content creation, paid advertising, analytics, influencer marketing, and community management.";
  const q2 = locale === 'fr' ? "Comment mesurerez-vous le succès de mes campagnes sur les médias sociaux ?" : "How will you measure the success of my social media campaigns?";
  const resp2 = locale === 'fr' ? "Nous mesurons le succès à travers des métriques telles que les taux d'engagement, la portée, les taux de conversion et le ROI, garantissant des résultats transparents et mesurables pour vos campagnes." : "We track success through metrics like engagement rates, reach, conversion rates, and ROI, ensuring transparent and measurable results for your campaigns.";
  const q3 = locale === 'fr' ? "Qu'est-ce qui distingue votre agence des autres ?" : "What sets your agency apart from others?";
  const resp3 = locale === 'fr' ? "Notre agence se distingue par son expertise sectorielle spécialisée, ses stratégies innovantes, ses histoires à succès prouvées et son soutien client inégalé, garantissant des résultats exceptionnels pour votre présence sur les médias sociaux." : "Our agency stands out with specialized industry expertise, innovative strategies, proven success stories, and unparalleled client support, ensuring exceptional results for your social media presence.";
 


  return (
    <Layout>
      <Head>
        <title>Pricing</title>
      </Head>

      {/* <Breadcrumb title="Pricing" current="Pricing" /> */}
        <SectionTitle/>
      <main className="page-wrappper">
        <div className="axil-pricing-table-area pricing-shape-position ax-section-gap bg-color-lightest">
          <div className="container">
            <div className="row row--25 justify-content-center">
              {PricingData?.map((pricing, index) => (
                <PricingTable
                  key={`pricing-table-${index}`}
                  column="col-lg-4 col-md-6 col-sm-12 col-12"
                  pricingTableClass={
                    index === 1
                      ? "axil-pricing-table prcing-style-2 mt--40 active"
                      : "axil-pricing-table prcing-style-2 mt--40 mt_sm--60"
                  }
                  buttonClass={index === 1 ? "btn-solid" : "btn-transparent"}
                  data={pricing}
                />
              ))}
            </div>
          </div>
          {/* <div className="shape-group">
            <div className="shape">
              <i className="icon icon-shape-15"></i>
            </div>
          </div> */}
        </div>

        <div className="axil-faq-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  title={faq_title}
                  subtitle={tag}
                  description={faq_sub}
                  color="extra04-color"
                  alignment="center"
                />
              </div>
            </div>
            <div className="row mt--30">
              <div className="col-lg-8 offset-lg-2">
                <div id="accordion" className="axil-accordion--2">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                    {q1}                     </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        {resp1}
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {q2}
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                          {resp2}
                                </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingthree">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                          {q3}
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingthree"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                          {resp3}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default Pricing;
