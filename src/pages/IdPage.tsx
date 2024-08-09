import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const IdPage = () => {
    const [ids, setIds] = useState<string[]>([]);
    useEffect(() => {
        axios.get(`${backendUrl}/ids`).then((data) => {
            console.log(data);
            setIds(data.data);
        });
    }, []);
     return <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        {
            ids.map((id, index) => {
                return <div className="text-blue-600 underline text-3xl"><Link to={`/log/${id}`} >{id}</Link></div>
            })
        }
    </div>
};

export default IdPage;