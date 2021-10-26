!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}System.register(["./element-plus-legacy.ca5e6fff.js","./lodash-legacy.3746ec84.js"],(function(t){"use strict";var n,r,i,s,o,a,u,h,c,d,p,f,l,_,v,y,g;return{setters:[function(e){n=e.b},function(e){r=e.G,i=e.b,s=e.f,o=e.g,a=e.n,u=e.H,h=e.I,c=e.J,d=e.o,p=e.K,f=e.q,l=e.B,_=e.L,v=e.M,y=e.u,g=e.E}],execute:function(){var m;if("function"==typeof n)try{m={clone:r,constant:i,each:s,filter:o,has:a,isArray:u,isEmpty:h,isFunction:c,isUndefined:d,keys:p,map:f,reduce:l,size:_,transform:v,union:y,values:g}}catch(fe){}m||(m=window._);var w=m,E=w,b=N,k="\0";function N(e){this._isDirected=!E.has(e,"directed")||e.directed,this._isMultigraph=!!E.has(e,"multigraph")&&e.multigraph,this._isCompound=!!E.has(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=E.constant(void 0),this._defaultEdgeLabelFn=E.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}function C(e,t){e[t]?e[t]++:e[t]=1}function I(e,t){--e[t]||delete e[t]}function L(e,t,n,r){var i=""+t,s=""+n;if(!e&&i>s){var o=i;i=s,s=o}return i+""+s+""+(E.isUndefined(r)?"\0":r)}function D(e,t,n,r){var i=""+t,s=""+n;if(!e&&i>s){var o=i;i=s,s=o}var a={v:i,w:s};return r&&(a.name=r),a}function j(e,t){return L(e,t.v,t.w,t.name)}N.prototype._nodeCount=0,N.prototype._edgeCount=0,N.prototype.isDirected=function(){return this._isDirected},N.prototype.isMultigraph=function(){return this._isMultigraph},N.prototype.isCompound=function(){return this._isCompound},N.prototype.setGraph=function(e){return this._label=e,this},N.prototype.graph=function(){return this._label},N.prototype.setDefaultNodeLabel=function(e){return E.isFunction(e)||(e=E.constant(e)),this._defaultNodeLabelFn=e,this},N.prototype.nodeCount=function(){return this._nodeCount},N.prototype.nodes=function(){return E.keys(this._nodes)},N.prototype.sources=function(){var e=this;return E.filter(this.nodes(),(function(t){return E.isEmpty(e._in[t])}))},N.prototype.sinks=function(){var e=this;return E.filter(this.nodes(),(function(t){return E.isEmpty(e._out[t])}))},N.prototype.setNodes=function(e,t){var n=arguments,r=this;return E.each(e,(function(e){n.length>1?r.setNode(e,t):r.setNode(e)})),this},N.prototype.setNode=function(e,t){return E.has(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=t),this):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=k,this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)},N.prototype.node=function(e){return this._nodes[e]},N.prototype.hasNode=function(e){return E.has(this._nodes,e)},N.prototype.removeNode=function(e){var t=this;if(E.has(this._nodes,e)){var n=function(e){t.removeEdge(t._edgeObjs[e])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],E.each(this.children(e),(function(e){t.setParent(e)})),delete this._children[e]),E.each(E.keys(this._in[e]),n),delete this._in[e],delete this._preds[e],E.each(E.keys(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this},N.prototype.setParent=function(e,t){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(E.isUndefined(t))t=k;else{for(var n=t+="";!E.isUndefined(n);n=this.parent(n))if(n===e)throw new Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this},N.prototype._removeFromParentsChildList=function(e){delete this._children[this._parent[e]][e]},N.prototype.parent=function(e){if(this._isCompound){var t=this._parent[e];if(t!==k)return t}},N.prototype.children=function(e){if(E.isUndefined(e)&&(e=k),this._isCompound){var t=this._children[e];if(t)return E.keys(t)}else{if(e===k)return this.nodes();if(this.hasNode(e))return[]}},N.prototype.predecessors=function(e){var t=this._preds[e];if(t)return E.keys(t)},N.prototype.successors=function(e){var t=this._sucs[e];if(t)return E.keys(t)},N.prototype.neighbors=function(e){var t=this.predecessors(e);if(t)return E.union(t,this.successors(e))},N.prototype.isLeaf=function(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length},N.prototype.filterNodes=function(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var n=this;E.each(this._nodes,(function(n,r){e(r)&&t.setNode(r,n)})),E.each(this._edgeObjs,(function(e){t.hasNode(e.v)&&t.hasNode(e.w)&&t.setEdge(e,n.edge(e))}));var r={};function i(e){var s=n.parent(e);return void 0===s||t.hasNode(s)?(r[e]=s,s):s in r?r[s]:i(s)}return this._isCompound&&E.each(t.nodes(),(function(e){t.setParent(e,i(e))})),t},N.prototype.setDefaultEdgeLabel=function(e){return E.isFunction(e)||(e=E.constant(e)),this._defaultEdgeLabelFn=e,this},N.prototype.edgeCount=function(){return this._edgeCount},N.prototype.edges=function(){return E.values(this._edgeObjs)},N.prototype.setPath=function(e,t){var n=this,r=arguments;return E.reduce(e,(function(e,i){return r.length>1?n.setEdge(e,i,t):n.setEdge(e,i),i})),this},N.prototype.setEdge=function(){var t,n,r,i,s=!1,o=arguments[0];"object"===e(o)&&null!==o&&"v"in o?(t=o.v,n=o.w,r=o.name,2===arguments.length&&(i=arguments[1],s=!0)):(t=o,n=arguments[1],r=arguments[3],arguments.length>2&&(i=arguments[2],s=!0)),t=""+t,n=""+n,E.isUndefined(r)||(r=""+r);var a=L(this._isDirected,t,n,r);if(E.has(this._edgeLabels,a))return s&&(this._edgeLabels[a]=i),this;if(!E.isUndefined(r)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(n),this._edgeLabels[a]=s?i:this._defaultEdgeLabelFn(t,n,r);var u=D(this._isDirected,t,n,r);return t=u.v,n=u.w,Object.freeze(u),this._edgeObjs[a]=u,C(this._preds[n],t),C(this._sucs[t],n),this._in[n][a]=u,this._out[t][a]=u,this._edgeCount++,this},N.prototype.edge=function(e,t,n){var r=1===arguments.length?j(this._isDirected,arguments[0]):L(this._isDirected,e,t,n);return this._edgeLabels[r]},N.prototype.hasEdge=function(e,t,n){var r=1===arguments.length?j(this._isDirected,arguments[0]):L(this._isDirected,e,t,n);return E.has(this._edgeLabels,r)},N.prototype.removeEdge=function(e,t,n){var r=1===arguments.length?j(this._isDirected,arguments[0]):L(this._isDirected,e,t,n),i=this._edgeObjs[r];return i&&(e=i.v,t=i.w,delete this._edgeLabels[r],delete this._edgeObjs[r],I(this._preds[t],e),I(this._sucs[e],t),delete this._in[t][r],delete this._out[e][r],this._edgeCount--),this},N.prototype.inEdges=function(e,t){var n=this._in[e];if(n){var r=E.values(n);return t?E.filter(r,(function(e){return e.v===t})):r}},N.prototype.outEdges=function(e,t){var n=this._out[e];if(n){var r=E.values(n);return t?E.filter(r,(function(e){return e.w===t})):r}},N.prototype.nodeEdges=function(e,t){var n=this.inEdges(e,t);if(n)return n.concat(this.outEdges(e,t))};var F={Graph:b,version:"2.1.8"},S=w,M=b,O={write:function(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:P(e),edges:U(e)};S.isUndefined(e.graph())||(t.value=S.clone(e.graph()));return t},read:function(e){var t=new M(e.options).setGraph(e.value);return S.each(e.nodes,(function(e){t.setNode(e.v,e.value),e.parent&&t.setParent(e.v,e.parent)})),S.each(e.edges,(function(e){t.setEdge({v:e.v,w:e.w,name:e.name},e.value)})),t}};function P(e){return S.map(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),i={v:t};return S.isUndefined(n)||(i.value=n),S.isUndefined(r)||(i.parent=r),i}))}function U(e){return S.map(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return S.isUndefined(t.name)||(r.name=t.name),S.isUndefined(n)||(r.value=n),r}))}var G=w,T=function(e){var t,n={},r=[];function i(r){G.has(n,r)||(n[r]=!0,t.push(r),G.each(e.successors(r),i),G.each(e.predecessors(r),i))}return G.each(e.nodes(),(function(e){t=[],i(e),t.length&&r.push(t)})),r};var z=w,x=A;function A(){this._arr=[],this._keyIndices={}}A.prototype.size=function(){return this._arr.length},A.prototype.keys=function(){return this._arr.map((function(e){return e.key}))},A.prototype.has=function(e){return z.has(this._keyIndices,e)},A.prototype.priority=function(e){var t=this._keyIndices[e];if(void 0!==t)return this._arr[t].priority},A.prototype.min=function(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key},A.prototype.add=function(e,t){var n=this._keyIndices;if(e=String(e),!z.has(n,e)){var r=this._arr,i=r.length;return n[e]=i,r.push({key:e,priority:t}),this._decrease(i),!0}return!1},A.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key},A.prototype.decrease=function(e,t){var n=this._keyIndices[e];if(t>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+e+" Old: "+this._arr[n].priority+" New: "+t);this._arr[n].priority=t,this._decrease(n)},A.prototype._heapify=function(e){var t=this._arr,n=2*e,r=n+1,i=e;n<t.length&&(i=t[n].priority<t[i].priority?n:i,r<t.length&&(i=t[r].priority<t[i].priority?r:i),i!==e&&(this._swap(e,i),this._heapify(i)))},A.prototype._decrease=function(e){for(var t,n=this._arr,r=n[e].priority;0!==e&&!(n[t=e>>1].priority<r);)this._swap(e,t),e=t},A.prototype._swap=function(e,t){var n=this._arr,r=this._keyIndices,i=n[e],s=n[t];n[e]=s,n[t]=i,r[s.key]=e,r[i.key]=t};var V=x,Y=function(e,t,n,r){return function(e,t,n,r){var i,s,o={},a=new V,u=function(e){var t=e.v!==i?e.v:e.w,r=o[t],u=n(e),h=s.distance+u;if(u<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+u);h<r.distance&&(r.distance=h,r.predecessor=i,a.decrease(t,h))};e.nodes().forEach((function(e){var n=e===t?0:Number.POSITIVE_INFINITY;o[e]={distance:n},a.add(e,n)}));for(;a.size()>0&&(i=a.removeMin(),(s=o[i]).distance!==Number.POSITIVE_INFINITY);)r(i).forEach(u);return o}(e,String(t),n||B,r||function(t){return e.outEdges(t)})},B=w.constant(1);var K=Y,W=w,q=function(e,t,n){return W.transform(e.nodes(),(function(r,i){r[i]=K(e,i,t,n)}),{})};var H=w,J=function(e){var t=0,n=[],r={},i=[];function s(o){var a=r[o]={onStack:!0,lowlink:t,index:t++};if(n.push(o),e.successors(o).forEach((function(e){H.has(r,e)?r[e].onStack&&(a.lowlink=Math.min(a.lowlink,r[e].index)):(s(e),a.lowlink=Math.min(a.lowlink,r[e].lowlink))})),a.lowlink===a.index){var u,h=[];do{u=n.pop(),r[u].onStack=!1,h.push(u)}while(o!==u);i.push(h)}}return e.nodes().forEach((function(e){H.has(r,e)||s(e)})),i};var Q=w,R=J,X=function(e){return Q.filter(R(e),(function(t){return t.length>1||1===t.length&&e.hasEdge(t[0],t[0])}))};var Z=function(e,t,n){return function(e,t,n){var r={},i=e.nodes();return i.forEach((function(e){r[e]={},r[e][e]={distance:0},i.forEach((function(t){e!==t&&(r[e][t]={distance:Number.POSITIVE_INFINITY})})),n(e).forEach((function(n){var i=n.v===e?n.w:n.v,s=t(n);r[e][i]={distance:s,predecessor:e}}))})),i.forEach((function(e){var t=r[e];i.forEach((function(n){var s=r[n];i.forEach((function(n){var r=s[e],i=t[n],o=s[n],a=r.distance+i.distance;a<o.distance&&(o.distance=a,o.predecessor=i.predecessor)}))}))})),r}(e,t||$,n||function(t){return e.outEdges(t)})},$=w.constant(1);var ee=w,te=ne;function ne(e){var t={},n={},r=[];if(ee.each(e.sinks(),(function i(s){if(ee.has(n,s))throw new re;ee.has(t,s)||(n[s]=!0,t[s]=!0,ee.each(e.predecessors(s),i),delete n[s],r.push(s))})),ee.size(t)!==e.nodeCount())throw new re;return r}function re(){}ne.CycleException=re,re.prototype=new Error;var ie=te;var se=w,oe=function(e,t,n){se.isArray(t)||(t=[t]);var r=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],s={};return se.each(t,(function(t){if(!e.hasNode(t))throw new Error("Graph does not have node: "+t);ae(e,t,"post"===n,s,r,i)})),i};function ae(e,t,n,r,i,s){se.has(r,t)||(r[t]=!0,n||s.push(t),se.each(i(t),(function(t){ae(e,t,n,r,i,s)})),n&&s.push(t))}var ue=oe;var he=oe;var ce=w,de=b,pe=x;t("g",{Graph:F.Graph,json:O,alg:{components:T,dijkstra:Y,dijkstraAll:q,findCycles:X,floydWarshall:Z,isAcyclic:function(e){try{ie(e)}catch(fe){if(fe instanceof ie.CycleException)return!1;throw fe}return!0},postorder:function(e,t){return ue(e,t,"post")},preorder:function(e,t){return he(e,t,"pre")},prim:function(e,t){var n,r=new de,i={},s=new pe;function o(e){var r=e.v===n?e.w:e.v,o=s.priority(r);if(void 0!==o){var a=t(e);a<o&&(i[r]=n,s.decrease(r,a))}}if(0===e.nodeCount())return r;ce.each(e.nodes(),(function(e){s.add(e,Number.POSITIVE_INFINITY),r.setNode(e)})),s.decrease(e.nodes()[0],0);var a=!1;for(;s.size()>0;){if(n=s.removeMin(),ce.has(i,n))r.setEdge(n,i[n]);else{if(a)throw new Error("Input graph is not connected: "+e);a=!0}e.nodeEdges(n).forEach(o)}return r},tarjan:J,topsort:te},version:F.version})}}}))}();
