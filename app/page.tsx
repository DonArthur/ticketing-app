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

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((category: any, index) => (
          <div key={index} className="mb-4">
            <h2>{category}</h2>
            <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4">
              {tickets.filter((ticket: any) => ticket.category === category).map((filteredTicket: any, _index: string) => (
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