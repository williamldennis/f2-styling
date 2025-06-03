import type { MessageData } from "./MessageList"
import { clsx } from 'clsx';


export type MessageProps = {
    data: MessageData
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

export default function Message({ data }: MessageProps) {
    return (
        <>
            <div className="">
                <div className={
                    clsx("flex p-1",
                        data.fromMe && fromMeLayoutStyle,
                        !data.fromMe && notFromMeLayoutStyle)}>
                    <div style={{ backgroundImage: `url(${data.picUrl})` }}
                        className={clsx("bg-over bg-center h-20 w-40 bg-no-repeat p-5",
                            data.fromMe && fromMeImageStyle,
                            !data.fromMe && notFromMeImageStyle
                        )}
                    >
                    </div>
                    <div className={
                        clsx("bg-gray-80 border text-wrap p-3 text-xs rounded-xl max-w-sm",
                            data.fromMe && fromMeBodyStyle,
                            !data.fromMe && notFromMeBodyStyle)}>
                        {data.body}
                    </div>


                </div>

            </div>



        </>

    )
}