import { faFire } from '@fortawesome/free-solid-svg-icons/faFire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

const PriorityDisplay = (props: Props) => {
    return (
        <div className='flex justify-start align-baseline'>
            <FontAwesomeIcon icon={faFire} className='text-red-400' />
            <FontAwesomeIcon icon={faFire} className='text-red-400' />
            <FontAwesomeIcon icon={faFire} className='text-red-400' />
            <FontAwesomeIcon icon={faFire} className='text-red-400' />
            <FontAwesomeIcon icon={faFire} className='text-red-400' />
        </div>
    )
}

export default PriorityDisplay