import { Link }  from "react-router-dom";
import { CalendarToday, 
    LocationSearching, 
    MailOutline, 
    PermIdentity, 
    PhoneAndroid, 
    Publish} from "@material-ui/icons";
import "./user.css";


const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link  to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                <div className="userShowTop">
                    <img 
                    className="userShowImg" 
                    src="/assets/person/bech.jpg" 
                    alt=""
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">
                            Nelson Bechem </span>
                        <span className="userShowUserTitle">
                            Software Engineer
                        </span>
                    </div>
                </div>
                <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
               < PermIdentity className="userShowIcon"/>
               <span className="userShowInfoTitle">annabeck99</span>
                </div>
            
                <div className="userShowInfo">
               < CalendarToday className="userShowIcon"/>
               <span className="userShowInfoTitle">7.7.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
               < PhoneAndroid className="userShowIcon"/>
               <span className="userShowInfoTitle">+237 678 25 10 82</span>
                </div>

                <div className="userShowInfo">
               <MailOutline className="userShowIcon"/>
               <span className="userShowInfoTitle">bechem200@gmail.com</span>
                </div>

                <div className="userShowInfo">
               < LocationSearching className="userShowIcon"/>
               <span className="userShowInfoTitle">Douala | Cameroon</span>
                </div>
                </div>
                </div>
    
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>

                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99"
                                className="userUpdateInput"
                                />
                                  <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" 
                                placeholder="Nelson Bechem"
                                className="userUpdateInput"
                                />
                                  <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                placeholder="bechem200@gmail.com"
                                className="userUpdateInput"
                                />
                                  <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99"
                                className="userUpdateInput"
                                />
                                  <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" 
                                placeholder="+237 678 25 10 82"
                                className="userUpdateInput"
                                />
                                  <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" 
                                placeholder="Douala|Cameroon"
                                className="userUpdateInput"/>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>

                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                            <img className="userUpdateImg"
                            src="/assets/person/king.jpg" 
                            alt=""/>
                            <label htmlFor="file">
                                <Publish className="userUpdateIcon"/>
                            </label>
        <input type="file" id="file" 
        style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    
    )
}

export default User
