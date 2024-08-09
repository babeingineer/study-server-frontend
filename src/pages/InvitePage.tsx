import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const InvitePage = () => {
    const [email, setEmail] = useState("");
    const invite = () => {
        axios.get(`${backendUrl}/invite`, {params: { email }})
    }
    return <div className="w-full h-full flex items-center justify-center relative">
        <div className="flex flex-col items-center gap-5">
            <a href={backendUrl + "/launch"} className="text-blue-500 text-3xl underline">Participate to the study</a>
        </div>
        <div className="right-10 bottom-10 absolute">
            <Link to="/ids">Go to Log page</Link>
        </div>
    </div>
};

export default InvitePage;