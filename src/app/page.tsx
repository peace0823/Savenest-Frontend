import React from 'react';
import Navbar from '../../components/Navbar';
import CommunityPage from './community/page';
import Hero from '../../components/Hero';
import FeaturesSection from '../../components/FeaturesSection';
import StartTodaySection from '../../components/StartTodaySection';
import HowItWorksSection from '../../components/HowItWorksSection';
import StartBuildingSection from '../../components/StartBuildingSection';
import Footer from '../../components/Footer';

const HomePage = () => {
  return <div>
    <Navbar />
    <Hero />
    <FeaturesSection />
    <StartTodaySection />
    <HowItWorksSection />
    <StartBuildingSection />
    <Footer />
  </div>;
};


export default HomePage;