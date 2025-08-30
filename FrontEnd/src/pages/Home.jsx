import Banner from "../components/Banner";
import Header from "../components/Header";
import Information from "../components/Information";
import InformationDecision from "../components/InformationDesicion";


export default function Home (){
    return (
        <div className="font-sans">
            <Header/>
            <Banner/>
            <Information/>
            <InformationDecision/>
            
        </div>
    )
}