import SectionTitle from "../Common/SectionTitle";

const MasterAboutSection = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div>
            <SectionTitle
              title="Techno-Commercial Leader & Fractional CDO"
              paragraph="Two decades of executive leadership, driving business transformation and growth."
              mb="36px"
            />
            <div className="text-body-color text-lg leading-relaxed space-y-6 text-justify">
              <p>
                Sabyasachi with more than <strong>2 decades of techno-commercial experience</strong> has given me the opportunity to juggle various business impacting roles like Client acquisition, Product Management, Partner Management, Practice Management, Presales and Solutions in various customer engagements across the globe. Enjoy being the change agent for Business Transformation across domains like Digital Solutions, Enterprise Mobility, IOT, DevSecOps, Automation, Opensource, Data Engineering, Analytics, AI / ML / DL services for large enterprises.
              </p>

              <p>
                While currently work as a <strong>Fractional Chief Digital Officer (CDO)</strong> transforming organisations, had been responsible for the growth of the Digital & Analytics business unit at <strong>Motherson group</strong>, worked with Tech Mahindra Ltd, SoftDEL Systems Ltd, Orane Technologies & Hindustan Aeronautics Ltd in the past.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterAboutSection;
