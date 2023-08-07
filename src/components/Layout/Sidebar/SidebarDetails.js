import {BiSolidBriefcase, BiSolidCategory, BiSolidMessageSquareDetail} from 'react-icons/bi'
import {BsCalendarWeekFill, BsFillPeopleFill, BsPersonFill} from 'react-icons/bs'
import {PiGitForkFill, PiMonitorFill} from 'react-icons/pi'
import {HiDocumentText} from 'react-icons/hi'
export const mainsidebar = [
    {
        title:"Dashboard",
        icon:<BiSolidCategory/>,
        link:"/app"
    },
    {
        title:"Message",
        icon:<BiSolidMessageSquareDetail/>,
        link:"/message"
    },
    {
        title:"Calendar",
        icon:<BsCalendarWeekFill/>,
        link:"/calendar"
    }
]

export const recruitment = [
    {
        title:"Jobs",
        icon:<BiSolidBriefcase/>,
        link:"/job"
    },
    {
        title:"Candidates",
        icon:<BsFillPeopleFill/>,
        link:"/"
    },
    {
        title:"Referrals",
        icon:<PiGitForkFill/>,
        link:"/referral"
    },
    {
        title:"Career Site",
        icon:<PiMonitorFill/>,
        link:"/career"
    }
]
export const organisation = [
    {
        title:"Employees",
        icon:<BsPersonFill/>,
        link:"/employee"
    },
    {
        title:"Documents",
        icon:<BsFillPeopleFill/>,
        link:"/document"
    },
    {
        title:"Reports",
        icon:<HiDocumentText/>,
        link:"/report"
    }
]