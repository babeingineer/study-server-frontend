import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const LogPage = () => {
    const { id } = useParams();
    const [screenshotUrls, setScreenshotUrls] = useState([]);
    const [logUrl, setLogUrl] = useState("");
    const fetchLogs = async () => {
        const {logUrl, screenUrls} = (await axios.get(`${backendUrl}/logs?id=${id}`)).data;
        setLogUrl(logUrl);
        setScreenshotUrls(screenUrls);
    }
    useEffect(() => {
        fetchLogs();
    }, [])
    return <>
        <div className="w-full h-full flex items-center justify-center relative">
            <div className="flex flex-col items-center gap-5">
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