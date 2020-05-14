import React , {Component , Fragment} from "react"
import "./layout.css"
import Header from "./layout/Header/Header"
import Sidebar from "./layout/Sidebar/Sidebar"
import Content from "./layout/Content/Content"
import {connect} from "react-redux"
import {toggleSidebar} from "./redux/actions"

class Layout extends Component{

    render(){

        const layoutStyle = {

            height:"100vh",
            width:"100vw",
            gridTemplateColumns:this.props.isActive ?  "0.1fr 1.7fr 1fr 1fr" : "1fr 1fr 1fr 1fr " ,
            gridTemplateRows: "0.2fr 2.5fr 0.3fr",
            gridTemplateAreas: this.props.isActive ? '"Header Header Header Header" "Sidebar Content Content Content" "Sidebar Footer Footer Footer"' : 
                                                    '"Header Header Header Header" "Content Content Content Content" "Footer Footer Footer Footer"'
        }
        return(

            <Fragment>
                <div className="grid-container" style={layoutStyle}>
                    <div className="Header">
                        <Header/>
                    </div>
                    {/* <div className="Footer">Footer</div> */}
                    {   this.props.isActive ? 
                        <div className="Sidebar" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                            <Sidebar/>
                        </div>
                        :
                        null
                    }
                    <div className="Content" style={{width:this.props.isActive ? "96.8vw" : "100vw" }}>
                        <Content/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {

    return {isActive:state.isActive}
}
export default connect(mapStateToProps,{toggleSidebar})(Layout)