import httpCommon from "../http-common";

const getAll = () => {
    return httpCommon.get("/notes");
}

export default  {getAll}