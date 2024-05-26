import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const Message = () => {
  const steps = [
    {
      id: "Great",
      message: "Hello! Welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting!",
    },
    {
      id: "waiting!",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "HI {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "Booking", label: "Booking", trigger: "Booking" },
        { value: "Payment", label: "Payment", trigger: "Payment" },
      ],
    },
    {
      id: "Booking",
      message: "Thanks for telling your booking issue! We will solve it soon.",
      end: true,
    },
    {
      id: "Payment",
      message: "Thanks for telling your payment issue! We will solve it soon.",
      end: true,
    },
  ];

  return (
    <div>
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </div>
  );
};

export default Message;
