<!DOCTYPE html>
<html lang="tr">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Akıllı Beden Danışmanı - Premium Tee</title>
   <script src="https://cdn.tailwindcss.com"></script>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
   <script src="https://unpkg.com/lucide@0.378.0/dist/umd/lucide.min.js"></script>
   <style>
       :root {
           --brand-color: #1c1c1e; 
           --text-primary: #1c1c1e;
           --text-secondary: #555;
           --bg-primary: #ffffff;
           --bg-secondary: #f4f5f7;
           --bg-selected: #e9e9ed;
           --border-color: #e5e7eb;
           --button-bg: #1c1c1e;
           --button-text: #ffffff;
       }

       body {
           font-family: 'Inter', sans-serif;
           background-color: var(--bg-secondary);
           color: var(--text-primary);
       }
       
       .product-card {
           background-color: var(--bg-primary);
           border-color: var(--border-color);
       }
       .product-card-image-bg {
           background-color: #f9f9f9;
       }

       #size-wizard-modal {
           background: rgba(30, 30, 32, 0.7);
           backdrop-filter: blur(8px);
           -webkit-backdrop-filter: blur(8px);
       }
       
       #wizard-content {
           width: 100%;
           max-width: 480px;
           height: auto;
           max-height: 90dvh;
           display: flex;
           flex-direction: column;
           overflow: hidden;
           background: var(--bg-primary);
           border-radius: clamp(16px, 4vw, 24px);
           box-shadow: 0 10px 40px rgba(0,0,0,0.15);
           color: var(--text-primary);
       }
       
       @media (min-width: 768px) {
           #wizard-content {
               min-height: 600px;
           }
       }

       .wizard-inner-scroll {
           flex: 1; 
           min-height: 0;
           overflow-y: auto;
           padding: 0 clamp(16px, 5vw, 24px) 24px;
           -webkit-overflow-scrolling: touch;
           scrollbar-width: thin;
           scrollbar-color: var(--brand-color) transparent;
       }
       .wizard-inner-scroll::-webkit-scrollbar { width: 5px; }
       .wizard-inner-scroll::-webkit-scrollbar-thumb { background-color: var(--brand-color); border-radius: 10px; }

       .visual-selector-card { 
           transition: transform 0.25s cubic-bezier(.4,0,.2,1), background-color 0.25s, box-shadow 0.25s;
           cursor: pointer;
           padding: 4px;
           border-radius: 12px;
           border: 2px solid transparent;
           background-color: var(--bg-secondary);
       }
       .visual-selector-card .image-wrapper {
           background-color: transparent;
           border-radius: 8px;
           overflow: hidden;
       }
       .visual-selector-card img {
           width: 100%;
           height: auto;
           aspect-ratio: 1 / 1;
           object-fit: contain;
           padding: 0;
           transition: transform 0.25s;
       }
       .visual-selector-card h4 {
           color: var(--text-secondary);
           font-weight: 600;
           transition: color 0.25s;
           font-size: clamp(0.6rem, 2.5vw, 0.875rem);
       }
       .visual-selector-card:hover {
           transform: translateY(-2px);
       }
       .visual-selector-card.selected { 
           background-color: var(--bg-selected);
           transform: translateY(-5px);
           outline: 2px solid var(--brand-color); 
       }
       .visual-selector-card.selected h4, .visual-selector-card.selected svg {
           color: var(--text-primary);
       }
       
       @media (max-width: 640px) {
           .visual-selector-card img {
               transform: scale(1.1);
           }
           .visual-selector-card:hover img {
               transform: scale(1.15);
           }
       }

       h3.wizard-title {
           font-size: clamp(1.5rem, 4vw, 1.875rem);
           font-weight: 800;
           color: var(--text-primary);
           margin-bottom: clamp(0.4rem, 2vh, 1.5rem);
       }
       
       .wizard-label {
           color: var(--text-secondary);
           font-size: clamp(0.7rem, 2.5vw, 1rem);
           margin-bottom: 1rem;
       }

       .value-display {
           font-size: clamp(4rem, 12vw, 5rem);
           font-weight: 900;
           color: var(--text-primary);
           margin-bottom: 1rem;
       }

       .value-display-medium {
           font-size: clamp(3rem, 8vw, 4rem);
           font-weight: 800;
           color: var(--text-primary);
           margin-bottom: 0.2rem;
       }
       
       .modal-brand-footer {
           flex-shrink: 0;
           width: 100%;
           background: transparent;
           color: var(--text-secondary);
           font-weight: 600;
           font-size: clamp(11px, 3vw, 15px);
           text-align: center;
           padding: 16px 0;
           letter-spacing: 1px;
           user-select: none;
           border-top: none;
       }
       .wizard-step { display: none; animation: fadeIn 0.4s; }
       .wizard-step.active { display: block; }
       #step-loader.active { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 300px;}
       @keyframes fadeIn { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }
       @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
       .loader { border:4px solid var(--bg-secondary); border-top:4px solid var(--brand-color); border-radius:50%; width:46px; height:46px; animation:spin 1s linear infinite;}
       
       input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 8px; background: var(--bg-secondary); border-radius: 5px; outline: none; transition: opacity .2s; cursor: pointer; }
       input[type="range"]::-webkit-slider-thumb { width: 24px; height: 24px; background: var(--bg-primary); cursor: pointer; border-radius: 50%; border: 2px solid var(--brand-color); box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
       input[type="range"]::-moz-range-thumb { width: 24px; height: 24px; background: var(--bg-primary); cursor: pointer; border-radius: 50%; border: 2px solid var(--brand-color); box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
       
       .slider-label {
           font-size: clamp(0.7rem, 2vw, 0.75rem);
           color: var(--text-secondary);
           margin-top: 0.75rem;
           text-align: center;
       }

       .action-button {
           background-color: var(--button-bg);
           color: var(--button-text);
           transition: transform 0.2s, background-color 0.2s;
           font-size: clamp(0.7rem, 4vw, 1.125rem);
       }
       .action-button:hover {
           background-color: #333;
           transform: translateY(-2px);
       }
       .prev-btn {
           background-color: transparent;
           color: var(--text-secondary);
       }
       .prev-btn:hover {
           background-color: var(--bg-secondary);
           color: var(--text-primary);
       }

       button:disabled{opacity:0.5;cursor:not-allowed;}
       
       .modal-alert { 
           color: #c21c25; 
           font-weight: 500; 
           font-size: clamp(0.8rem, 2.5vw, 0.875rem);
           text-align: center; 
           display: none;
           margin-top: 0.5rem;
       }
       
       .wizard-nav {
           flex-shrink: 0;
           padding: 1rem clamp(16px, 5vw, 24px);
           border-top: 1px solid var(--border-color);
       }

       .gender-selector-card {
           padding: 12px;
           min-height: 80px;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 8px;
       }

       /* Template Fit Preview Styles */
       .template-fit-preview {
           background: white;
           border-radius: 12px;
           padding: 20px;
           border: 1px solid var(--border-color);
           text-align: center;
       }

       .main-preview-image {
           width: 100%;
           max-width: 400px;
           height: auto;
           aspect-ratio: 1 / 1;
           object-fit: contain;
           border-radius: 8px;
           background-color: var(--bg-secondary);
           margin: 0 auto 16px auto;
           display: block;
       }

       .size-selector-grid {
           display: grid;
           grid-template-columns: repeat(4, 1fr);
           gap: 12px;
           margin-top: 16px;
       }

       .size-button {
           position: relative;
           background: transparent;
           color: var(--text-primary);
           border: 2px solid #d1d5db;
           border-radius: 8px;
           padding: 12px 8px;
           font-weight: 600;
           font-size: 14px;
           cursor: pointer;
           transition: all 0.2s;
           width: 60px;
           height: 60px;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 2px;
       }

       .size-button:hover {
           transform: translateY(-2px);
           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
           border-color: #9ca3af;
       }

       .size-button.recommended {
           border-color: var(--brand-color);
           position: relative;
       }

       .size-button.recommended::after {
           content: '⭐';
           position: absolute;
           top: -6px;
           right: -6px;
           background: #f59e0b;
           border-radius: 50%;
           width: 20px;
           height: 20px;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 10px;
           border: 2px solid white;
       }

       .size-button.selected {
           background: var(--brand-color);
           color: white;
           border-color: var(--brand-color);
           transform: translateY(-2px);
           box-shadow: 0 4px 12px rgba(0,0,0,0.2);
       }

       .size-label {
           font-size: 16px;
           font-weight: 700;
       }

       .size-button-container {
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 4px;
       }

       .match-percentage {
           font-size: 10px;
           color: var(--text-secondary);
           font-weight: 500;
       }

       .template-preview-title {
           font-size: 18px;
           font-weight: 700;
           color: var(--text-primary);
           margin-bottom: 8px;
       }

       .template-preview-subtitle {
           font-size: 12px;
           color: var(--text-secondary);
           margin-bottom: 16px;
       }

       @media (max-width:480px) {
           #wizard-content { max-width: 95vw; }
           .size-button { 
               width: 50px; 
               height: 50px; 
               padding: 8px 4px; 
               font-size: 12px; 
           }
           .size-label { font-size: 14px; }
           .match-percentage { font-size: 9px; }
       }
   </style>
</head>
<body class="text-gray-900">

<div class="container mx-auto p-4 md:p-8">
   <h1 class="text-3xl font-bold mb-4 text-center tracking-tight text-gray-900">Premium Oversize Tee</h1>
   <div class="product-card max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl border">
       <div class="md:flex">
           <div class="product-card-image-bg md:flex-shrink-0 flex items-center justify-center">
               <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://placehold.co/600x800/f4f5f7/333?text=LOS%20SURENOS" alt="[LOS SURENOS Gri Tişört]" loading="lazy">
           </div>
           <div class="p-8">
               <div class="uppercase tracking-wide text-sm text-violet-600 font-semibold">Yeni Koleksiyon</div>
               <p class="block mt-1 text-lg leading-tight font-medium text-black">Unisex Boxy Fit Tee</p>
               <p class="mt-2 text-gray-600">Mükemmel kesimi ve premium kumaşıyla gardırobunuzun favorisi olacak.</p>
               <div class="mt-4">
                   <span class="text-2xl font-bold text-gray-900">749.99 TL</span>
               </div>
               <div class="mt-6">
                   <button id="open-wizard-btn" class="action-button w-full text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                       <i data-lucide="scan-line" class="mr-2"></i>
                       Sana Özel Bedeni Bulalım
                   </button>
                   <p class="text-xs text-center mt-2 text-gray-500">Yapay zeka destekli beden danışmanını keşfet.</p>
               </div>
           </div>
       </div>
   </div>
</div>

<div id="size-wizard-modal" class="fixed inset-0 flex items-center justify-center p-4 z-50 hidden">
   <div id="wizard-content">
       <div class="flex-shrink-0 flex justify-center items-center p-4 border-b border-[var(--border-color)] relative">
           <h2 class="text-base font-bold flex items-center gap-2">
               <i data-lucide="badge-check" class="w-6 h-6 text-gray-800"></i> Akıllı Beden Danışmanı
           </h2>
           <button id="close-wizard-btn" class="text-gray-500 hover:text-gray-900 absolute top-1/2 right-4 -translate-y-1/2">
               <i data-lucide="x" class="w-6 h-6"></i>
           </button>
       </div>
       <div class="flex-shrink-0 p-5 pt-4">
           <div class="w-full bg-gray-200 rounded-full h-2.5">
               <div id="progress-bar" class="bg-gray-800 h-2.5 rounded-full transition-all duration-500" style="width:0%"></div>
           </div>
       </div>
       <div class="wizard-inner-scroll">
           <!-- Adım 1: Başlangıç -->
           <div id="step-1" class="wizard-step active text-center">
               <h3 class="wizard-title">Sana en uygun bedeni nasıl bulalım?</h3>
               <p class="wizard-label">İki farklı yöntemle sana özel önerimizi anında öğren.</p>
               <div class="space-y-4">
                   <button data-target-step="step-0" data-mode="wizard" class="start-btn action-button w-full font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                       <i data-lucide="user-check" class="mr-3"></i> Vücut Ölçülerimle Bul
                   </button>
                   <button data-target-step="step-0" data-mode="measure" class="start-btn action-button w-full font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                       <i data-lucide="ruler" class="mr-3"></i> Favori Tişörtümü Ölçerek Bul
                   </button>
               </div>
               <p class="text-xs mt-6 text-gray-500"><i data-lucide="lock" class="inline-block w-3 h-3 mr-1"></i>Bilgilerin sadece beden hesaplamak için kullanılır.</p>
           </div>

           <!-- Adım 0: Temel Bilgiler -->
           <div id="step-0" class="wizard-step text-center">
               <h3 class="wizard-title">Seni Tanıyalım</h3>
               <p class="wizard-label">Doğru öneri için bu iki bilgi önemli.</p>
               <div class="space-y-6">
                   <div>
                       <h4 class="font-semibold mb-4 text-lg">Yaşın</h4>
                       <p id="age-value-display" class="value-display !text-7xl !mb-2">25</p>
                       <input type="range" id="age-slider" min="15" max="45" value="25" class="w-full">
                       <p class="slider-label">Yaşını ayarlamak için kaydır</p>
                   </div>
                   <div>
                       <h4 class="font-semibold mb-3 text-lg">Cinsiyet</h4>
                       <div class="grid grid-cols-2 gap-3" data-group="gender">
                           <button class="visual-selector-card gender-selector-card">
                               <i data-lucide="user" class="w-8 h-8 text-blue-600"></i>
                               <h4 class="text-sm font-medium">Erkek</h4>
                           </button>
                           <button class="visual-selector-card gender-selector-card">
                               <i data-lucide="user-round" class="w-8 h-8 text-pink-500"></i>
                               <h4 class="text-sm font-medium">Kadın</h4>
                           </button>
                       </div>
                        <div id="gender-alert" class="modal-alert">Lütfen bir cinsiyet seçiniz!</div>
                   </div>
               </div>
           </div>

           <!-- Adım 2: Boy Seçimi -->
           <div id="step-2" class="wizard-step">
               <div class="text-center">
                   <h3 class="wizard-title">Boyun kaç cm?</h3>
                   <p id="height-value-display" class="value-display">175 cm</p>
                   <input type="range" id="height-slider" min="140" max="200" value="175" class="w-full">
                   <p class="slider-label">Ölçüyü ayarlamak için kaydır</p>
               </div>
           </div>

           <!-- Adım 3: Kilo Seçimi -->
           <div id="step-3" class="wizard-step">
               <div class="text-center">
                   <h3 class="wizard-title">Kilon kaç kg?</h3>
                   <p id="weight-value-display" class="value-display">75 kg</p>
                   <input type="range" id="weight-slider" min="40" max="110" value="75" class="w-full">
                   <p class="slider-label">Ölçüyü ayarlamak için kaydır</p>
               </div>
           </div>

           <!-- Adım 4: Vücut Tipi -->
           <div id="step-4" class="wizard-step">
               <h3 class="wizard-title text-center">Vücut tipin hangisi?</h3>
               <div class="grid grid-cols-3 gap-2 mb-1" data-group="bodyType">
                   <div class="visual-selector-card text-center" data-value="İnce Yapılı">
                       <div class="image-wrapper"><img src="https://cdn.myikas.com/images/theme-images/fe980448-a30c-47fd-8c65-05ec05b27034/image_1080.webp" alt="[İnce yapılı vücut tipi]"></div>
                       <h4 class="text-sm mt-2">İnce Yapılı</h4>
                   </div>
                   <div class="visual-selector-card text-center" data-value="Standart Yapılı">
                       <div class="image-wrapper"><img src="https://cdn.myikas.com/images/theme-images/0db45a1b-030c-4c18-aee7-36e80cc89c40/image_1080.webp" alt="[Standart yapılı vücut tipi]"></div>
                       <h4 class="text-sm mt-2">Standart Yapılı</h4>
                   </div>
                   <div class="visual-selector-card text-center" data-value="İri Yapılı">
                       <div class="image-wrapper"><img src="https://cdn.myikas.com/images/theme-images/c4b2e1b1-488c-408c-a388-3feedaa53955/image_1080.webp" alt="[İri yapılı vücut tipi]"></div>
                       <h4 class="text-sm mt-2">İri Yapılı</h4>
                   </div>
               </div>
               <div id="bodytype-alert" class="modal-alert">Lütfen bir vücut tipi seçiniz!</div>
           </div>

           <!-- Adım 5: Omuz Genişliği -->
           <div id="step-5" class="wizard-step">
               <h3 class="wizard-title text-center">Omuz genişliğin nasıl?</h3>
               <div class="grid grid-cols-3 gap-2 mb-1" data-group="shoulderWidth">
                   <div class="visual-selector-card text-center" data-value="Dar Omuz">
                       <div class="image-wrapper"><img src="https://cdn.myikas.com/images/theme-images/0a00cb0e-637c-41d8-84ac-63d19065b16b/image_1080.webp" alt="[Dar omuzlu vücut tipi]"></div>
                       <h4 class="text-sm mt-2">Dar Omuz</h4>
                   </div>
                   <div class="visual-selector-card text-center" data-value="Normal Omuz">
                       <div class="image-wrapper"><img src="https://cdn.myikas.com/images/theme-images/75e11e3b-a7ae-4205-9c9f-44ad00c208ac/image_1080.webp" alt="[Normal omuzlu vücut tipi]"></div>
                       <h4 class="text-sm mt-2">Normal Omuz</h4>
                   </div>
                   <div class="visual-selector-card text-center" data-value="Geniş Omuz">
                       <div class="image-wrapper"><img src="https://cdn.myikas.com/images/theme-images/24c35eb8-abfb-4ab6-a33d-4f887ac3ab1a/image_1080.webp" alt="[Geniş omuzlu vücut tipi]"></div>
                       <h4 class="text-sm mt-2">Geniş Omuz</h4>
                   </div>
               </div>
               <div id="shoulder-alert" class="modal-alert">Lütfen bir omuz genişliği seçiniz!</div>
           </div>

           <!-- Adım M1 & M2 (Ölçüm) -->
           <div id="step-m1" class="wizard-step">
               <div class="text-center">
                   <h3 class="wizard-title">Favori tişörtünün genişliği?</h3>
                   <img src="https://placehold.co/400x300/f4f5f7/333?text=Genişlik+(En)" alt="[Tişört genişlik ölçümü görseli]" class="w-full max-w-300px h-auto aspect-ratio-16/9 object-contain mx-auto mb-4 rounded-lg bg-gray-200">
                   <p id="tee-width-display" class="value-display-medium mt-4">58 cm</p>
                   <input type="range" id="tee-width-slider" min="40" max="80" value="58" class="w-full">
                   <p class="slider-label">Ölçüyü ayarlamak için kaydır</p>
               </div>
           </div>
           <div id="step-m2" class="wizard-step">
               <div class="text-center">
                   <h3 class="wizard-title">Favori tişörtünün boyu?</h3>
                   <img src="https://placehold.co/400x300/f4f5f7/333?text=Uzunluk+(Boy)" alt="[Tişört boy ölçümü görseli]" class="w-full max-w-300px h-auto aspect-ratio-16/9 object-contain mx-auto mb-4 rounded-lg bg-gray-200">
                   <p id="tee-length-display" class="value-display-medium mt-4">72 cm</p>
                   <input type="range" id="tee-length-slider" min="60" max="90" value="72" class="w-full">
                   <p class="slider-label">Ölçüyü ayarlamak için kaydır</p>
               </div>
           </div>

           <!-- Yükleniyor Ekranı -->
           <div id="step-loader" class="wizard-step text-center">
               <div class="loader"></div>
               <h3 class="text-2xl font-bold mt-6">Analiz Ediliyor...</h3>
               <p class="text-gray-600 mt-2">✨ Yapay zeka, verilerinize göre en uygun bedeni ve kişisel yorumu hazırlıyor.</p>
           </div>

           <!-- Sonuç Ekranı -->
           <div id="step-result" class="wizard-step text-center">
               <i data-lucide="party-popper" class="mx-auto w-16 h-16 text-green-500"></i>
               <h3 class="wizard-title mt-4">Sana Özel Önerimiz:</h3>
               <p id="result-size" class="text-7xl font-black text-gray-800 my-4">L</p>
               <div class="bg-gray-100 rounded-lg p-4 text-sm text-left mb-3 border border-gray-200">
                   <p id="result-description"></p>
                   
                   <!-- Template Fit Preview Section -->
                   <div id="template-fit-preview-section" class="mt-6">
                       <div class="template-fit-preview">
                           <div class="template-preview-title">Tişört Fit Önizlemesi</div>
                           <div class="template-preview-subtitle">Farklı bedenlerde nasıl duracağını görün</div>
                           
                           <img id="main-preview-image" 
                                src="" 
                                alt="Template Fit Preview" 
                                class="main-preview-image">
                           
                           <div class="size-selector-grid" id="size-selector-grid">
                               <!-- Bu alanı JavaScript dinamik olarak doldurur -->
                           </div>
                       </div>
                   </div>

               </div>
               <div class="mt-6">
                   <button id="add-to-cart-btn" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition">Bu Bedeni Sepete Ekle</button>
                   <button class="restart-btn mt-2 w-full text-gray-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-200">Yeniden Başla</button>
               </div>
           </div>
       </div>
       <div class="wizard-nav">
           <div class="flex justify-between">
               <button id="nav-prev" class="prev-btn font-bold py-2 px-4 rounded-lg">Geri</button>
               <button id="nav-next" class="next-btn action-button font-bold py-2 px-6 rounded-lg">İleri</button>
               <button id="nav-analyze" class="analyze-btn action-button font-bold py-2 px-6 rounded-lg" style="display:none;">Analiz Et</button>
           </div>
       </div>
       <div class="modal-brand-footer">LOS SURENOS®</div>
   </div>
</div>

<div id="custom-alert-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100] hidden">
   <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm text-center">
       <p id="custom-alert-message" class="text-lg text-gray-700 mb-4"></p>
       <button id="custom-alert-close-btn" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg">Tamam</button>
   </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
   // Template CDN Links Mapping - Tüm gerçek linkler
   const TEMPLATE_CDN_LINKS = {
       // SHORT (165-174 cm)
       'kisa_zayif_S': 'https://cdn.myikas.com/images/theme-images/a293d775-fd5d-40e0-a67b-865f1b56f258/image_1080.webp',
       'kisa_zayif_M': 'https://cdn.myikas.com/images/theme-images/e3860a1c-64cd-47cd-a93e-5edf746e6b96/image_1080.webp',
       'kisa_zayif_L': 'https://cdn.myikas.com/images/theme-images/43e2602c-3690-4e96-9e48-659649fc39a3/image_1080.webp',
       'kisa_zayif_XL': 'https://cdn.myikas.com/images/theme-images/d7f9a8b4-c95f-4303-9f7a-37274e86fdbd/image_1080.webp',
       
       'kisa_averaj_S': 'https://cdn.myikas.com/images/theme-images/0ad4ce68-d72c-4aec-b90b-de6d1bb70a65/image_1080.webp',
       'kisa_averaj_M': 'https://cdn.myikas.com/images/theme-images/4475460d-d91e-4c66-a36c-a0efc512eff4/image_1080.webp',
       'kisa_averaj_L': 'https://cdn.myikas.com/images/theme-images/9690a8b5-4c4f-403e-9eb8-bdb29adcb96e/image_1080.webp',
       'kisa_averaj_XL': 'https://cdn.myikas.com/images/theme-images/c7e3d877-ced8-442c-8646-e29a65e4185c/image_1080.webp',
       
       'kisa_kilolu_S': 'https://cdn.myikas.com/images/theme-images/5c6f0395-0e3c-46dd-86a3-f92237b3c76c/image_1080.webp',
       'kisa_kilolu_M': 'https://cdn.myikas.com/images/theme-images/d19f03f0-f190-4247-ae21-59caa8438483/image_1080.webp',
       'kisa_kilolu_L': 'https://cdn.myikas.com/images/theme-images/5fc8a752-fac6-44b9-8b29-3c8a28999c69/image_1080.webp',
       'kisa_kilolu_XL': 'https://cdn.myikas.com/images/theme-images/c5f3a992-cda6-44e7-b0e0-639e2bcbad76/image_1080.webp',
       
       // NORMAL (175-184 cm) 
       'standart_zayif_S': 'https://cdn.myikas.com/images/theme-images/f6278074-0451-49ad-8a2d-0536bd68be9c/image_1080.webp',
       'standart_zayif_M': 'https://cdn.myikas.com/images/theme-images/82fef597-de90-426e-8fb6-408c277a44e8/image_1080.webp',
       'standart_zayif_L': 'https://cdn.myikas.com/images/theme-images/e6701570-dd36-476b-a1bf-871744550691/image_1080.webp',
       'standart_zayif_XL': 'https://cdn.myikas.com/images/theme-images/a97da1cc-df7e-42f1-bed7-653722affa94/image_1080.webp',
       
       'standart_averaj_S': 'https://cdn.myikas.com/images/theme-images/5f52b28e-f2ac-4dcb-9ee4-b25ec42727e3/image_1080.webp',
       'standart_averaj_M': 'https://cdn.myikas.com/images/theme-images/ce725246-11c0-4edd-9362-c9877518ade1/image_1080.webp',
       'standart_averaj_L': 'https://cdn.myikas.com/images/theme-images/8b84976d-62eb-4829-9a42-c66f191be173/image_1080.webp',
       'standart_averaj_XL': 'https://cdn.myikas.com/images/theme-images/bc5ee2e4-b747-4fb2-b312-4e8fcdcaba20/image_1080.webp',
       
       'standart_kilolu_S': 'https://cdn.myikas.com/images/theme-images/e11024a2-6950-448a-bffa-8e020b87d99b/image_1080.webp',
       'standart_kilolu_M': 'https://cdn.myikas.com/images/theme-images/8c519699-0895-4635-a1d7-0f20cf58a15a/image_1080.webp',
       'standart_kilolu_L': 'https://cdn.myikas.com/images/theme-images/1ef14bcd-e35f-40f9-8f8d-96f43281c6ca/image_1080.webp',
       'standart_kilolu_XL': 'https://cdn.myikas.com/images/theme-images/08c2bf97-5ee5-4376-ac89-445f5a632f2a/image_1080.webp',
       
       // TALL (185-194 cm)
       'uzun_zayif_S': 'https://cdn.myikas.com/images/theme-images/4ab4ac9e-7d79-48cd-943d-411cb75adc9b/image_1080.webp',
       'uzun_zayif_M': 'https://cdn.myikas.com/images/theme-images/6edb0385-62c2-4992-8a74-61d7cda549ba/image_1080.webp',
       'uzun_zayif_L': 'https://cdn.myikas.com/images/theme-images/bd520f45-19fb-475a-a12c-d5cc211d9a82/image_1080.webp',
       'uzun_zayif_XL': 'https://cdn.myikas.com/images/theme-images/23ce8514-ede7-470c-9f00-d387578f1c9f/image_1080.webp',
       
       'uzun_averaj_S': 'https://cdn.myikas.com/images/theme-images/fbcfb6d2-986d-445a-901a-482b23c17604/image_1080.webp',
       'uzun_averaj_M': 'https://cdn.myikas.com/images/theme-images/ffd25756-5aff-4358-955c-89a73dbdd239/image_1080.webp',
       'uzun_averaj_L': 'https://cdn.myikas.com/images/theme-images/cecd85af-3ce0-4dac-8481-d52ad84c16f0/image_1080.webp',
       'uzun_averaj_XL': 'https://cdn.myikas.com/images/theme-images/094de50c-7347-46fd-b52b-1089a8f9e29b/image_1080.webp',
       
       'uzun_kilolu_S': 'https://cdn.myikas.com/images/theme-images/ac29b773-9715-4548-a008-cf6b4b81ca39/image_1080.webp',
       'uzun_kilolu_M': 'https://cdn.myikas.com/images/theme-images/966fa848-d9fc-4e04-87d4-4f9e0906a340/image_1080.webp',
       'uzun_kilolu_L': 'https://cdn.myikas.com/images/theme-images/d9c4eadc-90ad-4751-96a4-868cf1af712f/image_1080.webp',
       'uzun_kilolu_XL': 'https://cdn.myikas.com/images/theme-images/d33d3d0a-2cac-4317-9f49-6fe9b74907f8/image_1080.webp'
   };
   
   // Beden eşleşme oranları - DÜZELTME: Akıllı yakın beden sistemi
   const generateRandomMatchPercentages = (recommendedSize) => {
       const sizes = ['S', 'M', 'L', 'XL'];
       const currentIndex = sizes.indexOf(recommendedSize);
       const percentages = {};
       
       // Önerilen beden için 73-86% arası rastgele
       const recommendedPercentage = Math.floor(Math.random() * (86 - 73 + 1)) + 73;
       percentages[recommendedSize] = recommendedPercentage;
       
       // Kalan yüzdeyi akıllı dağıt
       const remainingPercentage = 100 - recommendedPercentage;
       
       // En yakın bedeni belirle (akıllı sistem)
       let closestSize;
       if (currentIndex === 0) { // S bedeni - sadece yukarı git
           closestSize = sizes[1]; // M
       } else if (currentIndex === sizes.length - 1) { // XL bedeni - sadece aşağı git  
           closestSize = sizes[currentIndex - 1]; // L
       } else { // Ortadaki bedenler - yukarı git (daha büyük beden)
           closestSize = sizes[currentIndex + 1];
       }
       
       // En yakın bedene yüksek oran ver (kalan %60-80'i)
       const closestPercentage = Math.floor(remainingPercentage * (0.6 + Math.random() * 0.2));
       percentages[closestSize] = closestPercentage;
       
       // Geriye kalan yüzdeyi diğer bedenlere dağıt
       const finalRemaining = remainingPercentage - closestPercentage;
       const otherSizes = sizes.filter(size => size !== recommendedSize && size !== closestSize);
       
       let remaining = finalRemaining;
       otherSizes.forEach((size, index) => {
           if (index === otherSizes.length - 1) {
               percentages[size] = remaining;
           } else {
               const randomAmount = Math.floor(Math.random() * (remaining - (otherSizes.length - index - 1))) + 1;
               percentages[size] = randomAmount;
               remaining -= randomAmount;
           }
       });
       
       return percentages;
   };
   
   // HIBRIT AI SISTEMI: Beden bizim, oran ve açıklama AI'dan
   const getAIMatchingData = async (userData, recommendedSize) => {
       const { height, weight, age, gender, bodyType, shoulderWidth } = userData;
       
       const prompt = `Sen LOS SURENOS markasının uzman beden danışmanısın. Müşteriye profesyonel ama samimi bir dille rehberlik ediyorsun.

DURUM RAPORU:
- Müşteri Profili: ${age} yaşında ${gender}, ${height}cm boy, ${weight}kg kilo
- Vücut Tipi: ${bodyType || 'Belirtilmedi'} / Omuz: ${shoulderWidth || 'Belirtilmedi'}
- SİSTEM ÖNERİSİ: ${recommendedSize} beden (algoritma sonucu)
- Ürün: Oversized Boxy Fit Tee (geniş ve modern kesim)

GÖREV 1 - EŞLEŞME ORANLARI:
${recommendedSize} bedeni için 70-85% arası uyum oranı belirle.
Diğer bedenleri mesafeye göre oranla:
- 1 beden farkı: 10-20% arası
- 2+ beden farkı: 5% altında
Toplam %100 olmalı.

GÖREV 2 - KİŞİSEL DANIŞMANLIK:
Samimi ama uzman bir arkadaş gibi yaklaş, tamamen Türkçe konuş:

"Seni analiz ettim: [GÜÇLÜ YANLARINI ÇEK]. Bu durumda [BEDEN] bedeni %X uyumla tam sana göre çünkü [3 BASIT TÜRKÇE NEDEN].

İkinci seçenek [ALTERNATİF] bedeni (%Y uyum) - eğer [HANGİ DURUMDA] istersen bu da olur ama [BASIT TRADE-OFF].

Tavsiyem: [SAMIMI VE PRATİK TAVSİYE - TAMAMEN TÜRKÇE]."

DİL KURALLARI:
- Sadece Türkçe kullan, hiç İngilizce kelime yok
- "Sen" dili kullan, arkadaşça konuş
- Teknik terimler yerine günlük dil  
- "Analiz, profil" gibi kelimeler yerine "baktım, gördüm" tarzı doğal ifadeler
- Samimi ama bilgili bir arkadaş havası

YANIT FORMATI (sadece JSON):
{
  "percentages": {"S": x, "M": y, "L": z, "XL": w},
  "explanation": "4 cümlelik detaylı açıklama buraya"
}`;

       try {
           // Placeholder backend call - gerçek implementasyon gerekli
           const response = await fetch('/api/ai-matching', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ prompt })
           });
           
           if (response.ok) {
               const result = await response.json();
               return JSON.parse(result.response);
           }
       } catch (error) {
           console.error('AI API hatası:', error);
       }
       
       // Fallback: Rastgele oranlar + gelişmiş açıklama
       const fallbackPercentages = generateRandomMatchPercentages(recommendedSize);
       
       // En yakın bedeni bul
       const sizes = ['S', 'M', 'L', 'XL'];
       const currentIndex = sizes.indexOf(recommendedSize);
       const closestSize = currentIndex > 0 ? sizes[currentIndex - 1] : sizes[currentIndex + 1];
       const closestPercentage = fallbackPercentages[closestSize];
       
       // Büyük/küçük analizi
       const sizeComparison = sizes.indexOf(closestSize) > currentIndex ? 'daha geniş' : 'daha dar';
       
       // Şık son cümleler havuzu
       const stylishEndings = [
           'Bu bedende kendin gibi rahat hissedeceksin.',
           'Böylece hem rahat hem şık görüneceksin.',
           'Bu seçimle günlük kombinlerin çok daha kolay olacak.',
           'Oversize kesimin avantajını tam olarak yaşayacaksın.',
           'Bu bedende özgüvenle giyinebilirsin.',
           'Sonuçta en önemli şey kendini iyi hissetmen.',
           'Bu seçimle hiç pişman olmayacaksın.',
           'Böylece tarzını yansıtan mükemmel bir fit yakalayacaksın.',
           'Bu bedende her durumda rahat edeceksin.',
           'Oversize tişörtün bu bedende tam potansiyelini gösterecek.'
       ];
       
       const randomEnding = stylishEndings[Math.floor(Math.random() * stylishEndings.length)];
       
       const fallbackExplanation = `Ölçülerinize göre %${fallbackPercentages[recommendedSize]} eşleşme ile ${recommendedSize} bedeni öneriyoruz. ${height}cm boyunuz ve ${weight}kg kilonuz için bu beden oversize kesimin tam avantajını sağlayacak. Alternatif olarak %${closestPercentage} eşleşme ile ${closestSize} bedeni de tercih edebilirsin, ancak sana ${sizeComparison} gelebilir. ${randomEnding}`;
       
       return {
           percentages: fallbackPercentages,
           explanation: fallbackExplanation
       };
   };
   
   // Vücut tipi kategorileri (boy, kilo kategorisi belirlemek için) - DÜZELTME
   const getBodyCategory = (height, weight) => {
       // Boy kategorisi - Güncellenmiş aralıklar
       let heightCategory = 'standart';
       if (height >= 165 && height <= 174) heightCategory = 'kisa';
       else if (height >= 175 && height <= 184) heightCategory = 'standart';
       else if (height >= 185 && height <= 194) heightCategory = 'uzun';
       else if (height < 165) heightCategory = 'kisa'; // 165'ten küçükler de kısa
       else heightCategory = 'uzun'; // 194'ten büyükler de uzun
       
       // Kilo kategorisi (BMI bazlı) - DÜZELTME: Daha geniş aralıklar
       const heightM = height / 100;
       const bmi = weight / (heightM * heightM);
       let weightCategory = 'averaj';
       if (bmi < 19) weightCategory = 'zayif';
       else if (bmi > 27) weightCategory = 'kilolu'; // 25'ten 27'ye çıkarıldı
       
       return { heightCategory, weightCategory };
   };
   
   // Template görsel URL'i oluşturma
   const getTemplateImageUrl = (heightCategory, weightCategory, size) => {
       const filename = `${heightCategory}_${weightCategory}_${size}`;
       return TEMPLATE_CDN_LINKS[filename] || `https://placehold.co/600x800/f4f5f7/333?text=${filename}`;
   };
   
   // Element Selections
   const wizardModal = document.getElementById('size-wizard-modal');
   const steps = document.querySelectorAll('.wizard-step');
   const progressBar = document.getElementById('progress-bar');
   const navPrev = document.getElementById('nav-prev');
   const navNext = document.getElementById('nav-next');
   const navAnalyze = document.getElementById('nav-analyze');
   const ageSlider = document.getElementById('age-slider');
   const ageValueDisplay = document.getElementById('age-value-display');
   const heightSlider = document.getElementById('height-slider');
   const heightValueDisplay = document.getElementById('height-value-display');
   const weightSlider = document.getElementById('weight-slider');
   const weightValueDisplay = document.getElementById('weight-value-display');
   const teeWidthSlider = document.getElementById('tee-width-slider');
   const teeWidthDisplay = document.getElementById('tee-width-display');
   const teeLengthSlider = document.getElementById('tee-length-slider');
   const teeLengthDisplay = document.getElementById('tee-length-display');
   const bodyTypeAlert = document.getElementById('bodytype-alert');
   const shoulderAlert = document.getElementById('shoulder-alert');
   const genderAlert = document.getElementById('gender-alert');
   const resultDescription = document.getElementById('result-description');
   const mainPreviewImage = document.getElementById('main-preview-image');
   const sizeSelectorGrid = document.getElementById('size-selector-grid');

   // State Variables
   let currentStepId = 'step-1';
   let userData = {};
   let selectedPreviewSize = null;

   // Modal & Alert Logic
   const openModal = () => { wizardModal.classList.remove('hidden'); resetWizard(); };
   const closeModal = () => { wizardModal.classList.add('hidden');};
   const showAlert = (message) => { 
       document.getElementById('custom-alert-message').textContent = message; 
       document.getElementById('custom-alert-modal').classList.remove('hidden'); 
   };
   
   document.getElementById('open-wizard-btn').addEventListener('click', openModal);
   document.getElementById('close-wizard-btn').addEventListener('click', closeModal);
   wizardModal.addEventListener('click', (e) => e.target === wizardModal && closeModal());
   document.getElementById('custom-alert-close-btn').addEventListener('click', () => { 
       document.getElementById('custom-alert-modal').classList.add('hidden'); 
   });

   // Navigation config
   const stepConfig = {
       'step-0': { prev: 'step-1', next: (data) => data.mode === 'wizard' ? 'step-2' : 'step-m1' },
       'step-1': { prev: null, next: null, hideNav: true },
       'step-2': { prev: 'step-0', next: 'step-3' },
       'step-3': { prev: 'step-2', next: (data) => data.mode === 'wizard' ? 'step-4' : null, isAnalyze: (data) => data.mode === 'measure' },
       'step-4': { prev: 'step-3', next: 'step-5' },
       'step-5': { prev: 'step-4', next: null, isAnalyze: true },
       'step-m1': { prev: 'step-0', next: 'step-m2' },
       'step-m2': { prev: 'step-m1', next: 'step-2' },
       'step-loader': { hideNav: true },
       'step-result': { hideNav: true }
   };

   const updateNavigation = (stepId) => {
       const config = stepConfig[stepId];
       const navContainer = document.querySelector('.wizard-nav');
       if (!config) return;
       if (config.hideNav) { navContainer.style.display = 'none'; return; }
       navContainer.style.display = 'block';
       navPrev.style.display = config.prev ? 'block' : 'none';
       if(config.prev) navPrev.dataset.targetStep = config.prev;
       const nextTarget = typeof config.next === 'function' ? config.next(userData) : config.next;
       navNext.style.display = nextTarget ? 'block' : 'none';
       if(nextTarget) navNext.dataset.targetStep = nextTarget;
       const showAnalyze = typeof config.isAnalyze === 'function' ? config.isAnalyze(userData) : config.isAnalyze;
       navAnalyze.style.display = showAnalyze ? 'block' : 'none';
       if(showAnalyze) navNext.style.display = 'none';
   };
   
   const showStep = (stepId) => {
       if (currentStepId === 'step-0' && (stepId === 'step-2' || stepId === 'step-m1')) {
           if (!userData.age) {
               userData.age = ageSlider.value;
           }
           if (!userData.gender) {
               genderAlert.style.display = "block"; 
               setTimeout(() => genderAlert.style.display = "none", 1800); 
               return;
           }
       }
       if (currentStepId === 'step-4' && stepId === 'step-5' && !userData.bodyType) {
           bodyTypeAlert.style.display = "block"; 
           setTimeout(() => bodyTypeAlert.style.display = "none", 1800); 
           return;
       }
       if (currentStepId === 'step-5' && stepId.startsWith('step-loader') && !userData.shoulderWidth) {
           shoulderAlert.style.display = "block"; 
           setTimeout(() => shoulderAlert.style.display = "none", 1800); 
           return;
       }
       currentStepId = stepId;
       steps.forEach(step => step.classList.remove('active'));
       const activeStep = document.getElementById(stepId);
       if (activeStep) activeStep.classList.add('active');
       document.querySelector('.wizard-inner-scroll').scrollTop = 0;
       updateProgressBar();
       updateNavigation(stepId);
   };

   const updateProgressBar = () => {
       const wizardFlow = ['step-1', 'step-0', 'step-2', 'step-3', 'step-4', 'step-5'];
       const measureFlow = ['step-1', 'step-0', 'step-m1', 'step-m2', 'step-2', 'step-3'];
       const currentFlow = userData.mode === 'wizard' ? wizardFlow : measureFlow;
       const stepIndex = currentFlow.indexOf(currentStepId);
       let progress = 0;
       if (stepIndex !== -1) {
           progress = ((stepIndex + 1) / currentFlow.length) * 100;
       } else if (currentStepId === 'step-result' || currentStepId.startsWith('step-loader')) {
           progress = 100;
       }
       progressBar.style.width = `${progress}%`;
   };
   
   document.querySelectorAll('.start-btn').forEach(btn => {
       btn.addEventListener('click', () => {
           userData.mode = btn.dataset.mode;
           showStep(btn.dataset.targetStep);
       });
   });

   navPrev.addEventListener('click', () => showStep(navPrev.dataset.targetStep));
   navNext.addEventListener('click', () => showStep(navNext.dataset.targetStep));
   navAnalyze.addEventListener('click', () => runAnalysis());
   document.querySelector('.restart-btn').addEventListener('click', () => resetWizard());

   // Sliders
   ageSlider.addEventListener('input', (e) => {
       ageValueDisplay.textContent = e.target.value;
       userData.age = e.target.value;
   });
   heightSlider.addEventListener('input', (e) => heightValueDisplay.textContent = `${e.target.value} cm`);
   weightSlider.addEventListener('input', (e) => weightValueDisplay.textContent = `${e.target.value} kg`);
   teeWidthSlider.addEventListener('input', (e) => teeWidthDisplay.textContent = `${e.target.value} cm`);
   teeLengthSlider.addEventListener('input', (e) => teeLengthDisplay.textContent = `${e.target.value} cm`);
   
   document.querySelectorAll('.visual-selector-card').forEach(card => {
       card.addEventListener('click', () => {
           const group = card.closest('[data-group]').dataset.group;
           document.querySelectorAll(`[data-group="${group}"] .visual-selector-card`).forEach(c => c.classList.remove('selected'));
           card.classList.add('selected');
           userData[group] = card.querySelector('h4').textContent;
       });
   });

   // KURAL TABANLI BEDEN HESAPLAMA
   function getRuleBasedRecommendation(height, weight, age, gender, bodyType, shoulderWidth) {
       const ageGroup = age < 18 ? 'Genç' : 'Yetişkin';
       let baseSize;

       if (gender === 'Erkek') {
           if (ageGroup === 'Yetişkin') {
               if (height < 175) {
                   if (weight < 65) baseSize = 'S';
                   else if (weight < 78) baseSize = 'M';
                   else baseSize = 'L';
               } else if (height <= 185) {
                   if (weight < 65) baseSize = 'M';
                   else if (weight < 78) baseSize = 'L';
                   else if (weight < 96) baseSize = 'L';
                   else baseSize = 'XL';
               } else { // > 185
                   if (weight < 78) baseSize = 'L';
                   else baseSize = 'XL';
               }
           } else { // Genç
               if (height < 175) {
                   if (weight < 60) baseSize = 'S';
                   else if (weight < 75) baseSize = 'M';
                   else baseSize = 'L';
               } else if (height <= 185) {
                   if (weight < 60) baseSize = 'S';
                   else if (weight < 75) baseSize = 'M';
                   else baseSize = 'L';
               } else { // > 185
                   if (weight < 75) baseSize = 'M';
                   else if (weight < 85) baseSize = 'L';
                   else baseSize = 'XL';
               }
           }
       } else { // Kadın
           if (height < 165) {
               if (weight < 60) baseSize = 'S';
               else if (weight < 75) baseSize = 'M';
               else baseSize = 'L';
           } else if (height <= 175) {
               if (weight < 60) baseSize = 'S';
               else if (weight < 75) baseSize = 'M';
               else baseSize = 'L';
           } else { // > 175
               if (weight < 60) baseSize = 'M';
               else if (weight < 75) baseSize = 'L';
               else baseSize = 'XL';
           }
       }

       const modifier = (bodyType === 'İri Yapılı' || shoulderWidth === 'Geniş Omuz') ? 1 : 
                        (bodyType === 'İnce Yapılı' || shoulderWidth === 'Dar Omuz') ? -1 : 0;
       
       const sizes = ['S', 'M', 'L', 'XL'];
       const currentIndex = sizes.indexOf(baseSize);
       let finalIndex = currentIndex + modifier;
       finalIndex = Math.max(0, Math.min(sizes.length - 1, finalIndex));

       return sizes[finalIndex];
   }

   // Template fit preview sistem
   const createSizeSelector = (recommendedSize, heightCategory, weightCategory, matchPercentages) => {
       const sizes = ['S', 'M', 'L', 'XL'];
       
       sizeSelectorGrid.innerHTML = '';
       
       sizes.forEach(size => {
           const container = document.createElement('div');
           container.className = 'size-button-container';
           
           const button = document.createElement('button');
           button.className = `size-button ${size === recommendedSize ? 'recommended' : ''} ${size === selectedPreviewSize ? 'selected' : ''}`;
           button.dataset.size = size;
           
           const sizeLabel = document.createElement('div');
           sizeLabel.className = 'size-label';
           sizeLabel.textContent = size;
           
           button.appendChild(sizeLabel);
           
           const matchPercentage = document.createElement('div');
           matchPercentage.className = 'match-percentage';
           matchPercentage.textContent = `%${matchPercentages[size]}`;
           
           container.appendChild(button);
           container.appendChild(matchPercentage);
           
           button.addEventListener('click', () => {
               // Önceki seçimi temizle
               document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
               button.classList.add('selected');
               selectedPreviewSize = size;
               
               // Ana görseli güncelle
               const imageUrl = getTemplateImageUrl(heightCategory, weightCategory, size);
               mainPreviewImage.src = imageUrl;
               
               // Sepete ekle butonunu güncelle
               document.getElementById('add-to-cart-btn').textContent = `Beden ${size} Sepete Ekle`;
           });
           
           sizeSelectorGrid.appendChild(container);
       });
   };

   const generateTemplatePreview = async (aiMatchingData) => {
       const { height, weight, recommendedSize } = userData;
       const { heightCategory, weightCategory } = getBodyCategory(parseInt(height), parseInt(weight));
       
       // Ana önizleme görselini ayarla (önerilen beden)
       selectedPreviewSize = recommendedSize;
       const initialImageUrl = getTemplateImageUrl(heightCategory, weightCategory, recommendedSize);
       mainPreviewImage.src = initialImageUrl;
       
       // Beden seçici grid'i oluştur
       createSizeSelector(recommendedSize, heightCategory, weightCategory, aiMatchingData.percentages);
   };

   const runAnalysis = async () => {
       userData.height = heightSlider.value;
       userData.weight = weightSlider.value;
       if (userData.mode === 'measure') {
           userData.teeWidth = teeWidthSlider.value;
           userData.teeLength = teeLengthSlider.value;
       }

       if (userData.mode === 'wizard' && (!userData.bodyType || !userData.shoulderWidth)) {
           showAlert("Lütfen tüm adımları eksiksiz doldurun.");
           return;
       }
       
       showStep('step-loader');

       const height = parseInt(userData.height);
       const weight = parseInt(userData.weight);
       
       // 1. KARAR: Beden, kural tabanlı sistem tarafından kesin olarak hesaplanır.
       const finalSize = getRuleBasedRecommendation(height, weight, userData.age, userData.gender, userData.bodyType, userData.shoulderWidth);
       userData.recommendedSize = finalSize;

       // 2. AI HIBRIT: Oranlar ve açıklama AI'dan alınır
       const aiMatchingData = await getAIMatchingData(userData, finalSize);
       userData.explanation = aiMatchingData.explanation;
       
       // 3. GÖSTERİM: Sonuçlar ekrana yazdırılır.
       document.getElementById('result-size').textContent = userData.recommendedSize;
       document.getElementById('add-to-cart-btn').textContent = `Beden ${userData.recommendedSize} Sepete Ekle`;
       resultDescription.textContent = userData.explanation;
       
       // Kısa bir gecikme simülasyonu
       setTimeout(async () => {
           showStep('step-result');
           
           // 4. GÖRSELLEŞTİRME: Template görselleri oluştur
           if (userData.mode === 'wizard') {
               await generateTemplatePreview(aiMatchingData);
           } else {
               document.getElementById('template-fit-preview-section').style.display = 'none';
           }
       }, 1500);
   };

   const resetWizard = () => {
       userData = {};
       userData.age = ageSlider.value;
       ageValueDisplay.textContent = ageSlider.value;
       selectedPreviewSize = null;
       
       document.querySelectorAll('.visual-selector-card.selected').forEach(c => c.classList.remove('selected'));

       showStep('step-1');
       
       const previewSection = document.getElementById('template-fit-preview-section');
       if (previewSection) {
           previewSection.style.display = 'block';
       }
   };

   lucide.createIcons();
   resetWizard();
});
</script>

</body>
</html>
