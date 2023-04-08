import Image from "next/image";
import Material from './Material';

export default function Materials({ materials, handleMaterialPrefetch }) {

    const { items } = materials.result;
    return (
        <div className="materials">
            {items.map((item) => 
                <Material 
                key={item.id} 
                id= {item.id}
                userName={item.userName}
                imagePath = {item.imagePath}
                materialTitle = {item.materialTitle}
                materialDescription = {item.materialDescription}
                publishDate =  {item.publishDate}
                numberOfViews = {item.numberOfViews}
                numberOfFileDownloads = {item.numberOfFileDownloads}
                categoryName= {item.categoryName}
                videoUrl={item.videoUrl}
                filesExtension={item.filesExtension}
                fileName={item.fileName}
                handleMaterialPrefetch = {handleMaterialPrefetch}
                />
            )}

        </div>
    )
}