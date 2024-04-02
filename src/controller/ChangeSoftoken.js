export const Services = (type) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=0000cSo-uCGlYwWsriSSxnw4CsX2Ycu50h527QgqzVQM_V8mo8i3YQ:1de43bnj7; JSESSIONID=0000PyOfY3NRFjcki-owEa4csGc5L7ODPTyiY0B7zw8QG4OUX7seFP:1de43bnj7; JSESSIONID=0000sz6VT6Q86OStElEP0145WTyCwvsRE9p94UVFQWUocNQgI110rs:1de43bnj7; JSESSIONID=00009zTMin3hgtyyCp6o1Q7eeB1MhVPAjrL-jOx3BJjRtylRhWqeax:1de43bnj7");
        var raw = JSON.stringify({
            "type": 'changeSoftToken',
            "licenceAvailable": type,
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
