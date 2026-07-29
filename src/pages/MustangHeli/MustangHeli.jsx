import React from 'react'
import CaseStudy from '../CaseStudy'
import SectionHeader from '../../components/casestudy/SectionHeader'
import CaseStudyDescription from '../../components/casestudy/CaseStudyDescription'
import CaseStudyCover from '../../components/casestudy/CaseStudyCover'
import CaseStudyOverview from '../../components/casestudy/CaseStudyOverview'
import CaseStudyMetric from '../../components/casestudy/CaseStudyMetric'
import CaseStudyObjective from '../../components/casestudy/CaseStudyObjective'
import ProblemAndOpportunities from '../../components/casestudy/ProblemAndOpportunities'
import CaseStudyResearch from '../../components/casestudy/CaseStudyResearch'
import CaseStudyUserResearch from '../../components/casestudy/CaseStudyUserResearch'
import CaseStudyStrategy from '../../components/casestudy/CaseStudyStrategy'
import CaseStudyKey from '../../components/casestudy/CaseStudyKey'
import CaseStudyDesignIdentities from '../../components/casestudy/CaseStudyDesignIdentities'
import CaseStudyWireframe from '../../components/casestudy/CaseStudyWireframe'
import CaseStudyDesign from '../../components/casestudy/CaseStudyDesign'
import CaseStudyComaprision from '../../components/casestudy/CaseStudyComaprision'
import CaseStudyConclusion from '../../components/casestudy/CaseStudyConclusion'

function MustangHeli() {
  return (
    <CaseStudy>
        <SectionHeader/>
        <CaseStudyDescription/>
        <CaseStudyCover/>
        <CaseStudyOverview/>
        <CaseStudyMetric/>
        <CaseStudyObjective/>
        <ProblemAndOpportunities/>
        <CaseStudyResearch/>
        <CaseStudyUserResearch/>
        <CaseStudyStrategy/>
        <CaseStudyKey/>
        <CaseStudyDesignIdentities/>
        <CaseStudyWireframe/>
        <CaseStudyDesign/>
        <CaseStudyComaprision/>
        <CaseStudyConclusion/>
    </CaseStudy>
  )
}

export default MustangHeli