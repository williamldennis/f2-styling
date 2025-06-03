import type { MessageData } from "./MessageList"


export type MessageProps = {
    data: MessageData
}

export default function Message({ data }: MessageProps) {
    return (
        <div>
            {data.body}
        </div>
    )
}