import React, {useEffect, useState} from 'react';
import fetchProfile from "./profiles";

export const ProfileContext = React.createContext(undefined);

const useMyProfileSubscription = (id) => {
    const [profile, setProfile] = useState();
    useEffect(() => {
        fetchProfile(id).then(profile => setProfile(profile));
    }, []);

    return profile;
};

const ProfileProvider = (
    { children, id }
) => {
    const profile = useMyProfileSubscription(id);

    return (
        <ProfileContext.Provider value={profile}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
