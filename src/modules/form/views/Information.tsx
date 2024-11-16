import { registerBasicInfoRoute } from "../../../root";
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Information() {

    const navigate = useNavigate();

    const imageRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLTextAreaElement>(null);

    const [userId, setUserId] = useState<String | null>(null)
    const [imageName, setImageName] = useState("Choose an image");

    const addImage = () => {
        setImageName(imageRef.current!.files![0].name)
    }

    // useEffect(() => {
    //     let savedId = sessionStorage.getItem("_user_id");

    //     if (savedId == null)
    //         navigate("/register")
    //     else
    //         setUserId(savedId); 
    // }, [])

    const validate = () => {
        const biography = bioRef.current!.value;
        const profileImage = imageRef.current!.files![0];

        if (biography !== "" && profileImage !== null) {
            
            let reader = new FileReader();
            
            reader.onload = () => {
                Axios.post(registerBasicInfoRoute, {
                    userId: userId,
                    profileImage: reader.result,
                    bio: biography
                })
                .then((response) => {
                    if (response.data.userId) {
                        navigate("/register/password")
                    }
                })
            }
            reader.readAsDataURL(profileImage)

        } else {
            alert("Please fill out this form, or skip it")
        }
    }

    return (
        <form action="#">
            <div className="title-bar">
                <div>
                    <h1>Basic Information</h1>
                </div>
                <p>Don't worry about filling these out yet, you can do that later in your profile.</p>
            </div>

            <div className="input-area">
                <p className="profile_picture_label">Profile Picture</p>
                <label htmlFor="profile_picture">{imageName}</label>
                <input onChange={addImage} ref={imageRef} type="file" name="profile_picture" id="profile_picture" />
            </div>

            <div className="input-area">
                <label htmlFor="bio">Biography (bio)</label>
                <textarea ref={bioRef} name="bio" id="bio"></textarea>
            </div>

            <button type="button" onClick={validate}>Proceed</button>
            <p>Not ready yet? <Link to="/register/password">Skip this step</Link></p>
        </form>
    )
}