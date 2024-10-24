enum UserRoles {
  Admin="Admin",   //default it is 0
  Manager="Manager",  //increment by 1 == 1
  Employee="Employee", //2
}

type User = {
  id: number;
  name: String;
  role: UserRoles;
  contacts:[string,string]
};

function createUser(user: User): User {
  if (user.role == UserRoles.Admin) {
    return { id: 1, name: user.name, role: UserRoles.Admin,contacts:user.contacts };
  } else if (user.role === UserRoles.Employee) {
    return {
      id: user.id,
      name: user.name,
      role: UserRoles.Employee,
      contacts:user.contacts
    };
  } else {
    return {
      id: user.id,
      name: user.name,
      role: UserRoles.Manager,
      contacts:user.contacts
    };
  }
}

let user = createUser({ id: 1, name: "krishna", role:UserRoles.Manager,contacts:["9856235","someone@gmail.com"] });  //numberic enum allowed direct value , string enum not allowed

console.log(user);