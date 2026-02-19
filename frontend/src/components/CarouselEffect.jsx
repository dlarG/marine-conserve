import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const CarouselEffect = () => {
  const partners = [
    {
      acronym: "CHED",
      name: "Commission on Higher Education",
      logo: "/partners/ched-logo.svg",
      placeholder: false,
    },
    {
      acronym: "DOST",
      name: "Department of Science and Technology",
      logo: "/partners/dost-logo.svg",
      placeholder: false,
    },
    {
      acronym: "AAP",
      name: "Analytics & AI Association of the Philippines",
      logo: "/partners/aap-logo.svg",
      placeholder: false,
    },
    {
      acronym: "PCORP",
      name: "Private Sector Jobs and Skills Corporation",
      logo: null,
      placeholder: true,
    },
    {
      acronym: "TPIS",
      name: "Technical Panel for Information Systems",
      logo: null,
      placeholder: true,
    },
    {
      acronym: "IBPAP",
      name: "IT & Business Process Association of the Philippines",
      logo: "/partners/ibpap-logo.svg",
      placeholder: false,
    },
    {
      acronym: "CDITE",
      name: "Council of Deans in IT Education - Region 6",
      logo: null,
      placeholder: true,
    },
    {
      acronym: "TESDA",
      name: "Technical Education and Skills Development Authority",
      logo: "/partners/tesda-logo.svg",
      placeholder: false,
    },
    {
      acronym: "DTI",
      name: "Department of Trade and Industry",
      logo: "/partners/dti-logo.svg",
      placeholder: false,
    },
    {
      acronym: "DICT",
      name: "Department of Information and Communications Technology",
      logo: "/partners/dict-logo.svg",
      placeholder: false,
    },
    {
      acronym: "Bagong Pilipinas",
      name: "Bagong Pilipinas",
      logo: "/partners/bagong-pilipinas-logo.svg",
      placeholder: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-center mb-12">
        In Coordination With
      </h3>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="!overflow-visible"
        >
          {partners.map((partner, index) => (
            <SwiperSlide
              key={index}
              className="!w-72 !h-auto transition-all duration-300 ease-in-out [&.swiper-slide-active]:scale-110 [&:not(.swiper-slide-active)]:scale-90 [&:not(.swiper-slide-active)]:opacity-60 [&:not(.swiper-slide-active)]:grayscale [&.swiper-slide-active]:grayscale-0 [&.swiper-slide-active]:z-10"
            >
              <div
                className="flex flex-col items-center justify-between p-6 w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all relative overflow-hidden min-h-[12rem] shadow-lg"
                title={partner.name}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.acronym} Logo`}
                      className="h-20 w-auto max-w-[90%] object-contain transition-all duration-300"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-slate-300">
                        {partner.acronym}
                      </span>
                    </div>
                  )}
                </div>

                <div className="w-full text-center mt-auto">
                  <span className="text-sm font-bold text-white uppercase tracking-wider block mb-1">
                    {partner.acronym}
                  </span>
                  <span className="text-[11px] text-slate-400 leading-tight block line-clamp-2 min-h-[2.5em]">
                    {partner.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselEffect;
