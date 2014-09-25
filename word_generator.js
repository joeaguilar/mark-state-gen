// Start of real code
/*
___________________________________________________
***************************************************

      IWGI Marketing Statement Generator

___________________________________________________
***************************************************
*
* IWGI is a fictious company, invented by myself as an aparatus
* to employ my critique not on the businss world,
* but on the business of the business world.
*
* A marketing statement is often "performed" at a meeting
* of other individuals (investors or clients) in an effot
* to proclaim that the money spent on the marketing team
* is money well spent for the company and that the progress
* of whatever project is still running smoothly.
*
* Philisophically in line with W.C. Fields' statement
* "If you can't dazzle them with brilliance, baffle them with bullshit".
* The statement is frivolous, formulaic, and idiomatic.
*
* The words extrapolate patterns into a template that are then
* intermingled with a random selection of niche words to give it
* that "sink or swim" polish. It must be said however, that the
* strategies employed by employed artist follow a similar tactic
* to ensure the continuity of their current project. To say these
* statements are unecessary might be true if one holds the values
* of trust and faith, however more often is the case unnecessary
* statements like these are needed much in the same way the art
* they may be representing is unneeded. And as a proclaimer of
* unnecessary statements, objects, and images,
* these statements are an art.
*/

// This is a json object of words which will be used at random
m = {  "IWGI" : ["International Worldwide Global Incoporated"],
  "connector1": ["get" ,"bring to", "get-to", "within", "into", "out-of", "poach", "driving" ,"get-in" , "by", "in", "for", "with", "against","between", "outside", "over", "under", "beyond", "juice", "glue" ],
  "connector2" : ["bag", "box", "bone", "square", "dream", "beach", "cube", "corner", "grain", "door", "circle", "yard", "dog", "house", "cake", "butter", "beef", "gun", "van"],
  "connectornoun" : ["design", "approach", "engagement", "perspective", "relationship", "thinking", "solution", "vision", "process", "performance"],
  "connectedverb" : ["grow", "appreciate", "reach", "fulfill", "renew", "plan", "build", "lift", "perserve",  "initiate", "create", "maximize", "acrue", "align"],
  "connectednoun" : ["plan", "work", "business", "ideas", "dream", "audience", "target", "customers", "consumers", "projections", "crowd", "goal"],
  "nounthing1" : ["winkle", "orange", "flash", "purple", "dolphin", "sail", "lizard", "shower", "sink", "stove", "yellow", "red", "hamster", "gopher", "squirrel", "back", "dirt", "goose", "penny"],
  "nounthing2" : ["popping", "gnoming", "gazing", "slapping", "cording", "dusting", "mapping", "digging", "throwing", "tossing", "dwelling", "bricking", "dogging", "clapping", "running", "dragging", "tracking", "shuffling"],
  "noun_enhance" : ["enhances", "intensifies", "amplifies", "boosts", "complements", "upgrades", "elevates", "adorns", "heightens", "increases", "reinforces", "magnifies", "bedazzles", "exacerbates", "deepens", "reforms", "inflates", "expands", "increments"],
  "repeatnoun" : ["focus", "planning", "real-time", "gameplan", "ideas", "strategy", "details", "mojo", "magic", "secret sauce", "impact", "leverage", "heart", "face time", "robustness", "visibility" ],
  "verb_use" : ["used", "deployed", "integrated", "utilized", "extended", "fanned out", "panned out", "displayed", "opened", "set out", "set forth", "unfolded", "mastered" ],
  "adj_small" : ["little", "small", "tiny", "miniscule", "micro", "mini", "teensy", "eensy-weensy", "modest", "slight", "insignificant" ],
  "noun_prep" : ["preparation" , "prep", "training", "learning", "coaching", "instruction", "cultivation", "preliminaries", "guidance", "practice", "qualification", "seasoning", "schooling", "tutelage", "warm-up", "chalk talk"],
  "verb_ly": ["quickly", "easily", "widely", "rapidly", "hastily", "briskly", "easily", "immediately", "exstensively", "universally", "commonly", "ordinarily", "largely", "broadly", "abundantly", "considerably", "mainly", "mostly"],
  "random_software" : ["Sapphire", "Anaconda", "Commanche", "CoffeeScribble", "Tracks", "PieBRB", "B--", "F#", "dbInquiry", "YourSDB", "Onyx", "Doorways", "Tranzport", "Meddle", "Spark", "FyreOS", "Astro", "Sapphire on Tracks", "Nexus.cs"],
  "noun_relate_big" : ["parent", "mother", "husband", "wife", "father", "daddy", "mommy", "aunt", "uncle", "step-mother", "step-father", "step-parent" ],
  "noun_relate_small" : ["child", "daughter", "son", "wife", "husband", "brother", "sister", "nephew", "niece", "step-son", "step-daughter", "step-child"],
  "management_verb" : ["aid", "assist", "demonstrate", "diagnose", "encourage", "maintain", "support", "renew", "retain", "protect", "sustain", "control", "finance"],
  "double_business_noun" : ["market-research", "baseline effort", "ground level technical support", "asset management", "statement seperation", "active listening", "brand extension", "diversification", "downline vertical integration", "brand integrity", "inbound equity", "profit margin", "brand equity"],
  "business_noun" : ["equity", "integrity", "capital", "relevancy", "estate", "harmony", "symphony", "symmetry", "parity", "stasis", "continuity", "adherence", "congruity", "consistency", "reliability", "applicability", "aptitude", "latitude", "readiness", "pertinence"],
  "confusing_photo_term" : ["xenar diffraction", "reciprical failure", "polarization", "trivial functional dependency", "zone system breakdown", "behavioural seperation", "chromatic aberration", "uniform reticulation development", "retrofocus refractive indexes", "sidelighting", "macro stop-down", "dispersion destabilization"],
  "action_verb_s" : ["focuses", "initiates", "delivers", "provides", "bolsters", "consolidates", "recognizes", "advances", "maintains", "generates", "introduces", "launches", "accomplishes", "enables"],
  "action_verb" : ["deliver", "provide", "improve", "execute", "direct", "evaluate", "produce", "estimate", "establish", "form", "create", "conceptualize", "conceive", "consolidate", "diagnose", "report", "audit", "delegate", "perform"],
  "internetbuzzword" : ["social", "cloud", "hashtag", "media", "scalable", "bandwidth", "clickthrough", "cross-platform", "datafication", "netiquette", "viral", "wikiality", "sync-up", "user-centric", "pipeline", "milestone"],
  "internet_buzzspaces" : ["mobile", "social networks", "email", "cloud", "blogs", "apps", "tablets", "4G", "sms", "podcasts", "tweets", "status updates", "phablets"],
  "adj_ed" : ["based", "positioned", "targeted", "rooted", "secured", "preferred", "recognized", "confirmed", "approved", "established", "routined", "routed", "assured", "gauranteed" ],
  "noun_strategy" : ["blueprint", "method", "strategy", "policy", "procedure", "program", "scheme", "guide", "direction", "master plan", "model", "rendering", "construct", "outline"],
  "positive_action_verb_ing" : ["developing", "satisfying", "encouraging", "meeting", "exceeding", "growing", "directing", "building", "nourishing", "improving", "impacting", "leveraging", "evolving", "publishing", "formulating", "establishing", "expanding", "enlarging", "adding", "augmenting", "maturing", "nuturing", "increasing", "spreading", "reinforcing", "progressing", "rising", "leading", "pioneering"],
  "noun" : ["permission", "output", "manufacturing", "profit", "distribution", "investment", "demand", "production", "assembly", "composition", "accomplishment", "concession", "endorsement", "license", "admission", "approval", "confirmation", "sanction", "certificate", "recognition", "accolade", "situation"],
  "negative_verb_down" : ["decline", "decrease", "stop", "stunt", "deteriorate", "downgrade", "slump", "weaken", "dwindle", "ebb", "wane", "decay", "diminish", "qeull", "retrogress", "spoil", "deprave", "corrode", "abase", "eschew", "reduce", "taper", "subdue"],
  "positive_verb" : ["succeed", "acheive", "flourish", "overcome", "prosper", "realize", "triumph", "thrive", "obtain", "score", "accomplish", "progress"],
  "positive_action_verb_ed" : ["engaged", "hooked", "commited", "captivated", "fascinated", "immersed", "engrossed", "involved", "pleased", "dazzled", "mesmerized", "magnetized", "enamored", "entranced", "fulfilled"],
  "negative_verb" : ["drag", "chore", "task", "bummer", "disaster", "downer", "catastrophe", "debacle", "woe", "tradgedy", "fiasco", "blow", "bane", "blight", "affliction","dissapointment", "hazard", "setback"],
  "adj_abstract" : ["representational", "descriptive", "conceptual", "dogmatic", "iconographic", "diagrammatic", "visual", "authetic", "illustrative", "photographic", "comphrehensible", "figurative", "lucid", "convincing", "unambiguous", "pronounced", "categorical"],
  "noun_content" : ["content", "material", "matter", "element", "text", "substance", "portion", "division", "piece", "page", "data", "link", "label", "tag", "media", "profile", "outline", "rule", "address", "channel", "element"],
  "noun_management" : ["optimization", "correction", "enchancement", "increasement", "improvement", "amendment", "advancement", "elevation", "revampment", "culitvation", "propagation", "management", "development", "administration", "mainframe", "directorate", "assistant", "governance", "handling", "order", "oversight", "agent", "command", "provision"],
  "noun_cond" : ["state", "case", "category", "capacity", "circumstance", "event", "occurence", "station", "transaction", "phase", "predicament", "phenomenon", "shift", "juncture", "incident"],
  "verb_trans" : ["transfer", "relocation", "transmission", "alteration", "assignment", "substitution", "relegation", "translation", "transport", "delivery", "import", "export", "output"],
  "buzz_verb" : ["win-win", "easy-to-use", "buzzword compliant", "object-oriented",  "go-to", "24/7", "robust", "best of breed", "best practices", "advanced", "competitive", "professional", "busisess class", "remarkable", "above the line", "brick-and-mortar", "client-centric"],
  "buzz_noun" : ["efficiency", "vision", "strategies", "solutions", "processes", "demodulation", "integration" ,"consultation", "channel distribution", "performance", "meta-services", "mindshare", "paradigms", "administration"],
  "conf_phot_neg_effect" : ["xenar diffraction", "reciprical failure", "polarization", "trivial functional dependency", "zone system breakdown", "behavioural seperation", "chromatic aberration", "uniform reticulation impediments", "retrofocus refractive indexes", "sidelighting", "macro stop-down", "dispersion destabilization"],
  "noun_idea_plural" : ["expectations", "assumptions", "confidence", "trust", "certainty", "fortitude", "faith", "conviction", "knowledge", "understandings", "approval", "outlook", "promises", "prospects", "aggressiveness", "sureness", "self-conifidence", "presumptions", "stake"],
  "adjective_quick" : ["strength", "viability", "dexterity", "agility", "cleverness", "acceleration", "alacrity", "flightiness", "spryness", "responsiveness", "gracefullness", "finesse", "brilliance", "intelligence", "vitality"],
  "noun_standards"  : ["touchstone", "paradigm", "fundamentals", "benchmarks", "cornerstone", "standards", "precedent", "instance", "pilot", "paramount", "principals", "essentials", "sustainability"],
  "noun_repository": ["storage", "repository", "archive", "library", "registry", "stock", "warehousing", "reservoir", "cache", "assets", "stash", "depository", "index"],
  "noun_structure" : ["ecosystem", "worflow", "entourage", "domain", "habitat", "architecture", "formation", "framework", "structure", "environment", "schema", "network", "atmosphere", "gala", "ecosphere", "construction", "configuration", "build", "platform", "landing"],
  "math_term" : ["algebraic transverse properties", "modular diametrics", "radical differentiation", "principle derivatives", "differential advantage", "geodemagraphics", "boolean lattices","Gauss–Codazzi–Mainardi equations", "continuous tangent vector fields", "stereographic projection"],
  "power_adjectives" : ["maximal", "optimum", "undeniably powerful", "incredibly strong", "empowered", "reputable", "peerless", "prime", "flawless", "peak", "solid gold"],
  "business_buzzword" : ["by the books", "make the grade", "reach the top", "all or nothing", "just in time", "win-win", "future-proof", "next-level", "in demand", "play for keeps", "mulit-tier", "on the money", "world-class" ,"business-to-business"],
  "noun_machine_part" : [ "generator", "dynamo", "turbine", "transformer", "motor", "engine", "mechanism", "implement", "contraption", "utensil", "widget", "instrument", "tool", "channel", "piston", "medium", "vehicle", "agent"],
  "noun_ramp_up" : ["ramp up", "work up", "build up", "progress", "build out", "roll out", "product launch", "ignition", "zero to sixty", "prototyping", "get-going", "magnum opus", "farm to table", "tool time"],
  "negative_noun" : ["obsolescence", "discontinuance", "cessation", "separation", "interruption", "meltdown", "termination", "disjunction", "disruption", "suspension", "stoppage", " early retirement", "delays", "snafus", "hindrance", "bugs", "glitches", "impediments", "black-outs"],
  "verb_search" : ["search", "application", "information", "query", "inquiry", "investigation", "dredge", "sift", "probe", "discovery", "exploration", "examination", "dissection", "reasoning"],
  "verb_effect" : ["emerge", "appear", "start", "generate", "eventuate", "occur", "originate", "begin", "arise", "accumaulate", "form", "manifest", "shape", "materialize", "harden", "crystalize", "result"],
  "neutral_action_verb_ing" : ["using", "running", "trying", "having", "operating", "trusting", "enabling", "procuring", "enduring", "initializing", "loading", "programming", "accepting", "possessing"],
  "business_services" : ["core-service", "essential function", "vital systems", "foundation"],
  "genbuzzword" : ["alignment", "sink-or-swim", "at the end of the day", "break through the clutter", "bring to the table", "clear goal", "countless", "disruptive innovation", "globalization", "face time", "exit stratregy", "on the runway", "proactive", "win-win", "streamline", "robust"],
  "edubuzzword" : ["accountable talk", "higher-order thinking", "invested in", "run like a business"],
  "busibuzzword" :["bandwidth", "analytics", "ballpark figure",  "best of breed", "best practices", "brick-and-mortar", "brand", "buzzword compliant", "bottom-line", "downsizing", "deep drive", "co-opetition", "core competency", "Come-to-Jesus moment", "client-centric", "granular", "free value", "logistics", "mindshare", "Return on investment", "open the kimono", "creovation", "integethics"],
  "programmingterm" : ["APIs", "Heisenberg compensation", "initialized variables", "enhanced superglobals", "ternary operations", "extensible markup", "source compilations", "input streams", "flow control", "directive attributation", "relational database management", "structured query resources", "the Ansoff Matrix" ],
  "programmingjargon" : ["databases", "directories", "tables", "indexes", "SDKs", "binaries", "cloud servers", "nodes", "action scripts", "scalable vectors", "spreadsheets", "output channels", "input output streams", "configurations"],
  "bet" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  "city_state": ["Seattle, Wa", "New York City, NY", "Chicago, IL", "Detroit, MI", "San Antonio, TX", "Los Angeles, CA", "Portland, ME", "Atlanta, GA", "Boston, MA", "Miami, FL", "Las Vegas, NV", "Phoenix, AZ", "Denver, CO" ],
  "slogan": ["Connect your world to the world", "Factoring your x-factor", "Changing change", "Setting you on the world's stage","Now that's what were talking about", "I'd sure hate to be the other guys","Solutions for resolution", "Competentence for today's competition","Confidence for today's competition", "Expanding horizons to your bottom line", "Re-imagine Global", "The world can't wait, neither can we", "Changing brands, changing lives", "The mark of your brand", "Create ideas, leave the rest to us", "Breeding excellence into your brand", "Your problem's solution", "Challenging solutions for challenging times", "Changing the game for global", "Breaking the mold's mold", "It's time to change global", "Leverage the winning team", "W.I.N. means you win, everytime"]
};

