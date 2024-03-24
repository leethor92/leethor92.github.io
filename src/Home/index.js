import './style.css'
import avatar from '../assets/avatar.png'

export default function Home() {

    return (
        <div className="App-header">
        <img 
          src={avatar}
          alt='avatar'
        />
        <h1 className="primary_heading">
          Lee Thornton
        </h1>
        <h2 className="sub_heading">Full Stack Engineer & Technology Enthusiast</h2>
      </div>
    )
}