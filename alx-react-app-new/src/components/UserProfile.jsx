 const UserProfile = (props) => {
   return (
     <div style={{border: '1px white', padding: '10px', margin: '10px', backgroundColor: 'grey'}}>
       <h2 style={{color: 'black', fontWeight: 'semi-bold'}} >{props.name}</h2>
       <p>Age: <span style={{fontWeight: 'bold'}}> {props.age} </span></p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;