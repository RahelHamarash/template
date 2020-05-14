import React , {Component , Fragment} from "react"
import {toggleSidebar} from "../../redux/actions"
import {connect} from "react-redux"
import {Button} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import "./header.css"

class Header extends Component{

    constructor(props){

        super(props)
        this.toggleSidebarMenu = this.toggleSidebarMenu.bind(this)
    }
    toggleSidebarMenu(){

        this.props.toggleSidebar()
    }
    render(){

        return(

            <div className="header">
                
                <Button style={{ marginLeft:"5px" }} inverted size="small" onClick={this.toggleSidebarMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 24 24" className="header-icons">
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                    </svg>
                </Button>
                <span style={{marginLeft:"20px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="header-icons">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-1.141 17.115c-.065.087-.117.457-.203.749-.098.337-.407.299-.75.232-.499-.097-.945-.125-1.464-.039-.898.149-1.83 1.477-3.393 1.477-1.682 0-2.557-1.321-3.49-1.477-.951-.158-1.497.096-1.826.096-.252 0-.35-.154-.388-.282-.084-.287-.138-.664-.204-.754-.646-.1-2.103-.354-2.141-1.005-.009-.169.11-.318.277-.346 2.139-.352 3.501-2.765 3.279-3.287-.158-.372-.84-.505-1.127-.619-.74-.293-.843-.63-.799-.86.061-.32.451-.535.778-.535.314 0 .869.42 1.301.181-.065-1.123-.223-2.728.177-3.624.763-1.71 2.434-2.555 4.105-2.555 1.683 0 3.366.858 4.123 2.554.399.895.242 2.493.178 3.625.408.225.913-.191 1.265-.191.345 0 .814.233.822.623.006.305-.266.568-.809.782-.292.115-.969.248-1.127.619-.227.535 1.177 2.941 3.279 3.287.167.027.287.176.277.346-.036.65-1.5.903-2.14 1.003z"/>
                    </svg>
                </span>
                <span>
                    <span style={{marginRight:"5px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="header-icons">
                            <path d="M10 5h-3l5-5 5 5h-3v3h-4v-3zm4 14h3l-5 5-5-5h3v-3h4v3zm-9-5v3l-5-5 5-5v3h3v4h-3zm14-4v-3l5 5-5 5v-3h-3v-4h3z"/>
                        </svg>
                    </span>
                    <span style={{marginRight:"5px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="header-icons">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
                        </svg>
                    </span>
                    <span style={{marginRight:"10px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="header-icons">
                            <path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z"/>
                        </svg>
                    </span>
                </span> 
            </div>
        )
    }
}

const mapStateToProps = ({isActive}) => {

    return {
        isActive
    }
}

export default connect(mapStateToProps, { toggleSidebar })(Header);
