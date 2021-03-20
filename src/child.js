import React,{useState,useContext} from "react";
import { Content} from "./content";
import './custom.css'
export default function Child(){
      
    let {transactions,addTransaction, deleteFromTransaction} = useContext(Content)
    let [description,setDesc] = useState('');
    let [Amount,setAmount] = useState('');
    // let [total,setTotal] = useState(0);
    function  calculateExpense(){
        let expense = 0;
        for(let i =0; i<transactions.length;i++){
            if(transactions[i].amount < 0){
        expense +=transactions[i].amount

         }
        }
       
        return expense;
    } 
    function  calculateIncome(){
        let sum = 0;
        for(let i =0; i<transactions.length;i++){
            if(transactions[i].amount > 0){
        sum +=transactions[i].amount
     

         }
        }
        return sum;
    }  

    function register(event){
   
        event.preventDefault();
    //    if(Amount <= calculateIncome()-calculateExpense()){
    //     addTransaction({
    //         type : description,
    //         amount : parseInt(Amount)
    //     })

    //    }
    //    else{
    //        alert('Please enter the price below than' + calculateIncome())
    //    }

    //   setTotal(calculateIncome() + calculateExpense())
    //   console.log(total)
        if(Amount < 0){
        const a1 = Amount.substr(1,Amount.length-1);
        if( (calculateIncome() + calculateExpense()) == 0){
            alert('Plz enter come income first')

        }
        else if(a1 <= (calculateIncome() + calculateExpense())  ){
            addTransaction({
                type : description,
                amount : parseInt(Amount)
            })


           }
           else{
            alert('Please enter the price below than ' + (calculateIncome() + calculateExpense()))
           }
        }
        else{
            addTransaction({
                        type : description,
                        amount : parseInt(Amount)
                    })

        }

        document.getElementById('name').value = '';
        document.getElementById('Value').value = '';


    }

    function  deleteItem(index) {

        transactions.splice(index,1)
        deleteFromTransaction(transactions)
        
    }
    return(

        <div id="container">
            <h1 id="head">Expensive Tracker</h1>
            <div id="subhead">
            <h3 >You Balance <br/>
            {
            calculateIncome() + calculateExpense()
            }$</h3>
            <div id="section1">
                <div><h2 className="green">Income <br/> {calculateIncome()}$</h2></div>
                <div><h2 className="red">Expense <br/> {calculateExpense()}$</h2></div>
            </div>
            <h2 >History</h2>
            <hr/>
            <ol>
            {
            transactions.map((item,index) =>{
                return (<li key={index} className={ item.amount > 0 ? "income" : "expense"}><div>{item.type}</div><div>{item.amount} &nbsp;<button  onClick ={ () =>{
                    deleteItem(index);
                }} style={{backgroundColor : "white", border : "none"}}>Delete</button></div></li>);
            })
            }
            </ol>
            {/* <ol>
                <li><div>Cash</div><div>+100</div></li>
                <li><div>Cash</div><div>+100</div></li>
                <li><div>Cash</div><div>+100</div></li>  
            </ol> */}
            <h2>Add new transaction</h2>
            <hr/>
            <form onSubmit = {(event) =>{
                register(event)
            }}>
                <label for="name">Enter Description</label>
                <br/>
                <input id="name" type="input" onChange ={event => setDesc(event.target.value)} placeholder="Enter the description"/>
                <br/>
                <label for="Value" >Enter Value</label>
                <br/>
                <input id="Value" type="number"  onChange ={event => {setAmount(event.target.value); console.log(Amount)} }placeholder="Enter the value"/>
                <br/>
                <input style ={{height : "30px" , width : "100%"}} type="submit" value="Register" />
            </form>
            </div>
            <br/>
            <br/>

            <br/>

        </div>
    );
}