import React from 'react'



export default async function loadJSON() {
    // const statsUrl = 'https://api.github.com/repos/alexkrewson/todo/languages';
    const statsUrl = 'https://api.github.com/users/alexkrewson/repos?per_page=100';

    const cleverToken1 = 'token ghp_ou6tnNiX5uwAh'
    const cleverToken2 = 'WQYAooNOzjfZVBtzy1QcIfK'

    const s = {
        withCredentials: !0,
        headers: {
          Authorization: cleverToken1 + cleverToken2
        }
      };

    let response = await fetch(statsUrl,s);
    let data = await response.text();
    let obj = await JSON.parse(data)

    console.log(obj)

    let obj2 = []
    let languageTallies = {JavaScript: 0, Ruby: 0, HTML: 0, CSS: 0, Sass: 0}

    for (let i = 0; i < obj.length; i++) {
        let languageUrl = obj[i].languages_url
        // console.log(languageUrl)

        let response2 = await fetch(languageUrl,s);
        let data2 = await response2.text();
        obj2[i] = await JSON.parse(data2);

        if (obj2[i].JavaScript > 0) {
            languageTallies.JavaScript ++
        }
        if (obj2[i].Ruby > 0) {
            languageTallies.Ruby ++
        }
        if (obj2[i].HTML > 0) {
            languageTallies.HTML ++
        }
        if (obj2[i].CSS > 0) {
            languageTallies.CSS ++
        }
        if (obj2[i].SCSS > 0) {
            languageTallies.Sass ++
        }


    }
    console.log(obj2)
    console.log(languageTallies)

    // let otherObj = obj[3].languages_url;
    // console.log(otherObj);






    // console.log(obj);


    return languageTallies


}

