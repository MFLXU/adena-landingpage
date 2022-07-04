import conceptImg from '../Assets/concept-photo.png'

function Concept(){
    return(
        <section>
            <div className="container">
                <div className="concept__con">
                    <h3 className="section-title font-ser">Concepts</h3>
                    <div>
                        <div className="concept__img">
                            <img src={conceptImg} alt=""/>
                        </div>
                        <div className="text-cons-con px-4">
                            <div className="concept__text">
                                <p className="font-jap">
                                    オーガニック原料を中心とした製品で、肌本来の力を取り戻すお手伝いをします。
                                </p>
                                <p className="font-jap">
                                    この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                                </p>
                                <button className="btn font-inter">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Concept