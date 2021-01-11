import React, { Component } from 'react'
import { CFooter } from '@coreui/react'

export default class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="footer text-center"> 2021 © <a
                    href="#">GRP 18.</a> All Rights Reserved. 
            </footer>
            </div>
    //         <CFooter fixed={false}>
    //   <div>
    //     <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
    //     <span className="ml-1">&copy; 2020 creativeLabs.</span>
    //   </div>
    //   <div className="mfs-auto">
    //     <span className="mr-1">Powered by</span>
    //     <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
    //   </div>
    // </CFooter>
  )
        
    }
}
