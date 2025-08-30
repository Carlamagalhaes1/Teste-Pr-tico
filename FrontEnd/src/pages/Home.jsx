import Banner from "../components/Banner";
import { Header } from "../components/Header";
import Information from "../components/Information";

export default function Home (){
    return (
        <div className="font-sans">
            <Header/>
            <Banner/>
            <Information/>
        </div>
    )
}