import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

type Props = {}

const TicketCard = (props: Props) => {
    return (
        <div className="flex flex-col hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum optio aperiam voluptatum? Voluptatem natus vel, veritatis inventore enim iusto quidem, rem commodi, nam numquam est possimus culpa magni in.</p>
            <ProgressDisplay />
            <StatusDisplay />
        </div>
    )
}

export default TicketCard