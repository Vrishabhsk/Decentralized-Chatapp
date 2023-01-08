import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default function Chats({ acc, contract }) {
  const params = useParams();
  const reciever = params.id;
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const retrieveMessages = async () => {
    const result = await contract.methods.getMessages().call({ from: acc });
    let recieverMesssages = [];
    // eslint-disable-next-line array-callback-return
    result.map((msg) => {
      if ((msg.from === reciever && msg.to === acc) || (msg.from === acc && msg.to === reciever))
        recieverMesssages.push(msg);
    });
    setMessages(recieverMesssages);
    setLoading(false);
  };

  const shootMessage = async () => {
    setLoading(true);
    contract.methods
      .shootMessage(uuidv4(), reciever, moment().format(), newMsg)
      .send({ from: acc })
      .on("confirmation", () => {
        retrieveMessages();
      });
    setNewMsg("");
  };

  useEffect(() => {
    if (contract) retrieveMessages();
    //eslint-disable-next-line
  }, [contract]);

  return (
    <div>
      <h4 style={{ margin: 10, border: "2px solid", padding: 5 }}>
        Connected as: {acc} <span style={{ marginLeft: 25 }}>Reciever: {reciever}</span>
      </h4>
      <div className="layout">
        {messages.map((msg, idx) => {
          return (
            <>
              <div style={{ margin: 10, border: "1px solid" }} key={idx}>
                <h5 style={{ margin: 5 }}>
                  <span style={{ color: "gray" }}>
                    {msg.from === reciever
                      ? reciever.substring(0, 5)
                      : acc.substring(0, 5) + " ( You )"}
                    {" : "}
                  </span>
                  <span style={{ color: "#181D31" }}>{msg.message}</span>
                </h5>
              </div>
              <h6 style={{ margin: "0px 10px" }}>{moment(msg.timestamp).format("LLL")}</h6>
            </>
          );
        })}
        {loading && <h5 style={{ margin: 10 }}>Loading ...</h5>}
      </div>
      <div
        style={{
          margin: 10,
          border: "2px solid",
          padding: 5,
          display: "flex",
        }}
      >
        <input
          placeholder="Enter your message"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          style={{ width: "95%", padding: 5 }}
        />
        <button onClick={shootMessage} style={{ padding: 5, marginLeft: "auto", marginRight: 5 }}>
          Send
        </button>
      </div>
    </div>
  );
}
