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
            <div className="text-3xl">Send Invite to</div>
            <input value={email} onClick={(ev) => setEmail(ev.target.value)} className="text-2xl rounded-xl outline-none border border-gray-200 py-1 px-3 text-gray-500 text-center" placeholder="Input email to send invite." />
            <button onClick={() => invite()} className="p-2 bg-blue-500 rounded-lg text-white">Send Invite</button>
        </div>
        <div className="right-10 bottom-10 absolute">
            <Link to="/log">Go to Log page</Link>
        </div>
    </div>
};

export default InvitePage;