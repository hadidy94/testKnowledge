import { useEffect, useState } from "react";
import { getMaterialFile } from '../../hooks/api/KnowledgeMaterials';
import { AddViewOrDownload } from '../../hooks/api/KnowledgeMaterials';


const DownloadFile = ({ materialID, filesExtension, fileName, handleMaterialPrefetch }) => {
    const [url, setUrl] = useState();

    const setDownloadCount = async () => {
        const result = await AddViewOrDownload(materialID, 1)
        if (result) {
            handleMaterialPrefetch(true)

        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMaterialFile(materialID);
            setUrl(data.result)
        }

        fetchData()
        .catch(console.error);;
    }, [materialID, filesExtension])
    return (
        <a href={url} onClick={setDownloadCount} className="knbtn knbtn-main knbtn-sm py-3 ms-2" download={fileName}>
            <i className="knr kn-download me-2 fs-5"></i>
            تحميل
        </a>
    )

}
export default DownloadFile;