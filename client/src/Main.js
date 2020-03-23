import React,{Component} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class Main extends Component {
    render(){
        return(
            <div>
            <Header/>
            <Sidebar/>

            <Footer who="นางสาว รุจิภาส ไชยแว่น" sensei="ผู้ช่วยศาสตราจารย์ ดร.สุวัจชัย กมลสันติโรจน์"/>
            </div>
            
        );
    }
}
export default Main;