var respecConfig = {
    // embed RDFa data in the output
    trace:  true,
    doRDFa: '1.0',
    includePermalinks: true,
    permalinkEdge:     true,
    permalinkHide:     false,
    tocIntroductory: true,
    // specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
    specStatus:           "NOTE",
    noRecTrack: true,
    //crEnd:                "2012-04-30",
    //perEnd:               "2013-07-23",
    //publishDate:          "2013-08-22",
    //diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",

    // the specifications short name, as in http://www.w3.org/TR/short-name/
    shortName:            "coga-usable",
    pluralize: true,


    // if you wish the publication date to be other than today, set this
    //publishDate:  "2017-05-09",
    copyrightStart:  "2020",
   

    // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
    // and its maturity status
    //previousPublishDate:  "",
    //previousMaturity:  "",
    //prevRecURI: "",
    //previousDiffURI: "",

    // if there a publicly available Editors Draft, this is the link
    edDraftURI: "https://w3c.github.io/coga/content-usable/",

    // if this is a LCWD, uncomment and set the end of its review period
    // lcEnd: "2012-02-21",

    // editors, add as many as you like
    // only "name" is required
    editors: [
      {
        name: "Lisa Seeman-Horwitz",
        url: 'http://athena-ict.com',
        mailto: "lisa.seeman@zoho.com",
        company: "Invited expert",  
        w3cid: 16320
      },
      {
        name: "Rachael Bradley Montgomery",
        mailto: "rachael@accessiblecommunity.org",
        company: "Invited expert",
        w3cid: 90310
      },
       
      {
        name: "Steve Lee",
        url: 'https://www.w3.org',
        mailto: "stevelee@w3.org",
        company: "W3C",
        companyURI: "http://www.w3.org",
        w3cid: 71103
      },
      {
        name: "Ruoxi Ran",
        url: 'https://www.w3.org',
        mailto: "ran@w3.org",
        company: "W3C",
        companyURI: "http://www.w3.org",
        w3cid: 100586
      },
      
    ],

    // authors, add as many as you like.
    // This is optional, uncomment if you have authors as well as editors.
    // only "name" is required. Same format as editors.

    //authors:  [
    //    { name: "Your Name", url: "http://example.org/",
    //      company: "Your Company", companyURI: "http://example.com/" },
    //],

    /*
    alternateFormats: [
      { uri: 'aria-diff.html', label: "Diff from Previous Recommendation" } ,
      { uri: 'aria.ps', label: "PostScript version" },
      { uri: 'aria.pdf', label: "PDF version" }
    ],
    */

    // errata: 'http://www.w3.org/2010/02/rdfa/errata.html',

    // name of the WG
    group: ["ag", "apa"],

	maxTocLevel: 3,

    localBiblio: biblio,

	preProcess: [preRespec]

  };
