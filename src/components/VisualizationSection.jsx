import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GDPPerCapitaChart from './charts/GDPPerCapitaChart';
import PopulationGDPChart from './charts/PopulationGDPChart';
import RegionalGDPChart from './charts/RegionalGDPChart';
import UrbanizationMap from './charts/UrbanizationMap';

import DevelopmentTrendsChart from './charts/DevelopmentTrendsChart';
import CorrelationMatrix from './charts/CorrelationMatrix';
import SuicideGdpScatterPlot from './charts/SuicideGdpScatterPlot';
import WellbeingHistogram from './charts/WellbeingHistogram';
import OnePersonHouseholdChart from './charts/OnePersonHouseholdChart';
import InequalityTrendChart from './charts/InequalityTrendChart';
import PCAClassificationChart from './charts/PCAClassificationChart';
import NordicGdpSocialChart from './charts/NordicGdpSocialChart';
import NordicDependencySupportChart from './charts/NordicDependencySupportChart';
import FertilityScatterChart from './charts/FertilityScatterChart';
import SuicideStrainChart from './charts/SuicideStrainChart';
import FertilityTrendsChart from './charts/FertilityTrendsChart';
import IndicatorDistributionsChart from './charts/IndicatorDistributionsChart';
import CountryProfilesChart from './charts/CountryProfilesChart';
import InequalityCrisisChart from './charts/InequalityCrisisChart';
import SocialAtomizationChart from './charts/SocialAtomizationChart';
import DebtTrapChart from './charts/DebtTrapChart';
import IdealComparativeChart from './charts/IdealComparativeChart';
import WellbeingBestPredictorsChart from './charts/WellbeingBestPredictorsChart';
import WellbeingWorstPredictorsChart from './charts/WellbeingWorstPredictorsChart';

