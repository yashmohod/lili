import { useState, useEffect } from 'react';
import Buttons from './Buttons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Display from './display';
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Button.css"
const Timer = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    // const [hours, sethours] = useState(0);
    // const [mins, setmins] = useState(0);


    const start = () => {
        // console.log(time);
        updatedMs = time.ms;
        updatedS = time.s;
        updatedM = time.m;
        updatedH = time.h;
        if (!isMinus()) {
            setStatus(1);
        }
    };
    useEffect(() => {
        if (status == 0) {
            return
        }

        const interval = setInterval(() => {
            if (status === 3) {
                return;
            }
            if (status === 2) {
                toast.warning("Times Up!");
                stop();
                return
            }

            run();
        }, 10);

        return () => clearInterval(interval);
    }, [status]);


    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedMs === 0 && updatedS === 0 && updatedM === 0 && updatedH === 0) {
            setStatus(2);
        }
        if (updatedM === 0 & updatedH > 0) {
            updatedH--;
            updatedM = 59;
        }
        if (updatedS === 0 && updatedM > 0) {
            updatedM--;
            updatedS = 59;
        }
        if (updatedMs === 0 && updatedS > 0) {
            updatedS--;
            updatedMs = 100;
        }
        updatedMs--;
        // console.log({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };
    const stop = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    const pause = () => {
        // clearInterval(interv);
        setStatus(3);
        toast.warning("Paused!");
        // setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    const resume = () => start();

    const isMinus = () => {
        let temp = false;
        if (time.h < 0 && time.m < 0 && time.s < 0) {
            toast.warn("Hours and Mins and Sec can not be negative!");
        }
        else if (time.h < 0) {
            toast.warn("Hours can not be negative!");
            temp = true;
        }
        else if (time.m < 0) {
            toast.warn("Mins can not be negative!");
            temp = true;
        }
        else if (time.s < 0) {
            toast.warn("Sec can not be negative!");
            temp = true;
        }
        return temp;
    }

    return (
        <>
            <ToastContainer />
            <Button onClick={() => navigate("/lili/")} className='backButton'>Back</Button>
            {/* input */}
            {status == 0 ?
                <Buttons setTime={setTime} time={time} start={start} />
                :
                <Display time={time} stop={stop} pause={pause} status={status} start={start} />

            }
            {/* <Buttons setTime={setTime} time={time} start={start} /> */}
            {/* display */}
        </>
    )

}

export default Timer;