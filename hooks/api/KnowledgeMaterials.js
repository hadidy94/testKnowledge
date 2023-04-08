import ApiClient from '../ApiClient';

export const getAllMaterials = async (selectedMaterials, sortingValue, myFiles, pageNum) => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeMaterial/GetAll?CategoryId=${selectedMaterials}&Sorting=${sortingValue}&MyFiles=${myFiles}&SkipCount=${pageNum}`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const getAllCategories = async () => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeMaterial/GetKnowledgeMaterialCategoriesAndMaterialCountForEach`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const getMaterialCount = async () => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeMaterial/GetMaterialCountDetails`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const getMaterialFile = async (id) => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeMaterial/GetKnowledgeMaterialFile?materilId=${id}`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const AddViewOrDownload = async (materialId, value) => {
    try {
        const result = await ApiClient.post(`/services/app/KnowledgeMaterial/AddViewOrDownload?knowledgeMaterialId=${materialId}&viewOrDownloadType=${value}`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const createMaterial = async (MaterialData) => {
    try {
        const result = await ApiClient.post(`/services/app/KnowledgeMaterial/Create`, MaterialData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return result;
    } catch (error) {
        return error.data
    }

}