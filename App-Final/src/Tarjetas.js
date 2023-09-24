import { useState } from 'react'
import API from './API.js'
import './tarjetas.css'
import { useContext } from 'react';
import { P5Context } from './context5.js';

function getInvestmentPlanDetailsByNumber(planNumber,planesDeInversion) {

  // Ensure the plan number is within valid range (0 to length of the array - 1).
  if (planNumber >= 0 && planNumber < planesDeInversion.length) {
    const plan = planesDeInversion[planNumber];
    return {
      name: plan.name,
      description: plan.description,
      investorProfile: plan.investorProfile,
      risk: plan.risk,
      details: plan.details
    };
  } else {
    return {
      error: "Número de plan no válido. Por favor, ingresa un número de plan válido."
    };
  }
}

function Tarjetas({header, content}) {
  let i=0
  const inP = [
    {
      name: "Banorte Cete Fund",
      description: "Allows you to earn additional returns on your savings with no minimum commitment and the immediate liquidity you need.",
      investorProfile: "Ideal for the Capital Preservation profile that maintains its capital stable without taking risks.",
      risk: "Extremely low risk",
      details: "It's a 100% debt fund with a short-term investment horizon composed of government and banking securities aimed at obtaining additional returns beyond government debt."
    },
    {
      name: "Banorte Digital Fund",
      description: "Designed for investors looking to grow their savings in a completely digital way.",
      investorProfile: "Ideal for the Capital Preservation profile that maintains its capital stable without taking risks.",
      risk: "Extremely low risk",
      details: "It's a 100% debt fund with a short-term investment horizon composed of government and banking securities aimed at obtaining additional returns beyond government debt."
    },
    {
      name: "Banorte Term Fund",
      description: "Designed for investors looking to receive an additional reward for their commitment.",
      investorProfile: "Ideal for the Capital Preservation profile that maintains its capital stable without taking risks.",
      risk: "Extremely low risk",
      details: "It's a 100% debt fund with a short-term investment horizon composed of government, banking, and/or corporate securities with the highest credit quality (AAA) and an objective return of 100%."
    },
    {
      name: "Banorte Dollar Fund",
      description: "Targeted at investors seeking stability and better protection of the peso's value against the US dollar (USD).",
      investorProfile: "Ideal for the Capital Preservation profile that maintains its capital stable without taking risks.",
      risk: "Low risk",
      details: "It primarily consists of debt assets with the highest credit quality (AAA) denominated, indexed, and/or referenced to the dollar."
    },
    {
      name: "Dollars Plus",
      description: "Allows you to access a currency hedge strategy (peso – dollar) with additional returns.",
      investorProfile: "Ideal for the Conservative profile seeking to grow capital steadily with some risk and limited volatility.",
      risk: "Moderate risk",
      details: "It mainly consists of assets denominated in dollars."
    },
    {
      name: "Strategy Fund",
      description: "Has a relatively conservative asset selection strategy that allows you to preserve and enhance your wealth.",
      investorProfile: "Ideal for the Conservative profile seeking to grow capital steadily with some risk and limited volatility.",
      risk: "Moderate risk",
      details: "It's a 100% debt fund with a medium-term investment horizon composed of government debt funds, both national and international."
    },
    {
      name: "Strategy Fund NTE1",
      description: "Has a lower exposure to Equity such as stocks and ETFs, and a higher exposure to Debt.",
      investorProfile: "Ideal for the Conservative profile seeking to grow capital steadily with some risk and limited volatility.",
      risk: "Moderate to high risk",
      details: "It invests around 80% of its assets in Debt instruments, and 20% in Equity instruments."
    },
    {
      name: "Strategy Fund NTE2",
      description: "Maintains a balance in the composition of its portfolio, with a higher exposure to Debt and lower exposure to Equity such as stocks and ETFs.",
      investorProfile: "Ideal for the Moderate profile seeking consistent capital growth with some stability.",
      risk: "High risk",
      details: "It invests around 60% of its assets in Debt instruments, and 40% in Equity instruments."
    },
    {
      name: "Strategy Fund NTE3",
      description: "Invests more heavily in Equity instruments such as stocks and ETFs, and to a lesser extent in Debt instruments.",
      investorProfile: "Ideal for the Balanced profile seeking significant capital growth in the long term.",
      risk: "High risk",
      details: "It invests around 40% of its assets in Debt instruments, and 60% in Equity instruments."
    },
    {
      name: "Banorte IPC Plus Fund",
      description: "Referenced to the Price and Quotes Index (IPC) of the Mexican Stock Exchange.",
      investorProfile: "Ideal for the Growth profile aiming to build long-term wealth, accepting considerable risk and substantial losses.",
      risk: "Very high risk",
      details: "It invests at least 90% of its portfolio in shares of companies listed on the stock exchanges and to a lesser extent in National and International Debt instruments."
    }
  ];
  const {contextDataE, setContextDataE} = useContext(P5Context);
  const numero = contextDataE;
  const numeroRedondeado = Math.round(numero) - 1;
  let rr=getInvestmentPlanDetailsByNumber(numeroRedondeado,inP)
  console.log(rr)
  console.log(numeroRedondeado)

  const [message, setMessage] = useState("")
  const [showMessage, setshowMessage] = useState(false)
  const [mensaje, setMensaje] = useState("")
  const [messages, setMessages] = useState(['Given this context, answer me, you\'re a finance assessor called banortin and youre trying to convince me my plan is the adecuated, answer me as the name of client or If i give you my name, use that, you are working in banorte, my plan is the following: '+JSON.stringify(rr)]);
  const [messagesBot, setMessagesBot] = useState([])

    const handleSubmit = (e) => {
    e.preventDefault()
    setshowMessage(true)
    const apiKey = 'AIzaSyD5XwIYEFhSD7qFGXJ93kJHrLYxSNmNKOQ'; // Replace with your actual API key
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText';
    
    const data = {
      prompt: {
        text: messages+message
      }
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    fetch(`${apiUrl}?key=${apiKey}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data here
        setMensaje(data["candidates"][0]["output"]);
        setMessages([...messages, 'Usuario:' + message+'\n','Bot: ' + data["candidates"][0]["output"]]); 
      })
      
      .catch(error => {
        // Handle errors here
        console.error('There was a problem with the fetch operation:', error);
      });
      //setPreviousmessage(previous_message+message)
      
      setMessage(message.substring(1));

  
      setMessage('');
      
  }


  return (
    <>
      <div className='contenedor'>
        <div className='tarjeta'>
          <div className='chat-window'>
          
          {messages.slice(1).map((msg, index) => (
  <p key={index} className='message' class="eachMessage">{msg}</p>
))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className='sendMensaje'>
              <div className='mensaje'>
                <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} className='textInput' />
              </div>
              <div className='verticalAligned'>
                <button className='boton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg> </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Tarjetas
