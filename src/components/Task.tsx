import { clsx } from 'clsx';
import type { TaskData } from './TaskList';

export type TaskProps = {
    data: TaskData,
    handleCheckBox: (id: number) => void
}

export default function Task({ data, handleCheckBox }: TaskProps) {

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
                    <div className={!data.checked ? taskBodyUnchecked : taskBodyChecked}>
                        <button
                            className={!data.checked ? taskBoxUnchecked : taskBoxChecked}
                            onClick={() => handleCheckBox(data.id)}
                        />
                        <div className='p-4 '>
                            <p className='font-[inter] font-light'>
                                {data.title}
                            </p>
                            <p className='font-[inter] text-xs text-body font-light mt-1'>
                                {data.body}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}