
import About from "./About/About";
import Campaign from "./CampaignHome/CampaignHome";
import Category from "./Category/Category";
import News from "./News/News";
import Success from "./Success/Success";
import Partners from "./Partners/Partners";
import Animation from "./Animation/Animation";
import Header from "./Header/Header";

const Home = () => {
   
    return (
      <div >
        <Header></Header>
        <div className="max-w-7xl mx-auto">
        <About></About>
        <Campaign></Campaign>
        <Category></Category>
        <Animation></Animation>
        <Success></Success>
        <News></News>
        <Partners></Partners>
        </div>
       
      </div>
    );
   

};

export default Home;
