import { Segment } from "@mui/icons-material";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
   
} from "react-share";

import {  FacebookIcon,
    EmailIcon,
    LinkedinIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const SocialShare = () => {
    const url = "https://crowd-funding-dc81b.web.app/socialBlog";
    return (
        <div>
            <div>
                <FacebookShareButton
                url={url}
                quota={"hey lets share"}
                hashtag="#Blogs"
                >
                    <FacebookIcon logoFillColor="white" round={true} ></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton
                url={url}
                quota={"hey lets share"}
                hashtag="#Blogs"
                >
                    <WhatsappIcon logoFillColor="white" round={true} ></WhatsappIcon>
                </WhatsappShareButton>
            </div>
            <h1></h1>
        </div>
    );
};

export default SocialShare;