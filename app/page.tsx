"use client"

import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import StudySection from './components/Studies'
import ActionSection from './components/Actions'
export default function Home() {
  return (
    <div>
       <HeroSection/>
       <StudySection/>
       <ActionSection/>
    </div>
     
  )
}
