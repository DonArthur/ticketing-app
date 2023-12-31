import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

type Props = {}

const TicketCard = ({ ticket }: any) => {
    const date = new Date(ticket.createdAt)
    const createdTime = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return (
        <div className="flex flex-col bg-card hover:bg-card-hover hover:cursor-pointer rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay priority={ticket.priority} />
                <div className="ml-auto">
                    <DeleteBlock id={ticket._id} />
                </div>
            </div>
            <h4>{ticket.title}</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">{ticket.description}</p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">{createdTime}</p>
                    <ProgressDisplay progress={ticket.progress} />
                </div>
                <div className="ml-auto flex items-end">
                    <StatusDisplay status={ticket.status} />
                </div>
            </div>
        </div>
    )
}

export default TicketCard