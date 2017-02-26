webpackJsonp([7,104],{222:function(n,s){n.exports={content:[],meta:{order:0,title:"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6",filename:"components/image-picker/demo/basic.md",id:"components-image-picker-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},223:function(n,s){n.exports={content:[],meta:{order:1,title:"\u81ea\u5b9a\u4e49\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5",filename:"components/image-picker/demo/custom.md",id:"components-image-picker-demo-custom"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onAddImageClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onTabChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onAddImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onAddImageClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},327:function(n,s,a){n.exports={basic:a(222),custom:a(223)}}});