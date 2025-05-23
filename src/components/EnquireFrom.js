

function EnquiryForm() {
    return (
    <div className="enquiry-div">
      <div className="containerF">
        <h6 className="enquiry-label">ENQUIRE NOW</h6>
        <h1 className="enquiry-title">WRITE A MESSAGE TO US</h1>
        <div className="form">
          <input className="enquiry-input" type="text" placeholder="Company Name" />
          <input className="enquiry-input" type="email" placeholder="Email Address" />
          <input className="enquiry-input" type="tel" placeholder="Phone number" />
          <input className="enquiry-input" type="text" placeholder="Messages" />
          <div className="submit-wrapper">
            <button className="enquiry-btn" type="submit">SUBMIT NOW</button>
          </div>
        </div>
      </div>
    </div>
    );
  }

//   function EnquiryForm() {
//     return (
//         <div className="enquiry-div">

//       <div className="container">
//         <h2 className="enquire-label">ENQUIRE NOW</h2>
//         <h1 className="title">WRITE A MESSAGE TO US</h1>
//         <form>
//           <input type="text" placeholder="Company Name" />
//           <input type="email" placeholder="Email Address" />
//           <input type="tel" placeholder="Phone number" />
//           <input type="text" placeholder="Messages" />
//           <div className="submit-wrapper">
//             <button type="submit">SUBMIT NOW</button>
//           </div>
//         </form>
//         <div className="decorative-square"></div>
//       </div>
//         </div>
//     );
//   }

  export default EnquiryForm;