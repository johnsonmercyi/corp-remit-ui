import MUIButton from '../UI/MUI/Button/Button';
import style from './ErrorActionPage.module.css';


const ErrorActionPage = ({ header, subHeader, actionText, actionHandler }) => {
    return <div className={style.ErrorActionPage}>
        <h1>{header}</h1>
        <h4>{subHeader}</h4>
        <div className={style.ButtonWrapper}>
            <MUIButton
                buttonText={actionText}
                onClick={actionHandler} />
        </div>

    </div>
}

export default ErrorActionPage;