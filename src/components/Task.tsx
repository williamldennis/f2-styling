import { clsx } from 'clsx';
import { useState } from 'react'

export type TaskProps = {
    id: number,
    title: string,
    body: string
}

export default function Task({ id, title, body }: TaskProps) {
    const [checked, setChecked] = useState(false)

    const handleCheckBox = () => {
        console.log("clicked");

        setChecked(prev => !prev)
        console.log({ checked })

        return checked

    }

    const taskBodyUnchecked = clsx(
        'flex flex-row border-1 border-task-border h-18 w-100 bg-white rounded-lg items-center'
    )

    const taskBodyChecked = clsx(
        'flex flex-row border-1 border-task-border h-18 w-100 bg-body-checked rounded-lg items-center'
    )

    const taskBoxChecked = clsx(
        'w-6 h-6 rounded-lg bg-box-checked ml-5'
    )

    const taskBoxUnchecked = clsx(
        'border border-task-border w-6 h-6 rounded-lg border-box-unchecked-border ml-5'
    )

    return (
        <>
            <div>
                <div className='flex flex-column items-center m-6'>
                    <div className={!checked ? taskBodyUnchecked : taskBodyChecked}>
                        <button
                            className={!checked ? taskBoxUnchecked : taskBoxChecked}
                            onClick={() => handleCheckBox()}
                        />
                        <div className='p-4 '>
                            <p className='font-[inter] font-light'>
                                {title}
                            </p>
                            <p className='font-[inter] text-xs text-body font-light mt-1'>
                                {body}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}