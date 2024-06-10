import { useState } from 'react'
import './App.css'
import Section from './components/Section'
import { HeaderCanvas, SubCanvas } from './components/Canvas'


function App() {
  const initFormData = {
    general: {name: '', email: '', town: ''},
    education: {school: '', date: ''},
    experience: {company: '', position: ''}
  }
  const [formData, setFormData] = useState(initFormData)
  const [active, setActive] = useState('general')

  function handleChange(section, field, value) {
      setFormData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value
        }
      }))
  }

  function handleClick(section) {
    setActive(prevActive => prevActive === section ? null : section);
  }

  return (
    <>
      <div id='sections'>
        <Section 
          title="general"
          active={active}
          data={formData.general} 
          handleChange={handleChange}
          handleClick={handleClick}>
        </Section>
        <Section 
          title="education"
          active={active}
          data={formData.education} 
          handleChange={handleChange}
          handleClick={handleClick}>
        </Section>
        <Section 
          title="experience"
          active={active}
          data={formData.experience} 
          handleChange={handleChange}
          handleClick={handleClick}>
        </Section>
      </div>
      <div id='canvases'>
        <HeaderCanvas 
          title='general'
          content={formData['general']}>
        </HeaderCanvas>
        <SubCanvas 
          title='education'
          content={formData['education']}>
        </SubCanvas>
        <SubCanvas 
          title='experience'
          content={formData['experience']}>
        </SubCanvas>
      </div>      
    </>
  )
}

export default App
