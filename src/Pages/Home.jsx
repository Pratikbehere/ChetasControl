import React from "react";
import BannerCarousel from "../Components/Home/BannerCarousel";
import StatsSection from "../Components/Home/StatsSection";
import ClientsSection from "../Components/Home/ClientsSection";
import Test from "../Components/Home/Test"
const Home = () => {
    return (
        <div className="w-full">

            {/* <BannerCarousel /> */}
            <Test/>
            <StatsSection />
            <ClientsSection/>

            <div className="mt-5">

            </div>
        </div>
    );
};

export default Home;
