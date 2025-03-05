import { useContext } from 'react'
import { Context } from '../../Provider'


const DrillList = () => {
  const [context, dispatch] = useContext(Context)

  const handleDrill = event => {
    console.log('clicked: ', event.currentTarget.id)
    dispatch({ type: 'drill', payload: event.currentTarget.id })
  }
  
  return (
    <div className="drill-list">
      <div id="1" onClick={handleDrill}>
        <header>
          <h2>Goaltending - Alternating Nets</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/goaltending_alternating_nets.jpg" alt="Goaltending - Alternating Nets" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - 1 Up - 1 Down - Gap Drill</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_1_up_1_down_gap_drill.jpg" alt="Checking Skills - 1 Up - 1 Down - Gap Drill" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Continuous Angling</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_continuous_angling.jpg" alt="Checking Skills - Continuous Angling" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Forecheck Progression</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_forecheck_progression.jpg" alt="Checking Skills - Forecheck Progression" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Forecheck Progression - F1 - F2</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_forecheck_progression_F1_F2.jpg" alt="Checking Skills - Forecheck Progression - F1 - F2" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Long Angle</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_long_angle.jpg" alt="Checking Skills - Long Angle" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Mirror Gap Control</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_mirror_gap_control.jpg" alt="Checking Skills - Mirror Gap Control" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Defense - Retrieval - Attack F1</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/defence_retreival_attack_F1.jpg" alt="Defense - Retrieval - Attack F1" />
      </div>

      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Forecheck Progression - F1 - F2</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_forecheck_progression_F1_F2.jpg" alt="Checking Skills - Forecheck Progression - F1 - F2" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Long Angle</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_long_angle.jpg" alt="Checking Skills - Long Angle" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Checking Skills - Mirror Gap Control</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/checking_skills_mirror_gap_control.jpg" alt="Checking Skills - Mirror Gap Control" />
      </div>
      <div onClick={handleDrill}>
        <header>
          <h2>Defense - Retrieval - Attack F1</h2>
        </header>
        <img src="https://raw.githubusercontent.com/sswahn/sports-app/refs/heads/main/public/images/defence_retreival_attack_F1.jpg" alt="Defense - Retrieval - Attack F1" />
      </div>
    </div>
  )
}

export default DrillList
