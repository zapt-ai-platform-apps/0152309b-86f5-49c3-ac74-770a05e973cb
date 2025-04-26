import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './modules/core/components/Layout';
import HomePage from './modules/core/pages/HomePage';
import IdeaAnalysis from './modules/ideaAnalysis/pages/IdeaAnalysis';
import PlanningGuide from './modules/planningGuide/pages/PlanningGuide';
import BusinessInsights from './modules/businessInsights/pages/BusinessInsights';
import BusinessTemplates from './modules/businessTemplates/pages/BusinessTemplates';
import MarketResearch from './modules/marketResearch/pages/MarketResearch';
import IdeaGenerator from './modules/ideaGenerator/pages/IdeaGenerator';
import Dashboard from './modules/dashboard/pages/Dashboard';
import PageTransition from './modules/core/components/PageTransition';

function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            } />
            <Route path="/analisis-ide" element={
              <PageTransition>
                <IdeaAnalysis />
              </PageTransition>
            } />
            <Route path="/panduan-langkah" element={
              <PageTransition>
                <PlanningGuide />
              </PageTransition>
            } />
            <Route path="/wawasan-bisnis" element={
              <PageTransition>
                <BusinessInsights />
              </PageTransition>
            } />
            <Route path="/template-bisnis" element={
              <PageTransition>
                <BusinessTemplates />
              </PageTransition>
            } />
            <Route path="/riset-pasar" element={
              <PageTransition>
                <MarketResearch />
              </PageTransition>
            } />
            <Route path="/generator-ide" element={
              <PageTransition>
                <IdeaGenerator />
              </PageTransition>
            } />
            <Route path="/dashboard" element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;