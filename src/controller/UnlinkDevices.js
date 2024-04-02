export const Services = (userID, type) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=0000cSo-uCGlYwWsriSSxnw4CsX2Ycu50h527QgqzVQM_V8mo8i3YQ:1de43bnj7; JSESSIONID=0000Ms1YmEnTFdm_hEp_EYAUCY0V9SDY5T2t58d1pipJnpMHAukuYl:1de43bnj7; JSESSIONID=0000zn8v2fC-gmGotsw2U5ox6MdwUixSnC2ROLUVYNIYmH67JuckZS:1de43bnj7; JSESSIONID=0000CLovTBG-yKUZ6zSNXEoROTfsSpffbwYCKMA0S--uOqAz_x51Cg:1de43bnj7");
        var raw = JSON.stringify({
            "type": 'unlinksepaket',
            "userid": userID,
        });
        console.log(raw);
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
