type Employee = {id:number,name:string,departnment:string}

type Manager ={id:number,name:string,employees:Employee[]}

type Staff = Employee | Manager

function printStaffDetails (staff:Staff):void{
    if('employees' in staff){
        console.log(`${staff.name} has ${staff.employees.length} employees`)
    }else{
     console.log(`${staff.name} is in the ${staff.departnment}`)   
    }
}

const staff1 :Staff = {
    id:2,
    name:"krishna",
    departnment:"Computer Science"
}

const staff2 :Staff = {
    id:1,
    name:"Subitra Devi sharma",
    employees:[{name:"tara",id:2,departnment:"commerce"}]
}

printStaffDetails(staff1)
printStaffDetails(staff2)