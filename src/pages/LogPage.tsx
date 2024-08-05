import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const LogPage = () => {
    const [screenshots, setScreenshots] = useState([]);
    const [id, setId] = useState("");
    const fetchLogs = async () => {
        setScreenshots((await axios.get(`${backendUrl}/screenshots?id=${id}`)).data);
    }
    const inputRef = useRef();
    console.log(backendUrl);
    return <>
        <div className="w-full h-full flex items-center justify-center relative">
            <div className="flex flex-col items-center gap-5">
                <div className="flex gap-3">
                    <div className="text-3xl">ID:</div>
                    <input value={id} className="text-2xl rounded-xl outline-none border border-gray-200 py-1 px-3 text-gray-500 text-center" placeholder="Input Id." onChange={(ev) => {setId(ev.target.value)}} />
                </div>
                <button className="p-2 bg-blue-500 rounded-lg text-white" onClick={() => fetchLogs()}>Get Logs</button>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        {
                            screenshots.map(d => {
                                return <a href={`/${id}/${d}`} className="rounded border border-gray-200 p-2" target="_blank">
                                    {d}
                                </a>
                            })
                        }
                    </div>
                    <div className="flex items-center justify-center text-blue-600">
                        <a href={`/log/${id}`} target="_blank">Log file</a>
                    </div>
                </div>

            </div>
            <div className="right-10 bottom-10 absolute">
                <Link to="/">Go to Invite page</Link>
            </div>
        </div>
    </>
};

export default LogPage;