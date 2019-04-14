(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,r){e.exports=r(29)},22:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(10),i=r.n(o),c=(r(22),r(2)),s=r(3),l=r(5),u=r(4),m=r(6),p=r(7),k=r(15),h=r(9),v={container:"map",style:"mapbox://styles/mapbox/streets-v11",zoom:4,center:[31.1656,48.3794]},d={zero:"Zero",one:"One",two:"Two",three:"Three",four:"Four",five:"Five"},f=function(e){var t=e.markers,r=e.exportFile;return n.a.createElement("div",{className:"markerlist-container"},n.a.createElement("ul",{className:"markerlist"},n.a.createElement("li",{key:0},n.a.createElement("div",{className:"score-title"},"Total:"),n.a.createElement("div",{className:"score-value"},t.length)),Object.keys(d).map(function(e){return n.a.createElement("li",{key:e},n.a.createElement("div",{className:"score-title"},d[e],": "),n.a.createElement("div",{className:"score-value"},(r=e,t.filter(function(e){return e.score===r}).length)));var r})),n.a.createElement("button",{className:"export-btn",onClick:r},"Export"))},b=r(16),E=r(13),j=r(14),O={zero:"#000",one:"#808080",two:"#B00000",three:"#FF9933",four:"#99FF66",five:"#669933"},y=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).options=Object.keys(O).map(function(e){return{value:e,color:O[e]}}),r.handleChange=function(e){return r.props.editMarker(e)},r.removeMarker=function(){return r.props.removeMarker()},r}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"marker-color-container"},n.a.createElement("p",null,"Change marker's score:"),this.options.map(function(t,r){return n.a.createElement("div",{className:"marker-color-item",key:t.value,style:{backgroundColor:t.color},onClick:function(){return e.handleChange(t.value)}},r)}),n.a.createElement("div",{className:"remove-button-container"},n.a.createElement(E.a,{icon:j.a,size:"2x",title:"Remove Marker",className:"remove-button",onClick:this.removeMarker}))))}}]),t}(a.PureComponent),M=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).map=r.props.map,r.addMarker(r.props.marker),r}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addMarker",value:function(e){var t=this,r=document.createElement("div");i.a.render(n.a.createElement(y,{editMarker:function(e){return t.editMarker(e)},removeMarker:function(){return t.removeMarker()}}),r),this.popup=new p.Popup({offset:25}).setDOMContent(r),this.marker=new p.Marker({draggable:!0,color:O[e.score]}).setPopup(this.popup).setLngLat(Object.values(e.lngLat)).addTo(this.map)}},{key:"editMarker",value:function(e){this.props.handleEditMarker(Object(b.a)({},this.props.marker,{score:e}));var t=this.getMarkerColor(e);this.marker.remove(),this.marker=new p.Marker({draggable:!0,color:t}).setLngLat(Object.values(this.marker.getLngLat())).setPopup(this.popup).addTo(this.map)}},{key:"getMarkerColor",value:function(e){return O[e]}},{key:"removeMarker",value:function(){this.marker.remove(),this.props.handleRemoveMarker(this.props.marker)}},{key:"render",value:function(){return n.a.createElement("div",null)}}]),t}(a.Component),g=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={markersList:[]},r.exportFile=r.exportFile.bind(Object(h.a)(Object(h.a)(r))),r}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.map=new p.Map(v),this.map.on("click",function(t){return"CANVAS"===t.originalEvent.target.tagName&&e.addMarker(t)})}},{key:"addMarker",value:function(e){var t=e.lngLat,r={id:Date.now(),score:"zero",lngLat:t};this.setState({markersList:[].concat(Object(k.a)(this.state.markersList),[r])})}},{key:"onMarkerRemove",value:function(e){this.setState({markersList:this.state.markersList.filter(function(t){return t.id!==e.id})})}},{key:"onEditMarker",value:function(e){var t=this.state.markersList.map(function(t){return t.id===e.id?e:t});this.setState({markersList:t})}},{key:"exportFile",value:function(){var e=document.createElement("a"),t=new Blob([JSON.stringify(this.state.markersList)],{type:"application/json"});e.href=URL.createObjectURL(t),e.download="mapExportData.json",document.body.appendChild(e),e.click()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{id:"map"}),this.state.markersList.map(function(t,r){return n.a.createElement(M,{key:r,map:e.map,marker:t,handleRemoveMarker:function(t){return e.onMarkerRemove(t)},handleEditMarker:function(t){return e.onEditMarker(t)}})}),n.a.createElement(f,{markers:this.state.markersList,exportFile:this.exportFile}))}}]),t}(a.Component);r(28);p.accessToken="pk.eyJ1IjoiZGlhbmEtbGVtZW4iLCJhIjoiY2p1ZWVuNGpnMDJrNDQzcGFsZHVmbG9tNSJ9.WhGU5WTI4hYzFU8a3nxhJQ";var w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.eb0ad336.chunk.js.map