// This is what creates the marketing word salad:
function creatorFunc (obj){
  var obj = createWordObj.call(m,null);
  var newDiv = document.createElement('div');
  var docFrag = document.createDocumentFragment();
  var divP = document.getElementById("there");
    if (divP) { divP.parentNode.removeChild(divP); }
      for (key in obj){
        var el = document.createElement(obj[key]["el"]);
        el.textContent = obj[key]["words"];
        el.setAttribute('id', key);
        docFrag.appendChild(el);
      };
  newDiv.setAttribute('id', 'there');
  document.getElementById("here").appendChild(newDiv);
  newDiv.appendChild(docFrag);
};

// This creates the variables, forms the sentences, and returns them as an object
function createWordObj(){

   function ucfirst (s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
  }
   function sliceTwo (s) {
      return s.charAt(0).toUpperCase() + s.charAt(1).toUpperCase() + s.slice(2,2);
  }

  function sliceOne (s) {
    return s.charAt(0).toUpperCase() + s.slice(1,1);

  }
  //Grabs keys then applies a shuffle
  function keygrabber(n){
    for (var key in n){
      if(n.hasOwnProperty(key)){
        shuffler(n[key]);
      }
    }
  }
  // Shuffles an object's properites
  function shuffler(n){
    for(var i = 0, a = n.length; i < a; i++){
      var j = Math.floor(Math.random() * (i+1));
      var temp1 = n[i];
      var temp2 = n[j];
      n[i] = temp2;
      n[j] = temp1;
    }
  }

keygrabber(this);

var wcm = this.bet[12] + this.bet[13] + this.bet[14],
threeLetter = this.bet[15]+this.bet[16]+this.bet[17],
threeLetterTwo = this.bet[8]+this.bet[7]+this.bet[6],
fourLetter = this.bet[1]+this.bet[2]+this.bet[20]+this.bet[21],
cmis = sliceOne(this.noun_content[0]) + sliceOne(this.noun_management[0]) + sliceOne("Interoperability") + sliceOne(this.noun_standards[3]),
cmisAll =  ucfirst(this.noun_content[0]) + this.noun_management[0] + "Interoperability" +  this.noun_standards[3],
rest =  sliceTwo(this.adj_abstract[0]) +  sliceOne(this.noun_cond[0]) +  sliceOne(this.verb_trans[0]),
sef = sliceOne(this.verb_search[0])+ sliceOne(this.noun_machine_part[2])+ sliceOne("Friendly"),
seo = sliceOne(this.verb_search[0])+ sliceOne(this.noun_machine_part[2]) + sliceOne(this.noun_management[1]),
wordObj =  {
  part: {
    words: this.IWGI[0],
    el: "h1"
  },
  part0: {
    words: this.slogan[0],
    el: "h2"
  },

  part1: {
    words: this.IWGI[0] + " prides itself on the ability to master every corner of marketing "+ this.buzz_noun[0] +". We offer solutions and statements customized to fit your marketing needs be it outsourcing, insourcing, sidesourcing, or even supersourcing. We try to prepare you for real world situations that would otherwise leave you "+ this.nounthing1[0] +"-" + this.nounthing2[0]+". We believe fully in the kind of "+ this.connector1[0] + "-the-" + this.connector2[0]+" " + this.connectornoun[0] +" that will allow you to "+ this.connectedverb[0] +
      " your "+ this.connectednoun[0] + ". When your "+ this.repeatnoun[0] +" needs more "+ this.repeatnoun[0] +" so your "+ this.repeatnoun[1] + " could use less "+ this.repeatnoun[1] + ". You will find our portfolio of products and services consistently " + this.positive_action_verb_ing[0] + " your bottom line. These are just a few of our guidelines to "+ this.management_verb[0] +
      " your " + this.noun_idea_plural[2] + ":\n",
    el: "p"
  },

  part2: {
    words: "1). Multichannel marketing: Those "+ threeLetterTwo + "s that "+ this.action_verb[0] + " with multichannel marketing do so by " + this.positive_action_verb_ing[2] + " a "+ this.noun_strategy[0] + " for each channel that " + this.action_verb_s[0] + " them to " + this.management_verb[1]+ " brand " +this.business_noun[0]+
      " while "+this.positive_action_verb_ing[3]+" customer "+this.noun_idea_plural[1]+". The most essential "+ this.noun_machine_part[0] +" for "+ this.positive_action_verb_ing[4] + " such a strategy is a "+ this.internetbuzzword[0]+" marketing "+ this.noun_structure[0]+" that enables " + threeLetterTwo+ "s to "+ this.action_verb[0]+
      " multichannel customer "+ this.noun_idea_plural[2]+" and campaigns. Look for capabilities to "+ this.action_verb[1]+" "+ this.noun[0]+"-"+ this.adj_ed[0]+ " "+ this.positive_action_verb_ing[2]+" across a range of "+ this.noun[1]+" channels, including "+ this.internet_buzzspaces[0]+", "
      + this.internet_buzzspaces[1]+", "+ this.internet_buzzspaces[2]+", web, and print. This helps ensure that customers are fully "+ this.positive_action_verb_ed[0]+ ", independent of the channel, geography, or "+ this.noun[2]+".\n",
    el: "p"
  },


  part3: {
    words: "2). "+ ucfirst(this.noun_standards[0])+"-based "+ this.noun_repository[0]+": Unlike "+ this.nounthing1[1]+"-"+ this.nounthing2[1]+", which can "+ this.verb_effect[0]+" from "+ this.neutral_action_verb_ing[0]+" proprietary "+ this.noun_structure[1]+
      "s, "+ this.buzz_verb[0]+", "+ this.noun_standards[1]+"-based "+ this.buzz_noun[1]+" help stave off "+ this.conf_phot_neg_effect[0]+ ". Perhaps more importantly, they ensure "+ this.noun_structure[2]+" "+ this.adjective_quick[0]+" across and beyond your organization. Make sure that the "+ threeLetter+" "+ this.noun_structure[0]+
      " you choose supports "+ this.noun_standards[2]+" such as "+ ucfirst(this.noun_content[0])+" "+ucfirst(this.noun_management[0])+" Interoperability "+ucfirst(this.noun_standards[3])+" ("+cmis+"), "+ucfirst(this.adj_abstract[0])+" "+ucfirst(this.noun_cond[0])+
      " "+ucfirst(this.verb_trans[0])+" ("+rest+"), and the "+ fourLetter+" framework. Adherence to this "+ this.noun_standards[4]+" future-proofs, and even "+ this.noun_enhance[0]+" your "+ this.noun[3]+" by providing access to the "+ this.business_buzzword[0]+" "+ this.noun_structure[3]+
      " of applications and utilities that are built to interoperate with the multichannel "+ this.connectornoun[1]+" "+ this.noun_structure[3]+".\n",
    el: "p"
  },

  part4: {
    words: "3). "+threeLetter+" "+ this.adjective_quick[0]+": A short "+ this.noun_ramp_up[0]+" time is a major factor in digital marketing. "+ucfirst(this.noun_machine_part[1])+"s should be intuitive and require "+ this.adj_small[0]+" "+ this.noun_prep[0]+" so that they can be "+ this.verb_use[0]+
      " "+ this.verb_ly[0]+" and "+ this.verb_ly[1]+" across your organization. In addition, the "+threeLetter+" should feature "+ this.buzz_verb[1]+" "+ this.noun_structure[4]+" complaiance to create the "+ this.noun_relate_big[0]+"-"+ this.noun_relate_small[0]+" relationships necessary for the multisite management that is typical in "+ this.internetbuzzword[0]+
      " marketing.\n",
    el: "p"
  },

  part5: {
    words: "4). " +ucfirst(this.verb_search[0])+ " " + this.noun_machine_part[2]+" "+ this.noun_management[1]+ " (" + seo +"): Most site visitors find you via " + this.verb_search[0]+"  " + this.noun_machine_part[2]+"s. Tuning "+ this.noun_content[0]+
      " to keep pace with top "+ this.verb_search[0]+" "+ this.math_term[0]+" is essential, but it can be a "+ this.negative_verb[0]+". Next-generation "+threeLetter+"s are built with "+ this.noun_structure[5]+" "+ this.noun_structure[6]+"s that "+ this.management_verb[2]+" the generation of "+ this.verb_search[0]+
      " "+ this.noun_machine_part[2]+" friendly ("+sef+") links out of the box that "+ this.noun_enhance[1]+" "+ this.noun_content[1]+" rankings in "+ this.verb_search[0]+" results. In addition, "+ this.noun_standards[1]+" for "+ this.noun_structure[0]+"s provide "+ this.programmingterm[0]+
      " to "+ this.programmingjargon[0]+" like "+ this.random_software[0]+" in conjunction with  "+this.random_software[1]+" for keyword "+this.noun_management[2] +" and are involved in "+this.double_business_noun[0]+" like the "+this.programmingterm[1]+" "+this.noun_repository[1]+" "+this.noun_structure[7]+
      " that aim to make content more visible to "+this.verb_search[0]+" "+this.noun_machine_part[2]+"s.\n",
    el: "p"
  },

  part6: {
    words: "Proudly located in "+this.city_state[0] +"; International Worldwide Global Incorporated (I.W.G.I) " +this.action_verb_s[1]+ " " +this.double_business_noun[1]+ " on "+this.confusing_photo_term[0]+ " with "+this.math_term[1]+ " to ensure "+this.power_adjectives[0]+ " "+this.connectornoun[2]+ " with tried and true methods via the "+this.buzz_verb[2]+ " capabilities of "+this.programmingterm[2]+
      " all a part of The Worldwide International Network (W.I.N.)\u2122\n",
    el: "p"
  },

  part7:{
    words: "International Worldwide Global Incoporated (I.W.G.I.) and The Worldwide International Network (W.I.N.) are registered trademarks of the Worldwide Internal Network, All rights reserved 2013 \u00ae",
    el: "small"
  }
};

return wordObj;
};
