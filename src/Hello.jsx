import './Hello.css';
import { useState }from'react';
function MyButton(){
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
        //alert("You clicked button!")
    }
    return (<button onClick={handleClick}>I am button {count} </button>);
}
function Hello(){
    let name = "apiwit";
    let isAdmin = true;
    let content;
    if(isAdmin){
        content=<MyButton/>
    }else{
        content=<b>You are not admin</b>
    }
    const products=[
        {title:"Cabbge",id:1},
        {title:"Garlic",id:2},
        {title:"Apple",id:3}
    ];
    const listItems=products.map(product=>
        <li key={product.id}>
            {product.title}
        </li>
    );
    return(<div style={{border:"5px solid gold"}}>
        <h1 className='redtopic'> Hello , {name.toUpperCase()}</h1>
        <h2>I'm computer engineer</h2>
        <ol>{listItems}</ol>
        {content}
        <hr/>
        </div>
    );
        
}
export default Hello;