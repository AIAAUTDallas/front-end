import Introduction from "./Introduction";
import Slider from "./Slider";
import Project from "./Project";
import Partner from "./Partner";
import Sponsor from "./Sponsor";

const HomeScreen = () => {
    return (
        <div>
            <Slider />
            <Introduction />
            <Project />
            <Sponsor />
            <Partner />
        </div>
    );
};

export default HomeScreen;
