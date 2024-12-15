import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyDonations = () => {
    const { myDonate } = useContext(AuthContext);
    console.log(myDonate);

    return (
        <div className="min-h-[556px] bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    My Donations ({myDonate.length})
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myDonate.map((donation) => (
                        <div
                            key={donation._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={donation.image}
                                alt={donation.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800">
                                    {donation.title}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {donation.description.slice(0, 100)}...
                                </p>
                                <p className="text-gray-600 mt-2">
                                    <strong>Organizer:</strong> {donation.name}
                                </p>
                                <p className="text-gray-600 mt-1">
                                    <strong>Email:</strong> {donation.email}
                                </p>
                                <p className="text-gray-600 mt-1">
                                    <strong>Deadline:</strong>{" "}
                                    {new Date(donation.deadline).toLocaleDateString()}
                                </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyDonations;
