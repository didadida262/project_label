/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-14 02:31:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:29:29
 */
import paper from 'paper';
import  {  useEffect } from 'react';
import { BsPencil } from 'react-icons/bs';

import { ButtonCommon, EButtonType } from '@/components/ButtonCommon';

import pattern from '../../../styles/pattern';
import { judeToolExisted } from '../../../utils/paperjsWeapon';

import './index.scss';

const PencilComponent = (props: any) => {
  const { activeTool, onClick, submitPath } = props;
  const name = 'pencil';
  let path = {} as any;
  let tool = null as any;
  const initTool = () => {
    console.log(`创建${name}-tool`);
    tool = new paper.Tool();
    tool.name = name;
    tool.onMouseDown = (e: any) => {
      console.log('down', e.point);

      path = new paper.Path({
        strokeColor: 'green',
        strokeWidth: 5,
      });
      path.add(e.point);
    };
    tool.onMouseDrag = (e: any) => {
      path.add(e.point);
      console.log('drag', e.point);
    };
    tool.onMouseMove = (e: any) => {};
    tool.onMouseUp = (e: any) => {
      console.log('up', e.point);

      path.add(e.point);
      submitPath(path.clone());
      path.remove();
    };
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
  }, [activeTool]);
  return (
    <div className='pencil mgb10'>
      <ButtonCommon
        className={`w-[80px] ${pattern.flexCenter} ${
          activeTool === name ? 'bg-white-5' : ''
        }`}
        type={EButtonType.SIMPLE}
        onClick={() => onClick(name)}>
        <BsPencil />
      </ButtonCommon>
    </div>
  );
};

export default PencilComponent;
