document.addEventListener('DOMContentLoaded', function() {
    // 商品タブ切り替え機能
    initProductTabs();
    
    // よくある質問のアコーディオン機能
    initFaqAccordion();
    
    // スムーズスクロール機能
    initSmoothScroll();
    
    // ヘッダーの固定表示機能
    initStickyHeader();
});

/**
 * 商品タブ切り替え機能
 */
function initProductTabs() {
    const tabs = document.querySelectorAll('.products__tab');
    const categories = document.querySelectorAll('.products__category');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // アクティブなタブのクラスを削除
            tabs.forEach(t => t.classList.remove('products__tab--active'));
            
            // クリックされたタブをアクティブにする
            this.classList.add('products__tab--active');
            
            // 全てのカテゴリーを非表示にする
            categories.forEach(category => {
                category.classList.remove('products__category--active');
            });
            
            // クリックされたタブに対応するカテゴリーを表示する
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('products__category--active');
        });
    });
}

/**
 * よくある質問のアコーディオン機能
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        
        question.addEventListener('click', function() {
            // クリックされた項目のアクティブ状態を切り替える
            item.classList.toggle('active');
            
            // アイコンの切り替え
            const icon = this.querySelector('.faq-item__icon i');
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
}

/**
 * スムーズスクロール機能
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * ヘッダーの固定表示機能
 */
function initStickyHeader() {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header--sticky');
            document.body.style.paddingTop = headerHeight + 'px';
        } else {
            header.classList.remove('header--sticky');
            document.body.style.paddingTop = '0';
        }
    });
}

/**
 * ページ読み込み時のアニメーション
 */
window.addEventListener('load', function() {
    // ヒーローセクションのフェードイン
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // 特徴カードのフェードイン
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, 200 * index);
    });
});

/**
 * スクロール時のアニメーション
 */
window.addEventListener('scroll', function() {
    // スクロール位置に応じて要素をフェードイン
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
});
