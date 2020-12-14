import React, { useEffect, useRef, useState } from "react"
import { email } from "../../config"
import styled from "styled-components"
import sr from "../../utils/sr"
import { srConfig } from "../../config"

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--red);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      margin-right: 10px;
      font-size: var(--fz-sm);
      counter-increment: section;
      content: "0" counter(section) ".";
    }

    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(var(--fz-heading), 5vw, 100px);
  }

  p {
    font-size: var(--fz-md);
    color: var(--light-grey);
  }

  .email-link {
    margin-top: 30px;
    ${({ theme }) => theme.mixins.bigButton}
    ${({ theme }) => theme.mixins.boxShadow}
    @media (max-width:768px) {
      ${({ theme }) => theme.mixins.button}
      margin-top: 15px;
    }
  }
`

const Contact = () => {
  const revealContainer = useRef(null)
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const { name, email, message } = state

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="overline">Contact</h2>
      <h2 className="title">Say Hello!</h2>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a className="email-link" href={`mailto:${email}`}>
        Message me
      </a>
      <form
        onSubmit={e => handleSubmit(e)}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input
          type="hidden"
          name="subject"
          value={`${name} sent you a message on vportier.com`}
        />
        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={message}
              onChange={e => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </StyledContactSection>
  )
}

export default Contact
