import httpCommon from "../http-common";

const getAll = () => {
    return httpCommon.get("/notes");
}

const create = data => {
    return httpCommon.post("/notes", data);
}

const getById = noteById => {
    return httpCommon.get(`/notes/${noteById}`);
}

export default  { getAll, create, getById }