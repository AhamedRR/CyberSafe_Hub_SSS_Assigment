import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from './component/Navbar/NavBarComponent';
import Home from './pages/HomePages/Home';
import Platform from './pages/Products/Platform';
import Footer from './component/Footer/Footer'
import SecurityAwareness from './pages/Products/SecurityAwareness';
import PhishingSimulations from './pages/Products/PhishingSimulations';
import ElasticSecurityProgram from './pages/Products/ElasticSecurityProgram';
import BankingIndustry from './pages/Solutions/BankingIndustry';
import ManufacturingIndustry from './pages/Solutions/ManufacturingIndustry';
import PharmaceuticalIndustry from './pages/Solutions/PharmaceuticalIndustry';
import CaseStudies from './pages/Resources/CaseStudies';
import PhishingPlaybook from './pages/Resources/PhishingPlaybook';
import PhishingTrainingGuide from './pages/Resources/PhishingTrainingGuide';
import Questions from './pages/Resources/Questions';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/Register';
import PasswordStrengthMeter from './pages/Resources/PasswordMeter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SecurityAwarenessGuide from './pages/Resources/SecurityAwareness';

const HeaderFooterComponent=(Page)=>{
  return(
    <>
       <NavBarComponent />
        <Page />
       <Footer/>
    </>
  )
}
function App() {
  return (
        <BrowserRouter>
         <ToastContainer
          position="top-center"
          />
          <Routes>
            <Route path="/" element={HeaderFooterComponent(Home)} />
            <Route path="/platform" element={HeaderFooterComponent(Platform)} />
            <Route path="/SecurityAwareness" element={HeaderFooterComponent(SecurityAwareness)} />
            <Route path="/PhishingSimulations" element={HeaderFooterComponent(PhishingSimulations)} />
            <Route path="/ElasticSecurityProgram" element={HeaderFooterComponent(ElasticSecurityProgram)} />
            <Route path="/BankingIndustry" element={HeaderFooterComponent(BankingIndustry)} />
            <Route path="/PharmaceuticalIndustry" element={HeaderFooterComponent(PharmaceuticalIndustry)} />
            <Route path="/ManufacturingIndustry" element={HeaderFooterComponent(ManufacturingIndustry)} />
            <Route path="/CaseStudies" element={localStorage.getItem("token")?HeaderFooterComponent(CaseStudies):<LoginPage />} />
            <Route path='/PhishingPlaybook' element={localStorage.getItem("token")?HeaderFooterComponent(PhishingPlaybook):<LoginPage />} />
            <Route path='/PhishingTrainingGuide' element={localStorage.getItem("token")?HeaderFooterComponent(PhishingTrainingGuide):<LoginPage />} />
            <Route path='/SecurityAwarenessGuide' element={localStorage.getItem("token")?HeaderFooterComponent(SecurityAwarenessGuide):<LoginPage />} />
            <Route path='/Questions' element={localStorage.getItem("token")?HeaderFooterComponent(Questions):<LoginPage />} />
            <Route path='/login' element={!localStorage.getItem("token")?<LoginPage />:HeaderFooterComponent(Home)} />
            <Route path='/register' element={!localStorage.getItem("token")?<RegisterPage />:HeaderFooterComponent(Home)} />
            <Route path='/PasswordStrengthMeter' element={localStorage.getItem("token")?HeaderFooterComponent(PasswordStrengthMeter):<LoginPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