const VisualizationSection = ({ title, description, chartType, data, index, countryMapping }) => {
  const layout = index % 2 === 0 ? 'left' : 'right';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getKeyInsights = (type) => {
    const insights = {
      gdpPerCapita: [
        "Luxembourg leads with GDP per capita exceeding $100,000",
        "Significant gap between developed and developing economies",
        "Economic prosperity concentrated in Western Europe and North America"
      ],
      regionalGDP: [
        "Asia dominates global GDP with China and India as major contributors",
        "North America maintains high per-capita wealth despite smaller population",
        "Africa shows lowest regional GDP but fastest growth potential"
      ],
      populationGDP: [
        "Population size doesn't directly correlate with economic prosperity",
        "Small nations like Singapore achieve high GDP despite limited population",
        "Larger economies face challenges in per-capita wealth distribution"
      ],
      urbanizationMap: [
        "Urban population exceeds 80% in developed nations",
        "Rapid urbanization occurring across Asia and Africa",
        "City growth drives economic development but increases inequality"
      ],
      developmentTrends: [
        "Life expectancy and GDP show strong positive correlation",
        "Education spending varies widely across income levels",
        "Health outcomes improve significantly with economic development"
      ],
      correlationMatrix: [
        "GDP and education spending show strongest positive correlation (0.72)",
        "Suicide rates negatively correlate with social protection",
        "Urbanization and one-person households move together"
      ],
      suicideGdp: [
        "Higher GDP doesn't guarantee lower suicide rates",
        "South Korea shows high suicide despite economic prosperity",
        "Mental health support critical regardless of wealth level"
      ],
      wellbeingHistogram: [
        "Wellbeing scores cluster between 5-7 for most countries",
        "Nordic countries consistently achieve highest wellbeing (8+)",
        "Economic development alone insufficient for high wellbeing"
      ],
      onePersonHousehold: [
        "Single-person households exceed 40% in Nordic countries",
        "Traditional family structures declining in developed societies",
        "Urbanization accelerates household fragmentation"
      ],
      inequalityTrend: [
        "Gini coefficient rising globally over past decades",
        "Latin America shows highest inequality levels (45+)",
        "Nordic model maintains lowest inequality (25-30)"
      ],
      pcaClassification: [
        "Countries cluster into 5 distinct development patterns",
        "Institutional support and social bonds vary independently",
        "No single path to societal balance exists"
      ],
      nordicGdpSocial: [
        "Iceland and Norway outliers: high GDP, lower social support",
        "Wealth doesn't automatically translate to social cohesion",
        "Resource-rich nations face unique social challenges"
      ],
      nordicDependencySupport: [
        "Sweden shows high institutional support despite dependency challenges",
        "Aging populations strain even robust welfare systems",
        "Policy innovation needed to sustain Nordic model"
      ],
      fertilityScatter: [
        "Global fertility rates falling below replacement level (2.1)",
        "Economic development correlates with lower birth rates",
        "South Korea and Japan face severe demographic decline"
      ],
      suicideStrain: [
        "Suicide rates peak in middle-income countries",
        "Development transition creates unique psychological pressures",
        "Mental health infrastructure lags economic growth"
      ],
      workWellbeing: [
        "Longer work hours correlate with lower wellbeing",
        "Work-life balance critical for societal health",
        "Productivity gains don't require more hours"
      ],
      fertilityTrends: [
        "All tracked countries below replacement rate by 2020",
        "Fertility decline accelerating in developing nations",
        "Population aging crisis emerging globally"
      ],
      indicatorDistributions: [
        "GDP distribution highly skewed toward wealthy nations",
        "Inequality shows bimodal pattern across countries",
        "Social protection coverage varies dramatically"
      ],
      countryProfiles: [
        "Each country balances competing priorities differently",
        "No nation excels across all dimensions simultaneously",
        "Trade-offs evident between growth and equity"
      ],
      inequalityCrisis: [
        "Higher Gini correlates with extreme wealth concentration",
        "Top 10% control 50-75% of wealth in unequal societies",
        "Inequality reinforces itself through capital accumulation"
      ],
      socialAtomization: [
        "Wealthier societies show higher rates of living alone",
        "Economic independence enables but may isolate individuals",
        "Social atomization correlates with GDP growth"
      ],
      debtTrap: [
        "Household debt exceeds 150% of income in several nations",
        "High debt burdens persist even in wealthy countries",
        "Economic precarity affects all income levels"
      ],
      idealComparative: [
        "Traditional group excels in social cohesion metrics",
        "Nordic paradox: high institutions, lower social bonds",
        "Ideal group shows balanced development across dimensions"
      ],
      wellbeingBestPredictors: [
        "GDP per capita shows strongest positive correlation (0.52)",
        "Education spending significantly impacts wellbeing (0.33)",
        "Child poverty reduction critical for societal health"
      ],
      wellbeingWorstPredictors: [
        "Suicide rate most strongly predicts low wellbeing (-0.81)",
        "Household debt burden undermines life satisfaction",
        "Poverty and infant mortality devastate quality of life"
      ]
    };

    return insights[type] || [
      "Data reveals complex patterns in global development",
      "Multiple factors interact to shape societal outcomes",
      "Context-specific solutions needed for different regions"
    ];
  };

  const renderChart = () => {
    switch (chartType) {
      case 'gdpPerCapita':
        return <GDPPerCapitaChart data={data} />;
      case 'regionalGDP':
        return <RegionalGDPChart data={data} />;
      case 'populationGDP':
        return <PopulationGDPChart data={data} />;
      case 'urbanizationMap':
        return <UrbanizationMap data={data} />;
      case 'developmentTrends':
        return <DevelopmentTrendsChart data={data} />;
      case 'correlationMatrix':
        return <CorrelationMatrix data={data} />;
      case 'suicideGdp':
        return <SuicideGdpScatterPlot data={data} />;
      case 'wellbeingHistogram':
        return <WellbeingHistogram data={data} />;
      case 'onePersonHousehold':
        return <OnePersonHouseholdChart data={data} />;
      case 'inequalityTrend':
        return <InequalityTrendChart data={data} />;
      case 'pcaClassification':
        return <PCAClassificationChart data={data} countryMapping={countryMapping} />;
      case 'nordicGdpSocial':
        return <NordicGdpSocialChart data={data} />;
      case 'nordicDependencySupport':
        return <NordicDependencySupportChart data={data} />;
      case 'fertilityScatter':
        return <FertilityScatterChart data={data} />;
      case 'suicideStrain':
        return <SuicideStrainChart data={data} />;
      case 'fertilityTrends':
        return <FertilityTrendsChart data={data} />;
      case 'indicatorDistributions':
        return <IndicatorDistributionsChart data={data} />;
      case 'countryProfiles':
        return <CountryProfilesChart data={data} />;
      case 'inequalityCrisis':
        return <InequalityCrisisChart data={data} />;
      case 'socialAtomization':
        return <SocialAtomizationChart data={data} />;
      case 'debtTrap':
        return <DebtTrapChart data={data} />;
      case 'idealComparative':
        return <IdealComparativeChart data={data} />;
      case 'wellbeingBestPredictors':
        return <WellbeingBestPredictorsChart data={data} />;
      case 'wellbeingWorstPredictors':
        return <WellbeingWorstPredictorsChart data={data} />;
      default:
        return <div>Chart not found</div>;
    }
  };

  const chartSection = (
    <motion.div
      className="w-full lg:col-span-8 h-[60vh] lg:h-[85vh]"
      initial={{ opacity: 0, x: layout === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative h-full w-full">
        {/* Glass Card for Chart */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl flex items-center justify-center p-6 lg:p-8">
           <div className="w-full h-full relative z-10 flex items-center justify-center">
              {renderChart()}
           </div>
           {/* Inner Glow */}
           <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none"></div>
        </div>
        {/* Decorative elements behind chart */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-indigo-500/5 blur-[100px] rounded-full"></div>
      </div>
    </motion.div>
  );

  const keyInsights = getKeyInsights(chartType);

  const detailsSection = (
    <motion.div
      className="w-full lg:col-span-4 flex flex-col justify-center"
      initial={{ opacity: 0, x: layout === 'left' ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="space-y-8 p-4 lg:p-8">
        <div>
           <span className="text-indigo-400/80 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">Analysis 0{index + 1}</span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-6">
             {title}
           </h2>
           <p className="text-lg text-slate-400 leading-relaxed font-light">
             {description}
           </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 relative overflow-hidden group hover:border-indigo-500/20 transition-colors duration-500">
           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
           
           <h3 className="text-sm font-medium mb-6 text-indigo-300 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Key Insights
           </h3>
           <ul className="space-y-4">
            {keyInsights.map((insight, idx) => (
              <li key={idx} className="flex items-start text-slate-300 font-light leading-relaxed">
                <span className="text-indigo-500 mr-4 mt-1.5 text-xs">◆</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      className="visualization-section min-h-screen w-full snap-start flex items-center justify-center relative overflow-hidden bg-[#020617] py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Unified Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent opacity-50" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent opacity-50" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent opacity-50" />
      </div>
      
      {/* Slide number indicator - updated to match Hero scroll indicator style */}
      <div className="absolute top-8 left-8 z-20">
         <div className="font-mono text-xs text-white/80 tracking-widest border border-white/50 px-3 py-1 rounded-full">
            SLIDE {String(index + 1).padStart(2, '0')} / 23
         </div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${layout === 'right' ? 'direction-rtl' : ''}`}>
          {layout === 'left' ? (
            <>
              {chartSection}
              {detailsSection}
            </>
          ) : (
            <>
              {detailsSection}
              {chartSection}
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default VisualizationSection;
