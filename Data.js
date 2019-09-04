// // EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
// function Data(props){
//     console.log(props);
//     // console.log(allData);
//     const name = "Robert Bunch";    
// //    const title = "React From the Beginning";
// //    const title = props.title;
//     const saleOn = false;
//     // props.name = "I hijacked this prop!"; // THIS IS BAD
//     return (
//             <div className="col s2">
//                 <div className="card hoverable">
//                     <div className="card-image">
//                     {/*     <img src={props.data.image} />  */}
//                     </div>
//                     <div className="card-content">
//                        <p>{props.course}</p>  
//                        <p>{props.instructor}</p> 
//                        <div className="card-image">
//                         <img src={props.image}/>  
//                         </div> 
//                     </div>
//                     <div className="card-action">
//                         <a href="#">${saleOn ? 9.99 : 59.99}</a>
//                     </div>
//                 </div>
//             </div>    
//     )
// }

// WITH MAPPING

// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function Data(props){
    console.log(props);
    // console.log(allData);
    const name = "Robert Bunch";    
//    const title = "React From the Beginning";
//    const title = props.title;
    const saleOn = false;
    // props.name = "I hijacked this prop!"; // THIS IS BAD
    return (
        props.data.map((i, j) => {
            return (


                <div key={j} className="col s2">
                    <div className="card hoverable">
                        <div className="card-image">
                        {/*     <img src={props.data.image} />  */}
                        </div>
                        <div className="card-content">
                           <p>{i.course}</p>  
                           <p>{i.instructor}</p> 
                           <div className="card-image">
                            <img src={i.image}/>  
                            </div> 
                        </div>
                        <div className="card-action">
                            <a href="#">${saleOn ? 9.99 : 59.99}</a>
                        </div>
                    </div>
                </div>    
    
    
            )})
    )
}