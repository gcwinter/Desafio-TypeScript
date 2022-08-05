// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface employee {
    code: number,
    name: string
}

let employee1: employee = {
    name: 'gabriel',
    code: 25

}
let employee2: employee = {
    name: "gabriela",
    code: 2
}

const employee3 = {} as employee;
employee3.code = 15;
employee3.name = "viviane";

