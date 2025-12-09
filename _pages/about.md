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
Hi, there. I am He Sun (孙贺), a fourth-year Ph.D. student in the [Department of Computer Science and Technology](https://cs.ustc.edu.cn/main.htm) & [Suzhou Institute for Advanced Study](https://sz.ustc.edu.cn/index.html) & [State Key Laboratory of Cognitive Intelligence](http://cogskl.iflytek.com/) at the [University of Science and Technology of China](https://ustc.edu.cn/) (USTC), supervised by Prof. [Mingjun Xiao](http://staff.ustc.edu.cn/~xiaomj/indexEN.html). I was a master student at the School of Cyber Science and Technology, USTC. I am also lucky to have opportunities to collaborate with Prof. [Jie Wu](https://cis.temple.edu/~wu/) (Laura H. Carnell Professor, Temple University, Fellow of IEEE/AAAS), Prof. [Chengzhong Xu](https://www.fst.um.edu.mo/personal/czxu/) (Dean of [FST](https://www.fst.um.edu.mo/), Chair Professor, University of Macau, Fellow of IEEE), [Li Li](https://www.fst.um.edu.mo/personal/llili/) (Assistant Professor, University of Macau) and [Guoju Gao](http://web.suda.edu.cn/ggj/) (Associate Professor, Soochow University).

My research interests include Mobile Computing & ML Systems (e.g., Efficient LLM training/fine-tuning/inference/reasoning & RAG on resource-limited devices, Efficient Agentic System, Data Matching, and Connected Vehicles, etc.), Reinforcement Learning (Bandits/MARL, etc.), and Privacy Preservation (Differential Privacy). I have published several academic papers in top-tier international conferences and journals, including IEEE INFOCOM, IEEE ICDCS, IEEE ICDM, IEEE Transactions on Mobile Computing, IEEE Transactions on Parallel and Distributed Systems, etc. 

I will join HKU as a Postdoctoral Research Fellow in 2026. Please don't hesitate to contact me if you are interested in collaborating on my research.

**Stay hungry and stay foolish.**

# 🔥 News
<span class='anchor' id='-news'></span>

- [2025.10] Serve as a Shadow PC of Eurosys 2026 Fall.
- [2025.2] Invited as an Eurosys 2025 [Artifact Evaluation Committee](https://2025.eurosys.org/artifact-eval-committee.html#pagetop)
- [2024.9] Join the State Key Laboratory of Internet of Things for Smart City as a Research Assistant.
- [2024.5] 🎉🎉 One paper was accepted in TMC 2024
- [2023.10] 🎉🎉 One paper was accepted in ICPADS 2023.
- [2023.10] 🎉🎉 The paper accepted in MASS 2023 was awarded Best Paper!!! [[link]](https://cis.temple.edu/ieeemass2023/)
- [2023.3] 🎉🎉 I won the Suzhou Industrial Park Scholarship!
- [2022.12] 🎉🎉 I won the "Yang Yuanqing" Scholarship!
- [2022.12] 🎉🎉 Two of my authored papers were accepted by IEEE INFOCOM 2023!

# 📝 Publications 
<span class='anchor' id='-publications'></span>

## Preprint
- <span style="font-family: Arial; font-size:medium;">**He Sun**, Li Li, Mingjun Xiao, Chengzhong Xu, "Breaking the Boundaries of Long-Context LLM Inference: Adaptive KV Management on a Single Commodity GPU", Arxiv' 25 [[Paper]](https://arxiv.org/pdf/2506.20187) (Related version is accepted by the Shadow PC of Eurosys 2026 Spring)</span>
- <span style="font-family: Arial; font-size:medium;">**He Sun**, Junyuan Mao, Mingjun Xiao, "DataCupid: High-Quality Data Acquisition via Adaptive Task-Expert Stable Matching for LLM Reasoning", Arxiv' 25 </span>
- <span style="font-family: Arial; font-size:medium;">Yebo Wu, Chunlin Tian, Jingguang Li, **He Sun**, Kahou Tam, Li Li, Chengzhong Xu. "A Survey on Federated Fine-tuning of Large Language Models", Arxiv' 25 [[paper]](https://arxiv.org/pdf/2503.12016) [[project]](https://github.com/Clin0212/Awesome-Federated-LLM-Learning) </span>
- <span style="font-family: Arial; font-size:medium;">Zijie Lin, Yiqing Shen, Qilin Cai, **He Sun**, Jinrui Zhou, Mingjun Xiao. "AutoP2C: An LLM-Based Agent Framework for Code Repository Generation from Multimodal Content in Academic Papers", Arxiv' 25[[Paper]](https://arxiv.org/pdf/2504.20115?) </span>
- <span style="font-family: Arial; font-size:medium;">Haotian Xu, Jinrui Zhou, Xichong Zhang, Mingjun Xiao, **He Sun**, Yin Xu. "SFedKD: Sequential Federated Learning with Discrepancy-Aware Multi-Teacher Knowledge Distillation", Arxiv' 25[[Paper]](https://arxiv.org/pdf/2507.08508)</span>
  
## Conferences and Journals
- <span style="font-family: Arial; font-size:medium;"><a style="color: #0000FF;"><b>[VLDB'26]</b></a> **He Sun**, Junyuan Mao, Mingjun Xiao. "DataCupid: High-Quality Data Acquisition via Adaptive Task-Expert Stable Matching for LLM Reasoning", 52nd International Conference on Very Large Data Bases, 2026 (Under Review)
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[ICDM'25]</b></a> Yukai Zhu, **He Sun**, Mingjun Xiao. "Federated Graph Out-of-Distribution Generalization via Representation Propagation and Scattering", IEEE International Conference on Data Mining 2025, (Acceptance Rate: 106/785=13.5%)
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[TMC'24]</b></a> **He Sun**, Mingjun Xiao, Yin Xu, Guoju Gao, Shu Zhang. "Crowdsensing Data Trading for Unknown Market: Privacy, Stability, and Conflicts", IEEE Transactions on Mobile Computing, 2024. [[paper]](https://ieeexplore.ieee.org/document/10529594) 
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[INFOCOM'23]</b></a> **He Sun**, Mingjun Xiao, Yin Xu, Guoju Gao, Shu Zhang "Privacy-preserving Stable Crowdsensing Data Trading for Unknown Market", Proc. IEEE INFOCOM'23, May. 2023, (Acceptance Rate: 252/1312=19.2%). [[Paper]](https://ieeexplore.ieee.org/abstract/document/10228966) [[Slide]](http://home.ustc.edu.cn/~hesun/INFOCOM23-slide.pdf)</span>
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[TPDS'24]</b></a> Yin Xu, Mingjun Xiao, Jie Wu, **He Sun**. "Privacy-Preserving Task Push in Spatial Crowdsourcing with Unknown Popularity", IEEE Transactions on Parallel and Distributed Systems, 2024
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[JCST'24]</b></a> Yin Xu, Mingjun Xiao, Jie Wu, Chen Wu, Jinrui Zhou, and **He Sun**. "Age-of-Information-Aware Federated Learning", Journal of Computer Science and Technology, 2024
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[ICDCS'24]</b></a> Yu Zhao, Jinrui Zhou, Mingjun Xiao, Jie Wu, and **He Sun**, "ERS: Faster LiDAR Point Cloud Registration for Connected Vehicles", ICDCS'24</span>
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[MASS'24]</b></a> Xinwei Huang, Yin Xu, **He Sun**, Jinbo Cai, Yifan Duan, Mingjun Xiao, Jie Wu. "Q2oE-Aware Deep Reinforcement Learning for Mobile Vehicles in Collaborative Edge Servers", Proc. IEEE MASS 2024</span>
- <span style="font-family: Arial; font-size:medium;"><a style="color: #0000FF;"><b>[TSC]</b></a> Junjie Shao, Yu Zhao, **He Sun**, Jinbo Cai, Jie Wu, Mingjun Xiao. "Cooperative Traffic Signal Online Control Using Game Theory and Contextual Bandit", IEEE Transactions on Services Computing, 2024 (Under Review)
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[INFOCOM'23]</b></a>  Shu Zhang, Mingjun Xiao, Guoju Gao, Yin Xu, **He Sun** "Offloading Tasks to Unknown Edge Servers: A Contextual Multi-Armed Bandit Approach", Proc. IEEE INFOCOM WKSHPS: ICCN 2023. [[Paper]](https://ieeexplore.ieee.org/document/10226047)</span>
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[MASS'23]</b></a>  Chen Wu, Mingjun Xiao, Jie Wu, Jinrui Zhou, Yin Xu and **He Sun**, "Towards Federated Learning on Fresh Datasets", Proc. IEEE MASS 2023. (**Best Paper Award**) [[paper]](https://cis.temple.edu/~wu/research/publications/Publication_files/MASS2023_Bestpaper.pdf) [[Slide]](https://cis.temple.edu/~wu/research/publications/Publication_files/Slide_MASS2023_Final.pdf)</span>
- <span style="font-family: Arial; font-size:medium;"><a style="color: #ff0000;"><b>[ICPADS'23]</b></a> Jinbo Cai, Mingjun Xiao, **He Sun**, Junjie Shao, Yu Zhao, Tongxiao Zhang. "Video Streaming Caching and Transcoding for Heterogeneous Mobile Users", Proc. ICPADS'23. [[Paper]](https://ieeexplore.ieee.org/abstract/document/10476058)</span>
- <span style="font-family: Arial; font-size:medium;"><a style="color: #0000FF;"><b>[TMC]</b></a> Yu Zhao, **He Sun**, Mingjun Xiao, Jie Wu, Junjie Shao, Jinbo Cai. "Edge-assisted Multi-vehicle Cooperative Perception: an Approach Based on Relative Pose Estimation", IEEE Transactions on Mobile Computing, 2023 (Under Review)
{% raw %}



<!-- 更多内容 -->
<div id="more-content" style="display: none;">
    <ul>
        <li> <b>He Sun</b>, Jinrui Zhou, Li Li, Mingjun Xiao. "CoEdgeLLM: Cloud-Edge-Device Collaborative Federated Fine-tuning with Zeroth-Order Optimization for Large Language Models", (Under Review)
       </li>
        <li> <b>He Sun</b>, Haotian Xu, Mingjun Xiao. "MeFill: Memory Efficient Federated Fine-tuning for Long-Context Large Language Models", (Under Review)
        </li>
        <li> <b>He Sun</b>, Li Li, Mingjun Xiao, Chengzhong Xu. "Efficient RAG System on a Commodity GPU with Computational Storage.", (Under Review)
        </li>
    </ul>
</div>

<!--More按钮-->
<p class="more-button" onclick="toggleMore()">More...</p>

<script>
    function toggleMore() {
        var moreContent = document.getElementById("more-content");
        var moreButton = document.querySelector(".more-button");

        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            moreButton.textContent = "Less...";
        } else {
            moreContent.style.display = "none";
            moreButton.textContent = "More...";
        }
    }

    // 确保页面加载时隐藏更多内容
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("more-content").style.display = "none";
    });
</script>
{% endraw %}





## Book Chapter
- Mingjun Xiao, Yin Xu, **He Sun**. ["Unknown Worker Recruitment in Mobile Crowdsourcing"](https://link.springer.com/chapter/10.1007/978-3-031-32397-3_3) in ["Mobile Crowdsourcing: From Theory to Practice"](https://link.springer.com/book/10.1007/978-3-031-32397-3), edited by Jie Wu and En Wang, 2023, (Part of the Wireless Networks book series)

# 📝 Experiences 
<span class='anchor' id='-experiences'></span>
<div class='school-box'>
<div><img src='../images/iotsc.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2024.09 - Now a Research Assistant supervised by [Li Li](https://www.fst.um.edu.mo/personal/llili/) and mentored by [Chengzhong Xu](https://www.fst.um.edu.mo/personal/czxu/).

State Key Laboratory in the Internet of Things for Smart City, University of Macau, Macau, China.
</div>
</div>

<div class='school-box'>
<div><img src='../images/ustc.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2022.07 - Now, a Research Assistant (Ph.D. student) supervised by [Mingjun Xiao](http://staff.ustc.edu.cn/~xiaomj/indexEN.html).

School of Computer Science and Technology, mentored by [Xiangyang Li](https://cs.ustc.edu.cn/2020/0806/c23235a460096/page.htm)/State Key Laboratory of Cognitive Intelligence, mentored by [Enhong Chen](http://staff.ustc.edu.cn/~cheneh/), University of Science and Technology of China, Hefei, China.
</div>
</div>

# 📖 Professional Services
<span class='anchor' id='-services'></span>
## Conferences
- Shadow TPC Member of Eurosys 2026
- Eurosys 2025 [Artifact Evaluation Committee](https://2025.eurosys.org/artifact-eval-committee.html#pagetop)
- IEEE INFOCOM 2022 External reviewer
- IEEE INFOCOM 2023 External reviewer

## Journals
* Reviewer:
  - IEEE Transactions on Mobile Computing (TMC)
  - IEEE Transactions on Network and Service  Management (TNSM)
  - IEEE Transactions on Parallel and Distributed Systems (TPDS)
* External reviewer:
  - IEEE Transactions on Networking (ToN)
  - IEEE Transactions on Service Computing (TSC)
  - IEEE Transactions on Big Data (TBD)
  - Information Science (InfoSci)
 
# 🎖 Honors and Awards
<span class='anchor' id='-honors-and-awards'></span>

## Honors
- Suzhou Industrial Park Scholarship at USTC (2023.3)
- "Yang Yuanqing" Scholarship at USTC (Selecting 4 PhD students in the 2022 class of the School of Computer Science, 2022.12)
- Excellent League member at USTC (2021.4)
- 5 times first-class scholarship at QDU (2016-2020)
- "Shuguang" scholarship (2019.10)
- Outstanding student leaders prize at QDU (2018.10)
- Outstanding graduate prize at QDU (2020.5)

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

# 💻 Project
<span class='anchor' id='-Project'></span>
- National Innovation and Entrepreneurship Program for College Students in China, The Research and Development of Parking Sharing System in Smart City, 2018.5-2020.5.: **Project leader**
- Project of National Natural Science Foundation of China, Research on Intelligent and Trusted Cooperation Mechanism of Mobile Group Intelligence Computing based on blockchain, 2022.01-2025.12: **Core member**
- Project of National Natural Science Foundation of China, Research on Key Technologies of Secure and Trusted Mobile Group Intelligence Sensing Data Trading System, 2019.01-2022.12：**Core member**
- Jiangsu Provincial Natural Science Foundation Project, Research on Key Technologies of Data Trading System based on Mobile Group Intelligence Perception, 2019.07-2022.0：**Core member**

# Misc.
  <span class='anchor' id='-Misc'></span>

- **Hobbies**: Sports: Football, Basketball, Ping Pong, etc.; Music: Folk Music, Rock Music, etc.; Calligraphy: Xizhi Wang, Runzhi Mao; Singing
- **Favorite**: Football team: Manchester City; NBA team: L.A. Lakers; Singers: Jay Chou, Lei Zhao, JJ, GEM, Leehom
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
      <img src="../images/pipi.jpg" data-full="../images/pipi.jpg">
      <div class="location-badge">My Cat PiPi 📍 Macau/Zhuhai, China</div>
    </div>
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/shanghai.jpg" data-full="../images/shanghai.jpg">
      <div class="location-badge">Huangpu River 📍 Shanghai, China</div>
    </div>
    <div class="photo-item" onclick="openLightbox(this)">
      <img src="../images/shenyang.jpg" data-full="../images/shenyang.pg">
      <div class="location-badge">Xueyang Zhang's Former Residence with my love 📍 Shenyang, China</div>
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

  <!-- 地图容器：控制大小和间距 -->
  <div class="map-container">
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=LqdKMIUIOitYiwaA4JQq_FwX-hC5DUE7OOLAKpsMmV8&cl=ffffff&w=a"></script>
  </div>
  
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
  
  /* 鼠标放上去时地图变清晰 */
  .map-container:hover {
    opacity: 1;
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
