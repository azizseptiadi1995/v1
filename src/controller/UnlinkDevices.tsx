import { getUrl } from 'src/constants/Utils';
export const Services = (userID: string, url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        try {
            let hitService = getUrl(url);
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
                "type": 'unlinksepaket',
                "userid": userID,
            });
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch(hitService as string, requestOptions)
                .then((response: Response) => response.text())
                .then((result: string) => {
                    resolve(result);
                })
                .catch((error: Error) => {
                    reject(error);
                });
        } catch (e) {
            reject(e);
        }
    });
}






