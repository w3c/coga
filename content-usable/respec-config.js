var respecConfig = {
    // embed RDFa data in the output
    trace:  true,
    doRDFa: '1.0',
    includePermalinks: true,
    permalinkEdge:     true,
    permalinkHide:     false,
    tocIntroductory: true,
    // specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
    specStatus:           "ED",
    noRecTrack: true,
    //crEnd:                "2012-04-30",
    //perEnd:               "2013-07-23",
    //publishDate:          "2013-08-22",
    //diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",

    // the specifications short name, as in http://www.w3.org/TR/short-name/
    shortName:            "coga-usable",


    // if you wish the publication date to be other than today, set this
    //publishDate:  "2017-05-09",
    copyrightStart:  "2017",
    license: "document",

    // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
    // and its maturity status
    //previousPublishDate:  "",
    //previousMaturity:  "",
    //prevRecURI: "",
    //previousDiffURI: "",

    // if there a publicly available Editors Draft, this is the link
    edDraftURI: "https://w3c.github.io/coga/gap-analysis/usable.html",

    // if this is a LCWD, uncomment and set the end of its review period
    // lcEnd: "2012-02-21",

    // editors, add as many as you like
    // only "name" is required
    editors: [
      {
        name: "Lisa Seeman",
        url: 'http://athena-ict.com',
        mailto: "lisa.seeman@zoho.com",
        w3cid: 16320
      },
       
      {
        name: "Michael Cooper",
        url: 'https://www.w3.org',
        mailto: "cooper@w3.org",
        company: "W3C",
        companyURI: "http://www.w3.org",
        w3cid: 34017
      }
      
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
    wg:           ["Cognitive and Learning Disabilities Accessibility Task Force", "Accessible Platform Architectures Working Group", "Accessibility Guidelines Working Group"],

    // URI of the public WG page
    wgURI:        ["https://www.w3.org/WAI/APA/", "https://www.w3.org/WAI/GL/"],

    // name (with the @w3c.org) of the public mailing to which comments are due
    wgPublicList: "public-coga-comments",

    // URI of the patent status for this WG, for Rec-track documents
    // !!!! IMPORTANT !!!!
    // This is important for Rec-track documents, do not copy a patent URI from a random
    // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
    // Team Contact.
    wgPatentURI:  ["https://www.w3.org/2004/01/pp-impl/83907/status", "https://www.w3.org/2004/01/pp-impl/32212/status"],
    //maxTocLevel: 2,

    localBiblio: biblio,

    // Spec URLs
        

  };