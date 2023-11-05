import TicketCard from "./(components)/TicketCard"

type Props = {}

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store'
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const Dashboard = async (props: Props) => {
  const { tickets } = await getTickets()

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }: any) => category)),
  ]

  const uniqueStatuses = [
    ...new Set(tickets?.map(({ status }: any) => status)),
  ]

  return (
    <div className="p-5">
      <div className={`grid grid-cols-${uniqueStatuses.length}`}>
        {tickets && uniqueStatuses?.map((status: any, index) => (
          <div key={index} className="mb-4">
            <h3>{status}</h3>
            <div className="flex flex-col">
              {/* <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4"> */}
              {tickets.filter((ticket: any) => ticket.status === status).map((filteredTicket: any, _index: string) => (
                <TicketCard id={_index} key={_index} ticket={filteredTicket} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard