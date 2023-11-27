

const Dateschedule = () => {
  return (
    <div className="dateSchedule">
        <label htmlFor="Date" className="dateSchedule__label">Due Date and Schedule</label>
        <input type="date" name="date" id="Date" className="dateSchedule__input"/>
        <button className="dateSchedule__btn">Add repeating schedule</button>
    </div>
  )
}

export default Dateschedule