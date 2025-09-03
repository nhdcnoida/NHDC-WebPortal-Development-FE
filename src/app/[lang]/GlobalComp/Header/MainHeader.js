import Header from "./Header";
import { ssrFetch } from "@/lib/ssrFetch";
const MainHeader =  async({navigation,AppSettings}) => {
  //  const { navigation } = await ssrFetch(['navigation']);

  //  // If your response has { data: { ... } } structure
  // const settings = AppSettings?.data?.[0] || AppSettings;


  // console.log(settings)
    return (
      <Header navigation={navigation} AppSettings={AppSettings}/>
    );
}

export default MainHeader;