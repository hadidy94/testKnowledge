import Image from "next/image";
import VideoPreview from './VideoPreview';
import DownloadFile from './DownloadFile';

export default function Material(props) {

    const { id,
        imagePath,
        userName,
        materialTitle,
        materialDescription,
        publishDate,
        numberOfViews,
        numberOfFileDownloads,
        categoryName,
        videoUrl,
        filesExtension,
        fileName,
        handleMaterialPrefetch } = props;

    const date = new Date(publishDate);
    const dateFormat = date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear();
    return (


        <div className="materials">

            <div key={id} className="row align-items-center rounded-3 bg-white py-3 px-2 mb-4">
                <div className="col-md-4 col-sm-3">
                    <Image src={imagePath} alt={'ss'} className="rounded-2" width={320} height={180} />
                </div>
                <div className="col-md-8 col-sm-9">
                    <h5 className="mb-3 material-title">{materialTitle}</h5>
                    <div className="d-flex gap-2 gap-sm-4">
                        <div className="small text-gray d-flex align-items-center gap-1">
                            <i className="knb kn-calendar"></i>
                            <span>{dateFormat}</span>
                        </div>
                        {!!videoUrl &&
                            <div className="small text-gray d-flex align-items-center gap-1">
                                <i className="knb kn-eye"></i>
                                <span> {numberOfViews} </span>
                            </div>
                        }
                        {!!filesExtension &&
                            <div className="small text-gray d-flex align-items-center gap-1">
                                <i className="knb kn-download"></i>
                                <span> {numberOfFileDownloads} </span>
                            </div>
                        }


                    </div>

                    <div className=" mt-3 d-flex gap-2 gap-sm-4 align-items-end justify-content-between">
                        <div className="">
                            <h6 className="mb-0">{userName}</h6>
                            <span className="small text-muted">{categoryName}</span>
                        </div>
                        <div className="small text-gray d-flex align-items-center gap-1">


                            <a className="knbtn knbtn-light knbtn-sm py-3 px-2" data-bs-toggle="collapse" href={`#collapsematerial-${id}`} role="button" aria-expanded="false" aria-controls={`collapsematerial-${id}`}>
                                <i className="knr kn-info-circle"></i>
                            </a>

                            {!!videoUrl &&
                                <VideoPreview videoUrl={videoUrl} materialID={id} handleMaterialPrefetch={handleMaterialPrefetch} />
                            }
                            {!!filesExtension &&
                                <DownloadFile materialID={id} filesExtension={filesExtension} fileName={fileName} handleMaterialPrefetch={handleMaterialPrefetch} />
                            }


                        </div>
                    </div>

                </div>

                <div className="collapse border-0" id={`collapsematerial-${id}`} >
                    <div className="card card-body border-0">
                        {materialDescription}
                    </div>
                </div>
            </div>


        </div>
    )
}