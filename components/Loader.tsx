import { Audio } from 'react-loader-spinner'


export default function Loader(){
    return (

        <div style={{marginLeft: "44%",
            marginTop: "15%",
            marginBottom :"10%"
        
            }}>
        <Audio
          height="80"
          width="80"
          
          color="Red"
          ariaLabel="loading"
      
        />
        </div>
          )
}