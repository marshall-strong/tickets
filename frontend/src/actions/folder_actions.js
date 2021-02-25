import * as folderAPIUtil from "../util/folder_api_util";

export const RECEIVE_FOLDER = "RECEIVE_FOLDER";
export const RECEIVE_FOLDERS = "RECEIVE_FOLDERS";
export const REMOVE_FOLDER = "REMOVE_FOLDER";

const receiveFolder = (folder) => ({
  type: RECEIVE_FOLDER,
  folder: folder.data,
});

const receiveFolders = (res) => {
  let payload = {};
  res.data.forEach((folder) => (payload[folder._id] = folder));
  return {
    type: RECEIVE_FOLDERS,
    payload,
  };
};

const removeFolder = (folderId) => ({
  type: REMOVE_FOLDER,
  id: folderId,
});

export const createFolder = (folder) => (dispatch) =>
  folderAPIUtil
    .createFolder(folder)
    .then((folder) => dispatch(receiveFolder(folder)));

export const getCreatedFolders = (userId) => (dispatch) =>
  folderAPIUtil
    .getCreatedFolders(userId)
    .then((res) => dispatch(receiveFolders(res)));

export const deleteFolder = (folderId) => (dispatch) =>
  folderAPIUtil
    .deleteFolder(folderId)
    .then(() => dispatch(removeFolder(folderId)));
