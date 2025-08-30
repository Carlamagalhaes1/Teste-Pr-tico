import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Header from "../components/Header";
import Information from "../components/Information";
import InformationDecision from "../components/InformationDesicion";
import Investment from "../components/Investment";
import Modules from "../components/modules";


export default function Home (){
    return (
        <div className="font-sans">
            <Header/>
            <Banner/>
            <Information/>
            <InformationDecision/>
            <Modules/>
            <Courses/>
            <Investment/>
            
        </div>
    )
}