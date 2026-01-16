import { Link } from "react-router-dom";

export default function ContactSuccess() {
  return (
    <>
      <style>
        {`
          html, body, #root {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }

          .popup-bg {
            background: rgba(0, 0, 0, 0.7);
            position: fixed;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: 99;
          }

          .popup {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #000;
            background: #fff;
            width: 90%;
            max-width: 400px;
            border-radius: 5px;
            text-align: center;
            padding: 10px;
            padding-bottom: 50px;
          }

          .popup h4 {
            color: green;
          }

          .checkmark__circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke: #1d7539;
            fill: none;
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          }

          .checkmark {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: block;
            stroke-width: 3;
            stroke: #fff;
            stroke-miterlimit: 10;
            margin: 10% auto;
            box-shadow: inset 0px 0px 0px #1d7539;
            animation: fill 0.4s ease-in-out 0.4s forwards,
                       scale 0.3s ease-in-out 0.9s both;
          }

          .checkmark__check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
          }

          @keyframes stroke {
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes scale {
            0%, 100% {
              transform: none;
            }
            50% {
              transform: scale3d(1.1, 1.1, 1);
            }
          }

          @keyframes fill {
            100% {
              box-shadow: inset 0px 0px 0px 150px #1d7539;
            }
          }

          .popup-close {
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
          }
        `}
      </style>
      <iframe src="/" height="100%" width="100%"></iframe>
      <div className="popup-bg">
        <div className="popup">
          <Link to="/"><svg xmlns='http://www.w3.org/2000/svg' width="18" height="18" className="popup-close" viewBox='0 0 16 16' fill='000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg></Link>
          <svg width="100" height="100" className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
            <circle className="checkmark__circle" cx="26" cy="26" r="26" fill="none"></circle>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </g>
          </svg>
          <h4>Thanks!</h4>
          <p>Thanks for contact me I will contact you soon...</p>
        </div>
    </div>
    </>
  );
}
