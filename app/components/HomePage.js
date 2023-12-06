import CompanyOverview from "./HomePage/CompanyOverview";
import Hero from "./HomePage/Hero";
import Misi from "./HomePage/Misi";
import Testimonial from "./HomePage/Testimonial";
import PanelLayanan from "./ProductAndSevice/PanelPelayanan";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Misi />
      <PanelLayanan />
      <Testimonial />
    </>
  );
};

export default HomePage;
