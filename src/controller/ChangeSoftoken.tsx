import { getUrl } from 'src/constants/Utils';
const Services = (type: string, url: string) => {
    return new Promise((resolve, reject) => {
        try {
            let hitService = getUrl(url);
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
                "type": 'changeSoftToken',
                "licenceAvailable": type,
            });
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch(hitService as string, requestOptions)
                .then(response => response.text())
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    console.log(error)
                    reject(error);
                });
        } catch (e) {
            console.log(e)
            reject(e);
        }
    });
}

export { Services };




