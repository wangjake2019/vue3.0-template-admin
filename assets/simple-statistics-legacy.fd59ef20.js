!function(){function t(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}System.register(["./element-plus-legacy.ca5e6fff.js"],(function(r){"use strict";var e;return{setters:[function(t){e=t.g}],execute:function(){var n,a;function o(t){if(0===t.length)return 0;for(var r,e=t[0],n=0,a=1;a<t.length;a++)r=e+t[a],Math.abs(e)>=Math.abs(t[a])?n+=e-r+t[a]:n+=t[a]-r+e,e=r;return e+n}function i(t){if(0===t.length)throw new Error("mean requires at least one data point");return o(t)/t.length}function u(t,r){var e,n,a=i(t),o=0;if(2===r)for(n=0;n<t.length;n++)o+=(e=t[n]-a)*e;else for(n=0;n<t.length;n++)o+=Math.pow(t[n]-a,r);return o}function h(t){if(0===t.length)throw new Error("variance requires at least one data point");return u(t,2)/t.length}function f(t){if(1===t.length)return 0;var r=h(t);return Math.sqrt(r)}function l(t){if(0===t.length)throw new Error("mode requires at least one data point");if(1===t.length)return t[0];for(var r=t[0],e=NaN,n=0,a=1,o=1;o<t.length+1;o++)t[o]!==r?(a>n&&(n=a,e=r),a=1,r=t[o]):a++;return e}function s(t){return t.slice().sort((function(t,r){return t-r}))}function c(t){if(0===t.length)throw new Error("min requires at least one data point");for(var r=t[0],e=1;e<t.length;e++)t[e]<r&&(r=t[e]);return r}function g(t){if(0===t.length)throw new Error("max requires at least one data point");for(var r=t[0],e=1;e<t.length;e++)t[e]>r&&(r=t[e]);return r}function v(t,r){var e=t.length*r;if(0===t.length)throw new Error("quantile requires at least one data point.");if(r<0||r>1)throw new Error("quantiles must be between 0 and 1");return 1===r?t[t.length-1]:0===r?t[0]:e%1!=0?t[Math.ceil(e)-1]:t.length%2==0?(t[e-1]+t[e])/2:t[e]}function p(t,r,e,n){for(e=e||0,n=n||t.length-1;n>e;){if(n-e>600){var a=n-e+1,o=r-e+1,i=Math.log(a),u=.5*Math.exp(2*i/3),h=.5*Math.sqrt(i*u*(a-u)/a);o-a/2<0&&(h*=-1),p(t,r,Math.max(e,Math.floor(r-o*u/a+h)),Math.min(n,Math.floor(r+(a-o)*u/a+h)))}var f=t[r],l=e,s=n;for(w(t,e,r),t[n]>f&&w(t,e,n);l<s;){for(w(t,l,s),l++,s--;t[l]<f;)l++;for(;t[s]>f;)s--}t[e]===f?w(t,e,s):w(t,++s,n),s<=r&&(e=s+1),r<=s&&(n=s-1)}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function M(t,r){var e=t.slice();if(Array.isArray(r)){!function(t,r){for(var e=[0],n=0;n<r.length;n++)e.push(b(t.length,r[n]));e.push(t.length-1),e.sort(d);for(var a=[0,e.length-1];a.length;){var o=Math.ceil(a.pop()),i=Math.floor(a.pop());if(!(o-i<=1)){var u=Math.floor((i+o)/2);m(t,e[u],Math.floor(e[i]),Math.ceil(e[o])),a.push(i,u,u,o)}}}(e,r);for(var n=[],a=0;a<r.length;a++)n[a]=v(e,r[a]);return n}return m(e,b(e.length,r),0,e.length-1),v(e,r)}function m(t,r,e,n){r%1==0?p(t,r,e,n):(p(t,r=Math.floor(r),e,n),p(t,r+1,r+1,n))}function d(t,r){return t-r}function b(t,r){var e=t*r;return 1===r?t-1:0===r?0:e%1!=0?Math.ceil(e)-1:t%2==0?e-.5:e}function q(t,r){if(r<t[0])return 0;if(r>t[t.length-1])return 1;var e=function(t,r){for(var e=0,n=0,a=t.length;n<a;)r<=t[e=n+a>>>1]?a=e:n=-~e;return n}(t,r);if(t[e]!==r)return e/t.length;e++;var n=function(t,r){for(var e=0,n=0,a=t.length;n<a;)r>=t[e=n+a>>>1]?n=-~e:a=e;return n}(t,r);if(n===e)return e/t.length;var a=n-e+1;return a*(n+e)/2/a/t.length}function y(t){var r=M(t,.75),e=M(t,.25);if("number"==typeof r&&"number"==typeof e)return r-e}function E(t){return+M(t,.5)}function S(t){for(var r=E(t),e=[],n=0;n<t.length;n++)e.push(Math.abs(t[n]-r));return E(e)}function P(t,r){r=r||Math.random;for(var e,n,a=t.length;a>0;)n=Math.floor(r()*a--),e=t[a],t[a]=t[n],t[n]=e;return t}function x(t,r){return P(t.slice().slice(),r)}function k(t){for(var r,e=0,n=0;n<t.length;n++)0!==n&&t[n]===r||(r=t[n],e++);return e}function I(t,r){for(var e=[],n=0;n<t;n++){for(var a=[],o=0;o<r;o++)a.push(0);e.push(a)}return e}function T(t,r,e,n){var a;if(t>0){var o=(e[r]-e[t-1])/(r-t+1);a=n[r]-n[t-1]-(r-t+1)*o*o}else a=n[r]-e[r]*e[r]/(r+1);return a<0?0:a}function D(t,r,e,n,a,o,i){if(!(t>r)){var u=Math.floor((t+r)/2);n[e][u]=n[e-1][u-1],a[e][u]=u;var h=e;t>e&&(h=Math.max(h,a[e][t-1]||0)),h=Math.max(h,a[e-1][u]||0);var f,l,s,c=u-1;r<n.length-1&&(c=Math.min(c,a[e][r+1]||0));for(var g=c;g>=h&&!((f=T(g,u,o,i))+n[e-1][h-1]>=n[e][u]);--g)(l=T(h,u,o,i)+n[e-1][h-1])<n[e][u]&&(n[e][u]=l,a[e][u]=h),h++,(s=f+n[e-1][g-1])<n[e][u]&&(n[e][u]=s,a[e][u]=g);D(t,u-1,e,n,a,o,i),D(u+1,r,e,n,a,o,i)}}function N(t,r){if(t.length!==r.length)throw new Error("sampleCovariance requires samples with equal lengths");if(t.length<2)throw new Error("sampleCovariance requires at least two data points in each sample");for(var e=i(t),n=i(r),a=0,o=0;o<t.length;o++)a+=(t[o]-e)*(r[o]-n);return a/(t.length-1)}function C(t){if(t.length<2)throw new Error("sampleVariance requires at least two data points");return u(t,2)/(t.length-1)}function O(t){var r=C(t);return Math.sqrt(r)}function _(t,r,e,n){return(t*r+e*n)/(r+n)}function j(t){if(0===t.length)throw new Error("rootMeanSquare requires at least one data point");for(var r=0,e=0;e<t.length;e++)r+=Math.pow(t[e],2);return Math.sqrt(r/t.length)}function F(){this.totalCount=0,this.data={}}function R(){this.weights=[],this.bias=0}F.prototype.train=function(t,r){for(var e in this.data[r]||(this.data[r]={}),t){var n=t[e];void 0===this.data[r][e]&&(this.data[r][e]={}),void 0===this.data[r][e][n]&&(this.data[r][e][n]=0),this.data[r][e][n]++}this.totalCount++},F.prototype.score=function(t){var r,e={};for(var n in t){var a=t[n];for(r in this.data)e[r]={},e[r][n+"_"+a]=this.data[r][n]?(this.data[r][n][a]||0)/this.totalCount:0}var o={};for(r in e)for(var i in o[r]=0,e[r])o[r]+=e[r][i];return o},R.prototype.predict=function(t){if(t.length!==this.weights.length)return null;for(var r=0,e=0;e<this.weights.length;e++)r+=this.weights[e]*t[e];return(r+=this.bias)>0?1:0},R.prototype.train=function(t,r){if(0!==r&&1!==r)return null;t.length!==this.weights.length&&(this.weights=t,this.bias=1);var e=this.predict(t);if(e!==r){for(var n=r-e,a=0;a<this.weights.length;a++)this.weights[a]+=n*t[a];this.bias+=n}return this};var A=1e-4;function z(t){if(t<0)throw new Error("factorial requires a non-negative value");if(Math.floor(t)!==t)throw new Error("factorial requires an integer input");for(var r=1,e=2;e<=t;e++)r*=e;return r}var V=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22],B=Math.log(Math.sqrt(2*Math.PI));var K={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}};var U=Math.sqrt(2*Math.PI),G={gaussian:function(t){return Math.exp(-.5*t*t)/U}},H={nrd:function(t){var r=O(t),e=y(t);return"number"==typeof e&&(r=Math.min(r,e/1.34)),1.06*r*Math.pow(t.length,-.2)}};function L(t,r,e){var n,a;if(void 0===r)n=G.gaussian;else if("string"==typeof r){if(!G[r])throw new Error('Unknown kernel "'+r+'"');n=G[r]}else n=r;if(void 0===e)a=H.nrd(t);else if("string"==typeof e){if(!H[e])throw new Error('Unknown bandwidth method "'+e+'"');a=H[e](t)}else a=e;return function(r){var e=0,o=0;for(e=0;e<t.length;e++)o+=n((r-t[e])/a);return o/a/t.length}}var W=Math.sqrt(2*Math.PI);function J(t){for(var r=t,e=t,n=1;n<15;n++)r+=e*=t*t/(2*n+1);return Math.round(1e4*(.5+r/W*Math.exp(-t*t/2)))/1e4}for(var Q=[],X=0;X<=3.09;X+=.01)Q.push(J(X));function Y(t){var r=1/(1+.5*Math.abs(t)),e=r*Math.exp(-Math.pow(t,2)-1.26551223+1.00002368*r+.37409196*Math.pow(r,2)+.09678418*Math.pow(r,3)-.18628806*Math.pow(r,4)+.27886807*Math.pow(r,5)-1.13520398*Math.pow(r,6)+1.48851587*Math.pow(r,7)-.82215223*Math.pow(r,8)+.17087277*Math.pow(r,9));return t>=0?1-e:e-1}function Z(t){var r=8*(Math.PI-3)/(3*Math.PI*(4-Math.PI)),e=Math.sqrt(Math.sqrt(Math.pow(2/(Math.PI*r)+Math.log(1-t*t)/2,2)-Math.log(1-t*t)/r)-(2/(Math.PI*r)+Math.log(1-t*t)/2));return t>=0?e:-e}function $(t){if("number"==typeof t)return t<0?-1:0===t?0:1;throw new TypeError("not a number")}var tt=Object.freeze((t(n={__proto__:null},Symbol.toStringTag,"Module"),t(n,"linearRegression",(function(t){var r,e,n=t.length;if(1===n)r=0,e=t[0][1];else{for(var a,o,i,u=0,h=0,f=0,l=0,s=0;s<n;s++)u+=o=(a=t[s])[0],h+=i=a[1],f+=o*o,l+=o*i;e=h/n-(r=(n*l-u*h)/(n*f-u*u))*u/n}return{m:r,b:e}})),t(n,"linearRegressionLine",(function(t){return function(r){return t.b+t.m*r}})),t(n,"standardDeviation",f),t(n,"rSquared",(function(t,r){if(t.length<2)return 1;for(var e=0,n=0;n<t.length;n++)e+=t[n][1];for(var a=e/t.length,o=0,i=0;i<t.length;i++)o+=Math.pow(a-t[i][1],2);for(var u=0,h=0;h<t.length;h++)u+=Math.pow(t[h][1]-r(t[h][0]),2);return 1-u/o})),t(n,"mode",(function(t){return l(s(t))})),t(n,"modeFast",(function(t){for(var r,e=new Map,n=0,a=0;a<t.length;a++){var o=e.get(t[a]);void 0===o?o=1:o++,o>n&&(r=t[a],n=o),e.set(t[a],o)}if(0===n)throw new Error("mode requires at last one data point");return r})),t(n,"modeSorted",l),t(n,"min",c),t(n,"max",g),t(n,"extent",(function(t){if(0===t.length)throw new Error("extent requires at least one data point");for(var r=t[0],e=t[0],n=1;n<t.length;n++)t[n]>e&&(e=t[n]),t[n]<r&&(r=t[n]);return[r,e]})),t(n,"minSorted",(function(t){return t[0]})),t(n,"maxSorted",(function(t){return t[t.length-1]})),t(n,"extentSorted",(function(t){return[t[0],t[t.length-1]]})),t(n,"sum",o),t(n,"sumSimple",(function(t){for(var r=0,e=0;e<t.length;e++)r+=t[e];return r})),t(n,"product",(function(t){for(var r=1,e=0;e<t.length;e++)r*=t[e];return r})),t(n,"quantile",M),t(n,"quantileSorted",v),t(n,"quantileRank",(function(t,r){return q(s(t),r)})),t(n,"quantileRankSorted",q),t(n,"interquartileRange",y),t(n,"iqr",y),t(n,"medianAbsoluteDeviation",S),t(n,"mad",S),t(n,"chunk",(function(t,r){var e=[];if(r<1)throw new Error("chunk size must be a positive number");if(Math.floor(r)!==r)throw new Error("chunk size must be an integer");for(var n=0;n<t.length;n+=r)e.push(t.slice(n,n+r));return e})),t(n,"sampleWithReplacement",(function(t,r,e){if(0===t.length)return[];e=e||Math.random;for(var n=t.length,a=[],o=0;o<r;o++){var i=Math.floor(e()*n);a.push(t[i])}return a})),t(n,"shuffle",x),t(n,"shuffleInPlace",P),t(n,"sample",(function(t,r,e){return x(t,e).slice(0,r)})),t(n,"ckmeans",(function(t,r){if(r>t.length)throw new Error("cannot generate more classes than there are data values");var e=s(t);if(1===k(e))return[e];var n=I(r,e.length),a=I(r,e.length);!function(t,r,e){for(var n=r[0].length,a=t[Math.floor(n/2)],o=[],i=[],u=0,h=void 0;u<n;++u)h=t[u]-a,0===u?(o.push(h),i.push(h*h)):(o.push(o[u-1]+h),i.push(i[u-1]+h*h)),r[0][u]=T(0,u,o,i),e[0][u]=0;for(var f=1;f<r.length;++f)D(f<r.length-1?f:n-1,n-1,f,r,e,o,i)}(e,n,a);for(var o=[],i=a[0].length-1,u=a.length-1;u>=0;u--){var h=a[u][i];o[u]=e.slice(h,i+1),u>0&&(i=h-1)}return o})),t(n,"uniqueCountSorted",k),t(n,"sumNthPowerDeviations",u),t(n,"equalIntervalBreaks",(function(t,r){if(t.length<2)return t;for(var e=c(t),n=g(t),a=[e],o=(n-e)/r,i=1;i<r;i++)a.push(a[0]+o*i);return a.push(n),a})),t(n,"sampleCovariance",N),t(n,"sampleCorrelation",(function(t,r){return N(t,r)/O(t)/O(r)})),t(n,"sampleVariance",C),t(n,"sampleStandardDeviation",O),t(n,"sampleSkewness",(function(t){if(t.length<3)throw new Error("sampleSkewness requires at least three data points");for(var r,e=i(t),n=0,a=0,o=0;o<t.length;o++)n+=(r=t[o]-e)*r,a+=r*r*r;var u=Math.sqrt(n/(t.length-1)),h=t.length;return h*a/((h-1)*(h-2)*Math.pow(u,3))})),t(n,"sampleKurtosis",(function(t){var r=t.length;if(r<4)throw new Error("sampleKurtosis requires at least four data points");for(var e,n=i(t),a=0,o=0,u=0;u<r;u++)a+=(e=t[u]-n)*e,o+=e*e*e*e;return(r-1)/((r-2)*(r-3))*(r*(r+1)*o/(a*a)-3*(r-1))})),t(n,"permutationsHeap",(function(t){for(var r=new Array(t.length),e=[t.slice()],n=0;n<t.length;n++)r[n]=0;for(var a=0;a<t.length;)if(r[a]<a){var o=0;a%2!=0&&(o=r[a]);var i=t[o];t[o]=t[a],t[a]=i,e.push(t.slice()),r[a]++,a=0}else r[a]=0,a++;return e})),t(n,"combinations",(function t(r,e){var n,a,o,i,u=[];for(n=0;n<r.length;n++)if(1===e)u.push([r[n]]);else for(o=t(r.slice(n+1,r.length),e-1),a=0;a<o.length;a++)(i=o[a]).unshift(r[n]),u.push(i);return u})),t(n,"combinationsReplacement",(function t(r,e){for(var n=[],a=0;a<r.length;a++)if(1===e)n.push([r[a]]);else for(var o=t(r.slice(a,r.length),e-1),i=0;i<o.length;i++)n.push([r[a]].concat(o[i]));return n})),t(n,"addToMean",(function(t,r,e){return t+(e-t)/(r+1)})),t(n,"combineMeans",_),t(n,"combineVariances",(function(t,r,e,n,a,o){var i=_(r,e,a,o);return(e*(t+Math.pow(r-i,2))+o*(n+Math.pow(a-i,2)))/(e+o)})),t(n,"geometricMean",(function(t){if(0===t.length)throw new Error("geometricMean requires at least one data point");for(var r=1,e=0;e<t.length;e++){if(t[e]<=0)throw new Error("geometricMean requires only positive numbers as input");r*=t[e]}return Math.pow(r,1/t.length)})),t(n,"harmonicMean",(function(t){if(0===t.length)throw new Error("harmonicMean requires at least one data point");for(var r=0,e=0;e<t.length;e++){if(t[e]<=0)throw new Error("harmonicMean requires only positive numbers as input");r+=1/t[e]}return t.length/r})),t(n,"average",i),t(n,"mean",i),t(n,"median",E),t(n,"medianSorted",(function(t){return v(t,.5)})),t(n,"subtractFromMean",(function(t,r,e){return(t*r-e)/(r-1)})),t(n,"rootMeanSquare",j),t(n,"rms",j),t(n,"variance",h),t(n,"tTest",(function(t,r){return(i(t)-r)/(f(t)/Math.sqrt(t.length))})),t(n,"tTestTwoSample",(function(t,r,e){var n=t.length,a=r.length;if(!n||!a)return null;e||(e=0);var o=i(t),u=i(r),h=C(t),f=C(r);return"number"==typeof o&&"number"==typeof u&&"number"==typeof h&&"number"==typeof f?(o-u-e)/Math.sqrt(((n-1)*h+(a-1)*f)/(n+a-2)*(1/n+1/a)):void 0})),t(n,"BayesianClassifier",F),t(n,"bayesian",F),t(n,"PerceptronModel",R),t(n,"perceptron",R),t(n,"epsilon",A),t(n,"factorial",z),t(n,"gamma",(function t(r){if("number"==typeof(e=r)&&isFinite(e)&&Math.floor(e)===e)return r<=0?NaN:z(r-1);var e;if(--r<0)return Math.PI/(Math.sin(Math.PI*-r)*t(-r));var n=r+.25;return Math.pow(r/Math.E,r)*Math.sqrt(2*Math.PI*(r+1/6))*(1+1/144/Math.pow(n,2)-1/12960/Math.pow(n,3)-257/207360/Math.pow(n,4)-52/2612736/Math.pow(n,5)+5741173/9405849600/Math.pow(n,6)+37529/18811699200/Math.pow(n,7))})),t(n,"gammaln",(function(t){if(t<=0)return 1/0;t--;for(var r=V[0],e=1;e<15;e++)r+=V[e]/(t+e);var n=5.2421875+t;return B+Math.log(r)-n+(t+.5)*Math.log(n)})),t(n,"bernoulliDistribution",(function(t){if(t<0||t>1)throw new Error("bernoulliDistribution requires probability to be between 0 and 1 inclusive");return[1-t,t]})),t(n,"binomialDistribution",(function(t,r){if(!(r<0||r>1||t<=0||t%1!=0)){var e=0,n=0,a=[],o=1;do{a[e]=o*Math.pow(r,e)*Math.pow(1-r,t-e),n+=a[e],o=o*(t-++e+1)/e}while(n<1-A);return a}})),t(n,"poissonDistribution",(function(t){if(!(t<=0)){var r=0,e=0,n=[],a=1;do{n[r]=Math.exp(-t)*Math.pow(t,r)/a,e+=n[r],a*=++r}while(e<1-A);return n}})),t(n,"chiSquaredDistributionTable",K),t(n,"chiSquaredGoodnessOfFit",(function(t,r,e){for(var n=0,a=r(i(t)),o=[],u=[],h=0;h<t.length;h++)void 0===o[t[h]]&&(o[t[h]]=0),o[t[h]]++;for(var f=0;f<o.length;f++)void 0===o[f]&&(o[f]=0);for(var l in a)l in o&&(u[+l]=a[l]*t.length);for(var s=u.length-1;s>=0;s--)u[s]<3&&(u[s-1]+=u[s],u.pop(),o[s-1]+=o[s],o.pop());for(var c=0;c<o.length;c++)n+=Math.pow(o[c]-u[c],2)/u[c];return K[o.length-1-1][e]<n})),t(n,"kernelDensityEstimation",L),t(n,"kde",L),t(n,"zScore",(function(t,r,e){return(t-r)/e})),t(n,"cumulativeStdNormalProbability",(function(t){var r=Math.abs(t),e=Math.min(Math.round(100*r),Q.length-1);return t>=0?Q[e]:+(1-Q[e]).toFixed(4)})),"standardNormalTable",(a={}).standardNormalTable=a.standardNormalTable||{},a.standardNormalTable.get=function(){return Q},t(n,"errorFunction",Y),t(n,"erf",Y),t(n,"inverseErrorFunction",Z),t(n,"probit",(function(t){return 0===t?t=A:t>=1&&(t=1-A),Math.sqrt(2)*Z(2*t-1)})),t(n,"permutationTest",(function(t,r,e,n){if(void 0===n&&(n=1e4),void 0===e&&(e="two_side"),"two_side"!==e&&"greater"!==e&&"less"!==e)throw new Error("`alternative` must be either 'two_side', 'greater', or 'less'");for(var a=i(t)-i(r),o=new Array(n),u=t.concat(r),h=Math.floor(u.length/2),f=0;f<n;f++){P(u);var l=u.slice(0,h),s=u.slice(h,u.length),c=i(l)-i(s);o[f]=c}var g=0;if("two_side"===e)for(var v=0;v<=n;v++)Math.abs(o[v])>=Math.abs(a)&&(g+=1);else if("greater"===e)for(var p=0;p<=n;p++)o[p]>=a&&(g+=1);else for(var w=0;w<=n;w++)o[w]<=a&&(g+=1);return g/n})),t(n,"bisect",(function(t,r,e,n,a){if("function"!=typeof t)throw new TypeError("func must be a function");for(var o=0;o<n;o++){var i=(r+e)/2;if(0===t(i)||Math.abs((e-r)/2)<a)return i;$(t(i))===$(t(r))?r=i:e=i}throw new Error("maximum number of iterations exceeded")})),t(n,"quickselect",p),t(n,"sign",$),t(n,"numericSort",s),function(t,r){for(var e in r)(o=r[e]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e,o);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(r),a=0;a<n.length;a++){var o,i=n[a];(o=r[i]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i,o)}}(n,a),n));r("r",e(tt))}}}))}();
