import { faFire } from '@fortawesome/free-solid-svg-icons/faFire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriorityDisplay = (priority: any) => {
    const renderIcon = () => {
        const components = []
        for (let i = 0; i < 5; i++) {
            components.push(<FontAwesomeIcon key={i} icon={faFire} className={`pr-1 ${i < priority.priority ? 'text-red-400' : 'text-slate-400'}`} />)
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