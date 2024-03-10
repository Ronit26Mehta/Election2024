const fetch = require('node-fetch');

async function fetchData() {
  const url = 'https://yandextranslatezakutynskyv1.p.rapidapi.com/detectLanguage';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '0a93865c0emshe58300e9a84d0c8p1b762ejsnc3913199c082',
      'X-RapidAPI-Host': 'YandexTranslatezakutynskyV1.p.rapidapi.com'
    },
    body: new URLSearchParams({ text: 'Hello, World!' }) // replace with your desired text
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchData();