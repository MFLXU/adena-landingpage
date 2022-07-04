import prodImg1 from '../Assets/product-1.png'
import prodImg2 from '../Assets/product-2.png'
function Products(){
    return(
        <section>
            <div className="container">

                <div className="products__con">
                    <h3 className="section-title font-ser">Products</h3>
                    <div>

                        <div className="product__con">
                            <img src={prodImg1} alt=""/>
                            <div className="product-text">
                                <p className="product-title font-jap">モイスチャライズセラム</p>
                                <p className="product-bio font-jap">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
                                <button className="btn font-inter">View More</button>
                            </div>
                        </div>

                        <div className="product__con">
                            <img src={prodImg2} alt=""/>
                            <div className="product-text">
                                <p className="product-title font-jap">エイジングケアセラム</p>
                                <p className="product-bio font-jap">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
                                <button className="btn font-inter">View More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export  default  Products