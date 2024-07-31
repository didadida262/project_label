/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 18:03:52
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:27:20
 */
import paper from 'paper'
import { useEffect, useRef, useState } from 'react'

import imgUrl from '../../../assets/test.webp'
import useSyncCallback from './test'

import './index.scss'

const ViewComponent = () => {
  const [initPoint, setinitPoint] = useState({}) as any
  const [curPoint, setcurPoint] = useState({}) as any
  const canvasRef = useRef(null) as any
  useEffect(() => {
    init()
    drawPic()
  }, [])
  useEffect(() => {
    // console.log('useEffectinitPoint>>', initPoint)
  }, [initPoint])
  const drawPic = () => {
    const raster = new paper.Raster(imgUrl)
    raster.onLoad = () => {
      raster.fitBounds(paper.view.bounds, true)
    }
  }
  const onMouseDown = (e: any) => {
    console.log('tool--down')
    setinitPoint(e.point)
  }
  const onMouseDrag = useSyncCallback(() => {
    console.log('tool--drag')
    const delta = initPoint.subtract(curPoint)
    paper.projects.forEach((pro: any) => {
      const newCenter = pro.view.center.add(delta)
      pro.view.setCenter(newCenter)
    })
  })
  const onMouseMove = (e: any) => {
    
  }
  const onMouseUp = (e: any) => {
    
  }
  // 初始化画布，并确认相关参数初始值
  const init = () => {
    paper.setup(canvasRef.current)
    const project = paper.project as any
    project.name = 'test'
    project.view.setCenter(0, 0)
    project.view.onMouseDown = onMouseDown
    project.view.onMouseDrag = (e: any) => {
      setcurPoint(e.point)
      onMouseDrag()
    }
    project.view.onMouseMove = onMouseMove
    project.view.onMouseUp = onMouseUp
    console.log('paper>>>',paper)
  }
  return (
    <div className="view">
      <canvas ref={ canvasRef } className="main_canvas" />
    </div>
  )
}

export default ViewComponent