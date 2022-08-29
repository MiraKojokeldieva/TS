// const num: number = 1
// const str: string ="abc"
// const isExample: boolean = true
// const arrNumders: string[] = ["jsdh","sklda","sjdlka"]


// let ts2: any = ""


// function foo(a:string): string {
//   return a
// }
// foo("kfjsl")

// const foo = (b: number | string): number | string=> {
//  return b
// }

// foo("kfls")


// arrNumders.map((a: string) => a.toLocaleUpperCase())


// let obj: {name: string, age?: number} = {
//     name: "Lili",
    
// }

// function foo(a: string | number): string  {
//    if ( typeof a === "number"){
//      return a.toString()
//    } else {
//     return a
//    }
// }
// foo(45)



// function foo(a: number[] | number ): number  {
//      if (Array.isArray(a)) {
//         return a.map((i: number) => i * 2 )[0]
//      } else {
//         return a
//      }

//  }
//  foo([1,2,3,4,5])


// function foo(a: number[] | number ): void  {
//      if (Array.isArray(a)) {
//      a.map((i: number) => i * 2 )[0]
//      } else {
//      a + 2
//      }
//  }
//  foo([1,2,3,4,5])


// const variable: string = "Heloo"

// const objectOne: {name: string, age: 25, status: string, country?: string[] } = {

//     name: "Lili",
//     age: 25,
//     status: "Developer",
//     country: ["KG","RU","US"]

// }
//     objectOne.country?.map((c: string) => c.toLocaleUpperCase())

// function sortNumbers(numbers: number[] | number, type: string): number[] | number {
//   if (Array.isArray(numbers)){
//     return numbers.sort((a, b) => a - b)
//   } else {
//     return numbers
//   }
// }


//  Interface || Types 


// type ExampleType = string | number

// const example: ExampleType = "hello"


// type CoordsType = {
//     x: number,
//     y: number
// }



// function exampleTypes( coords:  CoordsType) {

// }


// interface ICoordsTypes {
//     x: number,
//     y: number
// }

// interface ICoordsTypes {
//     g: number
// }

// interface IAdditionalCoords   {
//     z: number
// }

// function exampleTypes2( coords:  IAdditionalCoords) {

// }


// type ExampleType3 = "hello" | 6

// const example3: ExampleType3  = "hello"


// type ExampleType = "up" | "down"

// function exampleFunc(variant: ExampleType): 1 | -1 {
//    switch (variant) {
//     case "down": 
//       return 1
//     case "up":
//       return -1
//    }
// }




// ДЗ // то что прошли в последнем уроке 


// const objectOne: {name: string,surname: string, user: { age: number, phoneNumber: number, status?: string }
// } = {
//     name: "Vika",
//     surname: "Ivanova",
//     user: {
//        age: 23,
//        phoneNumber:555444333,
//        status: undefined
//     }
// }

// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"info": {
// 		"desc": "delectus aut autem",
// 		"isActive": true
// 	},
// 	"tags": [
// 		{
// 			"name": "my name",
// 			"value": 1000
// 		}
// 	]
// }



	
const testJ: { "userId": number, "id": number, "title": string, info: { "desc": string, "isActive": boolean, },

"tags": [{"name": string, "value": number}]}  = {
    "userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"info": {
		"desc": "delectus aut autem",
		"isActive": true
	},
	"tags": [
		{
			"name": "my name",
			"value": 1000
		}
	]
}

JSON.stringify(testJ)


   
