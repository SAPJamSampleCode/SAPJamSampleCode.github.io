var SCSearch;
if (!SCSearch) SCSearch = {};
(function() {
  SCSearch.searchString = function(request) {
    var searchResults, request1, requestArr, regexp, preparedRequest, element,
        counter = 0, 
        i = 0, 
        j = 0, 
        k = 0, 
        showedLinks = ""
        html=""
        headerHtml=""
        frameset="";
       
    searchResults = createSearchResultsArray();
    request1 = normalizeSpace(request);
    requestArr = request1.split(" "); 
    regexp = new Array(requestArr.length);
    frameset = getFramesetInfo(document.location.href).replace("?search.html", "");

    for(i = 0; i < regexp.length; i = i + 1)
    {
      preparedRequest = prepareRequest(requestArr[i]);
      regexp[i]=generateRegExp(preparedRequest);
    }
    for (j = 0; j < regexp.length; j = j + 1)
    {
      for(i = 0; i < TopicsWordsList.length; i = i + 1)
      {
        if(TopicsWordsList[i]) {
          if (matchExactString(regexp[j], TopicsWordsList[i][0])) {
            for(k = 0; k < TopicsWordsList[i][1].length; k = k + 1) {
              searchResults[TopicsWordsList[i][1][k]] += 1;
            }
          }
        }
      }
    }
    
    if (!request || /^\s*$/.test(request)){
      headerHtml +=	"<span class='searchResults'><span class='searchPageSectionTitle'>" + TXT_ERR_NO_INPUT + "</span>&nbsp;</span>";
    } else {
      headerHtml += "<span class='searchResults'><span class='searchPageSectionTitle'>" + TXT_RESULTS_FOR + "</span>" + SCSearch.sanitizeString(request)
      for (j = 0; j < searchResults.length && counter < 512; j = j + 1)
      {
        if(searchResults[j] >= regexp.length && TopicFiles[j] !== "" && showedLinks.indexOf(TopicFiles[j]) === -1)
        {
          if (TopicTitles[j] !== 'null')
          {
            html += "<div class=\"searchItem\" onclick=\"displayTopic('" + SCSearch.sanitizeString(TopicFiles[j])  +"?search="+ encodeURIComponent(request) + "')\"><a href=\"" + SCSearch.sanitizeString(TopicFiles[j]) + "?search="+ encodeURIComponent(request) + "\"><span class='searchItemTitle'>" + SCSearch.sanitizeString(TopicTitles[j]) + "</span></a>";
            if (TopicDescriptions[j] !== '') {
              html += "<div class=\"searchItemDesc\">" + SCSearch.sanitizeString(TopicDescriptions[j]) + "</div>";
            }
            html += "</div>";
          }
          counter += 1;
        }
      }
      if (counter == 0) {
        headerHtml +="<div class='searchNoResults'>" + TXT_ERR_NO_RESULTS + "</div>";
      }
      headerHtml += "</span>";
      headerHtml += "<div class='searchPageSpacer'></div>"
    }
    document.getElementById("resultsheader").innerHTML = headerHtml;
    document.getElementById("results").innerHTML = html;
  }
  
  SCSearch.getQuerystring = function(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	SCSearch.sanitizeString = function(input){
	  var s = new Sanitize();
    var elm = document.implementation.createHTMLDocument('http://www.w3.org/1999/xhtml', 'html', null).body;
    elm.innerHTML = input;
    cleaned_fragment = s.clean_node(elm);
    elm = document.implementation.createHTMLDocument('http://www.w3.org/1999/xhtml', 'html', null).body;
    elm.appendChild(cleaned_fragment);
    return elm.innerHTML;
	}

  var generateRegExp = function(request) {
    var searchExpr, regexp = /(\x20\x20)/g;
    while(request.match(regexp)) {
      // Escape sequence must be written as follows.
      request = request.replace(regexp,"\x20");
    }
    regexp = /(^\x20)|(\x20$)/g;
    while(request.match(regexp)) {
      request = request.replace(regexp,"");
    }
    request = request.replace("*","\\w*");

    searchExpr = new RegExp(request, "i");
    return searchExpr;
  }

  var normalizeSpace = function(string) {
    var regexp = /(\x20\x20)/g;
    while(string.match(regexp)) {
      // Escape sequence must be written as follows.
      string = string.replace(regexp,"\x20");
    }
    regexp = /(^\x20)|(\x20$)/g;
    while(string.match(regexp)) {
      string = string.replace(regexp,"");
    }
    return string;
  }

  var createSearchResultsArray = function() {
    var i = 0, searchResults = new Array(TopicFiles.length);
    for(i = 0; i < searchResults.length; i = i + 1) {
      searchResults[i] = 0;
    }
    return searchResults;
  }

  var prepareRequest = function(request) {
    var regexp = /\\/g;
    request = request.replace(regexp,"\\\\");
    return request;
  }
  
  var matchExactString = function(r,str) {
	  var mes = str.match(r);
	  return mes != null && str == mes[0];
	}
	
  var getFramesetInfo = function(u) {
    u = u.replace("?search.html", "");
    var from = u.lastIndexOf("/") +1;
    var to = u.lastIndexOf("?");
    var fileName = "";
    if (to < 0) {
      fileName = u.substring(u.lastIndexOf("/")+1);
    }
    else {
		  fileName = u.substring(u.lastIndexOf("/")+1, u.lastIndexOf("?"));
		}
		return fileName;
	}
	
	function displayTopic(url) {
	  window.location=url;
	}	
  
})();

var redirect = function() {
  var searchTerms = "";
  // The search input in the banner, if it exists
	var txtSearchTermsInput = document.getElementById('txtSearchTerms');
  if (txtSearchTermsInput) searchTerms = txtSearchTermsInput.value;
  if (searchTerms.length<1) {
    // The search input in the topic body, if it exists
	  var searchQField = document.getElementById('search-q');
    if (searchQField) searchTerms = searchQField.value;   
	}
	var query = SCSearch.sanitizeString(searchTerms);
  if (query.length >= 1) window.location = "search.html?search=" + query;
}

var getParams = function() {
  var params = SCSearch.getQuerystring("search");
  // The search input in the banner, if it exists
	var txtSearchTermsInput = document.getElementById('txtSearchTerms');
	// The search input in the topic body, if it exists
	var searchQField = document.getElementById('search-q');
	if (searchQField) {
	  searchQField.value=params;
	  if (txtSearchTermsInput) txtSearchTermsInput.value='';
	} else if (txtSearchTermsInput) {
	  txtSearchTermsInput.value=params;
	}
	SCSearch.searchString(params);
}


	
	