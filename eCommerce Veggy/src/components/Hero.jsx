
export default function Hero() {
    return (
        <div className="relative bg-[url(/hero.png)] sm:min-ph-[25vh] sm:h-[45vh] sm:max-h-[50vh] bg-cover bg-right bg-no-repeat md:h-[100vh]">
            <div className="container py-8 sm:py-0 sm:flex justify-between items-center h-full">
                <div className="flex items-center  h-full">
                   <div>
                   <p className="  uppercase text-primary font-bold">
                        Shop Our Freshest
                    </p>
                    <h2 className="text-primaryDark font-bold text-[24px] sm-text-[30px] md-text-[40px] lg-text-48px] pb-8 leading-tight">
                        Fresh Hand-Picked Vegetabel
                        <br />
                        <span className="text-primary">Everyday</span>
                    </h2>
                    <a className="border-b border-black" href="#">Discover more</a>
                   </div>
                </div>
                <div className="flex items-center h-[75%] md:h-[470px] md:w-[470px]">
<img src="/veg_basket.png" alt="veg_basket" />
                </div>
            </div>

        </div>
    )
}
