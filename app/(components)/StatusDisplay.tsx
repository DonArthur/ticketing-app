const StatusDisplay = (status: any) => {
    return (
        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-800 bg-green-200 uppercase">
            {status.status}
        </span>
    )
}

export default StatusDisplay