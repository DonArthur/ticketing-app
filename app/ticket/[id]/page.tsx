import TicketForm from "@/app/(components)/TicketForm"

type Props = {
    params: {
        id: number,
    }
}

const Ticket = ({ params }: Props) => {
    return (
        <TicketForm />
    )
}

export default Ticket