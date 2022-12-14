import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_j29xpks',
        'template_6mo8vuh',
        refForm.current,
        'CLldRX7G-4BtVCjVj'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey !! Feel free to contact me anytime regarding anything. Let's
            help each other😊.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          C.Prashanth
          <br />
          <br />
          85/2a, <br />
          North perumal maistry street, <br />
          Madurai, <br />
          India <br />
          <span>cprashanth00@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[9.923324, 78.11567]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.923324, 78.11567]}>
              <Popup>Prashanth Lives Here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>{' '}
    </>
  )
}

export default Contact
