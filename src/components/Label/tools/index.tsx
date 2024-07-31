/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 18:03:52
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:28:42
 */

// import pencil from "@/assets/icons/pencil.svg"

import PencilComponent from './pencil';

import './index.scss'

interface IToolsprops {
  toolsList: Array<any>,
  handleClickTool: any
}

const ToolComponent = (props: IToolsprops) => {
  const { toolsList, handleClickTool } = props
  
  return (
    <div className="tools">
      <PencilComponent toolItem={toolsList[0]} handleClickTool={handleClickTool}/>
    </div>
  )
}

export default ToolComponent