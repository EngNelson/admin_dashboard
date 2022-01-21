import "./widgetLg.css";

const widgetLg = () => {

    const Button = ({ type }) =>{
        return <button className={" widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
          <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
              </tr>
              
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                   <img src="assets/person/bech.jpg" alt="" 
                   className="widgetLgImg"/>
              <span className="widgetLgName">Nelson Bechem</span>
                  </td>
                  <td className="widgetLgDate">7 July 2021</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type="Approved"/></td>

              </tr>
            
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                   <img src="assets/person/nel_vic.jpg" alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Muluh Victory</span>
                  </td>
                  <td className="widgetLgDate">9 Noveber 2020</td>
                  <td className="widgetLgAmount">$310.00</td>
                  <td className="widgetLgStatus"><Button type="Declined"/></td>
              </tr>
             
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                   <img src="assets/post/ark.jpg" alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Kingdom Light</span>
                  </td>
                  <td className="widgetLgDate">10 June 2020</td>
                  <td className="widgetLgAmount">$7700.00</td>
                  <td className="widgetLgStatus"><Button type="Pending"/></td>
              </tr>
             
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                   <img src="assets/person/me_groupe.jpg" alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Johnson Ashu</span>
                  </td>
                  <td className="widgetLgDate">1 March 2020</td>
                  <td className="widgetLgAmount">$1500.00</td>
                  <td className="widgetLgStatus"><Button type="Approved"/>
                  </td>
              </tr>
          </table>
            
        </div>
    )
}

export default widgetLg
