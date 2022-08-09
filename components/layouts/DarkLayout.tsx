import { FC } from "react"

//export const DarkLayout: FC= ({ children }) => {
  export const DarkLayout = (props: any) => {
  return (
    <div style={{
        // backgroundColor: 'rgba(0,0,0,3)',
        backgroundColor: '#B5B2B2',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>DarkLayout</h3>
        <div>
        {props.children}
        </div>    
    </div>
  )
}
