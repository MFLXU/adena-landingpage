import heroImg from '../Assets/hero-photo.svg'
function Hero(){
    return(
        <section>
            <div className="container px-0">
                <div className="hero__con py-4">
                    <div className="hero__text">
                        <div className="text-con">
                            <div>
                                <p className="font-inter new-tag">new</p>
                                <p className="font-ser uppercase">night repair serum</p>
                            </div>
                            <h1 className="font-ser">
                                Holistic
                                & Beauty
                            </h1>
                            <p className="font-jap text-[#666666]">
                                ココロからも、カラダからもより自然で美しく
                            </p>
                        </div>
                    </div>
                    <div className="hero__img">
                        <img src={heroImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export  default  Hero