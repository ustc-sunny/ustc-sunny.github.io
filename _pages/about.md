---
permalink: /
title: "He Sun - Homepage"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# About Me

<span class='anchor' id='about-me'></span>
Hi there, I am He Sun (孙贺). I am currently a Postdoc Fellow at [The University of Hong Kong](https://hku.hk), working with Prof. [Shinan Liu](https://www.shinan.info). I earned my Ph.D. from the [Department of Computer Science and Technology](https://cs.ustc.edu.cn/main.htm) & [Suzhou Institute for Advanced Study](https://sz.ustc.edu.cn/index.html) & [State Key Laboratory of Cognitive Intelligence](http://cogskl.iflytek.com/) at the [University of Science and Technology of China](https://ustc.edu.cn/) (USTC), supervised by Prof. [Mingjun Xiao](http://staff.ustc.edu.cn/~xiaomj/indexEN.html). I was a master student at the School of Cyber Science and Technology, USTC.

I am also lucky to have opportunities to collaborate with Prof. [Jie Wu](https://cis.temple.edu/~wu/) (Laura H. Carnell Professor, Temple University, Fellow of IEEE/AAAS), Prof. [Chengzhong Xu](https://www.fst.um.edu.mo/personal/czxu/) (Dean of [FST](https://www.fst.um.edu.mo/), Chair Professor, University of Macau, Fellow of IEEE), Prof. [Zili Meng](https://zilimeng.com/) (Assistant Professor, HKUST), Prof. [Li Li](https://www.fst.um.edu.mo/personal/llili/) (Assistant Professor, University of Macau), [Wenhao Jiang](https://cswhjiang.github.io/) (Lead Researcher, Guangming Lab) and Prof. [Guoju Gao](http://web.suda.edu.cn/ggj/) (Associate Professor, Soochow University).

My research interests include Mobile Computing & ML Systems (e.g., Efficient LLM training/fine-tuning/inference/reasoning & RAG on resource-limited devices, Efficient Agentic System, Data Matching, and Connected Vehicles, etc.), Reinforcement Learning (Bandits/MARL, etc.), and Privacy Preservation (Differential Privacy). I have published several academic papers in top-tier international conferences and journals, including IEEE INFOCOM, ACM SIGKDD, ACM Eurosys Shadow, ICML, TMC, TPDS, ICDCS, ICDM, TMLR, JCST, ICASSP, MASS, ICPADS, etc. I am also contributing to [WiCi AI](https://wici.ai), an early-stage startup building the local computing layer for the AI era.

Please don't hesitate to contact me if you are interested in collaborating on my research. **Stay hungry and stay foolish.**

# 🔥 News
<span class='anchor' id='-news'></span>
- [2026.6] 🎉🎉 I earned my Ph.D. from USTC and will be joining HKU as a Postdoctoral Fellow in the fall of 2026.
- [2026.5] 🎉🎉 I successfully defended my doctoral dissertation at the USTC.
- [2026.5] 🎉🎉 Two papers were accepted in SIGKDD 2026 and ICML 2026.
- [2026.4] Serve as an STPC Member of IMC 2026.
- [2026.2] 🎉🎉 One paper was accepted in TMC 2026.
- [2026.1] 🎉🎉 Two papers were accepted in ICASSP, TMLR 2026.
- [2025.10] Serve as a [Shadow TPC Member](https://2026.eurosys.org/shadow-program-committee.html#pc) of Eurosys 2026 Fall.
- [2025.2] Invited as an Eurosys 2025 [Artifact Evaluation Committee](https://2025.eurosys.org/artifact-eval-committee.html#pagetop)
- [2024.5] 🎉🎉 One paper was accepted in TMC 2024
- [2023.10] 🎉🎉 The paper accepted in MASS 2023 was awarded Best Paper!!! [[link]](https://cis.temple.edu/ieeemass2023/)
- [2023.3] 🎉🎉 I won the Suzhou Industrial Park Scholarship!
- [2022.12] 🎉🎉 I won the "Yang Yuanqing" Scholarship!
- [2022.12] 🎉🎉 Two of my authored papers were accepted by IEEE INFOCOM 2023!

# 📝 Publications
{: #publications-heading }
<span class='anchor' id='-publications'></span>

## Preprints
- <span style="font-family: Arial; font-size:medium;">**He Sun**, Shinan Liu, Siyuan Ma, Junhao Li, Mingjun Xiao, Wenhao Jiang. "Agent-Assisted Side-Channel Attacks on Non-Prefix KV Cache in RAG ". Arxiv' 26 [[Paper]](https://arxiv.org/abs/2606.21842)[[Twitter Post]](https://x.com/gastronomy/status/2069246521531396456)[[Paper Review]](https://www.dailysecurity.cn/topics/LLM-security-2/) </span>
- <span style="font-family: Arial; font-size:medium;">**He Sun**, Shinan Liu, Li Li, Mingjun Xiao. "HillInfer: Efficient Long-Context LLM Inference on the Edge with Hierarchical KV Eviction using SmartSSD". Arxiv' 26 [[Paper]](https://arxiv.org/abs/2602.18750) [[Twitter Post]](https://x.com/WWVY/status/2026232659219804577) </span>
- <span style="font-family: Arial; font-size:medium;">**He Sun**, Li Li, Mingjun Xiao, Chengzhong Xu. "Breaking the Boundaries of Long-Context LLM Inference: Adaptive KV Management on a Single Commodity GPU", Arxiv' 25 [[Paper]](https://arxiv.org/abs/2506.20187) [[Twitter Post]](https://x.com/rohanpaul_ai/status/1940335638714441872) (Related version is accepted by the Shadow PC of Eurosys 2026 Spring)</span>
- <span style="font-family: Arial; font-size:medium;">**He Sun**, Junyuan Mao, Wenhao Jiang, Mingjun Xiao, Shinan Liu. "DataCupid: High-Quality Data Acquisition via Adaptive Stable Matching with Dalayed Feedback.", Arxiv' 26 [[Paper]](./#)</span>
- <span style="font-family: Arial; font-size:medium;">Haotian Xu, Jinrui Zhou, Xichong Zhang, Mingjun Xiao, **He Sun**, Yin Xu. "SFedKD: Sequential Federated Learning with Discrepancy-Aware Multi-Teacher Knowledge Distillation", Arxiv' 25[[Paper]](https://arxiv.org/pdf/2507.08508)</span>
  
## Selected Papers

<div id="publication-list">
{% include publications.html %}
</div>

<div id="book-chapters" markdown="1">

## Book Chapter
- Mingjun Xiao, Yin Xu, **He Sun**. ["Unknown Worker Recruitment in Mobile Crowdsourcing"](https://link.springer.com/chapter/10.1007/978-3-031-32397-3_3) in ["Mobile Crowdsourcing: From Theory to Practice"](https://link.springer.com/book/10.1007/978-3-031-32397-3), edited by Jie Wu and En Wang, 2023, (Part of the Wireless Networks book series)

</div>

<button type="button" id="publications-toggle" class="publications-toggle" aria-expanded="true" aria-controls="publication-list book-chapters" hidden>See all publications</button>

# 📝 Experiences 
<span class='anchor' id='-experiences'></span>

<div class='school-box'>
<div><img src='../images/hku.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2026 - now, a Postdoc Fellow working with Prof. [Shinan Liu](https://www.shinan.info/) in [NAISS lab](https://naisslab.github.io/).
Department of Data and Systems Engineering, mentored by [Professor Ning Xi](https://www.dase.hku.hk/people/n-xi), The University of Hong Kong, Hong Kong SAR, China.
</div>
</div>

<div class='school-box'>
<div><img src='../images/ustc.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2022 - 2026, a Ph.D. Research Assistant supervised by Prof. [Mingjun Xiao](http://staff.ustc.edu.cn/~xiaomj/indexEN.html).
School of Computer Science and Technology, mentored by Prof. [Xiangyang Li](https://cs.ustc.edu.cn/2020/0806/c23235a460096/page.htm)/State Key Laboratory of Cognitive Intelligence, mentored by Prof. [Enhong Chen](http://staff.ustc.edu.cn/~cheneh/), University of Science and Technology of China, Hefei, China.<br>
Dissertation: A Data Flow Synergistic Optimization System for the Fine-Tuning and Deployment of Personalized LLMs.
</div>
</div>

<div class='school-box'>
<div><img src='../images/iotsc.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2024 - 2026, a Research Assistant working with Prof. [Li Li](https://www.fst.um.edu.mo/personal/llili/) and mentored by Prof. [Chengzhong Xu](https://www.fst.um.edu.mo/personal/czxu/) and [Yonghua song](https://rto.um.edu.mo/biography/).

State Key Laboratory in the Internet of Things for Smart City, University of Macau, Macau SAR, China.
</div>
</div>

<div class='school-box'>
<div><img src='../images/ustc.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2020 - 2022, a Master's Research Assistant supervised by Prof. [Mingjun Xiao](http://staff.ustc.edu.cn/~xiaomj/indexEN.html).
School of Cyber Science and Technology, mentored by Prof. [Nenghao Yu]([https://cs.ustc.edu.cn/2020/0806/c23235a460096/page.htm](https://scholar.google.com/citations?user=7620QAMAAAAJ&hl=zh-CN))/State Key Laboratory of Cognitive Intelligence, mentored by [Enhong Chen](http://staff.ustc.edu.cn/~cheneh/), University of Science and Technology of China, Hefei, China.<br>
</div>
</div>

# 📖 Professional Services
<span class='anchor' id='-services'></span>
## Conferences
- STPC Member of IMC 2026
- [Shadow TPC Member](https://2026.eurosys.org/shadow-program-committee.html#pc) of Eurosys 2026
- Eurosys 2025 [Artifact Evaluation Committee](https://2025.eurosys.org/artifact-eval-committee.html#pagetop)
- IEEE INFOCOM 2022 External reviewer
- IEEE INFOCOM 2023 External reviewer

## Journals
* Reviewer:
  - IEEE Transactions on Mobile Computing (TMC)
  - IEEE Transactions on Network and Service  Management (TNSM)
  - IEEE Transactions on Parallel and Distributed Systems (TPDS)
  - Pattern Recognition (PR)
* External reviewer:
  - IEEE Transactions on Networking (ToN)
  - IEEE Transactions on Service Computing (TSC)
  - IEEE Transactions on Big Data (TBD)
  - Information Science (InfoSci)
 
# 🎖 Honors and Awards
<span class='anchor' id='-honors-and-awards'></span>

## Honors
- Best Paper Award of IEEE MASS 2023 (2023.9)
- Suzhou Industrial Park Scholarship at USTC (2023.3)
- "Yang Yuanqing" Scholarship at USTC (Selecting 4 PhD students in the 2022 class of the School of Computer Science, 2022.12)
- 5 times first-class scholarship (2016-2020)
- "Shuguang" scholarship (2019.10)
- Outstanding graduate prize (2020.5)

## Competitions Awards
- Second Prize in China Software Open Source Innovation Competition (National College Green Computing) Contest-21 (Open source project innovation competition) by CCF, 2021.
- Outstanding Winner(Top-1) in National College Green Computing Contest-19 (Project Challenge) by CCF, 2019.
- Outstanding Winner(Top-3) in National College Green Computing Contest-18 (Project Challenge) by CCF, 2018.
- Third Prize in Math Competition for College Students, 2019. 
- Third Prize(Top-8) in Imagine Cup 2018 of Microsoft, 2018. 
- First prize in the National High School Mathematics Competition in Shandong Province, 2015.



# 💬 Talks
<span class='anchor' id='-invited-talks'></span>
- *2023.05*: &nbsp; IEEE INFOCOM 2023, 17-20 May, Stevens Institute of Technology, New York Area. [slides](https://ustc-sunny.github.io/INFOCOM2023_slides.pdf)
- *2024.07*: &nbsp; CIBD 2024, 20 July, State Key Laboratory of Cognitive Intelligence, USTC&iFlytek, Hefei. [Poster](https://ustc-sunny.github.io/CIBD2024_sunhe.pdf)

# 💻 Grants
<span class='anchor' id='-Project'></span>
- National Innovation and Entrepreneurship Program for College Students in China, The Research and Development of Parking Sharing System in Smart City, 2018.5-2020.5.: **Project leader**
- Project of National Natural Science Foundation of China, Research on Intelligent and Trusted Cooperation Mechanism of Mobile Group Intelligence Computing based on blockchain, 2022.01-2025.12: **Core member**
- Project of National Natural Science Foundation of China, Research on Key Technologies of Secure and Trusted Mobile Group Intelligence Sensing Data Trading System, 2019.01-2022.12：**Core member**
- Jiangsu Provincial Natural Science Foundation Project, Research on Key Technologies of Data Trading System based on Mobile Group Intelligence Perception, 2019.07-2022.0：**Core member**

# Misc.
  <span class='anchor' id='-Misc'></span>

- **Hobbies**: Sports: Football, Basketball, Ping Pong, etc.; Music: Folk Music, Rock Music, etc.; Calligraphy: Xizhi Wang, Runzhi Mao; Singing
- **Favorite**: Football team: Manchester City; NBA team: L.A. Lakers; Singers: Jay Chou, Lei Zhao, Eson, JJ, GEM, Leehom
- **Some Photos**: Traveling, Conference talk, and pet, etc.（Click to view the large image）
  <!-- 照片矩阵容器 -->
  <div class="photo-grid">
    <!-- 照片 1 -->
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/guilin.jpg" data-full= "../images/guilin.jpg">
      <div class="location-badge">Landscape of Guilin 📍 Guilin, Guangxi</div>
    </div>
    <!-- 照片 2 -->
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/newyork.png" data-full= "../images/newyork.png">
      <div class="location-badge">Statue of Liberty 📍 Manhattan, New York</div>
    </div>
    <!-- 照片 3 -->
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/infocom.png" data-full="../images/infocom.png">
      <div class="location-badge">INFOCOM 2023 📍 Stevens Institute of Technology, New Jersey</div>
    </div>
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/shenyang.jpg" data-full="../images/shenyang.jpg">
      <div class="location-badge">Xueliang
        Zhang's Former Residence with my love 📍 Shenyang, China</div>
    </div>
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/shanghai.jpg" data-full="../images/shanghai.jpg">
      <div class="location-badge">Huangpu River 📍 Shanghai, China</div>
    </div>
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/pipi.jpg" data-full="../images/pipi.jpg">
      <div class="location-badge">My Cat PiPi 📍 Macau/Zhuhai, China</div>
    </div>
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/changsha.jpg" data-full="../images/changsha.jpg">
      <div class="location-badge">沁园春·长沙, Mao's calligraphy 📍 Jinan, China</div>
    </div>
    <!-- 您可以在这里添加更多 .photo-item -->
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/xue.jpg" data-full="../images/xue.jpg">
      <div class="location-badge">沁园春·雪, Mao's calligraphy 📍 Jinan, China</div>
    </div>
  </div>

  <!-- 分隔线 (可选，增加视觉分离感) -->
  <hr style="margin-top: 40px; border: 0; border-top: 1px solid #eee;">
  
<!-- 灯箱模态框结构 -->
<div id="lightbox-modal" class="lightbox" onclick="closeLightbox()">
  <span class="close-btn">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
  <div id="caption"></div>
</div>

<!-- CSS 样式 -->
<style>
  /* --- 矩阵布局 --- */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px; 
    margin-top: 20px;
  }
  

  /* --- 单个照片容器 --- */
  .photo-item {
    position: relative;
    overflow: hidden; 
    border-radius: 8px; 
    cursor: pointer;
    aspect-ratio: 1 / 1; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  /* --- 图片样式 --- */
  .photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.4s ease; 
    display: block;
  }

  /* --- 鼠标悬停放大效果 --- */
  .photo-item:hover img {
    transform: scale(1.15);
  }

  /* --- 地点标签样式 --- */
  .location-badge {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    color: white;
    padding: 10px;
    font-size: 0.9em;
    text-align: center;
    opacity: 0; 
    transform: translateY(100%); 
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .photo-item:hover .location-badge {
    opacity: 1;
    transform: translateY(0);
  }

  /* --- 灯箱 (Lightbox) 样式 --- */
  .lightbox {
    display: none; 
    position: fixed;
    z-index: 9999;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9); 
  }

  .lightbox-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80vh;
    border-radius: 5px;
    animation-name: zoom;
    animation-duration: 0.3s;
  }

  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
    font-size: 1.2em;
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }

  .close-btn:hover,
  .close-btn:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  @keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
  }
</style>

<!-- JS 脚本 -->
<script>
  function openLightbox(element) {
    var modal = document.getElementById("lightbox-modal");
    var modalImg = document.getElementById("lightbox-img");
    var captionText = document.getElementById("caption");
    
    var img = element.querySelector('img');
    var fullSrc = img.getAttribute('data-full') || img.src; 
    var locationText = element.querySelector('.location-badge').innerText;

    modal.style.display = "block";
    modalImg.src = fullSrc;
    captionText.innerText = locationText + " - " + img.alt;
  }

  function closeLightbox() {
    var modal = document.getElementById("lightbox-modal");
    modal.style.display = "none";
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
</script>
