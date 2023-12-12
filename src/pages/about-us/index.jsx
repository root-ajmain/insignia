import Layout from "../../components/common/Layout";

const AboutUsScreen = () => {
  return (
    <Layout title="About us">
      <section className="py-5 md:py-10">
        <div className="max-w-screen-xl w-full mx-auto p-content__padding ">
          <div className="w-full h-[350px] flex justify-center items-center bg-about__us__background bg-center bg-cover rounded-tl-md rounded-tr-md relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 "></div>
            <h6 className="text-brand__font__size__xl font-brand__font__bold text-white relative">
              About Us
            </h6>
          </div>
          <div className="bg-white text-brand__font__size__sm text-gray-500 leading-relaxed p-5 md:p-10">
            <p>
              Insignia pursue a dream to provide the highest standard tours at
              an affordable price to creates ecstasy and symphony in both body
              and mind, affordable world strives to deliver an exceptional,
              vacation that will transport you to the very heart and highlights
              of each destination.
            </p>
            <br />
            <p>
              As a business, we hold our family-run values close. We make great
              service, integrity, quality and affordability a part of everything
              we do. So when you travel with us, you feel like part of the
              family knowing that your happiness is our top priority.
            </p>
            <br />
            <p>
              We believe the best tours combine comprehensive itineraries with
              extensive inclusive sightseeing, top hotels and excellent value.
              So we&rsquo;re proud to be one of the few travel companies to
              offer exactly this blend. And although it&rsquo;s an overworked
              phrase, we are passionate about travel, leaving no detail
              untouched to ensure you enjoy the most fulfilling and seamless
              travel experience.
            </p>
            <br />
            <p>
              We also understand that your time is precious and valuable. So we
              create our intensions with the greatest care, using exceptional
              local knowledge of each destination.
            </p>

            <br />
            <p>
              That way, you get the best from each place you visit. And you also
              get the rich cultural encounters and insider insights that create
              amazing travel memories.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsScreen;
