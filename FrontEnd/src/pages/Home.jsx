import Banner from "../components/Banner";
import Courses from "../components/Courses";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Information from "../components/Information";
import InformationDecision from "../components/InformationDesicion";
import Investment from "../components/Investment";
import Modules from "../components/Modules";


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
            <Footer/>
            
        </div>
    )
}