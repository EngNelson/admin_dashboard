import "./newUser.css";

const NewUser = () => {
    return (
        <div className="newUser">
           <h1 className="newUserTitle">
               New User
           </h1>
           <form  className="newUserForm">
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder="Nasah"/>
               </div>
               <div className="newUserItem">
                   <label>Full Name</label>
                   <input type="text" 
                   placeholder="Nasah Kuma"/>
               </div>
               <div className="newUserItem">
                   <label>Email</label>
                   <input type="email" 
                   placeholder="Nasah@gmail.com"/>
               </div>
               <div className="newUserItem">
                   <label>Password</label>
                   <input type="password" 
                   placeholder="password"/>
               </div>
               <div className="newUserItem">
                   <label>Phone</label>
                   <input type="text" 
                   placeholder="+237 679 35 87 33"/>
               </div>
               <div className="newUserItem">
                   <label>Address</label>
                   <input type="text" 
                   placeholder="Buea | Cameroon"/>
               </div>
               <div className="newUserItem">
                   <label>Gender</label>
                   <div className="newUserGender">
                   <input type="radio" 
                   name="gender" id="male"
                   value="male"/>
                   <label for="Male">Male</label>

                   <input type="radio" 
                   name="gender" id="female"
                   value="female"/>
                   <label for="Female">Female</label>

                   <input type="radio" 
                   name="gender" id="other"
                   value="other"/>
                   <label for="Other">Other</label>
               </div>
               </div>
               <div className="newUserItem">
               <label for="Other">Active</label>
               <select name= "active" 
               className="newUserSelect"
               id="active">
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
               </select>
               </div>
               <button className="newUserButton">Create</button>
           </form>
           
            
        </div>
    )
}

export default NewUser
