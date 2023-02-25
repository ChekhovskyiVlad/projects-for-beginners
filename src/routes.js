import { Route, Routes, Navigate} from "react-router";
import React from 'react'
import { Counter } from "./Projects/Counter/Counter";
import { Modal } from './Projects/Modal/Modal'
import { Quiz } from './Projects/Quiz/Quiz'
import { HomePage } from './component/HomePage/HomePage'
import { User } from "./Projects/Users/Users";
import { Photos } from "./Projects/Photos/Photos";

export const Router = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home"/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/counter" element={<Counter/>}/>
    <Route path="/modal" element={<Modal/>} />
    <Route path="/quiz" element={<Quiz/>} />
    <Route path="/users" element={<User/>} />
    <Route path="/photos" element={<Photos/>} />

  </Routes>
}


