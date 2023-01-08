import moment from "moment";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Recipients({ acc, contract }) {
  const [recipients, setRecipients] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  const getRecipients = async () => {
    const result = await contract.methods.getRecipients().call({ from: acc });
    setRecipients(result);
    setLoading(false);
  };

  const shootMessage = async () => {
    setLoading(true);
    contract.methods
      .shootMessage(uuidv4(), address, moment().format(), "Hi, would you connect with me?")
      .send({ from: acc })
      .on("confirmation", () => {
        getRecipients();
      });
    setAddress("");
  };

  useEffect(() => {
    if (contract) getRecipients();
    //eslint-disable-next-line
  }, [contract]);

  return (
    <div>
      <h4 style={{ margin: 10, border: "2px solid", padding: 5 }}>Connected as: {acc}</h4>
      <div className="layout-2">
        <div style={{ display: "flex", margin: 10 }}>
          <h4 style={{ margin: 0 }}>List of Recipients</h4>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
            style={{ marginLeft: "auto", marginRight: 10 }}
          />
          <button onClick={shootMessage}>Create</button>
        </div>
        <hr />
        <div style={{ margin: 10 }}>
          {recipients.map((rec, idx) => {
            return (
              <>
                <div style={{ display: "flex" }} key={idx}>
                  <h5 style={{ margin: 0 }}>{rec}</h5>
                  <h5
                    onClick={() => (window.location = `/chat/${rec}`)}
                    style={{ margin: "0 10px 0 auto", cursor: "pointer" }}
                  >
                    View &#8594;
                  </h5>
                </div>
                <hr />
              </>
            );
          })}
        </div>
        {loading && <h5 style={{ margin: 10 }}>Loading ...</h5>}
      </div>
    </div>
  );
}
