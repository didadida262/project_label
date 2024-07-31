/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 18:03:52
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:27:58
 */

import { Button } from 'antd';
import paper from 'paper'

import './index.scss'

interface IToolItemProps {
  toolItem: any,
  handleClickTool: any
}

const PencilComponent = (props: IToolItemProps) => {
  const { toolItem, handleClickTool } = props
  const createPencile = new paper.Tool()
  const onMouseDown = (e:any) => {
    console.log('pencile>>>>down', e)
    
  }
  const onMouseDrag = (e:any) => {
    console.log('pencil--drag')
    
  }
  const onMouseMove = (e:any) => {
    
  }
  const onMouseUp = (e:any) => {
    
  }
  createPencile.onMouseDown = onMouseDown
  createPencile.onMouseDrag = onMouseDrag
  createPencile.onMouseMove = onMouseMove
  createPencile.onMouseUp = onMouseUp
  return (
    <div className="tool-item">
      <Button
        key={toolItem.key} 
        icon={toolItem.icon} 
        style={{width: 80, marginBottom: 10}}
        onClick={() => handleClickTool(toolItem.key)}
      />
    </div>
  )
}

export default PencilComponent