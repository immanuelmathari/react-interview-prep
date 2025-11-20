/*
Contact Form

Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

Requirements
- The form should contain the following elements
   i) Name field
   ii) Email field
   iii) Message field. Since the message can be long, a <textarea> will be more suitable
   iv) Submit button 
      - contains the text "Send"
      - clicking on the submit button submits the form
- The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question
- There is no need todo any client-side validation on the fields. Validation will be done on the server side.

Submission API
Upon submission, POST the form data to https://questions.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.
- If all the form fields are correctly filled up, you will see an alert containing a success message.
Congratulations

Notes
You do not need JavaScript for this question, the focus is on HTML form validation and submission

*/

import submitForm from "./05-SubmitForm"

export default function App5()
{
    return (
        <>
        <form method="POST" action="https://questions.greatfrontend.com/api/questions/contact-form" onSubmit={submitForm}>
            <input type="text" name="name" placeholder="Please enter your name" required />
            <input type="email" name="email" placeholder="Please enter your email" required />
            <textarea rows="5" name="message" placeholder="Please enter your comment" required ></textarea>
            <button type="submit">Send</button>
        </form>
        </>
    )
}