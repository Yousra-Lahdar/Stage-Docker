import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MovieItem from './MovieItem';
import type {MovieItem as MovieType} from "../@types/movieItem"


const MovieCarousel = ({movies}: {movies:MovieType[]}) => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <MovieItem movie={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MovieCarousel;