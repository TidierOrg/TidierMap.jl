import{_ as e,c as i,o as a,a6 as s}from"./chunks/framework.8idlyvhX.js";const b=JSON.parse('{"title":"Modify","description":"","frontmatter":{},"headers":[],"relativePath":"modify.md","filePath":"modify.md","lastUpdated":null}'),t={name:"modify.md"},o=s(`<h1 id="Modify" tabindex="-1">Modify <a class="header-anchor" href="#Modify" aria-label="Permalink to &quot;Modify {#Modify}&quot;">​</a></h1><p>Functions to modify, filter and discard elements of a collection.</p><h2 id="Modifying" tabindex="-1">Modifying <a class="header-anchor" href="#Modifying" aria-label="Permalink to &quot;Modifying {#Modifying}&quot;">​</a></h2><p><code>modify</code> applies a function <code>f</code> to each element of <code>x</code>.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>x = [1:4;]</span></span>
<span class="line"><span>modify!(x, x-&gt;x^2)</span></span>
<span class="line"><span>x</span></span></code></pre></div><p>It also work on dictionaries, keeping the keys intact:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>d = Dict(i =&gt; i for i in [1:4;])</span></span>
<span class="line"><span>modify(d, x-&gt;x^2)</span></span></code></pre></div><p>We can also modify only when a function <code>p</code> is true:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>y = [1:6;]</span></span>
<span class="line"><span>modify_if(y, x-&gt;x^2, isodd)</span></span></code></pre></div><h2 id="Filtering" tabindex="-1">Filtering <a class="header-anchor" href="#Filtering" aria-label="Permalink to &quot;Filtering {#Filtering}&quot;">​</a></h2><p>We can discard some elements of <code>x</code> when a function <code>p</code> is false:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>x = [1:4;]</span></span>
<span class="line"><span>keep(x, isodd)</span></span></code></pre></div><p>This is the same as base Julia <code>filter(p, x)</code>. It also work on dictionaries:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>d = Dict(i =&gt; i for i in [1:4;])</span></span>
<span class="line"><span>keep(x, isodd)</span></span></code></pre></div><p>If we want to apply <code>p</code> to the keys of a dictionary, use</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>d = Dict(i =&gt; i^2 for i in [1:4;])</span></span>
<span class="line"><span>keep_keys(d, isodd)</span></span></code></pre></div><p>There is also the negation of <code>keep</code>: <code>discard</code>. It&#39;s definition is trivial: <code>discard(x, p) = keep(x, !p)</code>.</p><p>When we want to throw away &quot;length zero elements&quot;, use <code>compact</code>:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>x = [1, [1, 2], nothing, [], &quot;&quot;]</span></span>
<span class="line"><span>compact(x)</span></span></code></pre></div><h2 id="API" tabindex="-1">API <a class="header-anchor" href="#API" aria-label="Permalink to &quot;API {#API}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.modify" href="#TidierIteration.modify">#</a> <b><u>TidierIteration.modify</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">modify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, f)</span></span></code></pre></div><p>Modify a copy of <code>x</code> applying <code>f</code> to each of its elements.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.modify!" href="#TidierIteration.modify!">#</a> <b><u>TidierIteration.modify!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">modify!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, f)</span></span></code></pre></div><p>Modify <code>x</code> applying <code>f</code> to each of its elements.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.modify_if" href="#TidierIteration.modify_if">#</a> <b><u>TidierIteration.modify_if</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">modify_if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, p, f)</span></span></code></pre></div><p>Modify a copy of <code>x</code> applying <code>f</code> to each of its elements where the function <code>p</code> is <code>true</code>.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.modify_if!" href="#TidierIteration.modify_if!">#</a> <b><u>TidierIteration.modify_if!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">modify_if!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, p, f)</span></span></code></pre></div><p>Modify <code>x</code> applying <code>f</code> to each of its elements where the function <code>p</code> is <code>true</code>.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.keep" href="#TidierIteration.keep">#</a> <b><u>TidierIteration.keep</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">keep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, p)</span></span></code></pre></div><p>Keep the elements <code>x_i</code> of collection <code>x</code> such that <code>p(x_i)</code> is true.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.keep!" href="#TidierIteration.keep!">#</a> <b><u>TidierIteration.keep!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">keep!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, p)</span></span></code></pre></div><p>Keep the elements <code>x_i</code> of collection <code>x</code> such that <code>p(x_i)</code> is true.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.discard" href="#TidierIteration.discard">#</a> <b><u>TidierIteration.discard</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">discard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, p)</span></span></code></pre></div><p>Discard the elements <code>x_i</code> of collection <code>x</code> such that <code>p(x_i)</code> is true.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.discard!" href="#TidierIteration.discard!">#</a> <b><u>TidierIteration.discard!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">discard!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, p)</span></span></code></pre></div><p>Discard the elements <code>x_i</code> of collection <code>x</code> such that <code>p(x_i)</code> is true.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.compact" href="#TidierIteration.compact">#</a> <b><u>TidierIteration.compact</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">compact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span></code></pre></div><p>Keep the elements <code>x_i</code> of collection <code>x</code> such that <code>is_non_empty(x_i)</code> is <code>true</code>.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="TidierIteration.compact!" href="#TidierIteration.compact!">#</a> <b><u>TidierIteration.compact!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">compact!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span></code></pre></div><p>Keep the elements <code>x_i</code> of collection <code>x</code> such that <code>is_non_empty(x_i)</code> is <code>true</code>.</p><p><a href="https://github.com/TidierOrg/TidierIteration.jl" target="_blank" rel="noreferrer">source</a></p></div><br>`,40),d=[o];function p(r,n,l,c,h,u){return a(),i("div",null,d)}const k=e(t,[["render",p]]);export{b as __pageData,k as default};
