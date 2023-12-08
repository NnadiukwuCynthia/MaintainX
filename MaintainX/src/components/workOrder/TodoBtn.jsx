import { useState } from "react";
import styles from "../../assets/SCSS/tabBtn.modules.css"

const TodoBtn = () => {

  const {eachTab, setEachTab} = useState(0); 

  return (
    <div>
        <button className={eachTab === 0 ? `${styles.tab} ${styles.active}` : styles.tab} onClick={() => setEachTab(0)}>To Do</button>
        <button className={eachTab === 1 ? `${styles.tab} ${styles.active}` : styles.tab} onClick={() => setEachTab(1)}>Done</button>
    </div>
  )
}

export default TodoBtn