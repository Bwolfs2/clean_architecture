/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: ["what_is_clean_architecture",{
    type: 'category',
    label: 'Domain',
    items: [
      'domain/entities',
      'domain/repositories',
      'domain/use_cases',
      'domain/failures',
    ],
  },
  {
    type: 'category',
    label: 'Infra',
    items: [
      'infra/datasources',
      'infra/repositories',      
    ],
  },
  {
    type: 'category',
    label: 'Data',
    items: [
      'data/models',      
      'data/mappers',    
      'data/datasources',
    ],
  },
  {
    type: 'category',
    label: 'Presentation',
    items: [
      'presentation/state-management',    
      'presentation/pages',      
      'presentation/widgets',
    ],
  }
]
  
  // Shorthand syntax:
   // Internal link
   
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
