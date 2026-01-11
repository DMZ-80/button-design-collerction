import './style.scss';




gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time){

  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener('load',(e)=>{

  document.querySelector('main').style.opacity = '';
});



;(()=>{// .hover--01

  const target = document.querySelectorAll('#Pv36 .hover');

  target.forEach((v, i)=>{

    const anchor = v.querySelector('.hover-anchor');
    const inner = v.querySelector('.hover-inner');
    let text = v.querySelector('.hover-text');

    inner.append(text.cloneNode(true));

    text = v.querySelectorAll('.hover-text');

    const tl1 = gsap.timeline({paused: true});

    //アンカー1
    gsap.set(anchor, {
      background: '#18181d',
      border: '1px solid #333'
    });

    tl1.to(anchor, {
      background: '#3e00ff',
      duration: .4,
      ease: 'power4.out',
    }).to(anchor, {
      border: '1px solid #3e00ff',
      duration: .4,
      ease: 'power4.out',
    }, 0);

    //テキスト1
    gsap.set(text, {
      yPercent: -100
    });
    tl1.to(text,  {
      yPercent: 0,
      duration: .4,
      ease: 'power4.out',
    }, 0);

    anchor.addEventListener('mouseenter', e=>{

      tl1.play();
    });
  
    anchor.addEventListener('mouseleave', e=>{

      tl1.reverse();
    });
  });
})();



;(()=>{// .hover--02

  const target = document.querySelectorAll('#Jw27 .hover');

  target.forEach((v, i)=>{

    const anchor = v.querySelector('.hover-anchor');
    const inner = v.querySelector('.hover-inner');
    let text = v.querySelector('.hover-text');
    
    inner.append(text.cloneNode(true));

    text = v.querySelectorAll('.hover-text');

    const tl1 = gsap.timeline({paused: true});

    gsap.set(inner, {
      transform: 'translateZ(-30px)',
    });
    tl1.to(inner, {
      transform: 'translateZ(-30px) rotateX(-90deg)',
      duration: .2,
      ease: 'power4.out',
    });

    anchor.addEventListener('mouseenter', e=>{

      tl1.play();
    });
  
    anchor.addEventListener('mouseleave', e=>{

      tl1.reverse();
    });
  });
})();



;(()=>{// .hover--03

  const target = document.querySelectorAll('#d4Tx .button');

  target.forEach((v, i)=>{
    
    const anchor = v.querySelector('.button-anchor');
    const text = v.querySelector('.button-text');
    const tl1 = gsap.timeline({paused: true});

    gsap.set(text, {
      backgroundImage: 'linear-gradient(90deg, #fff, #fff)',
      backgroundSize: '0 1px',
    });
    tl1.to(text, {
      backgroundSize: '100% 1px',
      duration: .2,
      ease: 'power4.out',
    });

    anchor.addEventListener('mouseenter', e=>{

      tl1.play();
    });
  
    anchor.addEventListener('mouseleave', e=>{

      tl1.reverse();
    });
  });
})();



;(()=>{// #f5SQ

  const hoverEffect = (target)=>{

    const attraction = 50;
    const mouse = {
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
    };
    let isHover = false;

    const onMouseEnter = (e)=>{

      isHover = true;
    };

    const onMouseMove = (e)=>{

      const targetBCR = target.getBoundingClientRect();
      const childrenBCR = e.target.getBoundingClientRect();
      let ks = childrenBCR.y - targetBCR.y;
      let ps = e.clientY - targetBCR.y;

      mouse.x = gsap.utils.mapRange(childrenBCR.x, childrenBCR.x + childrenBCR.width, -attraction, attraction, e.clientX);
      mouse.y = gsap.utils.mapRange(ks, ks + childrenBCR.height, -attraction, attraction, ps);
    };

    const onMouseLeave = (e)=>{

      isHover = false;
      mouse.cx = 0;
      mouse.cy = 0;

      gsap.to(e.target, {
        x: 0,
        y: 0,
        duration: .3,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    const onRequestAnimationFrame = (children)=>{

      if(isHover){
        
        mouse.cx = gsap.utils.interpolate(mouse.cx, mouse.x, .1);
        mouse.cy = gsap.utils.interpolate(mouse.cy, mouse.y, .1);

        gsap.set(children, {
          x: mouse.cx,
          y: mouse.cy
        });
      }
      
      requestAnimationFrame(()=>{
        
        onRequestAnimationFrame(children);
      });
    };

    const init = (target)=>{

      if(!target) return false;

      const children = target.children[0];

      children.addEventListener('mouseenter', e=>onMouseEnter(e));
      children.addEventListener('mousemove', e=>onMouseMove(e));
      children.addEventListener('mouseleave', e=>onMouseLeave(e));
      onRequestAnimationFrame(children);
    };

    init(target);

    return target;
  };

  const target = hoverEffect(document.querySelector('#f5SQ .hover'));
  const textWrap = target.querySelectorAll('span');

  textWrap.forEach((v, i)=>{

    const text = [...v.innerText];
    const text2 = [];

    v.classList.add('t-' + (i + 1));

    text.forEach((v, i)=>{

      text2[i] = '<span class="c-' + (i + 1) + '"><span>' + v + '</span></span>';
    });

    v.innerHTML = '<span>' + text2.join('') + '</span>';
    v.insertAdjacentHTML('beforeend', '<span>' + text2.join('') + '</span>');

    v.querySelectorAll('[class*="c-"]').forEach((v, i)=>{

      // gsap.set(v, {
      //   yPercent: i % 2 ? -100 : 0
      // });
    });
  });

  // gsap.set(text.children[0].children, {
  //   yPercent: 100
  // });
})();



;(()=>{// .nav--01

  document.addEventListener('DOMContentLoaded', (e)=>{

    const target = document.querySelector('.nav');
    const item = target.querySelectorAll('.nav-item');
    const bg = target.querySelectorAll('.nav-bg');
    const txt = target.querySelectorAll('.nav-text');

    item.forEach((v, k)=>{

      gsap.set(bg[k], {scaleY: 0});
      gsap.set(txt[k], {x: 0});

      v.addEventListener('mouseenter', (e)=>{

        gsap.to(bg[k], {
          scaleY: 1,
          zIndex: 1,
          duration: .3,
          ease: 'elastic.out(1, 0.3)'
        });

        gsap.to(txt[k], {
          x: 10,
          duration: .1
        });
      });

      v.addEventListener('mouseleave', (e)=>{

        gsap.to(bg[k], {
          scaleY: 0,
          zIndex: 1,
          duration: .3,
          ease: 'elastic.out(1, 0.3)'
        });
        
        gsap.to(txt[k], {
          x: 0,
          duration: .1
        });
      });
    });
  });
})();



;(()=>{//

  const hoverEffect = function(target, options){

    const vert = `
      varying vec2 vUv;
      
      void main() {
      vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `;
    const frag = `
      varying vec2 vUv;

      uniform sampler2D texture1;
      uniform sampler2D texture2;
      uniform sampler2D disp;

      uniform float dispPower;
      uniform float intensity;

      uniform vec2 size;
      uniform vec2 res;

      vec2 backgroundCoverUv( vec2 screenSize, vec2 imageSize, vec2 uv ) {
        float screenRatio = screenSize.x / screenSize.y;
        float imageRatio = imageSize.x / imageSize.y;
        vec2 newSize = screenRatio < imageRatio 
            ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
            : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
        vec2 newOffset = (screenRatio < imageRatio 
            ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
            : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
        return uv * screenSize / newSize + newOffset;
      }

      void main() {
        vec2 uv = vUv;
        
        vec4 disp = texture2D(disp, uv);
        vec2 dispVec = vec2(disp.x, disp.y);
        
        vec2 distPos1 = uv + (dispVec * intensity * dispPower);
        vec2 distPos2 = uv + (dispVec * -(intensity * (1.0 - dispPower)));
        
        vec4 _texture1 = texture2D(texture1, distPos1);
        vec4 _texture2 = texture2D(texture2, distPos2);
        
        gl_FragColor = mix(_texture1, _texture2, dispPower);
      }
    `;
    const root = target;
    const image1 = options.image1;
    const image2 = options.image2;
    const filter = options.filter;
    const intensity = options.intensity || 1;
    const speedIn = options.speedIn || 1;
    const speedOut = options.speedOut || 1;
    const easing = options.easing || 'none';
    const canvasWrap = options.append || target;
    
    const gl = {
      renderer: new THREE.WebGLRenderer({antialias: true}),
      camera: new THREE.OrthographicCamera(options.size[0] / -2, options.size[0] / 2, options.size[1] / 2, options.size[1] / -2, 1, 1000),
      scene: new THREE.Scene(),
      material: new THREE.ShaderMaterial(),
      loader: new THREE.TextureLoader(),
    };
    let textures = [image1, image2, filter];
    let texturesLoaded = [];

    const onMouseenter = e=>{
              
      gsap.to(gl.material.uniforms.dispPower, speedIn, {
        value: 1,
        ease: easing
      });
    };

    const onMouseleave = e=>{
              
      gsap.to(gl.material.uniforms.dispPower, speedOut, {
        value: 0,
        ease: easing
      });
    };

    const tick = ()=>{
              
      requestAnimationFrame(tick);
      gl.renderer.render(gl.scene, gl.camera);
    };

    const init = ()=>{
      
      gl.camera.position.z = 1;
      gl.loader.crossOrigin = '';
      gl.renderer.setSize(options.size[0], options.size[1]);
      gl.renderer.setPixelRatio(window.devicePixelRatio);
      gl.renderer.setClearColor(0xffffff, .0);

      canvasWrap.appendChild(gl.renderer.domElement);

      textures.forEach((v, i)=>{
          
        gl.loader.load(v, (texture)=>{

          texturesLoaded[i] = texture;
          
          if(i + 1 === textures.length){

            setTimeout(()=>{

              const texture1 = texturesLoaded[0];
              const texture2 = texturesLoaded[1];
              const disp = texturesLoaded[2];
              disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
              texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
              texture1.minFilter = texture2.minFilter = THREE.LinearFilter;
              texture1.anisotropy = gl.renderer.getMaxAnisotropy();
              texture2.anisotropy = gl.renderer.getMaxAnisotropy();
              gl.material = new THREE.ShaderMaterial({
                uniforms: {
                  intensity: {type: 'f', value: intensity},
                  dispPower: {type: 'f', value: .0},
                  res: {value: new THREE.Vector2(options.size[0], options.size[1])},
                  size: {value: new THREE.Vector2(1, 1)},
                  texture1: {type: 't', value: texture1},
                  texture2: {type: 't', value: texture2},
                  disp: {type: 't', value: disp}
                },
                vertexShader: vert,
                fragmentShader: frag,
              });
              const geometry = new THREE.PlaneBufferGeometry(options.size[0], options.size[1], 1);
              const mesh = new THREE.Mesh(geometry, gl.material);
              
              gl.scene.add(mesh);
            
              root.addEventListener('mouseenter', onMouseenter);
              root.addEventListener('mouseleave', onMouseleave);
              tick();
            }, 300);
          }
        });
      });
    };

    init();

    return target;
  };

  document.querySelectorAll('#Wg6i .boxx .boxx-contents').forEach((v, i)=>{

    const targetImageWrap = v.querySelector('.boxx-image');
    const targetImage = v.querySelectorAll('img');
    const target = hoverEffect(v, {
      intensity: 1,
      speedIn: .5,
      speedOut: .5,
      easing: 'power4.inOut',
      image1: targetImage[0].src,
      image2: targetImage[1].src,
      filter: targetImage[2].src,
      size: [800, 800],
      append: targetImageWrap,
    });
  });
})();



;(()=>{// hY6G
  
  const stickyImage = (target)=>{

    const attraction = 20;
    let tid = false;

    const onMouseMove = (e, mouse, el, parent)=>{

      if(window.matchMedia('(max-width: 1024px)').matches){

        mouse.x = 0;
        mouse.y = 0;
        
        return;
      }

      let ks = el.y - parent.y;
      let ps = e.clientY - parent.target.getBoundingClientRect().y;
  
      mouse.x = gsap.utils.mapRange(el.x, el.x + el.w, -attraction, attraction, e.clientX);
      mouse.y = gsap.utils.mapRange(ks, ks + el.h, -attraction, attraction, ps);
    };

    const onResize = (el, parent)=>{

      const gbcr = el.target.getBoundingClientRect();
      const pgbcr = parent.target.getBoundingClientRect();
      const boxContents = parent.target.closest('.boxx-contents');

      el.x = gbcr.x;
      el.y = gbcr.y;
      el.w = gbcr.width;
      el.h = gbcr.height;
      parent.x = pgbcr.x;
      parent.y = pgbcr.y;
      parent.w = pgbcr.width;
      parent.h = pgbcr.height;

      if(tid) clearTimeout(tid);

      //navにいどうするか
      tid = setTimeout(()=>{

        // SP用のスクロール表示に必要な余白を変更する
        addPadding(boxContents);
      }, 50);
    };
  
    const onRequestAnimationFrame = (mouse, el)=>{
  
      mouse.cx = gsap.utils.interpolate(mouse.cx, mouse.x, 0.1);
      mouse.cy = gsap.utils.interpolate(mouse.cy, mouse.y, 0.1);
      
      gsap.set(el.target, {
        x: mouse.cx,
        y: mouse.cy
      });
      
      requestAnimationFrame(()=>{
  
        onRequestAnimationFrame(mouse, el);
      });
    };

    const addPadding = (boxContents)=>{

      gsap.set(boxContents, {
        paddingBottom: window.matchMedia('(max-width: 1024px)').matches ? (window.innerWidth - window.innerWidth * .3) * 3 / 4 : '',
      });
    };
  
    const init = ()=>{
      
      const gbcr = target.getBoundingClientRect();
      const pgbcr = target.parentElement.getBoundingClientRect();
      const mouse = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
      };
      const el = {
        target: target,
        x: gbcr.x,
        y: gbcr.y,
        w: gbcr.width,
        h: gbcr.height,
      };
      const parent = {
        target: target.parentElement,
        x: pgbcr.x,
        y: pgbcr.y,
        w: pgbcr.width,
        h: pgbcr.height,
      };
      const box = target.closest('.boxx');
      const boxContents = box.querySelector('.boxx-contents');
      const boxSticky = box.querySelector('.boxx-sticky');
      let mm = gsap.matchMedia();

      // SP用のスクロール表示に必要な余白を追加する
      addPadding(boxContents);

      ScrollTrigger.create({
        trigger: boxSticky,
        startTrigger: box,
        start: 'top top',
        endTrigger: box,
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        markers: !1,
      });

      window.addEventListener('mousemove', e=>onMouseMove(e, mouse, el, parent));
      window.addEventListener('resize', e=>onResize(el, parent));
      onRequestAnimationFrame(mouse, el);
    };

    if(target) init();

    return target;
  };

  const changeContents = (target)=>{

    let mm = gsap.matchMedia();

    const resetDisplay = (image, listItem)=>{

      image.forEach((v, i)=>{
          
        gsap.to(v, {opacity: 0, duration: .5});
        v.classList.remove('sticky_show');
        listItem[i].classList.remove('sticky_show');
      });
    };

    const addDisplay = (image, listItem)=>{

      image.classList.add('sticky_show');
      listItem.classList.add('sticky_show');
      gsap.to(image, {opacity: 1, duration: .5});
    };

    const init = ()=>{
      
      const listItem = target.children;
      const image = document.querySelectorAll('.sticky .sticky-image');
      let index = 0;

      // SP
      mm.add('(max-width: 1024px)', ()=>{

        Array.from(listItem).forEach((v, i)=>{

          gsap.to(v, {
            scrollTrigger: {
              trigger: v,
              start: 'top center-=25%',
              end: 'bottom center-=25%',
              onEnter: s=>{
    
                index = i;

                resetDisplay(image, listItem);
                addDisplay(image[index], v);
              },
              onLeaveBack: s=>{

                if(index !== 0) resetDisplay(image, listItem);
              },
              onLeave: s=>{

                if(index !== image.length - 1) resetDisplay(image, listItem);
              },
              onEnterBack: s=>{
                
                index = i;
                
                resetDisplay(image, listItem);
                addDisplay(image[index], v);
              },
              markers: !1,
              //id: 'リスト' + i
            }
          });
        });
      });

      // PC
      mm.add('(min-width: 1025px)', ()=>{
        resetDisplay(image, listItem);
        addDisplay(image[index], listItem[index]);
      });

      image.forEach((v, i)=>{
            
        v.setAttribute('data-sticky-index', i);
      });

      Array.from(listItem).forEach((v, i)=>{

        v.setAttribute('data-sticky-index', i);
    
        v.addEventListener('mouseenter', e=>{

          if(window.matchMedia('(max-width: 1024px)').matches) return;

          index = parseInt(v.getAttribute('data-sticky-index'));
    
          resetDisplay(image, listItem);
          addDisplay(image[index], v);
        });
      });

      resetDisplay(image, listItem);
      addDisplay(image[0], listItem[0]);
    };

    if(target) init();

    return target;
  };

  window.addEventListener('load', e=>{

    const image = stickyImage(document.querySelector('#hY6G .sticky'));
    const nav = changeContents(document.querySelector('#hY6G .boxx ul'));
  });
})();



;(()=>{// 画像 ホバー

  const hoverEffect = (target)=>{

    const lerp = .3;
    const duration = 1;
    const ease = 'power4.out';
    let inner = '.hover-inner';
    let image = '.hover-image';
    let text = '.hover-text';
    let isHover = false;

    const onMouseMove = ({offsetX, offsetY})=>{

      isHover = true;

      const x = (offsetX - target.clientWidth * .5) / (Math.PI * 3);
      const y = -(offsetY - target.clientHeight * .5) / (Math.PI * 4);
      
      gsap.to(image, {// 画像
        rotateX: y * lerp,
        rotateY: x * lerp,
        x: x,
        y: -y,
        duration: duration * .5,
        ease: ease
      });

      gsap.to(text, {// テキスト
        rotateX: y * lerp,
        rotateY: x * lerp,
        duration: duration * .5,
        ease: ease
      });
    };
  
    const onMouseLeave = e=>{
      
      gsap.to(image, {// 画像
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: duration,
        ease: ease
      });

      gsap.to(text, {// テキスト
        rotateX: 0,
        rotateY: 0,
        duration: duration,
        ease: ease
      });

      isHover = false;
    };

    const init = ()=>{

      inner = target.querySelector(inner);
      image = target.querySelector(image);
      text = target.querySelector(text);

      target.addEventListener('mousemove', onMouseMove);
      target.addEventListener('mouseleave', onMouseLeave);
    };

    if(target){

      init();

      return target;
    }
  };

  document.querySelectorAll('#c4QZ .hover').forEach((v, k)=>{

      const image = hoverEffect(v);
    });
})();



;(()=>{// ページ内スクロール

  const scrl = (target, options)=>{

    const onclick = (e, startEl, endEl, options)=>{

      const duration = options.duration;
      const diff = getDiff(options.diff);
      const scrollFrom = document.documentElement.scrollTop;
      const scrollEnd = endEl.getBoundingClientRect().top + diff;

      startEl.style.pointerEvents = 'none';

      setTimeout(()=>{

        const startTime = Date.now();

        ;(function loop(){

          let currentTime = Date.now() - startTime;
  
          if(currentTime < duration){
            
            scrollTo(0, options.easing(currentTime, scrollFrom, scrollEnd, duration));
  
            requestAnimationFrame(loop);
  
          }else{
  
            scrollTo(0, scrollEnd + scrollFrom);
  
            startEl.style.pointerEvents = '';
          }
        })();
      }, options.delay);

      e.preventDefault();
    };

    const getDiff = (diff)=>{

      let result;
  
      if(typeof diff === 'object'){
  
        Object.keys(diff).some((v, k)=>{
  
          if(window.matchMedia('(' + v + ')').matches){
  
            result = diff[v];
  
            return true;
          }
        });

      }else{

        result = diff;
      }

      return result;
    };

    const init = (target, options)=>{

      if(target){

        try{
          easingFuncs;
          
          options.easing = easingFuncs[options.easing];

        }catch(e){

          options.easing = null;
        }

        options.duration = options.duration || 1000;// 移動が完了するまでの時間 (ms)
        options.delay = options.delay || 0;// 要素がクリックされてから移動を開始するまでの時間 (ms)
        options.easing = options.easing || function (t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;};// イージング
        options.diff = options.diff || 0;// 移動終了位置をずらす (px)

        let startEl = target;// 開始位置の要素
        let endEl = document.querySelector(startEl.href.match(/#.*/)) || document.documentElement;// 終了位置の要素
        target.addEventListener('click', e=>onclick(e, startEl, endEl, options));
      }
    };

    init(target, options);

    return target;
  };

  const target = scrl(document.querySelector('.scrl'), {
    duration: 2000,
    // delay: 300,
    // easing: 'easeInElastic',
    // diff: {
    //   'min-width: 1025px': 94,
    //   'max-width: 1024px': 64,
    // },
  });
})();