import Message from "./Message"

export type MessageData = {
    id: number,
    body: string,
    fromMe: boolean
}

const messageList: MessageData[] = [
    {
        "id": 1,
        "body": "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
        "fromMe": true
    },
    {
        "id": 2,
        "body": "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. ",
        "fromMe": true
    },
    {
        "id": 3,
        "body": "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
        "fromMe": false
    },
    {
        "id": 4,
        "body": "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
        "fromMe": true
    }
]

export default function MessageList() {
    return (
        <div>
            list of messages
            <Message
                data={messageList[0]}
            />
            <Message
                data={messageList[1]}
            />
            <Message
                data={messageList[2]}
            />
            <Message
                data={messageList[3]}
            />
        </div>
    )
}