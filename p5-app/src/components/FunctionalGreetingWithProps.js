const FunctionalGreetingWithProps = (props) => { 
 return (
 <p>{props.greeting}, I am {props.name}! I am {props.age} years old.</p>
) 
}

export default FunctionalGreetingWithProps;