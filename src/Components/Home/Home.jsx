import Animation from "./Animation/Animation";
import About from "./About/About";
import Campaign from "./Campaign/Campaign";
import Category from "./Category/Category";
import News from "./News/News";
import Success from "./Success/Success";
import Partners from "./Partners/Partners";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <About></About>
            <Campaign></Campaign>
            <Category></Category>
            <Animation></Animation>
            <Success></Success>
            <News></News>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;