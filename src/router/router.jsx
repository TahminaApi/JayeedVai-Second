import { createBrowserRouter } from "react-router-dom"
import Layout from "../shared/Layout/Layout"
import EnterSeassion from "../components/EnterSeassion/EnterSeassion"
import FirstPage from "../components/FirstPage/FirstPage"
import Transcription from "../components/Transcription/Transcription"
import Session from "../components/Session/Session"
import MobileFirestPage from "../components/MobileFirestPage/MobileFirestPage"
import MobileTranscription from "../components/MobileTranscription/MobileTranscription"
import MobileSession from "../components/MobileSession/MobileSession"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <EnterSeassion />
            },
            {
                path: "/firstPage",
                element: <FirstPage/>
            },
            {
                path: "/transcription",
                element: <Transcription/>
            },
            {
                path: "/session",
                element: <Session/>
            },
            {
                path: "/mobilefirstpage",
                element: <MobileFirestPage/>
            },
            {
                path: "/mobiletranscription",
                element: <MobileTranscription/>
            },
            {
                path: "/mobilesession",
                element: <MobileSession/>
            },
        ]
    }
])

export default router