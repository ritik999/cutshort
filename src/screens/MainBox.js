import React,{useState} from 'react'
import HeadSubhead from '../components/HeadSubhead'
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import SpecialInputBox from '../components/SpecialInputBox';
import Card from '../components/Card';
function MainBox() {
    const [currentStep,setCurrentStep]=useState(1);
    const Step=steps[currentStep];
    const onNext=()=>{
        setCurrentStep(currentStep+1);
    }
    return (
        <div style={styles.mainContainer}>
            <div style={styles.logoContainer}><img style={styles.logo} src="./logo.png" alt='logo'/></div>
            <ProgressBar current={currentStep} max={4}/>
            <Step onNext={onNext}/>
        </div>
    )
}

const Step1=({onNext})=>{
    const [fullname,setFullname]=useState("");
    const [fullnameError,setFullnameError]=useState([]);
    const [displayname,setDisplayname]=useState("");
    const [displaynameError,setDisplayNameError]=useState([]);
    return(
        <div>
            <HeadSubhead head="Welcome! First things first..." subhead="You can always change them later."/>
            <div style={styles.innerContainer}>
                <InputBox inName="Full Name" type="text" state={fullname} setState={setFullname} error={fullnameError}/>
                <InputBox inName="Display Name" type="text" state={displayname} setState={setDisplayname} error={displaynameError}/>
            </div>
            <div style={styles.secInnerContainer}>
                <Button text="Create Workspace" onClick={onNext}/>
            </div>
        </div>
    )
}
const Step2=({onNext})=>{
    const [workSpaceName,setWorkSpaceName]=useState("");
    const [workSpaceNameError,setworkSpaceNameError]=useState([]);
    const [workSpaceURL,setworkSpaceURL]=useState("");
    const [workSpaceURLError,setWorkSpaceURLError]=useState([]);
    return(
        <div>
            <HeadSubhead head="Let's set up a home for all your work" subhead="You can always create another workspace later."/>
            <div style={styles.innerContainer}>
                <InputBox inName="Workspace Name" type="text" state={workSpaceName} setState={setWorkSpaceName} error={workSpaceNameError}/>
                <SpecialInputBox specailText="www.eden.com/" inName="Workspace URL (optional)" type="text" state={workSpaceURL} setState={setworkSpaceURL} error={workSpaceURLError}/>
            </div>
            <div style={styles.secInnerContainer}>
                <Button text="Create Workspace" onClick={onNext}/>
            </div>
        </div>
    )
}

const Step3=({onNext})=>{
    const [selectCard,setSelectCard]=useState(1);
    return(
        <div>
            <HeadSubhead head="How are you planning to use Eden" subhead="We'll streamline your setup experience accordingly"/>
            <div style={{textAlign:"center"}}>
                <Card assign={1} head="For Myself" text="Write better. Think more clearly. Stay organized." img="https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png" selectCard={selectCard} setSelectCard={setSelectCard}/>
                <Card assign={2} head="With my team" text="Wikis, docs, tasks & projects, all in one place." img="https://img.icons8.com/material-sharp/24/000000/commercial-development-management.png" selectCard={selectCard} setSelectCard={setSelectCard}/>
            </div>
            <div style={styles.secInnerContainer}>
                <Button text="Create Workspace" onClick={onNext}/>
            </div>
        </div>
    )
}

const Step4=()=>{
    const [selectCard,setSelectCard]=useState(1);
    return(
        <div>
            <div style={{textAlign:"center",marginBottom:"20px"}}>
                <img style={{backgroundColor:"#664de5",padding:"1rem",borderRadius:"30px"}} src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/30/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="tick"/>
            </div>
            <HeadSubhead head="Congratulations, Eren!" subhead="You have completed onboarding, you can start using Eden"/>
            <div style={styles.secInnerContainer}>
                <Button text="Launch Eden"/>
            </div>
        </div>
    )
}




const styles={
    logoContainer:{
        textAlign:"center",
        marginBottom:"5rem"
    },
    logo:{
        width:"100px",
        height:"40px"
    },
    mainContainer:{
        padding:"1rem",
        transition: "all 0.3s ease-in-out"
    },
    innerContainer:{
        marginTop:"25px"
    },
    secInnerContainer:{
        marginTop:"25px"
    }
}

const steps={
    1:Step1,
    2:Step2,
    3:Step3,
    4:Step4,
}

export default MainBox