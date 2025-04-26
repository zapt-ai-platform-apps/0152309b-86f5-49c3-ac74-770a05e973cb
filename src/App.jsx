import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './modules/core/components/Layout';
import HomePage from './modules/core/pages/HomePage';
import IdeaAnalysis from './modules/ideaAnalysis/pages/IdeaAnalysis';
import PlanningGuide from './modules/planningGuide/pages/PlanningGuide';
import BusinessInsights from './modules/businessInsights/pages/BusinessInsights';
import BusinessTemplates from './modules/businessTemplates/pages/BusinessTemplates';
import MarketResearch from './modules/marketResearch/pages/MarketResearch';
import IdeaGenerator from './modules/ideaGenerator/pages/IdeaGenerator';
import Dashboard from './modules/dashboard/pages/Dashboard';
import ZaptBadge from './modules/core/components/ZaptBadge';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analisis-ide" element={<IdeaAnalysis />} />
          <Route path="/panduan-langkah" element={<PlanningGuide />} />
          <Route path="/wawasan-bisnis" element={<BusinessInsights />} />
          <Route path="/template-bisnis" element={<BusinessTemplates />} />
          <Route path="/riset-pasar" element={<MarketResearch />} />
          <Route path="/generator-ide" element={<IdeaGenerator />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
      <ZaptBadge />
    </div>
  );
}

export default App;