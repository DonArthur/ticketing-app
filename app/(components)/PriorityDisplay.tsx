import { faFire } from '@fortawesome/free-solid-svg-icons/faFire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriorityDisplay = (priority: any) => {
    const renderIcon = () => {
        const components = []
        for (let i = 0; i < priority.priority; i++) {
            components.push(<FontAwesomeIcon key={i} icon={faFire} className='text-red-400' />)
        }
        return components
    }
    return (
        <div className='flex justify-start align-baseline'>
            {renderIcon()}
        </div>
    )
}

export default PriorityDisplay