import MUIButton from '../UI/MUI/Button/Button';
import style from './SuccessfulActionPage.module.css';


const SuccessfullActionPage = ({ header, subHeader, actionText, actionHandler }) => {
    return <div className={style.SuccessfullActionPage}>
        <h1>{header}</h1>
        <h4>{subHeader}</h4>
        <div className={style.ButtonWrapper}>
            <MUIButton
                buttonText={actionText}
                onClick={actionHandler}
                style={{
                    color: "#532e15",
                    backgroundColor: "white"
                }} />
        </div>

    </div>
}

export default SuccessfullActionPage;