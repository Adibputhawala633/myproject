import React from 'react';
export default function ContactForm() {
  return (
    
    <form>
    
      <p> 
        <label>
          Your name <br /> 
            <input type="text" name="your-name" required />
        </label>
      </p>

      <p>
        <label>
          Your email <br />
          <input type="email" name="your-email" required />
        </label>
      </p>

      <p>
        <label>
          Subject <br />
          <input type="text" name="your-subject" required />
        </label>
      </p>

      <p>
        <label>
          Your message (optional) <br />
       <textarea name="your-message" rows="5"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
