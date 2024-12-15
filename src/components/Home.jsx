import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Success from './Success';
import { useLoaderData } from "react-router-dom";
import CampaignCard from './CampaignCard';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import ThemeController from '../ThemeController';

const Home = () => {

    const allCampaigns = useLoaderData();

    // type writer
    const handleType = (count) => {
        // access word count number
        console.log(count)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className='lg:w-[85%] mx-auto'>
            <Banner></Banner>
            <div className='sm:hidden flex justify-center mt-3'>
                <ThemeController></ThemeController>
            </div>
            <div className="py-10">
                <div className="container mx-auto">
                <Fade cascade>
                <h2 className="text-3xl font-bold text-center mb-6 px-2">On Going Campaigns Throughout the
                        <span className='ml-3' style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Country', 'Sub-Continent', 'Continent', 'Worldwide']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h2>
                </Fade>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-3">
                        {
                            allCampaigns.slice(0, 4).map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                        }
                    </div>
                </div>
            </div>
            <AboutUs></AboutUs>
            <Success></Success>
        </div>
    );
};

export default Home;