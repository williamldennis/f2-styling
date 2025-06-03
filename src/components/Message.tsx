import type { MessageData } from "./MessageList"
import { clsx } from 'clsx';


export type MessageProps = {
    data: MessageData,
    messageType: string
}

const fromMeBodyStyle = clsx(
    "bg-me-color"
)

const notFromMeBodyStyle = clsx(
    "bg-not-me-color"
)

const fromMeImageStyle = clsx(
    "order-last"
)

const notFromMeImageStyle = clsx(
    "order-first"
)

const fromMeLayoutStyle = clsx(
    "justify-end"
)

const notFromMeLayoutStyle = clsx(
    ""
)

const messageBaseStyle = clsx(
    "rounded-lg"
)

const messageTopStyle = clsx(
    "rounded-t-lg rounded-bl-lg"
)

const messageBottomStyle = clsx(
    "rounded-b-lg rounded-tl-lg"
)

const messageMiddleStyle = clsx(
    ""
)

export default function Message({ data, messageType }: MessageProps) {
    return (
        <>
            <div className="">
                <div className={
                    clsx("flex p-1",
                        data.fromMe && fromMeLayoutStyle,
                        !data.fromMe && notFromMeLayoutStyle)}>
                    <div style={{ backgroundImage: `url(${data.picUrl})` }}
                        className={clsx("h-10 w-10 rounded-full m-2",
                            messageType == 'base' && "bg-over bg-center bg-no-repeat",
                            messageType == 'top' && "bg-over bg-center bg-no-repeat",
                            messageType == 'bottom' && "bg-over opacity-0 bg-center bg-no-repeat",
                            data.fromMe && fromMeImageStyle,
                            !data.fromMe && notFromMeImageStyle,
                        )}
                    >
                    </div>
                    <div className={
                        clsx("font-[inter] bg-gray-80 border text-wrap p-3 text-xs max-w-sm",
                            data.fromMe && fromMeBodyStyle,
                            !data.fromMe && notFromMeBodyStyle,
                            messageType == "bottom" && messageBottomStyle,
                            messageType == "base" && messageBaseStyle,
                            messageType == "top" && messageTopStyle,
                            messageType == "middle" && messageMiddleStyle
                        )}>
                        {data.body}
                    </div>


                </div>

            </div>



        </>

    )
}