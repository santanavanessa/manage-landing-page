import AvatarAnisha from "../assets/avatar-anisha.png";
import AvatarAli from "../assets/avatar-ali.png";
import AvatarRichard from "../assets/avatar-richard.png";
import AvatarShanai from "../assets/avatar-shanai.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
    
    return (
        
        <section className="carousel padding-block-700  text-center">

            <h2 className="fs-secondary-heading fw-bold">What they’ve said</h2>
            {/* Carousel here */}
            <Swiper 
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    2560: {
                        slidesPerView: 4,
                    }
                }}
                spaceBetween={30}
                pagination={ {clickable: true} }
                modules={[Pagination]}

                className="slider" aria-label="Testimonials">
                <SwiperSlide>
                    <img src={AvatarAnisha} alt="" />
                    <div className="slider-content flow">
                    <h3>Anisha Li</h3>
                    <p data-width="wide">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={AvatarAli} alt="" />
                    <div className="slider-content flow">
                    <h3>Ali Bravo</h3>
                    <p data-width="wide">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                    </div>
                    
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={AvatarRichard} alt="" />
                    <div className="slider-content flow">
                    <h3>Richard Watts</h3>
                    <p data-width="wide">“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={AvatarShanai} alt="" />
                    <div className="slider-content flow">
                    <h3>Shanai Gough</h3>
                    <p data-width="wide">“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p> </div>               
                </SwiperSlide>
            </Swiper>
            <button className="button">Get Started</button>


        </section>
    )
}
