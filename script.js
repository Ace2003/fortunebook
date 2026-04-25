document.addEventListener('DOMContentLoaded', function() {
    const fortunebook = [
        {
            id: 1,
            text: "你心中的微光，终将照亮前行的道路。每一份坚持都有它的意义，每一次努力都不会白费。",
            tag: "希望之光"
        },
        {
            id: 2,
            text: "今天的你比昨天更加勇敢，明天的你将比今天更加闪耀。成长是一场美丽的旅程。",
            tag: "成长启示"
        },
        {
            id: 3,
            text: "你所期待的美好，正在悄悄地向你走来。保持耐心，保持微笑，好运即将降临。",
            tag: "好运将至"
        },
        {
            id: 4,
            text: "每一个清晨都是重新开始的机会，每一个夜晚都是温柔的港湾。珍惜当下，拥抱未来。",
            tag: "当下珍惜"
        },
        {
            id: 5,
            text: "你的笑容拥有治愈的力量，不要吝啬分享它。世界因你的存在而变得更加美好。",
            tag: "治愈力量"
        },
        {
            id: 6,
            text: "困难只是暂时的，坚持才是永恒的。你比自己想象的更加强大，相信自己的潜力。",
            tag: "坚持信念"
        },
        {
            id: 7,
            text: "生命中最美好的事物往往是不期而遇的。保持开放的心态，惊喜就在下一个转角。",
            tag: "意外之喜"
        },
        {
            id: 8,
            text: "你值得拥有这世间所有的美好。不要怀疑自己，你配得上最好的一切。",
            tag: "自我肯定"
        },
        {
            id: 9,
            text: "朋友是生命中最珍贵的礼物。珍惜身边的每一个人，感恩每一次相遇。",
            tag: "友谊珍宝"
        },
        {
            id: 10,
            text: "每一次失败都是成功的垫脚石。不要害怕跌倒，每一次站起来都会让你更加坚强。",
            tag: "失败乃师"
        },
        {
            id: 11,
            text: "你的内心蕴藏着无限的智慧。静下心来聆听，答案早已在你心中。",
            tag: "内在智慧"
        },
        {
            id: 12,
            text: "爱是宇宙中最强大的力量。用爱去感受世界，世界将用爱回报你。",
            tag: "爱的力量"
        },
        {
            id: 13,
            text: "时间是最公正的裁判，付出终有回报。你的每一份努力，时间都看在眼里。",
            tag: "时间见证"
        },
        {
            id: 14,
            text: "梦想不是遥不可及的星辰，而是内心燃烧的火焰。让梦想指引你前行的方向。",
            tag: "梦想指引"
        },
        {
            id: 15,
            text: "简单的快乐往往最动人。一朵花的绽放，一杯茶的温暖，都是值得感恩的瞬间。",
            tag: "简单快乐"
        },
        {
            id: 16,
            text: "你是独一无二的存在，不需要模仿任何人。做真实的自己，绽放属于你的光芒。",
            tag: "独特光芒"
        },
        {
            id: 17,
            text: "宽恕是最高尚的品质，不仅宽恕他人，更要宽恕自己。放下，才能轻装前行。",
            tag: "宽恕之道"
        },
        {
            id: 18,
            text: "勇气不是不害怕，而是害怕依然前行。每一次勇敢的尝试，都是一次胜利。",
            tag: "勇气试炼"
        },
        {
            id: 19,
            text: "家人是你最坚实的后盾。无论走多远，家永远是你温暖的港湾。",
            tag: "亲情港湾"
        },
        {
            id: 20,
            text: "学习是一辈子的事。保持好奇心，每一天都可以是新的开始。",
            tag: "终身学习"
        },
        {
            id: 21,
            text: "你的话语有力量，多说鼓励的话，少说伤人的话。良言一句三冬暖。",
            tag: "言语之暖"
        },
        {
            id: 22,
            text: "健康是最大的财富。善待自己的身体，它是你灵魂的殿堂。",
            tag: "健康财富"
        },
        {
            id: 23,
            text: "创造力是人类最神奇的天赋。不要害怕表达，让你的想象力自由飞翔。",
            tag: "创造天赋"
        },
        {
            id: 24,
            text: "耐心是一种美德，等待不是浪费时间。好的事物值得被期待，值得被等待。",
            tag: "耐心之美"
        },
        {
            id: 25,
            text: "感恩是开启幸福之门的钥匙。每天感谢一件事，幸福会悄悄来到你身边。",
            tag: "感恩之心"
        },
        {
            id: 26,
            text: "变化是生活的常态，拥抱变化，适应变化。每一次改变都是成长的机会。",
            tag: "变化之机"
        },
        {
            id: 27,
            text: "你的善良终会被温柔以待。这个世界或许不完美，但因你的善良而更美好。",
            tag: "善良回报"
        },
        {
            id: 28,
            text: "休息不是偷懒，是为了更好地出发。给自己一个拥抱，你已经做得很好了。",
            tag: "适时休息"
        },
        {
            id: 29,
            text: "每一次相遇都是缘分。珍惜眼前人，因为下辈子不一定能遇见。",
            tag: "缘分珍惜"
        },
        {
            id: 30,
            text: "你是命运的主人，不是生活的奴隶。你的选择决定你的未来，勇敢地走自己的路。",
            tag: "命运自主"
        }
    ];

    // 生成星空背景
    function createStars() {
        const starsContainer = document.getElementById('stars');
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            const size = Math.random() * 3 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            starsContainer.appendChild(star);
        }
    }

    // 显示加载动画
    function showLoading() {
        const loadingContainer = document.getElementById('loadingContainer');
        const bookCover = document.getElementById('bookCover');
        
        bookCover.style.display = 'none';
        loadingContainer.style.display = 'flex';
        loadingContainer.classList.add('fade-in');
    }

    // 隐藏加载动画并显示翻页
    function hideLoadingAndShowBook() {
        const loadingContainer = document.getElementById('loadingContainer');
        const bookContainer = document.getElementById('bookContainer');
        
        loadingContainer.classList.remove('fade-in');
        loadingContainer.style.opacity = '0';
        
        setTimeout(() => {
            loadingContainer.style.display = 'none';
            bookContainer.style.display = 'block';
            bookContainer.classList.add('scale-in');
        }, 500);
    }

    // 翻页动画结束后显示结果
    function showResult(fortune) {
        const bookContainer = document.getElementById('bookContainer');
        const resultContainer = document.getElementById('resultContainer');
        
        setTimeout(() => {
            bookContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.classList.add('flip-in');
            
            updateFortuneDisplay(fortune);
        }, 2000);
    }

    // 更新命运显示
    function updateFortuneDisplay(fortune) {
        const fortuneNumber = document.getElementById('fortuneNumber');
        const fortuneText = document.getElementById('fortuneText');
        const fortuneTag = document.getElementById('fortuneTag');
        
        const fortuneNumberDisplay = document.getElementById('fortuneNumberDisplay');
        const fortuneMessage = document.getElementById('fortuneMessage');
        const categoryText = document.getElementById('categoryText');
        
        // 翻页页面更新
        if (fortuneNumber) {
            fortuneNumber.textContent = `第 ${fortune.id} 号命运`;
        }
        if (fortuneText) {
            fortuneText.textContent = fortune.text;
        }
        if (fortuneTag) {
            fortuneTag.textContent = fortune.tag;
        }
        
        // 结果卡片更新
        if (fortuneNumberDisplay) {
            fortuneNumberDisplay.textContent = `第 ${fortune.id} 号命运`;
        }
        if (fortuneMessage) {
            fortuneMessage.textContent = fortune.text;
            fortuneMessage.classList.add('text-reveal');
        }
        if (categoryText) {
            categoryText.textContent = fortune.tag;
        }
    }

    // 随机抽取命运
    function drawFortune() {
        const randomIndex = Math.floor(Math.random() * fortunebook.length);
        return fortunebook[randomIndex];
    }

    // 打开书的完整流程
    function openBook() {
        const fortune = drawFortune();
        
        showLoading();
        
        setTimeout(() => {
            hideLoadingAndShowBook();
            updateFortuneDisplay(fortune);
            showResult(fortune);
        }, 2500);
    }

    // 重新抽取命运
    function reDrawFortune() {
        const fortune = drawFortune();
        const fortuneMessage = document.getElementById('fortuneMessage');
        
        // 移除之前的动画类
        fortuneMessage.classList.remove('text-reveal');
        
        // 强制重排
        void fortuneMessage.offsetWidth;
        
        // 更新显示
        updateFortuneDisplay(fortune);
        
        // 重新添加动画类
        fortuneMessage.classList.add('text-reveal');
    }

    // 初始化事件监听
    function init() {
        createStars();
        
        const bookCover = document.getElementById('bookCover');
        const drawButton = document.getElementById('drawButton');
        
        if (bookCover) {
            bookCover.addEventListener('click', function() {
                this.style.transform = 'scale(0.95) rotateY(-10deg)';
                setTimeout(() => {
                    openBook();
                }, 300);
            });
            
            bookCover.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotateY(5deg)';
            });
            
            bookCover.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateY(0)';
            });
        }
        
        if (drawButton) {
            drawButton.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
                reDrawFortune();
            });
        }
    }

    init();
});
