const URL = "https://cat-fact.herokuapp.com/facts";

const callAPI = async () => {
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
};