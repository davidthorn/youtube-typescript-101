/**
 *
 *
 */
/**
 *
 *
 */
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

    let isConnected: boolean | null = true

    const asynchronousCallback = (x: number) => {
        if(isConnected) return 
        console.log(x)
        /// continue if is connected
    }

    while(item !== undefined) {

        /// do this code whilst item is not undefined
        isConnected = null
        /// do some code here

        item = indexes.pop()
        
        let result = item === undefined ? 0 : item as number

        asynchronousCallback(result)
    }

    // run this code when item is undefined

    /**
     * Adds the x and y together and returns the result
     *
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    function add(x:  number, y: number): number {
        return x + y
    }

    /**
     * Adds the x and y together and returns the result
     *
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    const addNumbers: (x: number, y: number) => number  = (x: number, y: number): number => {
        return x + y
    }


    /**
     * Adds the x and y together and returns the result
     *
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    const addNumberFunction: (x: number, y: number) => number = function(x: number, y: number): number {
        return x + y
    }

  
    /// takes and input and provides and output

    let addedSum = add(5, 2)
    let addedSum1 = addNumbers(5, 6)
    let addedSumFunction = addNumberFunction(7, 4)


    type AddNumberFunction = (x: number, y: number) => number

    /**
     *Takes an x and a y and passes it the high order callback provided and return a number
     *
     * @param {number} x
     * @param {number} y
     * @param {AddNumberFunction} callback
     * @returns {number}
     */
    const highOrderFunction = (  x: number, y: number , callback: AddNumberFunction ): number => {

        /// calculate something here and you can do the math 
        /// because I dont like it

        return callback(x, y)
    }

    type PersonName = {
        firstName: string
        lastName: string
    }

    const mapFullNameToPersonName = (fullName: string, allowedNumberOfSpacesInSurname: number = 0): PersonName | undefined => {
        let parts = fullName.split(' ')

        if(parts.length !== 2 + allowedNumberOfSpacesInSurname) {
            return undefined
        }

        return {
            firstName: parts.shift() as string,
            lastName: parts.join(" ") as string
        }
    }

    const personName: PersonName | undefined = mapFullNameToPersonName("David Thorn")
    
    if(personName === undefined) {
        throw new Error('the name does not have the correct number of parts')
    }

    console.log(personName.firstName, personName.lastName)

    /// ( fullName: string , map: (name: string) =>  PersonName | undefined  ) => PersonName | undefined


    /**
     * Takes a full name and returns a persons name type or undefined based upon the map functions result
     *
     * @param {string} fullName
     * @param {((name: string) => PersonName | undefined)} map
     * @returns {(PersonName | undefined)}
     */
    const davidName = ( fullName: string,  allowedNumberOfSpacesInSurname: number , map: (name: string , allowedNumberOfSpacesInSurname: number) => PersonName | undefined  ): PersonName | undefined => {
        return map(fullName,  allowedNumberOfSpacesInSurname)
    }

    let name = davidName("David James Steven Thorn", 2 , mapFullNameToPersonName )

    if(name === undefined) {
        throw new Error(`the name (${name}) does not have the correct number of parts`)
    }

    console.log(name)

    /// Types

   let objects = {
       name: "Leanne Graham",
       username: "Bret"
   }

   type UserData = {
       name: string
       username: string
   }

   type ApiUserData = {
    name?: string
    username?: string
}

   const vanillaFunctionToTakeAJSObject = (obj: any): any => {
        
        if(obj["name"] === undefined) {
            throw new Error('name is not defined')
        }

        if(obj["username"] === undefined) {
            throw new Error('username is not defined')
        }

        let name = obj.name
        let username = obj.username

        return {
            name: name,
            username: username
        }

   }

   var _testFunctionToTakeAJSObject = function (obj: any) {
        var name = obj.name;
        var username = obj.username;
        if (obj.name === undefined)
            return undefined;
        if (obj.username === undefined)
            return undefined;
        return {
            name: obj.name,
            username: obj.username
        };
    };

   const functionToTakeAJSObject = (obj: ApiUserData): UserData | undefined => {
        
        let name = obj.name
        let username = obj.username

        if(obj.name === undefined) return obj.name
        if(obj.username === undefined) return obj.username

        return {
            name: obj.name,
            username: obj.username
        }

    }

   let typeSafeData = functionToTakeAJSObject({
       name: "david",
       username: "thorn"
   })

   if (typeSafeData === undefined) {
       throw new Error('the type safe data was not type safe')
   }

   console.log(typeSafeData)

   let data = vanillaFunctionToTakeAJSObject({
       name: "david",
       surname: "thorn"
   })




   /// Optional types

   function getOptionalMiddleName(s: any) : nullableType {
    return { name: s }
   }

   let optionalMiddleName: string | null = null

   type nullableType = {
       name?: string
   }

   let mName: nullableType = getOptionalMiddleName(null)

   let pName = mName.name === undefined ? "" : `${mName.name} `
   //let pName = mName.name || ""

   let fullName = "David " + `${pName}` + "Thorn"





    
    





















































}