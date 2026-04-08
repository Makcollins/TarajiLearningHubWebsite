import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PhotoSlider() {
    const photo_gallery_paths = [
        "https://i.ibb.co/sxRxfJF/tarajiart.jpg",
        "https://i.ibb.co/hJT106sn/at-table.jpg",
        "https://i.ibb.co/tp2dnxqV/ay2.jpg",
        "https://i.ibb.co/zdxzzjj/ceo.jpg",
        "https://i.ibb.co/ch3hfgfX/gbvart2.jpg",
        "https://i.ibb.co/3y89bpbG/group.jpg",
        "https://i.ibb.co/9FvqsJ0/josetalk1.jpg",
        "https://i.ibb.co/pBYkVxN6/kcc-Youth1.jpg",
        "https://i.ibb.co/9Hwd8zBD/kccyouth2.jpg",
        "https://i.ibb.co/cXRVZC3J/ksl.jpg",
        "https://i.ibb.co/xS0JmJ5z/lsa.jpg",
        "https://i.ibb.co/HTgp3BjL/pe.jpg",
        "https://i.ibb.co/W429KvDG/photo1.jpg",
        "https://i.ibb.co/k28csjcK/showingart.jpg",
        "https://i.ibb.co/Fb063R8p/taraji2.jpg",
        "https://i.ibb.co/fdXTkFvk/tarajipaints.jpg",
        "https://i.ibb.co/K8VtpQ4/tl2.jpg",
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
                                <ImageWithFallback
                                    src={`${photo}`}
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
