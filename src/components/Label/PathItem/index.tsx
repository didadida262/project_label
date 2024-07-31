/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-19 12:36:19
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:29:44
 */
import  { useEffect } from 'react'

import { ButtonCommon, EButtonType } from '@/components/ButtonCommon'

import './index.scss'

const PathItemComponent = (props: any) => {
    const { data } = props
    const handleClickPathItem = (item:any) => {
        item.path.selected = !item.path.selected
    }
    useEffect(() => {
    }, [data])
    return (
        <div className='PathItemComponent pd5'>
            { data.map((item:any, index:any) => {
                return (
         
                    <ButtonCommon
                        type={EButtonType.SIMPLE}
                        className='w-full mb-[5px] rounded-[0px]'
                        onClick={() => handleClickPathItem(item)}>
                        { item.name }
                    </ButtonCommon>
                )
            })}
        </div>
    )
}
export default PathItemComponent