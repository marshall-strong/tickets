export const createFolder = folder => (
    axios.post(`/api/folders/`, folder)
)

export const getCreatedFolders = userId => (
    axios.get(`api/folders/${userId}`)
);

export const deleteFolder = folderId => (
    axios.delete(`/api/folders/folders/${folderId}`)
);