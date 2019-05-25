import Q from "q";
interface jsonType {
    [key: string]: string
}
let defer = Q.defer();
let _active = {
    jsonToString(d:jsonType){
        var result = ""
        for (let name in <object>d) {
            if (typeof d[name] != 'function') {
                result += "&" + name + "=" + encodeURIComponent(d[name]);
            }
        }
        return result.substring(1)
    }
}
// var _publishurl:string = "http://10.112.7.77:3000"
var _publishurl:string = "http://192.168.1.108:3000"
const getFetch = (url:string,params?:any)=> {
    return new Promise ((resolve,reject) => {
        let headers = {
            'Content-Type': 'application/json; charset=UTF-8'
        };
        let _opt = {
            method:"get",
            origin:"http://10.112.7.77:8081",
            headers:headers
        }
        fetch(_publishurl + url + "?" + _active.jsonToString(params),_opt)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            })
    })
       
}
export default {
    getFetch,
}