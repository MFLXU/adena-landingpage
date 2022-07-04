import trialImg from '../Assets/trial-image.png'
function Trial(){
    return(
        <section className="py-20">
            <div className="container">
                <div className="trial__con">
                    <div className="trial">
                        <img src={trialImg} alt=""/>
                        <div className="trial__text">
                            <p className="font-inter">TRIAL</p>
                            <p className="font-jap">まずは7dayトライアルサンプルでお試し!</p>
                            <p className="font-jap">トライアルサンプル</p>
                            <p className="font-jap">￥980 <span>(税込)</span></p>
                            <button className="btn-ghost mt-4">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export  default Trial