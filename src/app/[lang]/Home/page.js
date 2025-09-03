
import Banner from "./components/Banner";
import CircularBox from "./components/CircularBox";
import FaqComponent from "./components/FaqComponent";
import Gallarycomp from "./components/Gallary";
import HandloomDashboard from "./components/HandloomDashboard";
import InfoCardList from "./components/InfoCardList";
import QuickLinks from "./components/QuickLinks";
import TabbedCards from "./components/TabbedCards";
import TestimonialsSection from "./components/Testimoniol";
import Vision from "./components/Vision";
import WeaversMapSection from "./components/WeaversMapSection";
import { ssrFetch } from "@/lib/ssrFetch";
const HomePage = async () => {
      const { Carouselnew,banner,BannerQuickLink,VisionMission,Tender,Form,News,StateMap,CircularCarousel,InfoCard,FAQ,Gallery,Testimonial} = await ssrFetch(['Carouselnew?sort=displayOrder','banner','BannerQuickLink','VisionMission','Tender?sort=-uploadDate','Form?sort=-uploadDate','News?sort=-uploadDate','StateMap','CircularCarousel','InfoCard','FAQ?sort=displayOrder&page=1&limit=5','Gallery','Testimonial']);
//  console.log("Banner", banner);
     // If your response has { data: { ... } } structure
  
  const BannerData = banner?.data?.[0] || banner;
  const BannerQuickLinkData = BannerQuickLink?.data?.[0] || BannerQuickLink;
  const VisionMissionData = VisionMission?.data?.[0] || VisionMission;
  const CircularCarouselData = CircularCarousel?.data?.[0] || CircularCarousel;

  // console.log("CircularCarouselData", CircularCarouselData)


  
  // console.log("Gallery", Carouselnew);
 
    return (
       <div>
        <Banner Carouseldata={Carouselnew} Banner={BannerData} />
        <QuickLinks BannerQuick={BannerQuickLinkData}/>
        <Vision VisionData={VisionMissionData}/>
        <TabbedCards Tender={Tender} Forms={Form} News={News}/>
        <WeaversMapSection StateMap={StateMap}/>
        {/* <HandloomDashboard  Tender={Tender} Forms={Form} News={News}/> */}
          <CircularBox Circular={CircularCarouselData}/>
      
        <InfoCardList InfoCard={InfoCard}/>
        <FaqComponent faqs={FAQ}/>
        <Gallarycomp galleryData={Gallery}/>
        <TestimonialsSection Data={Testimonial}/>
    
      
            
       </div>
    );
}

export default HomePage;