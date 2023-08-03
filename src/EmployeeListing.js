export default function EmployeeListing() {
    var employeeList = [
        { name: "Varun Khera", age: 30 },
        { name: "Meha", age: 30 },
        {name: "Mayank", age: 32}
    ]
    
    return (
        <div>
            {employeeList.map(function (employee) {
                return (
                    <h1>Employee Name is {employee.name} {employee.age}</h1>
                )
            })}
        </div>
    )
}