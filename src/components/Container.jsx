import Aside from "./Aside"
import Main from "./Main"
import Right from "./Right"

const Container = () => {
  return (
    <div className='container'>
        <Aside/>
        <Main/>
        <Right/>
    </div>
  )
}

export default Container