import axios from "axios";
import config from "../_config";
const store_url = config.baseUrl;

const getNotificatoins = (data, rsl, rej) => {
    return (dispatch) => {
        axios(`${store_url}/my_notification`, {
            method: "post",
            data,
        })
            .then((res) => {
                console.log(res);
                if (res.data.status == true) {
                    rsl(res.data);
                } else {
                    rej(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
                rej(err);
            });
    };
};
export {
    getNotificatoins,
};
