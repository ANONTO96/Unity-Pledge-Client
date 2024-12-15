import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";

const AllCampaign = () => {
    const allCampaigns = useLoaderData();

    return (
        <div className="py-10">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 px-2">All Campaigns Throughout the Country</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-3">
                {
                    allCampaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                }
            </div>
        </div>
    </div>
    );
};

export default AllCampaign;