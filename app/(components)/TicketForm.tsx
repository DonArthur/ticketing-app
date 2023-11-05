'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type TicketType = {
    title: string,
    description: string,
    priority: number,
    progress: number,
    status: string,
    category: string,
}

const TicketForm = (props: any) => {
    const router = useRouter()
    const defaultTicketData = {
        title: '',
        description: '',
        priority: 1,
        progress: 0,
        status: 'not started',
        category: 'hardware'
    }

    const [formData, setFormData] = useState(defaultTicketData)

    const handleChange = (value: string, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await fetch('../api/Tickets', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": 'application/json',
            }
        })

        if (!res.ok) {
            throw new Error('Failed to create ticket')
        }

        router.refresh()
        router.push('/')
    }

    return (
        <div className='flex justify-center'>
            <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={(e) => handleSubmit(e)}>
                <h3>Create New Ticket</h3>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => handleChange(e.target.value, e.target.name)}
                    required
                    value={formData.title} />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    onChange={(e) => handleChange(e.target.value, e.target.name)}
                    required
                    value={formData.description}
                    rows={5}
                />
                <label htmlFor="category">Category</label>
                <select name="category" id="category" value={formData.category} onChange={(e) => handleChange(e.target.value, e.target.name)}>
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="other">Other</option>
                </select>
                <label>Priority</label>
                <div>
                    <input
                        type="radio"
                        name="priority"
                        id="priority-1"
                        onChange={(e) => handleChange(e.target.value, e.target.name)}
                        value={1}
                        checked={formData.priority == 1}
                    />
                    <label htmlFor="priority-1">1</label>
                    <input
                        type="radio"
                        name="priority"
                        id="priority-2"
                        onChange={(e) => handleChange(e.target.value, e.target.name)}
                        value={2}
                        checked={formData.priority == 2}
                    />
                    <label htmlFor="priority-2">2</label>
                    <input
                        type="radio"
                        name="priority"
                        id="priority-3"
                        onChange={(e) => handleChange(e.target.value, e.target.name)}
                        value={3}
                        checked={formData.priority == 3}
                    />
                    <label htmlFor="priority-3">3</label>
                    <input
                        type="radio"
                        name="priority"
                        id="priority-4"
                        onChange={(e) => handleChange(e.target.value, e.target.name)}
                        value={4}
                        checked={formData.priority == 4}
                    />
                    <label htmlFor="priority-4">4</label>
                    <input
                        type="radio"
                        name="priority"
                        id="priority-5"
                        onChange={(e) => handleChange(e.target.value, e.target.name)}
                        value={5}
                        checked={formData.priority == 5}
                    />
                    <label htmlFor="priority-5">5</label>
                </div>
                <label>Progress</label>
                <input
                    type="range"
                    name="progress"
                    min={0}
                    max={100}
                    step={1}
                    id="progress"
                    value={formData.progress}
                    onChange={(e) => handleChange(e.target.value, e.target.name)} />
                <label>Status</label>
                <select name="status" id="status" value={formData.status} onChange={(e) => handleChange(e.target.value, e.target.name)}>
                    <option value="not started">Not started</option>
                    <option value="on progress">On progress</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" value="Create new ticket" className='btn' />
            </form>
        </div>
    )
}

export default TicketForm