import React from 'react';
import { FilePenLine, Layers, Circle, LayoutGrid, Diamond, ListTree } from 'lucide-react'; // Importing icons, added ListTree

const FeatureTreePage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans p-6">
      {/* Main Content Area */}
      <div className="flex">
        {/* Feature Tree Sidebar */}
        <div className="w-1/3 bg-[#0f0f0f] rounded-lg p-4 mr-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
               {/* Using ListTree icon for Feature Tree header */}
               <ListTree size={18} className="text-gray-400 mr-2" />
              <span className="text-sm uppercase text-gray-500 font-mono">Feature Tree</span>
            </div>
            {/* Removed Collapse/Expand icon placeholder */}
          </div>

          {/* Feature Tree Items */}
          <div className="flex flex-col space-y-3"> {/* Adjusted vertical space */}

            {/* Extrude 1 with Sketch 1 (Feature above Sketch)*/}
            <div className="ml-0"> {/* Parent feature container */}
              <div className="flex items-center"> {/* Row for parent icon and text */}
                 {/* Extrude Icon (using extrudeIcon.png) - Increased size */}
                 <img src="/images/extrudeIcon.png" alt="Extrude Icon" className="w-16 h-16 mr-2" />{/* Adjusted size */}
                <span>Extrude1</span>
              </div>
              {/* Container for child sketch and connecting line */}
              {/* Adjusted ml for more indentation space to accommodate lines and hierarchy */}
              <div className="ml-16 relative"> {/* Adjusted left margin for indentation */}
                 {/* Removed vertical connecting line */}
                 {/* Removed horizontal line stub */}
                 {/* Sketch Icon and text container */}
                 <div className="flex items-center">
                   {/* Using filletIcon.png for Sketch Icon - Increased size */}
                   <img src="/images/filletIcon.png" alt="Sketch Icon" className="w-16 h-16 mr-2" />{/* Adjusted size to match others */}
                  <span>Sketch1</span>
                 </div>
              </div>
            </div>

             {/* Extrude 2 with Sketch 2 (Feature above Sketch)*/}
            <div className="ml-0"> {/* Parent feature container */}
              <div className="flex items-center"> {/* Row for parent icon and text */}
                 {/* Extrude Icon (using extrudeIcon.png) - Increased size */}
                 <img src="/images/extrudeIcon.png" alt="Extrude Icon" className="w-16 h-16 mr-2" />{/* Adjusted size */}
                <span>Extrude2</span>
              </div>
              {/* Container for child sketch and connecting line */}
              {/* Adjusted ml for more indentation space to accommodate lines and hierarchy */}
              <div className="ml-16 relative"> {/* Adjusted left margin for indentation */}
                 {/* Removed vertical connecting line */}
                 {/* Removed horizontal line stub */}
                 {/* Sketch Icon and text container */}
                 <div className="flex items-center">
                   {/* Using filletIcon.png for Sketch Icon - Increased size */}
                   <img src="/images/filletIcon.png" alt="Sketch Icon" className="w-16 h-16 mr-2" />{/* Adjusted size to match others */}
                  <span>Sketch2</span>
                 </div>
              </div>
            </div>

            {/* Fillet 1 */}
            <div className="flex items-center ml-0"> {/* Standalone feature */}
               {/* Fillet Icon (curved edge svg - Green color)*/}
               <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M19 1V14C19 16.7614 16.7614 19 14 19H1" stroke="#0f946a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
              <span>Fillet1</span>
            </div>
             {/* Fillet 2 */}
            <div className="flex items-center ml-0"> {/* Standalone feature */}
                 {/* Fillet Icon (curved edge svg - Green color)*/}
                 <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M19 1V14C19 16.7614 16.7614 19 14 19H1" stroke="#0f946a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
              <span>Fillet2</span>
            </div>
             {/* Fillet 3 */}
            <div className="flex items-center ml-0"> {/* Standalone feature */}
                 {/* Fillet Icon (curved edge svg - Green color)*/}
                 <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M19 1V14C19 16.7614 16.7614 19 14 19H1" stroke="#0f946a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
              <span>Fillet3</span>
            </div>
             {/* Fillet 4 */}
            <div className="flex items-center ml-0"> {/* Standalone feature */}
                 {/* Fillet Icon (curved edge svg - Green color)*/}
                 <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M19 1V14C19 16.7614 16.7614 19 14 19H1" stroke="#0f946a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
              <span>Fillet4</span>
            </div>

             {/* Hole (Using Diamond as placeholder for now) - Increased size */}
             <div className="flex items-center ml-0"> {/* Standalone feature */}
               {/* Hole Icon (using holeIcon.png) - Increased size to match Extrude */}
               <img src="/images/holeIcon.png" alt="Hole Icon" className="w-16 h-16 mr-2" />{/* Adjusted size */}
              <span>Hole</span>
            </div>

             {/* Extrude 3 with Sketch 3 (Feature above Sketch)*/}
             <div className="ml-0"> {/* Parent feature container */}
              <div className="flex items-center"> {/* Row for parent icon and text */}
                 {/* Extrude Icon (using extrudeIcon.png) - Increased size */}
                 <img src="/images/extrudeIcon.png" alt="Extrude Icon" className="w-16 h-16 mr-2" />{/* Adjusted size */}
                <span>Extrude3</span>
              </div>
              {/* Container for child sketch and connecting line */}
              {/* Adjusted ml for more indentation space to accommodate lines and hierarchy */}
              <div className="ml-16 relative"> {/* Adjusted left margin for indentation */}
                 {/* Removed vertical connecting line */}
                 {/* Removed horizontal line stub */}
                 {/* Sketch Icon and text container */}
                 <div className="flex items-center">
                   {/* Using filletIcon.png for Sketch Icon - Increased size */}
                   <img src="/images/filletIcon.png" alt="Sketch Icon" className="w-16 h-16 mr-2" />{/* Adjusted size to match others */}
                  <span>Sketch3</span>
                 </div>
              </div>
            </div>

             {/* Circular Pattern with Pattern Sketch (Feature above Sketch) - Increased size */}
             <div className="ml-0"> {/* Parent feature container */}
              <div className="flex items-center"> {/* Row for parent icon and text */}
               {/* Circular Pattern Icon (Green color) - Increased size */}
               <LayoutGrid size={40} className="text-[#0f946a] mr-2" />{/* Changed color to the hex code */}
              <span>Circular Pattern</span>
            </div>
               {/* Container for child sketch and connecting line */}
               {/* Adjusted ml for more indentation space to accommodate lines and hierarchy */}
               <div className="ml-16 relative"> {/* Adjusted left margin for indentation */}
                  {/* Removed vertical connecting line */}
                  {/* Removed horizontal line stub */}
                 {/* Sketch Icon and text container */}
                 <div className="flex items-center">
                   {/* Using filletIcon.png for Pattern Sketch Icon - Increased size */}
                   <img src="/images/filletIcon.png" alt="Pattern Sketch Icon" className="w-16 h-16 mr-2" />{/* Adjusted size to match others */}
                  <span>Pattern Sketch</span>
                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* Main View Area - Placeholder */}
        {/* Restored main view area with flex-1 to take remaining space */}
        <div className="flex-1 bg-[#1a1a1a] rounded-lg p-4 min-w-0">
          {/* Content for the main view area goes here */}
          {/* Removed looping video for the feature tree */}
          {/* <video src="/images/featureTreeLoop.mov" loop autoPlay muted className="w-full h-full object-cover rounded-lg"></video> */}
        </div>
      </div>
    </div>
  );
};

export default FeatureTreePage; 