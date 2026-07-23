(function () {
  'use strict';

  var canvas = document.getElementById('kranichCanvas');
  if (!canvas) return;

  /* ── CONFIG ────────────────────────────────────── */
  var isMobile    = window.innerWidth < 768;
  var COUNT       = isMobile ? 3000 : 6000;
  var EASE        = 0.055;
  var SCATTER     = 5;
  var PUSH_Z      = 2.8;
  var HOVER_RAD   = 0.55;

  /* ── THREE SETUP ───────────────────────────────── */
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: !isMobile });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  var scene  = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 3;

  /* ── DRAW CRANE ON OFFSCREEN CANVAS ────────────── */
  function drawCrane() {
    var S   = 512;
    var off = document.createElement('canvas');
    off.width = S; off.height = S;
    var ctx = off.getContext('2d');
    ctx.fillStyle = '#fff';

    ctx.save();
    ctx.translate(S * 0.48, S * 0.50);

    // Body
    ctx.beginPath();
    ctx.ellipse(0, 0, S * 0.13, S * 0.04, -0.05, 0, Math.PI * 2);
    ctx.fill();

    // Right Wing (upward)
    ctx.beginPath();
    ctx.moveTo(S * 0.03, -S * 0.03);
    ctx.bezierCurveTo(S * 0.10, -S * 0.12, S * 0.13, -S * 0.26, S * 0.09, -S * 0.38);
    ctx.lineTo(S * 0.17, -S * 0.41);
    ctx.lineTo(S * 0.20, -S * 0.39);
    ctx.bezierCurveTo(S * 0.17, -S * 0.30, S * 0.13, -S * 0.18, S * 0.08, -S * 0.10);
    ctx.bezierCurveTo(S * 0.05, -S * 0.06, S * 0.02, -S * 0.035, 0, -S * 0.025);
    ctx.closePath();
    ctx.fill();

    // Left Wing (downward)
    ctx.beginPath();
    ctx.moveTo(-S * 0.03, S * 0.03);
    ctx.bezierCurveTo(-S * 0.10, S * 0.12, -S * 0.13, S * 0.26, -S * 0.09, S * 0.38);
    ctx.lineTo(-S * 0.17, S * 0.41);
    ctx.lineTo(-S * 0.20, S * 0.39);
    ctx.bezierCurveTo(-S * 0.17, S * 0.30, -S * 0.13, S * 0.18, -S * 0.08, S * 0.10);
    ctx.bezierCurveTo(-S * 0.05, S * 0.06, -S * 0.02, S * 0.035, 0, S * 0.025);
    ctx.closePath();
    ctx.fill();

    // Neck
    ctx.beginPath();
    ctx.moveTo(S * 0.12, -S * 0.015);
    ctx.quadraticCurveTo(S * 0.20, -S * 0.055, S * 0.26, -S * 0.15);
    ctx.lineTo(S * 0.24, -S * 0.13);
    ctx.quadraticCurveTo(S * 0.18, -S * 0.04, S * 0.12, S * 0.005);
    ctx.closePath();
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.arc(S * 0.27, -S * 0.16, S * 0.020, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.beginPath();
    ctx.moveTo(S * 0.29, -S * 0.16);
    ctx.lineTo(S * 0.34, -S * 0.175);
    ctx.lineTo(S * 0.29, -S * 0.17);
    ctx.closePath();
    ctx.fill();

    // Crown (red cap – Kranich / Red-crowned crane)
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(S * 0.27, -S * 0.175, S * 0.010, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';

    // Tail feathers
    ctx.beginPath();
    ctx.moveTo(-S * 0.12, -S * 0.01);
    ctx.bezierCurveTo(-S * 0.16, -S * 0.04, -S * 0.21, -S * 0.03, -S * 0.19, S * 0.01);
    ctx.bezierCurveTo(-S * 0.17, S * 0.025, -S * 0.14, S * 0.015, -S * 0.12, S * 0.01);
    ctx.closePath();
    ctx.fill();

    // Legs trailing
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = S * 0.007;
    ctx.beginPath();
    ctx.moveTo(-S * 0.10, S * 0.02);
    ctx.lineTo(-S * 0.27, S * 0.11);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-S * 0.08, S * 0.035);
    ctx.lineTo(-S * 0.25, S * 0.13);
    ctx.stroke();

    ctx.restore();
    return off;
  }

  /* ── SAMPLE POINTS FROM CRANE SHAPE ────────────── */
  function samplePoints(count) {
    var off = drawCrane();
    var S   = off.width;
    var ctx = off.getContext('2d');
    var img = ctx.getImageData(0, 0, S, S);
    var valid = [];

    for (var y = 0; y < S; y++) {
      for (var x = 0; x < S; x++) {
        if (img.data[(y * S + x) * 4 + 3] > 64) {
          valid.push(x, y);
        }
      }
    }

    var pts = [];
    for (var i = 0; i < count; i++) {
      var idx = (Math.random() * (valid.length / 2) | 0) * 2;
      pts.push(
        (valid[idx]     / S - 0.5) * 3.2,
       -(valid[idx + 1] / S - 0.5) * 3.2,
        (Math.random() - 0.5) * 0.18
      );
    }
    return pts;
  }

  /* ── BUILD PARTICLES ───────────────────────────── */
  var base = samplePoints(COUNT);
  var geo  = new THREE.BufferGeometry();

  var pos     = new Float32Array(COUNT * 3);
  var orig    = new Float32Array(COUNT * 3);
  var scat    = new Float32Array(COUNT * 3);
  var colArr  = new Float32Array(COUNT * 3);

  var cGold   = new THREE.Color('#c9962a');
  var cGold2  = new THREE.Color('#e8b84b');
  var cWhite  = new THREE.Color('#d0d6e2');
  var cBlue   = new THREE.Color('#6d88cc');
  var cRed    = new THREE.Color('#ef4444');

  for (var i = 0; i < COUNT; i++) {
    var i3 = i * 3;
    pos[i3]     = orig[i3]     = base[i3];
    pos[i3 + 1] = orig[i3 + 1] = base[i3 + 1];
    pos[i3 + 2] = orig[i3 + 2] = base[i3 + 2];

    // Random scatter vector per particle
    scat[i3]     = (Math.random() - 0.5) * SCATTER;
    scat[i3 + 1] = (Math.random() - 0.5) * SCATTER;
    scat[i3 + 2] = Math.random() * SCATTER * 0.6 + 0.8;

    // Color mix
    var r = Math.random();
    var c = r < 0.32 ? cGold : r < 0.52 ? cGold2 : r < 0.78 ? cWhite : r < 0.95 ? cBlue : cRed;
    colArr[i3]     = c.r;
    colArr[i3 + 1] = c.g;
    colArr[i3 + 2] = c.b;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colArr, 3));

  var mat = new THREE.PointsMaterial({
    size: isMobile ? 2.8 : 2.2,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  scene.add(new THREE.Points(geo, mat));

  /* ── MOUSE TRACKING ────────────────────────────── */
  var mx = -999, my = -999;
  canvas.addEventListener('mousemove', function (e) {
    var r = canvas.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width)  * 2 - 1;
    my = -((e.clientY - r.top) / r.height) * 2 + 1;
  });
  canvas.addEventListener('mouseleave', function () { mx = -999; my = -999; });

  /* ── SCROLL TRACKING ───────────────────────────── */
  var scrollP = 0;
  var heroFrame = document.querySelector('.hero-frame');
  function calcScroll() {
    if (!heroFrame) return;
    var r = heroFrame.getBoundingClientRect();
    scrollP = Math.max(0, Math.min(1, -r.top / (r.height * 0.65)));
  }
  window.addEventListener('scroll', calcScroll, { passive: true });
  calcScroll();

  /* ── RESIZE ────────────────────────────────────── */
  function resize() {
    var parent = canvas.parentElement;
    var w = parent.clientWidth;
    var h = parent.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── ANIMATE ───────────────────────────────────── */
  var mWorld = new THREE.Vector3();
  var ray    = new THREE.Raycaster();
  var plane  = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

  function loop() {
    requestAnimationFrame(loop);

    // Mouse → world coords
    ray.setFromCamera({ x: mx, y: my }, camera);
    ray.ray.intersectPlane(plane, mWorld);

    var pArr = geo.getAttribute('position').array;

    for (var i = 0; i < COUNT; i++) {
      var i3 = i * 3;

      // Target = original + scroll-based scatter
      var tx = orig[i3]     + scat[i3]     * scrollP;
      var ty = orig[i3 + 1] + scat[i3 + 1] * scrollP;
      var tz = orig[i3 + 2] + scat[i3 + 2] * scrollP;

      // Mouse hover: push particles toward camera
      if (scrollP < 0.35 && mWorld) {
        var dx = orig[i3]     - mWorld.x;
        var dy = orig[i3 + 1] - mWorld.y;
        var d  = Math.sqrt(dx * dx + dy * dy);
        if (d < HOVER_RAD) {
          var force = (1 - d / HOVER_RAD);
          force = force * force * PUSH_Z * (1 - scrollP * 2.5);
          tz += force;
        }
      }

      // Smooth ease
      pArr[i3]     += (tx - pArr[i3])     * EASE;
      pArr[i3 + 1] += (ty - pArr[i3 + 1]) * EASE;
      pArr[i3 + 2] += (tz - pArr[i3 + 2]) * EASE;
    }

    geo.getAttribute('position').needsUpdate = true;

    // Fade with scroll
    mat.opacity = Math.max(0, 0.92 - scrollP * 2);

    renderer.render(scene, camera);
  }

  loop();
})();
