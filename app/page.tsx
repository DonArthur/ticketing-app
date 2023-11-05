import TicketCard from "./(components)/TicketCard"

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="p-5">
      <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard