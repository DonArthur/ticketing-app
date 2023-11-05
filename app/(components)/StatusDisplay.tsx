const StatusDisplay = (status: any) => {
    return (
        <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${status.status.indexOf('not') > -1 ? 'text-white' : status.status.indexOf('done') > -1 ? 'text-gray-800' : 'text-yellow-100'} ${status.status.indexOf('not') > -1 ? 'bg-gray-500' : status.status.indexOf('done') > -1 ? 'bg-green-200' : 'bg-blue-900'} uppercase`}>
            {status.status}
        </span>
    )
}

export default StatusDisplay