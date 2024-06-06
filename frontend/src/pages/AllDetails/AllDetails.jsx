import React from "react";
import "./AllDetails.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";
import Nic1 from "../../assets/images/Nic.jpg";
import Nic2 from "../../assets/images/BackNic.jpg";
import LandRej1 from "../../assets/images/Frontland.jpg";
import LandRej2 from "../../assets/images/BackLand.jpg";
import Bankstatement from "../../assets/images/Bank.jpg"; 

const AllDetails = () => {
  return (
    <div>
      <NavigationBar />
      {/* <row> */}
        {/* <col > */}
      <div className="owner-details">
        <h2>Owner Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Mrs. Chamudi Pramodya Obesekara</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>Millagahawela, Bopitiya, Walallavita</td>
            </tr>
            <tr>
              <td>Id no.:</td>
              <td>751245495v</td>
            </tr>
            <tr>
              <td>Phone No:</td>
              <td>0773257896</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>kmaihome10@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <div className="images">
          <img src={Nic1} alt="Nic" />
          <img src={Nic2} alt="BackNic" />
/      </div>
      {/* </col> */}
      <div className="land-details">
        <h2>Land Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Mrs. Chamudi Pramodya Obesekara</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>Millagahawela, Bopitiya, Walallavita</td>
            </tr>
            <tr>
              <td>Area:</td>
              <td>250 area</td>
            </tr>
            <tr>
              <td>Land Reg. No.:</td>
              <td>320522</td>
            </tr>
            <tr>
              <td>Rr. No.:</td>
              <td>2355554</td>
            </tr>
          </tbody>
        </table>
        <div className="images">
          <img src={LandRej1} alt="Frontland" />
          <img src={LandRej2} alt="BackLand" />
        </div>
      </div>
      {/* </row> */}
      <div className="bank-details">
        <h2>Bank Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Mrs. Chamudi Pramodya Obesekara</td>
            </tr>
            <tr>
              <td>Id no.:</td>
              <td>751245495v</td>
            </tr>
            <tr>
              <td>Bank:</td>
              <td>BOC</td>
            </tr>
            <tr>
              <td>Branch:</td>
              <td>Walallavita</td>
            </tr>
            <tr>
              <td>Account No.:</td>
              <td>805012445</td>
            </tr>
          </tbody>
        </table>
        <div className="images">
          <img src={Bankstatement} alt="Bank" />
        </div>
      </div>

      <div className="approve-button">
        <button>Approve</button>
      </div>
      
      </div>
      <Footer />
      </div>
  );
};

export default AllDetails;
