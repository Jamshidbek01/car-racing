import request from "./request";
import uptadeUI from "./uptadeUI";
function reload() {
    request("http://127.0.0.1:3000/garage")
        .then((data) => {
            uptadeUI(data);
        })
        .catch((err) => {
            console.log(err);
        })
}
export default reload