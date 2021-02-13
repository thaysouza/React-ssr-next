import Button from './components/Button'
import Slogan from './components/Slogan'

function HomePage() {
    return (
    
        <div>
       
      <p>Rick and Morty</p>
      <style jsx>{`
        p {
          color: black;
          font-size: 40px;
          padding-top:20px;
        }
        div {
          background: gray;
          height:400px;
        }
      
      `}</style>
      <style global jsx>{`
        body {
         padding: 60px;
         text-align:center
        
        }
      `}</style>
      
          <Slogan />
         <Button />

    </div>
         
       


     
    )
  }
  
  export default HomePage