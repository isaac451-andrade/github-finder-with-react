import { AiOutlineLoading3Quarters } from 'react-icons/ai';


function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <AiOutlineLoading3Quarters className="spinIcon" />
        </div>
    )
}

export default Loading