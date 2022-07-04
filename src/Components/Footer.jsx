import logo from '../Assets/logo.svg'
function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer__con border-t border-[#666666] px-4 md:px-0">
                    <div className="grid md:grid-cols-2 md:py-20 py-10 gap-8">
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 font-bold">
                            <div>
                                <p className="font-inter">PRODUCTS</p>
                                <p className="font-jap
                                 text-[#666] hover:text-black cursor-pointer">モイスチャライズセラム</p>
                                <p className="font-jap
                                 text-[#666] hover:text-black cursor-pointer">エイジングケアセラム</p>
                            </div>
                            <div>
                                <p className="font-inter text-[#666] hover:text-black cursor-pointer">ABOUT</p>
                                <p className="font-inter text-[#666] hover:text-black cursor-pointer">SHOP LIST</p>
                                <p className="font-inter text-[#666] hover:text-black cursor-pointer">LOGIN</p>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-between  py-4 gap-8 text-[#666]">
                        <p className="font-inter">@Adéna. All Rights Reserved.</p>
                        <div className="flex gap-8">
                            <p className="font-jap">運営会社</p>
                            <p className="font-jap">特定商取引法に基づく表記</p>
                            <p className="font-jap">お問い合わせ</p>
                            <p className="font-jap">プライバシーポリシー</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default  Footer