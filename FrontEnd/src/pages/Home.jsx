import Banner from "../components/Banner";
import Header from "../components/Header";
import Information from "../components/Information";
import InformationDecision from "../components/InformationDesicion";
import Modules from "../components/modules";


export default function Home (){
    return (
        <div className="font-sans">
            <Header/>
            <Banner/>
            <Information/>
            <InformationDecision/>
            <Modules/>
            
        </div>
    )
}