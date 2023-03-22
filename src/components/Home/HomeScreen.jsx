import Introduction from "./Introduction";
import Slider from "./Slider";
import Org from "./Org";
import Partner from "./Partner";
import Sponsor from "./Sponsor";

const HomeScreen = () => {
    return (
        <div>
            <Slider />
            <Introduction />
            <Org />
            <Sponsor />
            <Partner />
        </div>
    );
};

export default HomeScreen;
