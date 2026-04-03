import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PhotoSlider() {
    const photo_gallery_paths = [
        "at_table.JPG",
        "ay2.jpg",
        "ceo.JPG",
        "group.JPG",
        "josetalk1.JPG",
        "kccYouth1.JPG",
        "kccyouth2.JPG",
        "ksl.JPG",
        "lsa.jpg",
        "pe.JPG",
        "gbvart2.JPG",
        "photo1.JPG",
        "showingart.JPG",
        "taraji2.JPG",
        "tarajipaints.JPG",
        "tarajiteam.png",
        "tl2.jpg"
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
    }

    return (
        <>
            <div className="w-full mx-auto py-10">
                <Slider {...settings}>
                    {photo_gallery_paths.map((photo) => {
                        return (
                            <div className="md:h-fit border-8 border-gray-200 rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={`./public/gallery/${photo}`}
                                    alt="Taraji Learning hub "
                                    className="w-full h-full"
                                />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}