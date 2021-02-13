import styles from './Slogan.module.css'

function Slogan(){
    return(
      <div className={styles.slogan}>
        <p>
        Rick Sanchez é um cientista genial e alcoólatra que foi morar com a família 
        de sua filha Beth, uma cirurgiã cardíaca de equinos. Ele divide seu tempo 
        entre desenvolver projetos altamente tecnológicos em seu laboratório 
        (garagem da casa de Beth) e levar seu neto de 14 anos Morty em aventuras 
        perigosas e surreais pelo Multiverso. Combinados com tensões preexistentes 
        dentro da família, esses eventos causam ao sensível Morty muito angústia em 
        casa e na escola.
        </p>
        
        <style jsx>{`
        div {
          color: white;
          font-size: 20px;
         
        }
       
      `}</style>
     
        

      </div>
  
    )
}
export default Slogan;

