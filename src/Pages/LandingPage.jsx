import { Notice, Navbar, Hero, Concept, Products, Trial, Footer } from  '../Components/index'

function LandingPage(){
    return(
        <div>
            <Notice />
            <Navbar />
            <Hero />
            <Concept />
            <Products />
            <Trial />
            <Footer />
            <div className="bg-black text-white" >
                <div className="container font-inter py-2 text-sm flex justify-center items-center">
                    <p>made by <a href="https://github.com/MFLXU" target="_blank" className="underline">Louaye Kazar</a></p>
                </div>
            </div>
        </div>
    )
}
export default LandingPage