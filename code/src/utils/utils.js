import {Modal} from "antd";

export const utils = {
    modalSuccess({title = '', content = '', misstime = 3} = {}) {
        Modal.success({
            title,
            content,
        }, misstime);
    },
    modalError({title = '', content = '', misstime = 3} = {}) {
        Modal.error({
            title,
            content,
        }, misstime);
    }
};