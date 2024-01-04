;

function add(a,b){
  return(a+b)
}
function sub(a,b){
  return(a-b)
}
function mul(a,b){
  return(a*b)
}
function div(a,b){
  let div=a/b;
  div=div.toFixed(2);
  return(div)
}
export {sub,mul,div};
export default add;


// function App(){
//     let date =new Date(2020,5,2,21);
// var greet;
// const greetstyle={

// }
// const time=date.getHours();
// if(time>=12 && time<19){
//   greet='Good AfterNoon';
//   greetstyle.color='orange';
// } else if(time>19 && time<=24){
//   greet='Good Night';
//   greetstyle.color='red';
// } else{
//    greet='Good Morning';
//    greetstyle.color='green'
// } 
// return (
//    <>
//    <div class='greeting'>
//    <h1>Hello Sir, <span style={greetstyle} >{greet}</span></h1>
//    </div>
//    </>
//      )
// }

// export default App;