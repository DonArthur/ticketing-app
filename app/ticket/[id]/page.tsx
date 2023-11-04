type Props = {
    params: {
        id: number,
    }
}

const Ticket = ({ params }: Props) => {
    return (
        <div>Ticket {params.id}</div>
    )
}

export default Ticket