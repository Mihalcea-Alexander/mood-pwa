<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const CACHE_NAME = "mood-pwa-v1";</span></p>
<p class="p1"><span class="s1">const ASSETS = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"./",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"./index.html",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"./style.css",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"./app.js",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"./manifest.webmanifest",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"https://cdn.jsdelivr.net/npm/chart.js"</span></p>
<p class="p1"><span class="s1">];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener("install", (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.waitUntil(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.open(CACHE_NAME).then((cache) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return cache.addAll(ASSETS);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener("activate", (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.waitUntil(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.keys().then((keys) =&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>Promise.all(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>keys</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>.filter((k) =&gt; k !== CACHE_NAME)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>.map((k) =&gt; caches.delete(k))</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener("fetch", (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const { request } = event;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Cache-first for everything in ASSETS.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.respondWith(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.match(request).then((cached) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (cached) return cached;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return fetch(request).catch(() =&gt; cached);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
