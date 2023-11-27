'use client'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

type Props = {
    id: String
}

const DeleteBlock = (props: Props) => {
    const router = useRouter()
    const handleDelete = async () => {
        const res = await fetch('../api/Tickets/' + props.id, {
            method: 'DELETE',
        })
        if (!res.ok) {
            throw new Error('Feiled to delete')
        }

        router.refresh()
        router.push('/')
    }
    return (
        <FontAwesomeIcon onClick={() => handleDelete()} icon={faX} className='text-red-400 hover:cursor-pointer hover:text-red-200' />
    )
}

export default DeleteBlock