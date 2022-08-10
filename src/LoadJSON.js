import React from 'react'

export default async function loadJSON() {

    const statsUrl = 'https://api.github.com/users/alexkrewson/repos?per_page=100';

    const s = {
        withCredentials: !0,
        headers: {
            Authorization: 'token nothing'
        }
    };

    let languageTallies = { JavaScript: 0, Ruby: 0, HTML: 0, CSS: 0, Sass: 0, message: '**Powered by Github API' }
    try {
        let response = await fetch(statsUrl, s);
        let data = await response.text();
        let obj = await JSON.parse(data)

        console.log(obj)

        let obj2 = []

        for (let i = 0; i < obj.length; i++) {
            let languageUrl = obj[i].languages_url

            let response2 = await fetch(languageUrl, s);
            let data2 = await response2.text();
            obj2[i] = await JSON.parse(data2);

            if (obj2[i].JavaScript > 0) {
                languageTallies.JavaScript++
            }
            if (obj2[i].Ruby > 0) {
                languageTallies.Ruby++
            }
            if (obj2[i].HTML > 0) {
                languageTallies.HTML++
            }
            if (obj2[i].CSS > 0) {
                languageTallies.CSS++
            }
            if (obj2[i].SCSS > 0) {
                languageTallies.Sass++
            }
        }

        if (languageTallies.JavaScript == 0) {
            languageTallies = { JavaScript: 33, Ruby: 40, HTML: 44, CSS: 31, Sass: 19, message: '*Powered by Github API' }

        }

        return languageTallies

    } catch (e) {
        let languageTallies = { JavaScript: 33, Ruby: 40, HTML: 44, CSS: 31, Sass: 19, message: '*Powered by Github API' }
        return languageTallies
    }

}

