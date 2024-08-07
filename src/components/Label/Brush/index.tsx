/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-21 02:14:12
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:33:21
 */
import paper from 'paper';
import {  useEffect } from 'react';
import { BsBrush } from 'react-icons/bs';

import { ButtonCommon, EButtonType } from '@/components/ButtonCommon';

import pattern from '../../../styles/pattern';
import { judeToolExisted } from '../../../utils/paperjsWeapon';

import './index.scss';

const brushComponent = (props: any) => {
  const { activeTool, onClick } = props;
  const name = 'brush';
  let circle = null as any;
  let tool = null as any;

  const initTool = () => {
    tool = new paper.Tool();
    tool.name = name;
    circle = new paper.Path.Circle({
      center: 0,
      radius: 10,
      strokeColor: 'red',
    });
    // path = new paper.CompoundPath({});
    tool.onMouseDown = (e: any) => {
      console.log('down', e.point);

      // initPoint = e.point;
    };
    tool.onMouseDrag = (e: any) => {
      new paper.Path.Circle({
        center: e.point,
        radius: 10,
        fillColor: 'red',
      });
    };
    tool.onMouseMove = (e: any) => {
      circle.remove();
      circle = new paper.Path.Circle({
        center: e.point,
        radius: 10,
        fillColor: 'red',
      });
    };
    tool.onMouseUp = (e: any) => {};
    tool.activate();
  };
  const switchTool = () => {
    if (activeTool !== name) return;
    if (!judeToolExisted(paper, name)) {
      initTool();
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    switchTool();
    console.log('paper>>>', paper);
  }, [activeTool]);
  return (
    <div className='brush mgb10'>
      <ButtonCommon
        className={`w-[80px] ${pattern.flexCenter} ${
          activeTool === name ? 'bg-white-5' : ''
        }`}
        type={EButtonType.SIMPLE}
        onClick={() => onClick(name)}>
        <BsBrush />
      </ButtonCommon>
    </div>
  );
};

export default brushComponent;
