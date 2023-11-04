type Props = {}

const ProgressDisplay = (props: Props) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-700 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
    )
}

export default ProgressDisplay