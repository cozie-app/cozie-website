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
  //researchSidebar: [{type: 'autogenerated', dirName: './docs/research'}],
  //blogSidebar: [{type: 'autogenerated', dirName: './blog'}],

  // But you can create a sidebar manually
  
  ResearchSidebar: {
    "Cozie": [
      "cozie/intro-cozie", 
      "cozie/cozie-apple-vs-fitbit",
      "cozie/cozie-watches"
    ],

    "Publications": [
      "research/publications-cozie",
      "research/publications-cozie-reviews",
      "research/publications-ema",
      "research/publications-jitai"
      ],

      
    "About us": [
      "about_us",
      ],
  }

};

module.exports = sidebars;

