import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "../store/mainSlice";
import button from "bootstrap/js/src/button";


function MainPage() {

    const dispatch = useDispatch();
    const value = useSelector(state => state.mainReducer.value);



    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => {
                dispatch(increment(1))}}>+1</button>
            <button onClick={() => {
                dispatch(decrement(1))}}>-1</button>
            <button onClick={() => {
                dispatch(increment(10))}}>+10</button>
            <button onClick={() => {
                dispatch(decrement(10))}}>-10</button>
            <button onClick={() => {
                dispatch(reset())}}>reset</button>


        </div>
    );
}

export default MainPage;