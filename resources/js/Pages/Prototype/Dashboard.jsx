import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

const Dashboard = () => {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <Authenticated>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {/* Movie Thumbnail */}
                        {[1, 2, 3]?.map((value) => (
                            <FeaturedMovie
                                key={value}
                                thumbnail={`/images/featured-${value}.png`}
                                category="Action • Horror"
                                slug="the-batman-in-love"
                                name={`The Batman in Love`}
                                rating={value}
                            />
                        ))}
                    </Flickity>
                </div>

                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity options={flickityOptions}>
                        {[1, 2, 3, 4, 5]?.map((value) => (
                            <MovieCard
                                key={value}
                                slug="the-batman-in-love"
                                name={`The Batman in Love`}
                                category="Horror • Love"
                                thumbnail={`/images/browse-${value}.png`}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
};

export default Dashboard;
