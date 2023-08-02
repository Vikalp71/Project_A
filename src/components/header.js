export default function HeaderComponent(props){
    alert(props.UserName)
    return (
        <div>
        <h1>{props.UserName}:this is header with age {props.age}</h1>
        <h1>{props.employee.UserName}:this is header with age {props.employee.Age}</h1>
        <h2>Total salary is: {props.salary}</h2><hr></hr>
        </div>
    )
}

    
       

        





        
    