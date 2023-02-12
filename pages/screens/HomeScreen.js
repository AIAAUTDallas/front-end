import Introduction from "../components/HomeScreen/Introduction";
import Slider from "../components/HomeScreen/Slider";
import Org from "../components/HomeScreen/Org";
import Partner from "../components/HomeScreen/Partner";
import Sponsor from "../components/HomeScreen/Sponsor";

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
