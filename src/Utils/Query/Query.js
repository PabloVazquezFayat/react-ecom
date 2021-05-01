export default function Query(url) {

    const data = {}
    const params = url.split('?')[1].split('&');

    params.forEach((value)=> {
      const keyValuePairs = value.split('=');
      data[keyValuePairs[0]] = keyValuePairs[1];
    });

    return data;
}