import React from 'react';

import style from './Icon.module.css';

const CoopRemitLogo = (props) => {

    const classes = {
        cls1: {
            fill:"none",
            stroke:props.strokeColor ? props.strokeColor : "#016d78",
            strokeMiterlimit:10,
            strokeWidth:"6px"
        }
    }

    return <div className={style.Icon}>

        <svg 
        
        id="IMAGE" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 161.52 162.7"
        
        style={{
            enableBackground: "new 0 0 161.52 162.7",
            ...props.style
        }}
        width={props.width} height={props.height} className={[props.extraClasses ? props.extraClasses.join(" ") : null].join(" ")} >
            
            <g id="HANDS"><path style={classes.cls1} d="M84.37,21.1a5,5,0,1,1,7-7l14.84,14.85c4.28,4.28,9.13,10.22,11.11,16.15s16.15,17.48,16.15,17.48" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M91.07,27.8l-1.49-1.5L86.25,23,84.37,21.1l-6.49-6.49c-4.72-4.72-11.76,2.31-7,7" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M84.27,35.06l-4.94-4.93L77,27.76l-6.12-6.12-4.73-4.72c-4.72-4.72-11.31,2.3-6.8,6.81l5.93,5.93" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M77.56,42l-3.8-3.81-3.63-3.63-4.88-4.88c-6.26-6.26-12.86,1-6.93,6.93l13,13" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M78.77,57l-7.41-7.41c-4.24-4.24-11,2.77-6.85,6.86s3.34,3.7,9.09,9.1a10.28,10.28,0,0,0,1.8,1.31C82.22,70.83,96,70.16,96,70.16l10,10" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M18,86.89a5,5,0,1,1-7-7L25.78,65C30.06,60.72,36,55.88,41.93,53.9S59.4,37.75,59.4,37.75" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M24.68,80.18l-1.5,1.49L19.85,85,18,86.89l-6.48,6.48c-4.73,4.73,2.3,11.76,7,7" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M31.93,87,27,91.93l-2.37,2.36-6.11,6.11-4.73,4.73c-4.72,4.73,2.31,11.32,6.82,6.82L26.54,106" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M38.85,93.7l-3.8,3.81-3.63,3.62L26.54,106c-6.26,6.26,1,12.86,6.92,6.92l13-13.05" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M53.91,92.49l-7.4,7.39c-4.25,4.26,2.76,11,6.86,6.86s3.7-3.34,9.09-9.08a14.21,14.21,0,0,0,2.86-5.52C67.5,85,67,75.27,67,75.27L75.4,66.9" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M37.26,109.21s14.19,11.54,16.16,17.48,6.81,11.87,11.1,16.16l14.84,14.84a5,5,0,1,0,7-7" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M79.69,144l1.5,1.5,3.32,3.32,1.88,1.88,6.49,6.49c4.73,4.72,11.76-2.31,7-7" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M86.51,136.7l4.93,4.93L93.81,144l6.11,6.12,4.72,4.72c4.73,4.73,11.33-2.31,6.82-6.82l-5.94-5.93" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M93.21,129.77l7.43,7.43,4.88,4.88c6.27,6.27,12.87-1,6.93-6.93l-13-13" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M92,114.7l7.41,7.41c4.25,4.24,11-2.75,6.85-6.85s-3.33-3.71-9.09-9.09a9.31,9.31,0,0,0-1.82-1.31c-6.81-4-20.57-3.27-20.57-3.27l-9.46-9.45" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M153.68,84a5,5,0,1,1,7,7l-14.83,14.83c-4.3,4.3-10.22,9.13-16.16,11.11s-17.48,16.17-17.48,16.17" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M147,90.69l1.49-1.5,3.32-3.32L153.68,84l6.49-6.49c4.72-4.72-2.32-11.75-7-7" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M139.72,83.87l4.93-4.93L147,76.57l6.11-6.11,4.72-4.72c4.73-4.73-2.3-11.33-6.81-6.82l-5.94,5.94" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M132.79,77.17l7.43-7.43,4.88-4.88c6.27-6.27-1-12.86-6.92-6.92l-13,13" transform="translate(-4.41 -4.11)" /><path style={classes.cls1} d="M117.74,78.38l7.4-7.4c4.25-4.25-2.75-11-6.86-6.86s-3.69,3.34-9.08,9.08a15.89,15.89,0,0,0-3.26,6.91,62.25,62.25,0,0,0-1.33,15.49l-9.26,9.26" transform="translate(-4.41 -4.11)" /><line style={classes.cls1} x1="105.28" y1="28.49" x2="132.71" y2="1.06" /><line style={classes.cls1} x1="56.53" y1="135.16" x2="30.05" y2="161.64" /><line style={classes.cls1} x1="27.57" y1="54.68" x2="1.06" y2="28.17" /><line style={classes.cls1} x1="133.82" y1="108.29" x2="160.46" y2="134.93" /></g></svg>

    </div>
};

