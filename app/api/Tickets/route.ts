import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        const body = await req.json()
        const ticketData = body
        await Ticket.create(ticketData)

        return NextResponse.json({ message: 'Created New Ticket' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'Error', error }, { status: 500 })
    }
}