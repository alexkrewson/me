import React from 'react'



export default async function loadJSON() {
    const statsUrl = 'https://api.github.com/repos/alexkrewson/re-former/languages';
    let response = await fetch(statsUrl);
    let data = await response.text();
    let obj = await JSON.parse(data)
    // console.log(obj.Ruby);
    return obj


}

