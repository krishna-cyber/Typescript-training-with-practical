type StringOrNumber = string|number

type Theme = "light" | "dark"

type Employee = {
    id:number,
    name:string,
    department:string
}

type Manager = {
    id:number,
    name:string,
    employees:Employee[]
}

type Staff = Employee|Manager


export type  {StringOrNumber,Theme,Employee,Manager,Staff}