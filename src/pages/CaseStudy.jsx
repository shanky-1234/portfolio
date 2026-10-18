import React from 'react'
import GoBack from '../components/casestudy/GoBack'
import LoadingScreen from '../components/LoadingScreen'
import Footer from '../components/shared/Footer'

function CaseStudy({children}) {
  return (
    <><div id="case-study-page">
      <main className='mt-12'>
      {children}
      </main>
      <Footer/>
       <div className="h-38 bg-main" aria-hidden="true" />
      </div>
    </>
  )
}

export default CaseStudy