import { useState, Fragment } from 'react';
import { AddViewOrDownload } from '../../hooks/api/KnowledgeMaterials';
import ModalVideo from 'react-modal-video'


const VideoPreview = ({ videoUrl, materialID, handleMaterialPrefetch }) => {
    const [isOpen, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
        handleMaterialPrefetch(true)
        
    };
    
    const handleOpen = async () => {
        setOpen(true)
        const result = await AddViewOrDownload(materialID, 0)
    };

    const youtubVideoId = videoUrl.split("v=")[1].substring(0, 11);
    return (
        <Fragment>
            <button className="knbtn knbtn-main knbtn-sm py-3 ms-2" onClick={handleOpen}>
                <i className="knr kn-eye me-2 fs-5"></i>
                مشاهدة
            </button>
            <ModalVideo
                channel='youtube' autoplay isOpen={isOpen}
                videoId={youtubVideoId}
                allowFullScreen
                onClose={handleClose} />
        </Fragment>
    )
}
export default VideoPreview;