const CoopRemitLogoFull = (props) => {
    const classes = {
        cls1: {
            fill: props.fillColor ? props.fillColor : "#016d78"
        },
        cls2: {
            fill: "none",
            stroke: props.fillColor ? props.fillColor : "#fff",
            strokeMiterlimit: 10,
            strokeWidth: "3px"
        }
    }

    return <div className={style.Icon} >
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 336.22 120.87"
            xmlSpace="preserve"
            style={{
                enableBackground: "new 0 0 336.22 120.87",
                ...props.style
            }}
            width={props.width} height={props.height} className={[props.extraClasses ? props.extraClasses.join(" ") : null].join(" ")} >

            <path style={classes.cls1} d="M187,136.77h-9.18l-13-18.89H159.2v18.89h-7.56V91.42h19.53a13.24,13.24,0,0,1,2.64,26.2Zm-15.82-26.45a5.67,5.67,0,1,0,0-11.34h-12v11.34Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M204.42,99v11.34H222v7.56H204.42v11.32h20.69v7.56H196.86V91.42h28.25V99Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M276.55,91.42v45.35H269V116.65l-13.24,20.09-13.22-20.09v20.12H235V91.42L255.75,123Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M286.45,136.77V91.42H294v45.35Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M331.64,91.42V99H321.56v37.78H314V99H303.92V91.42Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M187.85,78.09a22.68,22.68,0,1,1-.07-32.93l-5.19,5.5a15.11,15.11,0,1,0,0,22Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M240,61.66A22.68,22.68,0,1,1,217.35,39,22.68,22.68,0,0,1,240,61.66Zm-7.56,0a15.12,15.12,0,1,0-15.12,15.13A15.12,15.12,0,0,0,232.47,61.66Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M295.51,61.66A22.68,22.68,0,1,1,272.83,39,22.68,22.68,0,0,1,295.51,61.66Zm-7.56,0a15.12,15.12,0,1,0-15.12,15.13A15.12,15.12,0,0,0,288,61.66Z" transform="translate(-0.78 -27.44)" /><path style={classes.cls1} d="M324.06,39a13.23,13.23,0,0,1,0,26.46h-12V84.33h-7.56V39Zm5.48,13.23a5.67,5.67,0,0,0-5.48-5.67h-12V57.87h12A5.66,5.66,0,0,0,329.54,52.21Z" transform="translate(-0.78 -27.44)" /><rect style={classes.cls1} width="129.33" height="120.87" rx="7.52" ry="7.52" /><g id="HANDS"><path style={classes.cls2} d="M65.12,49a3.2,3.2,0,1,1,4.52-4.52L79.17,54c2.75,2.75,5.86,6.56,7.13,10.38S96.67,75.61,96.67,75.61" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M69.42,53.3l-1-1-2.13-2.13L65.12,49,61,44.83c-3-3-7.55,1.49-4.51,4.52" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M65.05,58,61.89,54.8l-1.52-1.52-3.93-3.93-3-3c-3-3-7.26,1.47-4.37,4.37l3.82,3.81" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M60.75,62.4,58.31,60,56,57.63,52.85,54.5c-4-4-8.27.64-4.45,4.45l8.37,8.37" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M61.52,72.08l-4.75-4.76c-2.73-2.73-7,1.77-4.4,4.41s2.14,2.37,5.83,5.83a6.31,6.31,0,0,0,1.16.85c4.38,2.52,13.22,2.09,13.22,2.09L79,86.89" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M22.48,91.24A3.2,3.2,0,1,1,18,86.72l9.53-9.53c2.75-2.75,6.56-5.86,10.37-7.13S49.09,59.69,49.09,59.69" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M26.79,86.93l-1,1L23.69,90l-1.21,1.21L18.32,95.4c-3,3,1.48,7.56,4.52,4.52" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M31.45,91.31l-3.17,3.17L26.76,96l-3.92,3.93-3,3c-3,3,1.49,7.26,4.38,4.37L28,103.52" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M35.89,95.62l-2.44,2.44-2.33,2.33L28,103.52c-4,4,.63,8.26,4.44,4.45l8.38-8.38" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M45.56,94.84l-4.75,4.75c-2.73,2.73,1.77,7,4.41,4.4s2.37-2.15,5.83-5.83a9.11,9.11,0,0,0,1.84-3.55A38.24,38.24,0,0,0,54,83.78l5.37-5.37" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M34.87,105.57S44,113,45.25,116.8s4.37,7.62,7.13,10.37l9.52,9.53a3.2,3.2,0,1,0,4.52-4.52" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M62.12,127.88l1,1L65.21,131l1.21,1.21,4.17,4.17c3,3,7.55-1.48,4.51-4.52" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M66.49,123.22l3.17,3.17,1.52,1.52,3.92,3.92,3,3c3,3,7.27-1.48,4.37-4.38l-3.81-3.81" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M70.8,118.77l4.77,4.77,3.13,3.14c4,4,8.26-.64,4.45-4.45l-8.37-8.38" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M70,109.1l4.76,4.75c2.72,2.73,7-1.76,4.39-4.39s-2.14-2.38-5.83-5.84a6.48,6.48,0,0,0-1.17-.84c-4.37-2.53-13.21-2.1-13.21-2.1l-6.07-6.07" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M109.62,89.38a3.2,3.2,0,1,1,4.52,4.51l-9.53,9.53c-2.75,2.76-6.56,5.86-10.37,7.13S83,120.93,83,120.93" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M105.32,93.68l1-1,2.13-2.13,1.21-1.21,4.17-4.17c3-3-1.49-7.55-4.52-4.52" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M100.66,89.3l3.17-3.16,1.52-1.52,3.92-3.93,3-3c3-3-1.48-7.27-4.37-4.38l-3.81,3.82" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M96.21,85,101,80.23l3.14-3.13c4-4-.64-8.26-4.45-4.45L91.3,81" transform="translate(-0.78 -27.44)" /><path style={classes.cls2} d="M86.54,85.78,91.3,81c2.72-2.73-1.77-7-4.41-4.41s-2.37,2.15-5.83,5.83A10.2,10.2,0,0,0,79,86.89a40.1,40.1,0,0,0-.85,10l-6,5.94" transform="translate(-0.78 -27.44)" /><line style={classes.cls2} x1="80.59" y1="28.95" x2="98.21" y2="11.33" /><line style={classes.cls2} x1="49.29" y1="97.43" x2="32.29" y2="114.44" /><line style={classes.cls2} x1="30.7" y1="45.76" x2="13.68" y2="28.74" /><line style={classes.cls2} x1="98.92" y1="80.18" x2="116.03" y2="97.29" /></g></svg>
    </div >
};

export {
    CoopRemitLogo,
    CoopRemitLogoFull
};