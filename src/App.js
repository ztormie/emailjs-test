import emailjs from '@emailjs/browser';

function App() {
  
  function sendEmail(e) {
    e.preventDefault(); // Stop page from refreshing

    emailjs.sendForm('service_tcdufeh', 'template_8dnnp4h', e.target, 'igKdhOcJ8_did7bFv')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Email failed to send.');
      });

    e.target.reset(); // Clear the form
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Send Email Test</h1>
      <form onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required style={{ display: "block", marginBottom: "10px" }} />
        <input type="email" name="user_email" placeholder="Your Email" required style={{ display: "block", marginBottom: "10px" }} />
        <textarea name="message" placeholder="Your Message" required style={{ display: "block", marginBottom: "10px" }} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
