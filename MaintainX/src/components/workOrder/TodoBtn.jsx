import { useState } from "react";

const TodoBtn = () => {

  const {eachTab, setEachTab} = useState(0); 

  return (
    <div className="Tabby">
        <div className="Tabby__btnCont">
        <button className={eachTab === 0 ? "activeBtn" : "tab"} onClick={() => setEachTab(0)}>To Do</button>
        <button className={eachTab === 1 ? "activeBtn" : 'tab'} onClick={() => setEachTab(1)}>Done</button>
        </div>
        <div className="tabsContents">
          <div className={ eachTab === 0 ? 'activeTab': 'tab__content'}></div>
        </div>
    </div>
  )
}

export default TodoBtn