/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-25 01:16:22
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-31 18:04:29
 */
import { useTranslation, switchLanguage } from '@/i18n';
import ButtonTheme from '@/components/Theme/ButtonTheme'
import LabelComponent from '@/components/Label'

import { ButtonCommon, EButtonType} from './components/ButtonCommon';

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-full items-center justify-center text-green-500 bg-bgPrimaryColor">
      <LabelComponent />
      {/* <ButtonCommon 
        type={EButtonType.SIMPLE}
        onClick={() => {
          const lan = localStorage.getItem('language')
          switchLanguage(lan === 'zh'? 'en-US': 'zh')
        }}
        >
          <span>切换语言</span>
        </ButtonCommon>
      <ButtonTheme/> */}
    </div>
  );
}

export default App;
