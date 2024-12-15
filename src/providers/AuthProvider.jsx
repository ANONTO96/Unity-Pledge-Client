import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // toast
    const successLogin = () => toast.success(' Successfully logged In');
    const successReg = () => toast.success('Congratulations Successfully Registered Your Account');
    const successLogOut = () => toast.success(' Successfully logged Out');
    const errorToastR = () => toast.error("Oops..Already Registered");
    const errorToastL = () => toast.error("Oops..Wrong Password or Email");

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    // Donation list
    const [myDonate, setMyDonate] = useState([]);

    const handleDonate = (id) => {
        fetch('https://unity-pledge-server.vercel.app/addCampaign')
            .then((res) => res.json())
            .then((data) => {
                const newDonateList = data.filter((e) => e._id === id._id);
                if (newDonateList.length > 0) {
                    Swal.fire({
                        title: "Thank you for your generous donation",
                        text: "Successfully Added Your Support to Dashboard",
                        icon: "success",
                    });

                    // Correct state update
                    setMyDonate((prevDonations) => [...prevDonations, ...newDonateList]);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    console.log(myDonate)

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        successReg,
        successLogin,
        successLogOut,
        errorToastR,
        errorToastL,
        signOutUser,
        handleDonate,
        myDonate,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;