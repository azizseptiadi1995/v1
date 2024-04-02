
export const Services = (userID, type) => {
    try {
        let dataresponse;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=0000cSo-uCGlYwWsriSSxnw4CsX2Ycu50h527QgqzVQM_V8mo8i3YQ:1de43bnj7; JSESSIONID=0000TLLbV0nwLROVezaMJii-Kc__upVGZzhy5ZmZtMdCqQpdn_BlAK:1de43bnj7");
        var raw = JSON.stringify({
            "type": type,
            "challenge": userID,
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return requestOptions
    } catch (e) {
    }
}
export const APIURL = () => {
    return 'http://192.168.7.61:8081/services/BotService/StressTestServices';
}
