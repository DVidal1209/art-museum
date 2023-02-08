import React from 'react'
import './profile.css'
import Auth from '../../../utils/auth'
import { GET_ME, MY_MUSEUM } from '../../../utils/queries'
import { useQuery, useMutation } from '@apollo/client'
import { Form, Button, Alert } from 'react-bootstrap';
import { NEW_MUSEUM } from '../../../utils/mutations'
import { useState } from 'react'

export default function Profile() {

    const [newMuseum, { error }] = useMutation(NEW_MUSEUM)
    const { loading, data } = useQuery(GET_ME)

    const museumResult = useQuery(MY_MUSEUM);

    const museumDataLoading = museumResult.loading;
    const museumData = museumResult.data?.myMuseum || {};

    const userData = data?.me || {};

    const [museumFormData, setMuseumFormData] = useState({ museumName: '', description: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMuseumFormData({ ...museumFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(museumFormData)
            const data = await newMuseum({
                variables: { museumName: museumFormData.museumName, description: museumFormData.description }
            });

            const { token, user } = data.data.newMuseum;
            console.log(data.data.newMuseum);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setMuseumFormData({
            description: '',
            museumName: '',
        });
    }

    return (
        <>
            {loading || museumDataLoading ? (
                <h1>Loading</h1>
            ) : (
                <>

                    {console.log("Museum 2nd try:", userData.museum)}

                    <div className="card">
                        {console.log(userData)}
                        <img className='profile-image' src={userData.photo} alt="John"></img>
                        <h1>{userData.username}</h1>
                        <p className="title">{userData.title}</p>
                        <p>{userData.description}</p>
                    </div>
                    <div className="museum-display">
                        {!userData.museum ? (
                            <>
                                <h1>No Museums found</h1>
                            </>
                        ) : (
                            <>
                                <h1 className="center">{museumData.museumName}</h1>
                                {
                                    museumData.exhibits?.map((exhibit) => {
                                        return (
                                            <div className='feature-display m-b-m'>
                                                <>
                                                    <div className='display-info'>
                                                        <h2 className='display-title'>{exhibit.exhibitName}</h2>
                                                        <h4 className='display-description'>{exhibit.body}</h4>
                                                    </div>
                                                    <div className='museumimage' alt={exhibit.exhibitName}>
                                                        <img src={exhibit.photo}>
                                                        </img>
                                                    </div>
                                                </>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )}
                    </div>
                </>
            )}
        </>


    )

}
