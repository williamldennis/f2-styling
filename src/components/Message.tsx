import type { MessageData } from "./MessageList"
import { clsx } from 'clsx';


export type MessageProps = {
    data: MessageData
}

const fromMeBodyStyle = clsx(
    "bg-blue-400"
)

const notFromMeBodyStyle = clsx(
    "bg-gray-400"
)

const fromMeImageStyle = clsx(
    ""
)

const notFromMeImageStyle = clsx(
    ""
)

const fromMeLayoutStyle = clsx(
    "flex-row-reverse"
)

const notFromMeLayoutStyle = clsx(
    ""
)

export default function Message({ data }: MessageProps) {
    return (
        <>
            <div className="">
                <div className={
                    clsx("flex",
                        data.fromMe && fromMeLayoutStyle,
                        !data.fromMe && notFromMeLayoutStyle)}>
                    <div style={{ backgroundImage: `url(${data.picUrl})` }}
                        className={clsx("bg-over bg-center h-64 w-64 bg-no-repeat",
                            data.fromMe && fromMeImageStyle,
                            !data.fromMe && notFromMeImageStyle
                        )}
                    >
                    </div>
                    <div className={
                        clsx("bg-gray-80 border w-100 text-wrap p-2 mt-3 text-xs",
                            data.fromMe && fromMeBodyStyle,
                            !data.fromMe && notFromMeBodyStyle)}>
                        {data.body}
                    </div>


                </div>
            </div>


        </>

    )
}