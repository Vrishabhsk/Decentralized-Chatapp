// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract ChatDapp {
    
    //message structure for chats
    struct Message {
        string id;
        address from;
        address to;
        string message;
        string timestamp;
    }

    //store message corresponding to each address
    mapping (address => Message[]) private messages;
    //store address of recipient corresponding to each address
    mapping (address => address[]) private recipients;
    //store the no. of recipient to check repetition of address
    mapping (address => uint256) private recipientsCount;

    //fn to check if user has sent message to the recipient before
    function addressExistsInRecipients (address whose, address check) private view returns (bool exists) {
        bool flag = false;
        for (uint256 i = 0; i < recipientsCount[whose]; i++) {
            if(recipients[whose][i] == check) {
                flag = true;
            }
        }
        return flag;
    }

    //fn to send message and store results 
    function shootMessage(string memory _id, address _to, string memory _timestamp, string memory _message) public {
        //creating the Message struct object
        Message memory message = Message({
            id: _id,
            from: msg.sender,
            to: _to,
            message: _message,
            timestamp: _timestamp   
        });
        messages[msg.sender].push(message);
        messages[_to].push(message);
        if(!addressExistsInRecipients(msg.sender, _to)) {
            recipients[msg.sender].push(_to);
            recipientsCount[msg.sender]++;
        }
        if(!addressExistsInRecipients(_to, msg.sender)) {
            recipients[_to].push(msg.sender);
            recipientsCount[_to]++;
        }
    }

    //fn to get messages
    function getMessages() public view returns (Message[] memory userMessages) {
        return messages[msg.sender];
    }

    //fn to get recipients
    function getRecipients() public view returns (address[] memory recps) {
        return recipients[msg.sender];
    }

}

