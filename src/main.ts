window.onload = () => {
    const youtube: Youtube = {
        name: "david",
        surname: "thorn"
    }

    const container = document.getElementById('container') as HTMLElement
    const header = document.createElement('h1')
    let text  = document.createTextNode(`${youtube.name} ${youtube.surname} user is watching this video`)
    header.appendChild(text)
    container.appendChild(header)
    console.log('loaded', youtube)
}