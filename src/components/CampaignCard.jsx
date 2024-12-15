import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const CampaignCard = ({campaign}) => {
    const {user} = useContext(AuthContext)
    const {_id, image, title, description}= campaign;

    // Function to shorten the description
    const shortenDescription = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };
    return (
        <div className="card shadow-md bg-white">
            <img className='h-[230px] w-[300px] mx-auto' src={image} alt="Campaign" />
          <div className="card-body">
            <h3 className="text-xl font-bold text-gray-700">{title}</h3>
            <p className='text-gray-500'>{shortenDescription(description, 85)}<Link to={user?`/cardDetails/${_id}`:'/login'} className='text-blue-600'>see more</Link></p>
            <Link to={user?`/cardDetails/${_id}`:'/login'} className="btn btn-warning mt-4">{user ? "View Details" : "Login to View"}</Link>
          </div>
        </div> 
    );
};

export default CampaignCard;