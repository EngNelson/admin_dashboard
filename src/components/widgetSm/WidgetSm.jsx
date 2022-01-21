import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
         <span className="widgetSmTitle">New Join Member</span>
         <ul className="widgetSmList">
             <li className="widgetSmListItem">
                 <img src="assets/person/nassah.jpg" alt="" className="widgetSmImg"/>
                 <div className="widgetSmUser">
                     <span className="widgetSmUsername">Nasah Kuma</span>
                     <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
        <Visibility/>
         Display
                 </button>
             </li>
             <li className="widgetSmListItem">
                 <img src="assets/person/suit_red.jpg" alt="" className="widgetSmImg"/>
                 <div className="widgetSmUser">
                     <span className="widgetSmUsername">Kambang Sinclair</span>
                     <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
        <Visibility/>
         Display
                 </button>
             </li>
             <li className="widgetSmListItem">
                 <img src="assets/person/raise.jpg" alt="" className="widgetSmImg"/>
                 <div className="widgetSmUser">
                     <span className="widgetSmUsername">Ateh Raise</span>
                     <span className="widgetSmUserTitle">State Nurse</span>
                 </div>
                 <button className="widgetSmButton">
        <Visibility/>
         Display
                 </button>
             </li>
             <li className="widgetSmListItem">
                 <img src="assets/post/clair.jpg" alt="" className="widgetSmImg"/>
                 <div className="widgetSmUser">
                     <span className="widgetSmUsername">Carline Clair</span>
                     <span className="widgetSmUserTitle">B. Administrator</span>
                 </div>
                 <button className="widgetSmButton">
        <Visibility className="widgetSmIcon"/>
         Display
                 </button>
             </li>
             <li className="widgetSmListItem">
                 <img src="assets/post/grace.jpg" alt="" className="widgetSmImg"/>
                 <div className="widgetSmUser">
                     <span className="widgetSmUsername">Marry Grace</span>
                     <span className="widgetSmUserTitle">Agricultural Engineer</span>
                 </div>
                 <button className="widgetSmButton">
        <Visibility className="widgetSmIcon"/>
         Display
                 </button>
             </li>
         </ul>
        </div>
    )
}

export default WidgetSm
