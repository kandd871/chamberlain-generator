document.addEventListener("DOMContentLoaded", function() {
    // Select random boxes
    const boxes = document.querySelectorAll('.grid-asset');
    const gridItems =  document.querySelectorAll('.grid-item');
    const gridContainer1 = document.getElementById('gridContainer1')
    const grid1Items =  document.querySelectorAll('.grid-item1');
    const cover =  document.querySelector('.cover');
    let borderRadius;
    let stroke;

    // Generate a random order for numbers 1 to 9
    const randomOrder = Array.from({ length: 9 }, (_, index) => index + 1)
                          .sort(() => Math.random() - 0.5);
    

    const caffeineInput = document.getElementById('caffeine');
    const tastePreferenceSelect = document.getElementById('tastePreference');
    const sweetToBitterInput = document.getElementById('borderRadiusSlider');
    const roastInput = document.getElementById('roastSlider');
    const timeOfDaySelect = document.getElementById('timeOfDay');
    const coffeeSelect = document.getElementById('coffee');
    const nutsCheckbox = document.getElementById('nuts');
    const citrusCheckbox = document.getElementById('citrusSlider');
    const beanSelect = document.getElementById('bean');

    // Function to get the appropriate richcaff or freshcaff SVG based on the taste preference and caffeine level
    function getCaffSvg(tastePreference, caffeineLevel) {
        if (tastePreference === 'rich') {
            borderRadius =  20;  
            return {borderRadius}; 
        } else if (tastePreference === 'fresh') {
            borderRadius =  100;   
            return {borderRadius};
        }
    }

    // Update background images and colors based on the selected options
    function updateBackgrounds() {
        const caffeineLevel = parseInt(caffeineInput.value); // Get the current caffeine level
        const tastePreference = tastePreferenceSelect.value; // Get the selected taste preference
        const caffSvg = getCaffSvg(tastePreference, caffeineLevel); // Calculate the appropriate SVG
        const sweetToBitterValue = parseInt(sweetToBitterInput.value); // Get the sweet to bitter value
        const roastValue = parseInt(roastInput.value);
        const nutsChecked = nutsCheckbox.checked;
        const citrusChecked = citrusCheckbox.checked;
        const timeOfDay = timeOfDaySelect.value;
        const coffee = coffeeSelect.value;
        const bean = beanSelect.value;

        for (let i = 0; i < randomOrder.length; i++) {
            const boxIndex = randomOrder[i] - 1; // Adjust index to start from 0
            boxes[boxIndex].innerHTML = '';
            let svgSrc = '';
            // Determine background image based on index
            if (i < 3) {
                if (tastePreference === 'rich'){
                    if (caffeineLevel === 0){
                    svgSrc=`<svg width="207" height="207" viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M89.566 10.3116C94.3984 -2.74771 112.869 -2.74774 117.702 10.3115L136.652 61.5254C138.172 65.6312 141.409 68.8684 145.515 70.3877L196.729 89.3385C209.788 94.1709 209.788 112.642 196.729 117.474L145.515 136.425C141.409 137.944 138.172 141.181 136.652 145.287L117.702 196.501C112.869 209.56 94.3984 209.56 89.5661 196.501L70.6152 145.287C69.0959 141.181 65.8588 137.944 61.753 136.425L10.5391 117.474C-2.52017 112.642 -2.5202 94.1709 10.5391 89.3385L61.753 70.3877C65.8588 68.8684 69.0959 65.6312 70.6152 61.5254L89.566 10.3116Z" fill="black"/>
                    </svg>`;
                } else if (caffeineLevel === 1){
                    svgSrc = `<svg width="194" height="186" viewBox="0 0 194 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M84.3495 9.80911C88.3908 -2.62858 105.987 -2.62855 110.028 9.80914L123.594 51.5621C125.402 57.1244 130.585 60.8904 136.434 60.8904H180.335C193.413 60.8904 198.851 77.6252 188.27 85.3121L152.753 111.117C148.022 114.555 146.042 120.648 147.849 126.21L161.415 167.963C165.457 180.401 151.221 190.744 140.641 183.057L105.124 157.252C100.392 153.814 93.9852 153.814 89.2537 157.252L53.7365 183.057C43.1563 190.744 28.9209 180.401 32.9621 167.963L46.5285 126.21C48.3358 120.648 46.3559 114.555 41.6243 111.117L6.10712 85.3121C-4.47302 77.6251 0.964484 60.8904 14.0422 60.8904H57.9439C63.7925 60.8904 68.9758 57.1244 70.7832 51.5621L84.3495 9.80911Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 2){
                    svgSrc = `<svg width="173" height="197" viewBox="0 0 173 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill"  d="M74.36 9.77291C77.8407 -2.4234 95.1252 -2.42338 98.6059 9.77293L108.174 43.2989C110.041 49.8414 116.762 53.7221 123.362 52.0678L157.18 43.5908C169.483 40.507 178.125 55.4759 169.303 64.5884L145.053 89.6374C140.32 94.5256 140.32 102.287 145.053 107.175L169.303 132.224C178.125 141.337 169.483 156.306 157.18 153.222L123.362 144.745C116.762 143.091 110.041 146.971 108.174 153.514L98.6059 187.04C95.1252 199.236 77.8407 199.236 74.36 187.04L64.7921 153.514C62.925 146.971 56.2035 143.091 49.604 144.745L15.7857 153.222C3.48302 156.306 -5.15923 141.337 3.66275 132.224L27.9132 107.175C32.6455 102.287 32.6455 94.5256 27.9131 89.6374L3.66273 64.5884C-5.15925 55.4759 3.48304 40.507 15.7857 43.5908L49.604 52.0678C56.2035 53.7221 62.925 49.8414 64.7922 43.2989L74.36 9.77291Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 3){
                    svgSrc = `<svg width="197" height="192" viewBox="0 0 197 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M88.3429 7.66225C90.8867 -2.40457 105.19 -2.40455 107.733 7.66227L116.837 43.6881C118.364 49.7304 124.985 52.9193 130.661 50.3457L164.503 35.0013C173.96 30.7135 182.878 41.896 176.593 50.1614L154.103 79.7404C150.331 84.7015 151.966 91.8669 157.517 94.7L190.614 111.592C199.863 116.312 196.68 130.256 186.299 130.496L149.151 131.355C142.921 131.499 138.338 137.245 139.584 143.351L147.013 179.759C149.089 189.933 136.203 196.139 129.543 188.172L105.71 159.664C101.713 154.883 94.3633 154.883 90.366 159.664L66.5331 188.172C59.8734 196.139 46.9869 189.933 49.0629 179.759L56.4921 143.351C57.7381 137.245 53.1556 131.499 46.925 131.355L9.77678 130.496C-0.603689 130.256 -3.78639 116.312 5.46199 111.592L38.5589 94.7C44.11 91.8669 45.7454 84.7015 41.9733 79.7404L19.483 50.1614C13.1985 41.896 22.1162 30.7135 31.5728 35.0013L65.4148 50.3457C71.0908 52.9193 77.7127 49.7304 79.2395 43.6881L88.3429 7.66225Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 4){
                    svgSrc = `<svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M86.5783 8.47636C88.9265 -1.91919 103.739 -1.91918 106.087 8.47638L112.377 36.3251C113.899 43.0625 121.631 46.265 127.471 42.5771L151.611 27.3332C160.622 21.6428 171.096 32.1166 165.406 41.1277L150.162 65.2679C146.474 71.1081 149.676 78.8396 156.414 80.3614L184.263 86.6521C194.658 89.0002 194.658 103.812 184.262 106.161L156.414 112.451C149.676 113.973 146.474 121.705 150.162 127.545L165.406 151.685C171.096 160.696 160.622 171.17 151.611 165.479L127.471 150.236C121.631 146.548 113.899 149.75 112.377 156.487L106.087 184.336C103.739 194.732 88.9265 194.732 86.5783 184.336L80.2877 156.487C78.7658 149.75 71.0343 146.548 65.1942 150.236L41.054 165.479C32.0428 171.17 21.5691 160.696 27.2594 151.685L42.5033 127.545C46.1913 121.705 42.9888 113.973 36.2514 112.451L8.40263 106.161C-1.99292 103.812 -1.99291 89.0002 8.40265 86.652L36.2514 80.3614C42.9888 78.8396 46.1913 71.1081 42.5033 65.2679L27.2594 41.1277C21.5691 32.1165 32.0428 21.6428 41.054 27.3332L65.1942 42.5771C71.0343 46.265 78.7658 43.0625 80.2877 36.3251L86.5783 8.47636Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 5){
                    svgSrc = `<svg width="180" height="178" viewBox="0 0 180 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M80.0891 8.37713C82.2637 -2.2938 97.5118 -2.29381 99.6864 8.37711L103.76 28.3676C105.251 35.6815 113.938 38.8436 119.781 34.1989L135.752 21.5038C144.277 14.7272 155.957 24.5285 150.764 34.1007L141.035 52.0328C137.476 58.5937 142.098 66.6004 149.56 66.7981L169.954 67.3387C180.84 67.6272 183.488 82.6437 173.357 86.6382L154.378 94.1214C147.434 96.8592 145.828 105.964 151.417 110.912L166.692 124.435C174.846 131.654 167.222 144.859 156.894 141.407L137.545 134.939C130.465 132.573 123.383 138.516 124.484 145.899L127.493 166.077C129.099 176.848 114.771 182.063 109.078 172.78L98.4125 155.388C94.5104 149.025 85.2651 149.025 81.363 155.388L70.6978 172.78C65.0047 182.063 50.6762 176.848 52.2824 166.077L55.2915 145.899C56.3924 138.516 49.3101 132.573 42.2308 134.939L22.8817 141.407C12.5531 144.859 4.92904 131.654 13.0831 124.435L28.3585 110.912C33.9473 105.964 32.3418 96.8592 25.3979 94.1214L6.41846 86.6382C-3.71274 82.6437 -1.06495 67.6272 9.82147 67.3387L30.2157 66.7981C37.6773 66.6004 42.2999 58.5937 38.7404 52.0329L29.0114 34.1007C23.8181 24.5285 35.4988 14.7272 44.0238 21.5038L59.9941 34.1989C65.8372 38.8436 74.5249 35.6815 76.0154 28.3676L80.0891 8.37713Z" fill="black"/>
                    </svg>`
                }
                } else {
                    if (caffeineLevel === 0){
                    svgSrc=`<svg width="263" height="263" viewBox="0 0 263 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill"  d="M131.112 0L166.525 95.7001L262.225 131.112L166.525 166.525L131.112 262.225L95.7001 166.525L0 131.112L95.7001 95.7001L131.112 0Z" fill="black"/>
                    </svg>`;
                } else if (caffeineLevel === 1){
                    svgSrc = `<svg width="251" height="238" viewBox="0 0 251 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M125.667 0L155.104 90.5964H250.363L173.297 146.588L202.733 237.184L125.667 181.193L48.6014 237.184L78.0379 146.588L0.972031 90.5964H96.2307L125.667 0Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 2){
                    svgSrc = `<svg width="228" height="263" viewBox="0 0 228 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M113.961 0L139.002 87.7414L227.508 65.5562L164.042 131.112L227.508 196.669L139.002 174.483L113.961 262.225L88.9212 174.483L0.414848 196.669L63.881 131.112L0.414848 65.5562L88.9212 87.7414L113.961 0Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 3){
                    svgSrc = `<svg width="257" height="250" viewBox="0 0 257 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M128.517 0L150.246 85.9914L231.024 49.3651L177.341 119.968L256.342 160.288L167.671 162.337L185.404 249.24L128.517 181.193L71.6291 249.24L89.3622 162.337L0.691559 160.288L79.6918 119.968L26.0089 49.3651L106.788 85.9914L128.517 0Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 4){
                    svgSrc = `<svg width="263" height="263" viewBox="0 0 263 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M131.811 0L150.976 84.844L224.521 38.4019L178.079 111.947L262.923 131.112L178.079 150.277L224.521 223.823L150.976 177.381L131.811 262.225L112.646 177.381L39.1002 223.823L85.5423 150.277L0.698242 131.112L85.5423 111.947L39.1002 38.4019L112.646 84.844L131.811 0Z" fill="black"/>
                    </svg>`
                } else if (caffeineLevel === 5){
                    svgSrc = `<svg width="259" height="255" viewBox="0 0 259 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "fill" d="M129.366 0L146.494 84.0521L213.643 30.6745L172.737 106.072L258.486 108.345L178.685 139.809L242.912 196.669L161.557 169.476L174.209 254.318L129.366 181.193L84.5227 254.318L97.1747 169.476L15.8191 196.669L80.0461 139.809L0.245316 108.345L85.9948 106.072L45.0884 30.6745L112.237 84.0521L129.366 0Z" fill="black"/>
                    </svg>`
                }
                }
            } else if (i < 5) {
                if (timeOfDay === 'morning') {
                svgSrc = `<svg width="318" height="240" viewBox="0 0 318 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class = "stroke" d="M6.84033 146.443C65.7873 262.908 243.147 268.636 310.668 146.443" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M4.31885 150.226C63.5535 28.8397 246.599 22.8699 314.45 150.226" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M294.747 44.4462L256.408 91.1399" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M19.8904 35.8202L58.2295 82.514" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M158.006 0.201679L156.618 60.6025" stroke="black" stroke-width="7.56417"/>
                <circle class = "fill" cx="158.754" cy="148.335" r="52.3189" fill="black"/>
                </svg>`
                ;
                } else if (timeOfDay === 'noon') {
                svgSrc = `<svg width="317" height="177" viewBox="0 0 317 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class = "stroke" d="M6.96289 118.443C65.9099 188.978 243.269 192.447 310.791 118.443" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M3.18066 122.225C62.4153 30.365 245.461 25.8474 313.312 122.225" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M265.761 24.1078L242.978 68.0478" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M33.4494 28.3327L59.8105 70.2237" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M158.102 0.461495L158.456 49.9554" stroke="black" stroke-width="7.56417"/>
                <ellipse class = "fill" cx="156.985" cy="112.771" rx="37.8209" ry="38.4512" fill="black"/>
                </svg>`;
                } else if (timeOfDay === 'evening') {
                svgSrc = `<svg width="314" height="120" viewBox="0 0 314 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class = "stroke" d="M6.30347 86.4443C65.2504 124.172 242.61 126.028 310.131 86.4443" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M2.41797 86.4432C61.171 42.1537 244.093 41.2375 311.392 87.7051" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M268.775 16.4033L251.795 62.8947" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M47.2514 13.207L64.2315 59.6984" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M157.625 0.422433L157.979 49.9163" stroke="black" stroke-width="7.56417"/>
                <circle class = "fill" cx="159.478" cy="83.2923" r="32.1477" fill="black"/>
                </svg>
                `;
                } else if (timeOfDay === 'night') {
                svgSrc = `<svg width="306" height="140" viewBox="0 0 306 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class = "stroke" d="M3.98804 2.71484C62.5814 100.193 235.698 104.987 302.814 2.71484" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M63.114 58.6445L32.752 114.575" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M155.137 76.2253L155.915 139.86" stroke="black" stroke-width="7.56417"/>
                <path class = "stroke" d="M245.027 53.8517L280.416 106.744" stroke="black" stroke-width="7.56417"/>
                </svg>`;
                }
                
            } else if (i < 7) {
                if (coffee === 'cold'){
                    svgSrc = `<svg class = "no-rotate" width="266" height="178" viewBox="0 0 266 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "stroke" d="M263 18.1041C248.556 -1.65708 234.111 -1.65708 219.667 18.1041C205.222 37.8652 190.778 37.8652 176.333 18.1041C161.889 -1.65708 147.444 -1.65708 133 18.1041C118.556 37.8652 104.111 37.8652 89.6667 18.1041C75.2222 -1.65708 60.7777 -1.65708 46.3333 18.1041C31.8889 37.8652 17.4444 37.8652 3 18.1041" stroke="black" stroke-width="6"/>
                    <path class = "stroke" d="M263 88.6792C248.556 68.9181 234.111 68.9181 219.667 88.6792C205.222 108.44 190.778 108.44 176.333 88.6792C161.889 68.9181 147.444 68.9181 133 88.6792C118.556 108.44 104.111 108.44 89.6667 88.6792C75.2222 68.9181 60.7777 68.9181 46.3333 88.6792C31.8889 108.44 17.4444 108.44 3 88.6792" stroke="black" stroke-width="6"/>
                    <path class = "stroke" d="M263 159.255C248.556 139.494 234.111 139.494 219.667 159.255C205.222 179.017 190.778 179.017 176.333 159.255C161.889 139.494 147.444 139.494 133 159.255C118.556 179.017 104.111 179.017 89.6667 159.255C75.2222 139.494 60.7777 139.494 46.3333 159.255C31.8889 179.017 17.4444 179.017 3 159.255" stroke="black" stroke-width="6"/>
                    </svg>`
                } else if (coffee === 'blend'){
                    svgSrc = `<svg class = "no-rotate" width="178" height="266" viewBox="0 0 178 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "stroke" d="M159.514 263C179.275 248.556 179.275 234.111 159.514 219.667C139.753 205.222 139.753 190.778 159.514 176.333C179.275 161.889 179.275 147.444 159.514 133C139.753 118.556 139.753 104.111 159.514 89.6667C179.275 75.2222 179.275 60.7778 159.514 46.3333C139.753 31.8889 139.753 17.4444 159.514 3" stroke="black" stroke-width="6"/>
                    <path class = "stroke" d="M88.9384 263C108.7 248.556 108.7 234.111 88.9384 219.667C69.1773 205.222 69.1773 190.778 88.9384 176.333C108.7 161.889 108.7 147.444 88.9384 133C69.1773 118.556 69.1773 104.111 88.9384 89.6667C108.7 75.2222 108.7 60.7778 88.9384 46.3333C69.1773 31.8889 69.1773 17.4444 88.9384 3" stroke="black" stroke-width="6"/>
                    <path class = "stroke" d="M18.3627 263C38.1239 248.556 38.1239 234.111 18.3627 219.667C-1.39838 205.222 -1.39838 190.778 18.3628 176.333C38.1239 161.889 38.1239 147.444 18.3628 133C-1.39838 118.556 -1.39838 104.111 18.3628 89.6667C38.1239 75.2222 38.1239 60.7778 18.3628 46.3333C-1.39837 31.8889 -1.39837 17.4444 18.3628 3" stroke="black" stroke-width="6"/>
                    </svg>`
                }   
            } else if (i < 8 && nutsChecked) {
                svgSrc = `<svg width="229" height="252" viewBox="0 0 229 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class = "fill"  cx="28.986" cy="28.5073" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="114.713" cy="28.5073" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="28.5073" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="28.986" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="114.713" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="28.986" cy="222.655" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="114.713" cy="222.655" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="222.655" r="28.3657" fill="black"/>
                </svg>
                `;
            } else if (i < 9 && nutsChecked && !citrusChecked) {
                svgSrc = `<svg width="229" height="252" viewBox="0 0 229 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class = "fill"  cx="28.986" cy="28.5073" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="114.713" cy="28.5073" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="28.5073" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="28.986" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="114.713" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="125.58" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="28.986" cy="222.655" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="114.713" cy="222.655" r="28.3657" fill="black"/>
                <circle class = "fill"  cx="200.441" cy="222.655" r="28.3657" fill="black"/>
                </svg>
                `;
            } else if (i < 9 && citrusChecked) {
                svgSrc = `<svg width="225" height="224" viewBox="0 0 225 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse class = "fill"  cx="110.749" cy="175.355" rx="47.9233" ry="20.2176" transform="rotate(-90 110.749 175.355)" fill="black"/>
                <ellipse class = "fill"  cx="80.7252" cy="51.8177" rx="47.9233" ry="20.2176" transform="rotate(-119.352 80.7252 51.8177)" fill="black"/>
                <ellipse class = "fill"  cx="155.584" cy="58.2716" rx="47.9233" ry="20.2176" transform="rotate(-48.025 155.584 58.2716)" fill="black"/>
                <ellipse class = "fill"  cx="52.5167" cy="127.073" rx="47.9233" ry="20.2176" transform="rotate(-21.7397 52.5167 127.073)" fill="black"/>
                <ellipse class = "fill"  cx="172.306" cy="135.994" rx="47.9233" ry="20.2176" transform="rotate(26.7294 172.306 135.994)" fill="black"/>
                </svg>
                `;
            } else {
                svgSrc = `<svg width="0" height="0" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
                `;
            }
            const svgElement = new DOMParser().parseFromString(svgSrc, 'image/svg+xml').documentElement;

            const rotation = getRandomRotation();
            svgElement.setAttribute('transform', `rotate(${rotation})`);

            // Append the SVG element to the box
            boxes[boxIndex].appendChild(svgElement);
            
    
            let lightness = '';
            let darkness = '';
            if (roastValue <= 1) {
                lightness = '80';
                darkness = '35';
            } else if (roastValue <= 2) {
                lightness = '55';
                darkness = '45';
            } else {
                lightness = '25';
                darkness = '60';
            }
            let backgroundColor = '';
             if (sweetToBitterValue <= 0) {
                backgroundColor = `hsl(0, 100%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 1) {
                backgroundColor = `hsl(340, 100%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 2) {
                backgroundColor = `hsl(320, 100%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 3) {
                backgroundColor = `hsl(36, 99%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 4) {
                backgroundColor = `hsl(47, 100%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 5) {
                backgroundColor = `hsl(108, 77%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 6) {
                backgroundColor = `hsl(234, 75%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 7) {
                backgroundColor = `hsl(277, 84%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 8) {
                backgroundColor = `hsl(108, 39%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 9) {
                backgroundColor = `hsl(328, 22%, ${lightness}%)`;
            } else if (sweetToBitterValue <= 10) {
                backgroundColor = `hsl(0, 17%, ${lightness}%)`;
            } else{
                backgroundColor = `hsl(346, 100%, ${lightness}%)`;
            }
            
            if (coffee === 'cold'){
            stroke = `hsl(200, 80%, ${darkness}%)`;
            } else {
            stroke = `hsl(18, 40%, ${darkness}%)`;  
            }

            const svgs = boxes[boxIndex].querySelectorAll('svg');
            const fillpaths = boxes[boxIndex].querySelectorAll('.fill');
            const strokepaths = boxes[boxIndex].querySelectorAll('.stroke');
            svgs.forEach(svg => {
            svg.style.width = '13vh';
            svg.style.height = '13vh';
        });
            fillpaths.forEach(fillpath => {
            fillpath.style.fill = stroke;
            });

            strokepaths.forEach(strokepath => {
                strokepath.style.stroke = stroke;
            });

            gridItems.forEach(gridItem => {
                gridItem.style.backgroundColor = backgroundColor;
                cover.style.backgroundColor = backgroundColor;
                gridItem.style.borderRadius = `${borderRadius}%`;
                if (bean === "whole"){
                gridItem.style.border = `2px solid ${stroke}`;
                cover.style.opacity = '0';
                gridContainer1.style.opacity = '0';
                } else if (bean === "ground"){
                gridItem.style.outline = `none`;
                gridItem.style.border = `none`;
                cover.style.opacity = '1';
                gridContainer1.style.opacity = '1';
                grid1Items.forEach(grid1Item => {
                grid1Item.style.backgroundColor = backgroundColor;
                grid1Item.style.outline =`2px solid ${stroke}`;
                grid1Item.style.borderRadius = `${borderRadius}%`;
                })
                }
                });
        }
    }

    // Event listeners for the input elements
    caffeineInput.addEventListener('input', updateBackgrounds);
    tastePreferenceSelect.addEventListener('change', updateBackgrounds);
    sweetToBitterInput.addEventListener('input', updateBackgrounds);
    roastInput.addEventListener('input', updateBackgrounds);
    timeOfDaySelect.addEventListener('change', updateBackgrounds); 
    coffeeSelect.addEventListener('change', updateBackgrounds);
    beanSelect.addEventListener('change', updateBackgrounds);

    // Event listeners for the checkboxes
    nutsCheckbox.addEventListener('change', updateBackgrounds);
    citrusCheckbox.addEventListener('change', updateBackgrounds);

    // Trigger the input events to initially set the background based on the default values
    caffeineInput.dispatchEvent(new Event('input'));
    tastePreferenceSelect.dispatchEvent(new Event('change'));
    sweetToBitterInput.dispatchEvent(new Event('input'));
    roastInput.dispatchEvent(new Event('input'));
});

function getRandomRotation() {
    return Math.floor(Math.random() * 360); // Random rotation angle between 0 and 360 degrees
}

