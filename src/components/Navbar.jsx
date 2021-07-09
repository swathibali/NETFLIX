import { Search, Notifications, ArrowDropDown} from '@material-ui/icons'
import './Navbar.scss'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <img 
                        src='https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?resize=450,253'
                        alt='' 
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img src="https://freerangestock.com/sample/126386/happy-woman-sitting-on-grass-.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                   
                </div>
               
            </div>
        </div>
    )
}

export default Navbar
