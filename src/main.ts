window.onload = () => {
    const youtube = {
        name: "david",
        surname: "thorn"
    }

    const container = document.getElementById('container') as HTMLElement
    // const header = document.createElement('h1')
    // let text  = document.createTextNode(`${youtube.name} ${youtube.surname} user is watching this video`)
    // header.appendChild(text)
    // container.appendChild(header)
  
    const davidsAge: number = 39
    const num1: number = 2
    const sum: number = davidsAge + num1

    /// explaining let


    const immutable: string = "david"
    let mutable: string = "wolverine"

    const xmen: string = "storm"
    

    const davidsBirthday: string = "22-12-1978"
    let davidsMutableAge: number = 39

    // for(let x: number = 0; x < 10; x++) {

    // }

    // const radius: number = 40
    // let angle: number = 0

    // angle = radius * Math.sin(angle)
    ///let someCompletelyUselessVariable = "asdas asd a sd asd asd iaslidjilas dasd"
    // console.log(angle)

    // console.log(sum)


    /// Boolean

    /// Yes or No
    /// On or Off
    /// 1 or 0
    /// Left or Right
    /// Up or down

    let isWatching: boolean = true

    const isOfLegalAge: boolean = true

    /// Any

    let unknownProperty: any = {}

    /// null


    /// undefined


    /// array 

    let indexes: number[] = [0,1,2,4,8,16,32]

    // let last: number | undefined = indexes.length <= 7 ? indexes[7]: undefined

    // if (last !== undefined) {
    //     /// do something here
    // }

    // let lastItem: number | undefined = indexes.pop()

    // /// does that element index exists
    // /// if it does exists them retrieve it
    // /// if it does not exist then  handle the error

    // if(lastItem === undefined) {
    //     throw new Error("The last item is undefined this cant happen")
    // }

    let item: number | undefined = indexes.pop()

    while(item !== undefined) {

        /// do this code whilst item is not undefined

        /// do some code here

        item = indexes.pop()
    }

    // run this code when item is undefined









    
    





















































}