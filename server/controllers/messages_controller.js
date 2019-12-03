let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
    
        const msg = {
            text: text,
            time: time,
            id: id
        }
    
        messages.push(msg);
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        let messageIndex = messages.findIndex(v => v.id == req.params.id);

        if(messageIndex == -1) {
            res.status(500).send('Message not found');
        } else {
            let {text} = req.body;

            if(text) messages[messageIndex].text = text;
            res.status(200).send(messages);
        }
    },

    delete: (req, res) => {
        let messageIndex = messages.findIndex(v => v.id == req.params.id);

        if(messageIndex == -1) {
            res.status(500).send('Message not found');
        } else {
            messages.splice(messageIndex, 1);

            res.status(200).send(messages);
        }
    }
};