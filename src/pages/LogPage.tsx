import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const LogPage = () => {
    const [screenshotUrls, setScreenshotUrls] = useState([]);
    const [logUrl, setLogUrl] = useState("");
    const [id, setId] = useState("");
    const fetchLogs = async () => {
        const {logUrl, screenUrls} = (await axios.get(`${backendUrl}/logs?id=${id}`)).data;
        setLogUrl(logUrl);
        setScreenshotUrls(screenUrls);
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
                            screenshotUrls.map(d => {
                                return <a href={d} className="rounded border border-gray-200 p-2" target="_blank">
                                    {d.split("/")[d.split("/").length - 1]}
                                </a>
                            })
                        }
                    </div>
                    <div className="flex items-center justify-center text-blue-600">
                        <a href={logUrl} target="_blank">Log file</a>
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